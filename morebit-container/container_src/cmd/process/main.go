package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

func main() {
	stop := make(chan os.Signal, 1)
	signal.Notify(stop, syscall.SIGINT, syscall.SIGTERM)

	router := http.NewServeMux()
	router.HandleFunc("/singleton", func(w http.ResponseWriter, r *http.Request) {
		message := os.Getenv("MESSAGE")
		fmt.Fprintf(w, "[Singleton Worker] %s | ID: %s", message, os.Getenv("CLOUDFLARE_DURABLE_OBJECT_ID"))
	})
	router.HandleFunc("/lb", func(w http.ResponseWriter, r *http.Request) {
		message := os.Getenv("MESSAGE")
		fmt.Fprintf(w, "[Load Balanced Worker] %s | ID: %s", message, os.Getenv("CLOUDFLARE_DURABLE_OBJECT_ID"))
	})
	router.HandleFunc("/error", func(w http.ResponseWriter, r *http.Request) {
		panic("Oops! This process container just crashed specifically for testing.")
	})
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		message := os.Getenv("MESSAGE")
		fmt.Fprintf(w, "[Process Worker] %s | ID: %s", message, os.Getenv("CLOUDFLARE_DURABLE_OBJECT_ID"))
	})

	server := &http.Server{Addr: ":8080", Handler: router}
	go func() {
		log.Printf("Process Worker listening on %s\n", server.Addr)
		if err := server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
			log.Fatal(err)
		}
	}()

	sig := <-stop
	log.Printf("Received signal (%s), shutting down...", sig)
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	server.Shutdown(ctx)
}

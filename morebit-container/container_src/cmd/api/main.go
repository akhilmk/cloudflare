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
	router.HandleFunc("/api/", func(w http.ResponseWriter, r *http.Request) {
		instanceId := os.Getenv("CLOUDFLARE_DURABLE_OBJECT_ID")
		fmt.Fprintf(w, "[Main API] Highly-available service. Instance: %s", instanceId)
	})
	router.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "[Main API] Service Root. Instance: %s", os.Getenv("CLOUDFLARE_DURABLE_OBJECT_ID"))
	})

	server := &http.Server{Addr: ":8080", Handler: router}
	go func() {
		log.Printf("API Service listening on %s\n", server.Addr)
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

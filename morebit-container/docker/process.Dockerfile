# syntax=docker/dockerfile:1
FROM golang:1.24-alpine AS build
WORKDIR /app
# Copy only the mod file first to leverage Docker cache
COPY container_src/go.mod ./
RUN go mod download
# Copy the entire source tree including cmd/
COPY container_src/ ./
# Build the specific Process worker binary
RUN CGO_ENABLED=0 GOOS=linux go build -o /server ./cmd/process

FROM scratch
COPY --from=build /etc/ssl/certs/ca-certificates.crt /etc/ssl/certs/
COPY --from=build /server /server
EXPOSE 8080
CMD ["/server"]

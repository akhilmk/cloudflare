# morebit

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/cloudflare/templates/tree/main/containers-template)

![Containers Template Preview](https://imagedelivery.net/_yJ02hpOMj_EnGvsU2aygw/5aba1fb7-b937-46fd-fa67-138221082200/public)

<!-- dash-content-start -->

This is a [Container](https://developers.cloudflare.com/containers/) starter template.

It demonstrates basic Container configuration, launching and routing to individual container, load balancing over multiple container, running basic hooks on container status changes.

<!-- dash-content-end -->

## Architecture: Nano-Services with Cloudflare Containers

This project demonstrates a multi-service "Nano-Service" pattern using Cloudflare Workers and Containers. It is split into two distinct container classes to handle different workload requirements.

### 1. Service Breakdown

| Container Class | Role | Image | Scaling Pattern |
| :--- | :--- | :--- | :--- |
| **`apicontainer`** | Main API Entry | `api.Dockerfile` | Service-scoped Singleton |
| **`processcontainer`** | Background Workers | `process.Dockerfile` | ID-scoped (On-demand) |

### 2. Available Endpoints

The **Workler (Hono)** acts as an orchestrator, routing requests to these internal services:

#### Main API Service (`apicontainer`)
*   **`/api/*`**: Routed to a single, stable API container. Used for standard REST/GraphQL traffic.

#### Process Service (`processcontainer`)
*   **`/container/:id`**: Creates a 100% isolated container instance for a specific ID (e.g., User ID or Job ID).
*   **`/singleton`**: Routes to a shared "Global" worker instance.
*   **`/lb`**: Distributes traffic across a pool of up to 3 worker instances for load balancing.
*   **`/error`**: Intentionally crashes a container to demonstrate Cloudflare's fault isolation and recovery.

### 3. Project Structure

*   **`src/`**: TypeScript orchestrator (Hono + Container classes).
*   **`container_src/cmd/`**: Go business logic, split into `api/` and `process/` binaries.
*   **`docker/`**: (Optional) Folder for Docker-related configurations.

### 4. Local Development

1.  **Install dependencies**: `npm install`
2.  **Generate types**: `npm run cf-typegen` (Mandatory after config changes)
3.  **Run with Docker**: `npm run dev`

---

## Learn More

To learn more about Containers, take a look at the following resources:

- [Container Documentation](https://developers.cloudflare.com/containers/) - learn about Containers
- [Container Class](https://github.com/cloudflare/containers) - learn about the Container helper class

Your feedback and contributions are welcome!

import { Container, getContainer, getRandom } from "@cloudflare/containers";
import { Hono } from "hono";

// --- Nano-Service A: Main API ---
export class apicontainer extends Container<Env> {
	// Port the container listens on (default: 8080)
	defaultPort = 8080;
	// Time before container sleeps due to inactivity (default: 30s)
	sleepAfter = "10m";
	// Environment variables passed to the container
	envVars = {
		MESSAGE: "I am the API service!",
	};

	// THIS is what is called by "container.fetch(c.req.raw)"
	override async fetch(request: Request): Promise<Response> {
		console.log("1. Durable Object fetch triggered!");
		// this call hands over the request to Go
		const response = await super.fetch(request);

		console.log("3. Durable Object received response from Go!");
		return response;
	}
}

// --- Nano-Service B: Process Worker ---
export class processcontainer extends Container<Env> {
	// Port the container listens on (default: 8080)
	defaultPort = 8080;
	// Time before container sleeps due to inactivity (default: 30s)
	sleepAfter = "2m";
	// Environment variables passed to the container
	envVars = {
		MESSAGE: "I am the Process worker!",
	};

	// Optional lifecycle hooks
	override onStart() {
		console.log("Process Worker successfully started");
	}

	override onStop() {
		console.log("Process Worker successfully shut down");
	}

	override onError(error: unknown) {
		console.log("Process Worker error:", error);
	}
}

// Create Hono app with proper typing for Cloudflare Workers
const app = new Hono<{
	Bindings: Env;
}>();

// Home route with available endpoints
app.get("/", (c) => {
	return c.text(
		"Modern Architecture Demo:\n" +
		"1. GET /api/<path>      -> Handled by ApiContainer (Service-mapped)\n" +
		"2. GET /container/<ID>  -> Handled by ProcessContainer (ID-mapped)\n" +
		"3. GET /singleton       -> Handled by ProcessContainer (Global Singleton)\n" +
		"4. GET /lb              -> Load balanced across ProcessContainers\n" +
		"5. GET /error           -> Triggers an error in ProcessContainer\n",
	);
});

// --- 1. API Route (Singleton approach for API) ---
app.get("/api/*", async (c) => {
	const container = getContainer(c.env.API_SERVICE);
	return await container.fetch(c.req.raw);
});

// --- 2. Process Routes (Demonstrating Scaling Patterns) ---

// a. Container per ID (e.g. per-user or per-job)
app.get("/container/:id", async (c) => {
	const id = c.req.param("id");
	const containerId = c.env.PROCESS_SERVICE.idFromName(`/container/${id}`);
	const container = c.env.PROCESS_SERVICE.get(containerId);
	return await container.fetch(c.req.raw);
});

// b. Singleton (Global Process)
app.get("/singleton", async (c) => {
	const container = getContainer(c.env.PROCESS_SERVICE);
	return await container.fetch(c.req.raw);
});

// c. Load Balanced across 3 instances
app.get("/lb", async (c) => {
	const container = await getRandom(c.env.PROCESS_SERVICE, 3);
	return await container.fetch(c.req.raw);
});

// d. Error test (Demonstrates error handling for isolated instances)
app.get("/error", async (c) => {
	const container = getContainer(c.env.PROCESS_SERVICE, "error-test");
	return await container.fetch(c.req.raw);
});

export default app;

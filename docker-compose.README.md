# Docker Compose Setup for League of Farming

This document explains how to use the Docker Compose configuration to run the League of Farming application.

## Prerequisites

- Docker
- Docker Compose

## Available Services

The Docker Compose configuration includes two services:

1. **app** - Production build of the application
2. **dev** - Development environment with hot-reloading

## Running the Application

### Production Mode

To build and run the application in production mode:

```bash
sudo docker compose up app --build
```

This will:
- Build the application using the production Dockerfile
- Serve the built application on port 3000
- Make the application available at http://localhost:3000

### Development Mode

To run the application in development mode with hot-reloading:

```bash
sudo docker compose up dev --build
```

This will:
- Mount your local code into the container
- Run the Vite development server with hot-reloading
- Make the application available at http://localhost:3000

## Running Only One Service

By default, running `docker compose up` will start all services. To run only a specific service, specify the service name:

```bash
sudo docker compose up app  # Only run the production service
```

or

```bash
sudo docker compose up dev  # Only run the development service
```

## Running in Background

To run the services in the background (detached mode):

```bash
sudo docker compose up -d app  # For production
```

or

```bash
sudo docker compose up -d dev  # For development
```

## Stopping the Application

To stop the running containers:

```bash
sudo docker compose down
```

## Volume Mounts

The Docker Compose configuration includes volume mounts to:
- Map your local code to the container for live development (dev service)
- Preserve node_modules inside the container

## Environment Variables

The Docker Compose configuration includes the following environment variables:

- `NODE_ENV`: Set to `production` for the app service and `development` for the dev service
- `VITE_HOST`: Set to `0.0.0.0` for the dev service to make it accessible from outside the container

## Troubleshooting

### Port Conflicts

If you encounter port conflicts (e.g., "port is already allocated"), ensure that no other service is using port 3000 on your host machine.

### Container Logs

To view the logs of a running container:

```bash
sudo docker logs league-of-farming  # For production
```

or

```bash
sudo docker logs league-of-farming-dev  # For development
```

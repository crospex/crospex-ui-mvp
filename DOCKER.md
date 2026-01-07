# Docker Setup for Crospex

This project includes Docker configuration for both development and production environments.

## Files Created

- **Dockerfile**: Multi-stage build configuration
- **nginx.conf**: Optimized nginx configuration with gzip, caching, and SPA routing
- **.dockerignore**: Excludes unnecessary files from Docker builds
- **docker-compose.yml**: Orchestration for dev and prod environments

## Quick Start

### Production Build

Build and run the production container:

```bash
# Build the image
docker build -t crospex:latest .

# Run the container
docker run -p 8080:80 crospex:latest
```

Access the application at `http://localhost:8080`

### Using Docker Compose

**Production:**
```bash
docker-compose up prod
```

**Development:**
```bash
docker-compose up dev
```

## Build Arguments & Environment Variables

If you need to pass environment variables at build time (for Vite), you can modify the Dockerfile:

```dockerfile
# In the builder stage
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
```

Then build with:
```bash
docker build --build-arg VITE_API_URL=https://api.example.com -t crospex:latest .
```

## Image Optimization

The multi-stage build ensures:
- **Small image size**: Only production artifacts are included
- **Fast builds**: Dependencies are cached efficiently
- **Security**: No source code or dev dependencies in final image

## Nginx Features

The included nginx configuration provides:
- **Gzip compression** for faster loading
- **Static asset caching** (1 year for immutable assets)
- **Security headers** (X-Frame-Options, X-Content-Type-Options, etc.)
- **SPA routing support** (all routes serve index.html)

## Health Checks

The Dockerfile includes a health check that pings the server every 30 seconds.

## Troubleshooting

**Build fails with dependency errors:**
```bash
# Clear Docker cache and rebuild
docker build --no-cache -t crospex:latest .
```

**Port already in use:**
```bash
# Use a different port
docker run -p 3000:80 crospex:latest
```

**Need to inspect the container:**
```bash
# Run with shell access
docker run -it --entrypoint /bin/sh crospex:latest
```

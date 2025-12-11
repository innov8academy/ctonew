# Monorepo Project

A modern pnpm-based monorepo with Next.js 14 frontend and Express backend, sharing common types and utilities.

## 📁 Project Structure

```
.
├── apps/
│   ├── frontend/          # Next.js 14 application (TypeScript)
│   └── backend/           # Express API server (TypeScript)
├── packages/
│   └── common/            # Shared types and utilities
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── package.json           # Root workspace scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- pnpm >= 8.0.0

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
# Copy environment files
cp .env.example .env
cp apps/frontend/.env.example apps/frontend/.env.local
cp apps/backend/.env.example apps/backend/.env
```

### Development

#### Run all applications concurrently:
```bash
pnpm dev
```

#### Run applications separately:

**Frontend only:**
```bash
pnpm dev:frontend
```
The frontend will be available at http://localhost:3000

**Backend only:**
```bash
pnpm dev:backend
```
The backend API will be available at http://localhost:3001

### Building

#### Build all packages and applications:
```bash
pnpm build
```

#### Build specific applications:
```bash
# Build frontend
pnpm build:frontend

# Build backend
pnpm build:backend
```

### Testing & Quality

```bash
# Run all tests
pnpm test

# Run linting
pnpm lint

# Fix linting issues
pnpm lint:fix

# Type checking
pnpm type-check

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## 📦 Packages

### Frontend (`apps/frontend`)
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Port:** 3000
- **Features:**
  - Server-side rendering (SSR)
  - API routes
  - Shared common package integration
  - Vercel deployment ready

### Backend (`apps/backend`)
- **Framework:** Express.js
- **Language:** TypeScript
- **Port:** 3001
- **Features:**
  - RESTful API
  - CORS enabled
  - Health check endpoint
  - Docker support
  - Shared common package integration

### Common (`packages/common`)
- Shared TypeScript types
- Utility functions
- Common interfaces used across frontend and backend

## 🐳 Docker

### Build the backend Docker image:
```bash
cd apps/backend
docker build -t backend:latest .
```

### Run the backend container:
```bash
docker run -p 3001:3001 --env-file .env backend:latest
```

## 🚢 Deployment

### Frontend (Vercel)

The frontend is configured for Vercel deployment with `vercel.json`.

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
cd apps/frontend
vercel
```

Or connect your repository to Vercel through their dashboard for automatic deployments.

### Backend (Docker)

The backend includes a multi-stage Dockerfile for optimized production builds.

**Deploy to any container platform:**
- Docker Swarm
- Kubernetes
- AWS ECS
- Google Cloud Run
- Azure Container Instances
- Railway
- Fly.io

**Example deployment to Railway:**
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

**Example deployment to Fly.io:**
```bash
# Install Fly CLI
curl -L https://fly.io/install.sh | sh

# Deploy
cd apps/backend
fly launch
fly deploy
```

## 🔧 Workspace Scripts

All scripts can be run from the root directory:

| Script | Description |
|--------|-------------|
| `pnpm dev` | Run all apps in development mode |
| `pnpm dev:frontend` | Run frontend only |
| `pnpm dev:backend` | Run backend only |
| `pnpm build` | Build all packages and apps |
| `pnpm build:frontend` | Build frontend only |
| `pnpm build:backend` | Build backend only |
| `pnpm lint` | Lint all packages |
| `pnpm lint:fix` | Fix linting issues |
| `pnpm test` | Run all tests |
| `pnpm type-check` | TypeScript type checking |
| `pnpm format` | Format code with Prettier |
| `pnpm format:check` | Check code formatting |

## 🛠️ Technology Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- CSS Modules

### Backend
- Express.js
- TypeScript
- Node.js
- CORS
- Dotenv

### Development Tools
- pnpm workspaces
- ESLint
- Prettier
- TypeScript
- Nodemon (backend dev)

## 📝 Environment Variables

### Frontend (`apps/frontend/.env.local`)
```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Backend (`apps/backend/.env`)
```
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Run `pnpm lint:fix` and `pnpm type-check`
4. Commit your changes
5. Push and create a pull request

## 📄 License

[Your License Here]

# Cortex-Code

Cortex-Code is a monorepo for building an AI-assisted coding experience across web UI, backend services, and Firebase Cloud Functions. This repository is structured for rapid iteration with pnpm workspaces and a clear separation of concerns.

## Monorepo Layout

- `ui/` — Frontend application (e.g., Next.js or other web UI)
- `backend/` — Backend service(s) or APIs not deployed as functions
- `functions/` — Firebase Cloud Functions (serverless backend)
- `packages/policy/` — Shared policy, RBAC/ABAC rules, and security helpers
- `packages/commons/` — Shared utilities, types, and core libraries

## Feature Summary

- AI routing layer (provider-agnostic): OpenAI, Anthropic, Google, configurable via env
- Reusable shared packages for policy and common utilities
- Firebase-backed auth, data, storage, and serverless functions
- Monorepo with pnpm workspaces for dependency sharing and faster installs
- Environment-driven configuration with .env files and examples
- Ready for local development with Firebase Emulator Suite

## Firebase Services Used

- Authentication
- Cloud Firestore (or Realtime Database as needed)
- Cloud Storage
- Cloud Functions
- Hosting (optional)
- Emulator Suite for local testing

## Getting Started (High Level)

1. Initialize the repo and pnpm at the root.
2. Create the folders and baseline files in this README.
3. Set up Node v20 (via `.nvmrc`) and pnpm.
4. Configure environment using `.env.example`.
5. Install workspace dependencies in each package as they’re added.

See the root `.env.example` for required environment variables, including AI provider routing and Firebase configuration.

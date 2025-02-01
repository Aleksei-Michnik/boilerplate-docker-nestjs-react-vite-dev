# Boilerplate for Docker: NestJS backend, React (TypeScript) frontend, MongoDB database, NPM

## Quick start

1. Clone project
2. Set environmental variables
   ```shell
   ~/boilerplate-docker-nestjs-react-vite-dev$ cp .env.example .env
   ``` 
   - Update ports variables values with `_HOST` suffix in case if they are already in use
3. Install required packages for frontend and backend:
   ```shell
   ~/boilerplate-docker-nestjs-react-vite-dev$ cd backend
   ~/boilerplate-docker-nestjs-react-vite-dev/backend$ npm install
   ~/boilerplate-docker-nestjs-react-vite-dev/backend$ cd ../frontend
   ~/boilerplate-docker-nestjs-react-vite-dev/frontend$ npm install
   ```
4. Build and run Docker:
   ```shell
   docker compose up --build -d
   ```
5. Access Vite frontend on http://localhost:5173, where `5173` is the value of `VITE_PORT_HOST`.
   
   Backend should be accessible at http://localhost:3002, where `3002` is the value of `BACKEND_PORT_HOST`.

## Backend

_NestJS_

Pre-installed with:
```shell
~/boilerplate-docker-nestjs-react-vite-dev/backend$ npx @nestjs/cli new .
```

## Frontend

_React (TypeScript) on Vite, HMR included_

Pre-installed with:
```shell
~/boilerplate-docker-nestjs-react-vite-dev/frontend$ npx create-vite@latest . --template react-ts
```

## Database

_MongoDB_

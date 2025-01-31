# Boilerplate for Docker: NestJS backend, React (TypeScript) frontend, MongoDB database

## Quick start

1. Clone project
2. Set environmental variables
   ```shell
   ~/boilerplate-docker-nestjs-react-vite-dev cp .env.example .env
   ``` 
   - Update ports variables values with `_HOST` suffix in case if they are already in use
3. Build and run Docker:
   ```shell
   docker compose up --build -d
   ```

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

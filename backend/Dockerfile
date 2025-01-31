FROM node:22

ARG BACKEND_PORT
ENV BACKEND_PORT=${BACKEND_PORT}

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . .

EXPOSE ${BACKEND_PORT}

CMD ["npm", "run", "start:dev"]

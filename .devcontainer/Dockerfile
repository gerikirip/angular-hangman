# syntax=docker/dockerfile:1

ARG VARIANT="24"
FROM mcr.microsoft.com/devcontainers/javascript-node:${VARIANT}

RUN apt-get update && apt-get -y install --no-install-recommends \
    curl \
    git \
    sqlite3 \
    && apt-get clean

USER node

RUN npm install -g @angular/cli

RUN npm install -g npm-check-updates

WORKDIR /home/node/app
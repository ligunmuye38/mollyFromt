# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.18.1


FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app


RUN apk add --no-cache git bash


FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,id=deps-npm-cache,target=/root/.npm \
    npm ci --omit=dev

FROM deps as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,id=build-npm-cache,target=/root/.npm \
    npm ci

COPY . .

RUN --mount=type=cache,id=build-next-cache,target=.next/cache \
    npm run build

FROM base as final

ENV NODE_ENV production

USER node

COPY package.json .

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/.next ./.next

EXPOSE 3000

CMD npm start

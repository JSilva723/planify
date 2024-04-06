######################################## Base stage ########################################
FROM node:20-alpine3.18 AS base
ENV DIR /project
WORKDIR $DIR
######################################## Build stage ##############################################
FROM base AS build
ENV NODE_ENV=production
RUN apk update && apk add --no-cache dumb-init=1.2.5-r2
COPY package*.json $DIR
RUN npm install
######################################## Production stage ########################################
FROM base AS production
ENV NODE_ENV=production
ENV USER=node
COPY --from=build /usr/bin/dumb-init /usr/bin/dumb-init
COPY --from=build $DIR/node_modules $DIR/node_modules
COPY ./dist $DIR/dist
USER $USER
EXPOSE $PORT
CMD ["dumb-init", "node", "dist/server.js"]
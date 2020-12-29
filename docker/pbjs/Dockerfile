FROM node:15.5.0-alpine3.10

RUN npm install -g protobufjs
# Run command to force installing dependencies
RUN pbts || true
RUN pbjs -v || true

WORKDIR /workdir
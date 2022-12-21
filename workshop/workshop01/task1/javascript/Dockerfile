FROM node:19.3

LABEL "name"="dov-bear"

ARG APP_DIR="/app"

## Create and CD into directory
WORKDIR $APP_DIR

## Add files
ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD public public
ADD views views

# Install dependencies
RUN npm ci

# Environment Variables
ENV PORT=3000
ENV INSTANCE_NAME="Dov-Bear"
ENV INSTANCE_HASH=""

# Health Check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl s f http://localhost:${PORT}/healthz > /dev/null || exit 1

# Expose Port
EXPOSE $PORT    

# Start Application
ENTRYPOINT node main.js
CMD -port $PORT -name $INSTANCE_NAME -hash $INSTANCE_HASH


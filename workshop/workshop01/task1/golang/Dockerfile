# Build Container
FROM golang:1.19-apline3.17 AS builder

WORKDIR /app
ADD go.mod .
ADD go.sum .
ADD main.go .

# /app/main
RUN go build -o main main.go

# Runtime Container
FROM alpine:3.17

WORKDIR /app

# /app/main
COPY --from=builder /app/main main
COPY public public
COPY templates templates

ENV PORT=3000
ENV INSTANCE_NAME="Dov-Bear Golang"
ENV INSTANCE_HASH=""

# Health Check
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
    CMD curl s f http://localhost:${PORT}/healthz > /dev/null || exit 1

EXPOSE $PORT

ENTRYPOINT [ "/app/main" ]
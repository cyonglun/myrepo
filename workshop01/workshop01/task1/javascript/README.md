## Docker Run
docker run -d -p 5000:5000 -e PORT=5000 -e INSTANCE_NAME="Dov-Bear-Hello" -e INSTANCE_HASH="HELLO-12345" --name=dov-bear-container dov-bear:0.1

## Docker Build
docker build -t <image_name>:<tag_name> . (e.g. docker build -t dov-bear:0.1 .)

## Docker push to Docker Hub
1. docker login
2. enter username and password
3. docker tag dov-bear:0.1 <user_name>/dov-bear:0.1 (e.g. docker tag dov-bear:0.1 cyonglun/dov-bear:0.1)
4. docker push <image_name>:<tag_name> (e.g. docker push cyonglun/dov-bear:0.1)

## Dockerhub
https://hub.docker.com/repository/docker/cyonglun/dov-bear
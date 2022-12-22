# Workshop 01

## Create Docker Network (bridge)
`docker network create -d bridge mynet`

## Create Docker Volume
`docker volume create myvol`

## mydb
`docker run -d -v myvol:/var/lib/mysql --network mynet --name mydb stackupiss/northwind-db:v1`

## myapp
`docker run -d -p 3000:3000 -e DB_HOST=mydb -e DB_USER=root -e DB_PASS=changeit --network mynet --name myapp stackupiss/northwind-app:v1`

## Docker-compose
`docker-compose -f docker-compose.yml up -d`
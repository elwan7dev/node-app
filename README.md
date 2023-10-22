
## rebuid image 
docker compose up -d --build


## print env vars in container
printenv


## specify docker compose file 
docker compose -f docker-compose.dev.yml up -d

docker compose -f docker-compose.dev.yml down

## when run common file and env file
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d

## if need to rebuild image
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d  --build


## general help 
docker compose --help 
or 
docker --help

# command help

docker compose <command> --help
docker command> --help

## search about dir name in terminal
ls -d name*
ex: ls -d node*
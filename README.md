
## rebuid image 
docker compose up -d --build


## print env vars in container
printenv


## specify docker compose file 
docker compose -f docker-compose.dev.yml up -d

docker compose -f docker-compose.dev.yml down

## when run common file and env file
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d


## if need to rebuild image
```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d  --build
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d  --build
```


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

---

# Section 5 : Deployment on AWS

## after create EC2 instance, connect to server SSH

```bash
ssh -i your-key.pem username@(public-ip-address)

# issue when trying to connect - permission denied because pem file has open permission mode
sudo chmod 400 ./path/for/file.pem 
```
install docker on ubuntu20 https://support.netfoundry.io/hc/en-us/articles/360057865692-Installing-Docker-and-docker-compose-for-Ubuntu-20-04

## push images to docker hub
docker login -u <username>

docker compose build [OPTIONS] [SERVICE...]
`docker compose -f docker-compose.yml -f docker-compose.prod.yml build`

docker compose push [OPTIONS] [SERVICE...]
`docker compose -f docker-compose.yml -f docker-compose.prod.yml push node_application`

### on server or any remote machine - no need to build image just pull from registery and run containers 
docker compose pull [OPTIONS] [SERVICE...]
.............. up -d 

## load Balancing
- when scale your service can't use custom container name, ports
`docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build --scale node_application=3`
service-name = node_application
use --build flag to rebuild image

## Automate Deployment using watchtower
by adding **--scale** flag with service name = # of contenders needed
`docker compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build --scale node_application=3`
note that:
- this service can't have static container name or port
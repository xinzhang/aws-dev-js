## build docker
docker build -t xz-hello-world .

## build respository
aws ecr create-repository --repository-name xz-hello-repository --region ap-southeast-2

## get current user
aws sts get-caller-identity

## get aws repositories
 aws ecr describe-repositories

## tag 
docker tag xz-hello-world 486122642263.dkr.ecr.ap-southeast-2.amazonaws.com/xz-hello-repository

## get login
aws ecr get-login --no-include-email

## upload image
docker push xz-hello-world 486122642263.dkr.ecr.ap-southeast-2.amazonaws.com/xz-hello-repository



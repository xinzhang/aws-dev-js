
aws ecr list-images --repository-name xz-hello-repository
aws ecr batch-delete-image --repository-name xz-hello-repository --image-ids imageDigest=sha256:7b4298be527cb45ec241c7ac016846cde02ecd3682aae7508ce5b785d3924096

aws ecr delete-repository --repository-name xz-hello-repository --region ap-southeast-2
eksctl create cluster \
--name xz-eks \
--version 1.14 \
--region ap-southeast-2 \
--nodegroup-name standard-workers \
--node-type t3.medium \
--nodes 3 \
--nodes-min 1 \
--nodes-max 4 \
--managed

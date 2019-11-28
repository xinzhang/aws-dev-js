# install x-ray agent
aws iam attach-role-policy --role-name $ROLE_NAME --policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess

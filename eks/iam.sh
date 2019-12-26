aws iam get-role --role-name "AWSServiceRoleForElasticLoadBalancing" || aws iam create-service-linked-role --aws-service-name "elasticloadbalancing.amazonaws.com"

 aws iam list-instance-profiles --output json | jq -r '.InstanceProfiles[].Roles[].Arn'
 
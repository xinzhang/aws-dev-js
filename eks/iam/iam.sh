aws iam get-role --role-name "$ROLE_NAME" || aws iam create-service-linked-role --aws-service-name "elasticloadbalancing.amazonaws.com"

aws iam list-instance-profiles --output json | jq -r '.InstanceProfiles[].Roles[].Arn'

# https://eksworkshop.com/intermediate/245_x-ray/role/
STACK_NAME=$(eksctl get nodegroup --cluster xz-eks -o json | jq -r '.[].StackName')
ROLE_NAME=$(aws cloudformation describe-stack-resources --stack-name $STACK_NAME --output json | jq -r '.StackResources[] | select(.ResourceType=="AWS::IAM::Role") | .PhysicalResourceId')

test -n "$ROLE_NAME" && echo ROLE_NAME is "$ROLE_NAME" || echo ROLE_NAME is not set
# Example Output
ROLE_NAME is eks-workshop-nodegroup

### for xray
aws iam attach-role-policy --role-name $ROLE_NAME \
--policy-arn arn:aws:iam::aws:policy/AWSXRayDaemonWriteAccess

#### for external dns

aws iam attach-role-policy --role-name $ROLE_NAME \
--policy-arn arn:aws:iam::aws:policy/AmazonRoute53FullAccess

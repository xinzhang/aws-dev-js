STACK_NAME=$(eksctl get nodegroup --cluster xz-eks -o json | jq -r '.[].StackName')

ROLE_NAME=$(aws cloudformation describe-stack-resources --stack-name $STACK_NAME --output json | jq -r '.StackResources[] | select(.ResourceType=="AWS::IAM::Role") | .PhysicalResourceId')

test -n "$INSTANCE_PROFILE_ARN" && echo INSTANCE_PROFILE_ARN is "$INSTANCE_PROFILE_ARN" || echo INSTANCE_PROFILE_ARN is not set
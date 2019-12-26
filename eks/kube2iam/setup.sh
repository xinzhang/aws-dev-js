### reference
# https://akomljen.com/integrating-aws-iam-and-kubernetes-with-kube2iam/
# https://www.rhythmictech.com/blog/aws/using-kube2iam-with-eks/
# https://arnon.me/2019/05/protecting-eks-with-kube2iam/

### get the role arn
aws iam list-instance-profiles --output json | jq -r '.InstanceProfiles[].Roles[].Arn'

### get the role name
STACK_NAME=$(eksctl get nodegroup --cluster xz-eks -o json | jq -r '.[].StackName')
ROLE_NAME=$(aws cloudformation describe-stack-resources --stack-name $STACK_NAME --output json | jq -r '.StackResources[] | select(.ResourceType=="AWS::IAM::Role") | .PhysicalResourceId')
# test -n "$ROLE_NAME" && echo ROLE_NAME is "$ROLE_NAME" || echo ROLE_NAME is not set
echo $ROLE_NAME
# eksctl-xz-eks-nodegroup-standard-NodeInstanceRole-1CJB6BIUZNVCG

### attach policy
$ aws iam put-role-policy \
    --role-name eksctl-xz-eks-nodegroup-standard-NodeInstanceRole-1CJB6BIUZNVCG \
    --policy-name kube2iam \
    --policy-document file://kube2iam-policy.json

### run helm
# echo "add stable"
helm repo add stable https://kubernetes-charts.storage.googleapis.com/
helm repo update

helm install \
    --namespace kube-infra \
    -f kube2iam.config.yaml \
    kube2iam stable/kube2iam 
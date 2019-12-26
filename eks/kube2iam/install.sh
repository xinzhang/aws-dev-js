# https://akomljen.com/integrating-aws-iam-and-kubernetes-with-kube2iam/
# https://www.rhythmictech.com/blog/aws/using-kube2iam-with-eks/
# https://arnon.me/2019/05/protecting-eks-with-kube2iam/


aws iam list-instance-profiles --output json | jq -r '.InstanceProfiles[].Roles[].Arn'

cat > values-kube2iam.yaml <<EOF
extraArgs:
  base-role-arn: arn:aws:iam::1234567890:role/
  default-role: kube2iam-default

host:
  iptables: true
  interface: "eni+"

rbac:
  create: true
EOF

helm install --name iam \
    --namespace kube-system \
    -f values-kube2iam.yaml \
    stable/kube2iam

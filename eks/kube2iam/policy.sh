cat > kube2iam-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": [
        "sts:AssumeRole"
      ],
      "Effect": "Allow",
      "Resource": [
        "arn:aws:iam::1234567890:role/k8s-*"
      ]
    }
  ]
}
EOF

$ aws iam put-role-policy \
    --role-name test-worker-nodes-NodeInstanceRole-1W9NK0A56SMQ6 \
    --policy-name kube2iam \
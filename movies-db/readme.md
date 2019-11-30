## Source
This code is from [AWS example](https://github.com/aws-samples/aws-serverless-crud-sample)

## Prerequiste
Create a IAM role called “Lambda-role” and assign it AWSLambdaFullAccess and AmazonDynamoDBFullAccess
aws iam get-policy --policy-arn arn:aws:iam::aws:policy/AWSLambdaFullAccess

### create role
aws iam create-role --role-name Lambda-role --assume-role-policy-document file://./policy/lambdaAssumeRolePolicyDocument.json

- aws iam attach-role-policy --role-name Lambda-role --policy-arn arn:aws:iam::aws:policy/AWSLambdaFullAccess 
- aws iam attach-role-policy --role-name Lambda-role --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess

### create a user
Create a user and assign it AWSLambdaFullAccess and AmazonDynamoDBFullAccess policies
- aws iam create-user --user-name xz-developer
- aws iam attach-user-policy --user-name xz-developer --policy-arn arn:aws:iam::aws:policy/AWSLambdaFullAccess 
- aws iam attach-user-policy --user-name xz-developer --policy-arn arn:aws:iam::aws:policy/AmazonDynamoDBFullAccess 


aws eks list-clusters

helm repo add incubator http://storage.googleapis.com/kubernetes-charts-incubator
helm install --set clusterName=xz-eks --set autoDiscoverAwsRegion=true --set autoDiscoverAwsVpcID=true --namespace kube-system my-alb-release incubator/aws-alb-ingress-controller

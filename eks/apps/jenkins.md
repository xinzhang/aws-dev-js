## Install
helm install stable/jenkins --set rbac.create=true,master.servicePort=80,master.serviceType=LoadBalancer --name cicd --namespace=devops

## get service
export SERVICE_IP=$(kubectl get svc --namespace devops cicd-jenkins --template "{{ range (index .status.loadBalancer.ingress 0) }}{{ . }}{{ end }}")
echo http://$SERVICE_IP/login

## get password
printf $(kubectl get secret --namespace devops cicd-jenkins -o jsonpath="{.data.jenkins-admin-password}" | base64 --decode);echo
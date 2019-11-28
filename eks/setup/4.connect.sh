# show token
kubectl -n kube-system describe secret $(kubectl -n kube-system get secret | grep eks-admin | awk '{print $1}')

# get token
# aws eks get-token --cluster-name xz-eks | jq -r '.status.token'

# proxy
kubectl proxy

# open address
http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#!/login

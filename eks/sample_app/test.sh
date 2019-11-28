ELB=$(kubectl get service ecsdemo-frontend -o json | jq -r '.status.loadBalancer.ingress[].hostname')

# scale
# kubectl scale deployment ecsdemo-nodejs --replicas=3
# kubectl scale deployment ecsdemo-crystal --replicas=3

curl -m3 -v $ELB

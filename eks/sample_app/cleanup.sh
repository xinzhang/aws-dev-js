
kubectl delete -f backend/service.yaml
kubectl delete -f backend/deployment.yaml
kubectl delete -f crystal/service.yaml
kubectl delete -f crystal/deployment.yaml
kubectl delete -f frontend/service.yaml
kubectl delete -f frontend/deployment.yaml
kubectl delete -f frontend/ingress.yaml
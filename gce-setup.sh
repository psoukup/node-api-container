gcloud container clusters create cluster-1 -m f1-micro -z us-east4-c
kubectl create -f kube-deployment.yaml
kubectl create -f kube-service.yaml
kubectl get service node-api-container --watch

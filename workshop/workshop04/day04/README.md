# HorizontalPodAutoscaler

## install siege
`brew install siege`

## deploy dov-bear with Horizontal Pod Autoscaler settings
`k apply -f deployment.yaml`

**_NOTE:_** may have to comment out "NetworkPolicy"

## port forward to localhost
`k port-forward -n myns deploy/dov-bear-deployment 8080:3000`

## start siege to test auto scaling
`siege --verbose -c20 http://localhost:8080`

---
# Headless Service with StatefulSet Application

## apply namespace, headless svc, StatefulSet application
`k apply -f mysql.yaml`

**_NOTE:_** may have to comment out "VerticalPodAutoscaler"

## observe that pods are spun up in sequence 
1. db-sts-0
2. db-sts-1

## run nicolaka netshoot for nslookup
```
k run netshoot \
-ti --rm \
-n dbns \
--image=nicolaka/netshoot \
-- /bin/bash
```

## nslookup targetting pod name and compare IP address
`nslookup db-sts-0.db-hsvc.dbns.svc.cluster.local`

## delete pod
`k delete -n dbns pod/db-sts-0`

## observe that db-sts-0 is spun up again

## observe that IP of db-sts-0 has changed 
`nslookup db-sts-0.db-hsvc.dbns.svc.cluster.local`

---
# VerticalPodAutoscaler

## Install VPA from Helm
```
helm repo add fairwinds-stable https://charts.fairwinds.com/stable
helm repo update
helm install vpa -n kube-system fairwinds-stable/vpa
```

## apply namespace, headless svc, StatefulSet application and VPA
`k apply -f mysql.yaml`

---
# Test Network Rules

## Deploy with network policy
`k apply -f deployment.yaml`

## try to connect to pod via its IP
`nc -z -v -w5 10.244.0.175 3000`

connection should timeout after 5s
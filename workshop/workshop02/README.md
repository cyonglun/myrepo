# create namespace
k apply -f bggns.yaml

# create config map and secert
k apply -f configs/configmap.yaml
k apply -f configs/secrets.yaml

# create DB svc, pod and container
k apply -f bggdb.yaml

# create App svc, pod and container
k apply -f bggapp.yaml


# create namespace
`k apply -f bggns.yaml`

# create config map and secert
`k apply -f configs/configmap.yaml`

`k apply -f configs/secrets.yaml`

# create PVC
`k apply -f db-vol.yaml`

# create DB svc, pod and container
`k apply -f bggdb.yaml`

# create App svc, pod and container
`k apply -f bggapp.yaml --record`

# update bggap.yaml image from v1 to v2

# apply changes to App (image v2)
`k apply -f bggapp.yaml --record`

# check image is using tag v2
`k describe -n myns <pod_name>`

# get rollout status
`k -n myns rollout status deployment/bggapp-deployment`

# get rollout history
`k -n myns rollout history deployment/bggapp-deployment`

# undo rollout
`k -n myns rollout undo deployment/bggapp-deployment --to-revision=1 `

# check image is rollbacked to using tag v1
`k describe -n myns <pod_name>`

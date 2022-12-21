# Apply namespace
k apply -f cs-namespace.yaml

# Apply ConfigMap
k apply -f configs/configmap.yaml

# Apply PVC
k apply -f cs-volume.yaml

# Retrieve external IP address of ingress-nginx LB
k get svc -n ingress-nginx

# Configure to ingress host
cs-<ingress-nginx-controller-external-ip>.nip.io

# Apply App, Svc, Ingress
k apply -f cs-app.yaml

# Test connectivity
Open cs-<ingress-nginx-controller-external-ip>.nip.io in Chrome browser

# Configure OAuth App on Github.com
1. Login to Github
2. Goto Settings > Developer Tools > OAuth App > Register new application
3. Enter following:
  - HomePage URL: https://cs-<ingress-nginx-controller-external-ip>.nip.io
  - Authorization callback URL: https://cs-<ingress-nginx-controller-external-ip>.nip.io/oauth2
4. Click Create, NOTE DOWN Client-Id and Client-Secret
5. Generate 32bit string from https://www.allkeysgenerator.com/ as Cookie-secret
5. Base-64 encode Client-Id, Client-Secret and Cookie-Secret
6. Add to oauth-secrets.yaml

# Apply OAuth Secrets
k apply -f configs/oauth-secrets.yaml
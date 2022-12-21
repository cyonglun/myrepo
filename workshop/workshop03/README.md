# Apply namespace
k apply -f cs-namespace.yaml

# Apply ConfigMap
k apply -f configs/configmap.yaml

# Apply PVC
k apply -f cs-volume.yaml

# Retrieve external IP address of ingress-nginx LB
k get svc -n ingress-nginx

# Configure OAuth2.yaml Ingress host
cs-<ingress-nginx-controller-external-ip>.nip.io

# Configure OAuth App on Github.com
1. Login to Github
2. Goto Settings > Developer Tools > OAuth App > Register new application
3. Enter following:
  - HomePage URL: https://cs-<ingress-nginx-controller-external-ip>.nip.io
  - Authorization callback URL: https://cs-<ingress-nginx-controller-external-ip>.nip.io/oauth2
4. Click Create, NOTE DOWN Client-Id and Client-Secret generated
5. Generate 32bit string from https://www.allkeysgenerator.com/ as Cookie-secret
5. Encode Client-Id, Client-Secret and Cookie-Secret with base64
  - echo -n "<string-to-encode>" | base64
6. Add values into oauth2-secrets.yaml

# Apply OAuth Secrets
k apply -f configs/oauth2-secrets.yaml

# Apply OAutb App, Svc and Ingress
k apply -f oauth2.yaml

# Apply App, Svc and Ingress
k apply -f cs-app.yaml

# Test connectivity
1. Open cs-<ingress-nginx-controller-external-ip>.nip.io in Chrome Incognito 
2. Should be redirected to GitHub for login
3. Login to GitHub
4. Should be redirected to CodeServer

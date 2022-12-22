# Workshop 04

## Create Namespace
`k apply -f minio-namespace.yaml`

## Create Secret
`k apply -f config/minio-secrets.yaml`

**_NOTE_** 
- username and password should be set in minio-secrets and base64 encoded
- password must be >10 length

## Create StatefulSet, Service, Headless Service, Ingress
`k apply -f minio-deployment.yaml` 

## Create Bucket and Access Key
1. Visit http://console-146.190.7.68.nip.io
2. Create bucket called `my-bucket`
3. Create Access Key and note down Access and Secret Key
4. type `mc` in CLI to generate `.mc` folder
5. Open config.json in `.mc` folder
6. Add entry `minio`:
  - url: http://data-146.190.7.68.nip.io
  - accessKey: retrieved from console
  - secretKey: retrieved from console
7. Save File

**_NOTE:_** IP address is retrieved from ingress-nginx LoadBalancer

`k get svc -n ingress-nginx`

## Upload file to bucket using mc
`mc cp <local file path> minio/my-bucket`

**_NOTE:_** Ensure [Minio CLI](https://min.io/docs/minio/linux/reference/minio-mc.html) is installed


## Check Minio Console for uploaded file
File should be uploaded onto bucket

---

## Cleanup
1. Go to digital-ocean web console
2. Delete k8 cluster  
3. Delete Network > Load Balancer
4. Delete Volumes
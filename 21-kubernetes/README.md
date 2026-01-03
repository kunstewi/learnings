### Kubernetes Fundamentals

- [ ] 1. What is Kubernetes?
- [ ] 2. What does Kubernetes mean?
- [ ] 3. What is K8s?
- [ ] 4. Who created Kubernetes?
- [ ] 5. What is the origin of Kubernetes?
- [ ] 6. What is the purpose of Kubernetes?
- [ ] 7. What problem does Kubernetes solve?
- [ ] 8. What is container orchestration?
- [ ] 9. What is the difference between Docker and Kubernetes?
- [ ] 10. Can Kubernetes run without Docker?
- [ ] 11. What is a container runtime?
- [ ] 12. What container runtimes does Kubernetes support?
- [ ] 13. What is containerd?
- [ ] 14. What is CRI-O?
- [ ] 15. What is the difference between containerd and Docker?
- [ ] 16. What is the Cloud Native Computing Foundation (CNCF)?
- [ ] 17. What is the relationship between Kubernetes and CNCF?
- [ ] 18. What are the benefits of using Kubernetes?
- [ ] 19. What are the challenges of using Kubernetes?
- [ ] 20. When should you use Kubernetes?
- [ ] 21. When should you NOT use Kubernetes?
- [ ] 22. What is the learning curve of Kubernetes?
- [ ] 23. What is the complexity of Kubernetes?
- [ ] 24. What is managed Kubernetes?
- [ ] 25. What is self-hosted Kubernetes?
- [ ] 26. What is the difference between managed and self-hosted?
- [ ] 27. What is GKE (Google Kubernetes Engine)?
- [ ] 28. What is EKS (Amazon Elastic Kubernetes Service)?
- [ ] 29. What is AKS (Azure Kubernetes Service)?
- [ ] 30. What is the difference between GKE, EKS, and AKS?

---

### Kubernetes Architecture

- [ ] 31. What is the Kubernetes architecture?
- [ ] 32. What is the control plane?
- [ ] 33. What is the data plane?
- [ ] 34. What is the difference between control plane and data plane?
- [ ] 35. What are the components of the control plane?
- [ ] 36. What are the components of the data plane?
- [ ] 37. What is the master node?
- [ ] 38. What is the worker node?
- [ ] 39. What is the difference between master and worker node?
- [ ] 40. What is the API Server?
- [ ] 41. What is the role of the API Server?
- [ ] 42. What is etcd?
- [ ] 43. What is the purpose of etcd?
- [ ] 44. What data does etcd store?
- [ ] 45. What is the Scheduler?
- [ ] 46. What is the role of the Scheduler?
- [ ] 47. How does the Scheduler work?
- [ ] 48. What is the Controller Manager?
- [ ] 49. What is the role of the Controller Manager?
- [ ] 50. What controllers are in the Controller Manager?
- [ ] 51. What is the Cloud Controller Manager?
- [ ] 52. What is the purpose of Cloud Controller Manager?
- [ ] 53. What is kubelet?
- [ ] 54. What is the role of kubelet?
- [ ] 55. Where does kubelet run?
- [ ] 56. What is kube-proxy?
- [ ] 57. What is the role of kube-proxy?
- [ ] 58. What is the Container Runtime?
- [ ] 59. What is the role of Container Runtime?
- [ ] 60. What is the communication flow in Kubernetes?
- [ ] 61. How does kubectl communicate with the cluster?
- [ ] 62. What is kubectl?
- [ ] 63. What is the Kubernetes API?
- [ ] 64. What is REST API in Kubernetes?
- [ ] 65. What is the cluster state?
- [ ] 66. How is cluster state maintained?
- [ ] 67. What is the desired state?
- [ ] 68. What is the actual state?
- [ ] 69. What is reconciliation in Kubernetes?
- [ ] 70. What is the control loop?

---

### Kubernetes Objects and Resources

- [ ] 71. What is a Kubernetes object?
- [ ] 72. What is a Kubernetes resource?
- [ ] 73. What is the difference between object and resource?
- [ ] 74. What is a Pod?
- [ ] 75. What is the smallest deployable unit in Kubernetes?
- [ ] 76. Can a Pod contain multiple containers?
- [ ] 77. When should you use multiple containers in a Pod?
- [ ] 78. What is a sidecar container?
- [ ] 79. What is an init container?
- [ ] 80. What is the difference between sidecar and init container?
- [ ] 81. What is a ReplicaSet?
- [ ] 82. What is the purpose of ReplicaSet?
- [ ] 83. What is the difference between Pod and ReplicaSet?
- [ ] 84. What is a Deployment?
- [ ] 85. What is the purpose of Deployment?
- [ ] 86. What is the difference between ReplicaSet and Deployment?
- [ ] 87. What is a StatefulSet?
- [ ] 88. What is the purpose of StatefulSet?
- [ ] 89. What is the difference between Deployment and StatefulSet?
- [ ] 90. When should you use StatefulSet?
- [ ] 91. What is a DaemonSet?
- [ ] 92. What is the purpose of DaemonSet?
- [ ] 93. When should you use DaemonSet?
- [ ] 94. What is a Job?
- [ ] 95. What is the purpose of Job?
- [ ] 96. What is a CronJob?
- [ ] 97. What is the difference between Job and CronJob?
- [ ] 98. What is a Service?
- [ ] 99. What is the purpose of Service?
- [ ] 100. What is service discovery in Kubernetes?
- [ ] 101. What is a ConfigMap?
- [ ] 102. What is the purpose of ConfigMap?
- [ ] 103. What is a Secret?
- [ ] 104. What is the purpose of Secret?
- [ ] 105. What is the difference between ConfigMap and Secret?
- [ ] 106. What is a Volume?
- [ ] 107. What is a PersistentVolume (PV)?
- [ ] 108. What is a PersistentVolumeClaim (PVC)?
- [ ] 109. What is the difference between PV and PVC?
- [ ] 110. What is a Namespace?
- [ ] 111. What is the purpose of Namespace?
- [ ] 112. What is the default namespace?
- [ ] 113. What are the system namespaces?
- [ ] 114. What is an Ingress?
- [ ] 115. What is the purpose of Ingress?
- [ ] 116. What is the difference between Service and Ingress?
- [ ] 117. What is a Label?
- [ ] 118. What is a Selector?
- [ ] 119. What is the purpose of Labels and Selectors?
- [ ] 120. What is an Annotation?

---

### Pod Fundamentals

- [ ] 121. What is a Pod?
- [ ] 122. Why is Pod the basic unit and not container?
- [ ] 123. What is the Pod lifecycle?
- [ ] 124. What are the Pod phases?
- [ ] 125. What is Pending phase?
- [ ] 126. What is Running phase?
- [ ] 127. What is Succeeded phase?
- [ ] 128. What is Failed phase?
- [ ] 129. What is Unknown phase?
- [ ] 130. What is Pod status?
- [ ] 131. What is container state?
- [ ] 132. What are the container states?
- [ ] 133. What is Waiting state?
- [ ] 134. What is Running state?
- [ ] 135. What is Terminated state?
- [ ] 136. What is a Pod manifest?
- [ ] 137. What is YAML in Kubernetes?
138. 
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
spec:
  containers:
  - name: nginx
    image: nginx:latest
    ports:
    - containerPort: 80
```
Explain this Pod manifest.

- [ ] 139. What is apiVersion?
- [ ] 140. What is kind?
- [ ] 141. What is metadata?
- [ ] 142. What is spec?
- [ ] 143. What is the name field?
- [ ] 144. What is the containers field?
- [ ] 145. What is the image field?
- [ ] 146. What is containerPort?
- [ ] 147. How do you create a Pod?
- [ ] 148. What is `kubectl apply`?
- [ ] 149. What is `kubectl create`?
- [ ] 150. What is the difference between apply and create?
- [ ] 151. How do you view Pods?
- [ ] 152. What is `kubectl get pods`?
- [ ] 153. What is `kubectl describe pod`?
- [ ] 154. What is the difference between get and describe?
- [ ] 155. How do you delete a Pod?
- [ ] 156. What is `kubectl delete pod`?
- [ ] 157. What happens when you delete a Pod?
- [ ] 158. What is Pod restart policy?
- [ ] 159. What are the restart policies?
- [ ] 160. What is Always restart policy?
- [ ] 161. What is OnFailure restart policy?
- [ ] 162. What is Never restart policy?
- [ ] 163. What is the default restart policy?
- [ ] 164. What is resource request?
- [ ] 165. What is resource limit?
- [ ] 166. What is the difference between request and limit?
167. 
```yaml
resources:
  requests:
    memory: "64Mi"
    cpu: "250m"
  limits:
    memory: "128Mi"
    cpu: "500m"
```
Explain this resource configuration.

- [ ] 168. What is CPU unit in Kubernetes?
- [ ] 169. What is memory unit in Kubernetes?
- [ ] 170. What is "250m" CPU?
- [ ] 171. What is "64Mi" memory?
- [ ] 172. What happens if a Pod exceeds memory limit?
- [ ] 173. What happens if a Pod exceeds CPU limit?
- [ ] 174. What is OOMKilled?
- [ ] 175. What is liveness probe?
- [ ] 176. What is readiness probe?
- [ ] 177. What is startup probe?
- [ ] 178. What is the difference between liveness and readiness probe?
179. 
```yaml
livenessProbe:
  httpGet:
    path: /health
    port: 8080
  initialDelaySeconds: 30
  periodSeconds: 10
```
Explain this probe configuration.

- [ ] 180. What is httpGet probe?
- [ ] 181. What is tcpSocket probe?
- [ ] 182. What is exec probe?
- [ ] 183. What is initialDelaySeconds?
- [ ] 184. What is periodSeconds?
- [ ] 185. What is failureThreshold?
- [ ] 186. What happens when liveness probe fails?
- [ ] 187. What happens when readiness probe fails?
- [ ] 188. What is Pod networking?
- [ ] 189. What is the Pod IP address?
- [ ] 190. Can Pods communicate with each other?

---

### Deployments

- [ ] 191. What is a Deployment?
- [ ] 192. Why use Deployment instead of Pod?
- [ ] 193. What is declarative configuration?
- [ ] 194. What is imperative configuration?
- [ ] 195. What is the difference between declarative and imperative?
196. 
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```
Explain this Deployment manifest.

- [ ] 197. What is replicas?
- [ ] 198. What is selector?
- [ ] 199. What is matchLabels?
- [ ] 200. What is template?
- [ ] 201. What is the relationship between Deployment and ReplicaSet?
- [ ] 202. What is the relationship between ReplicaSet and Pod?
- [ ] 203. How do you create a Deployment?
- [ ] 204. How do you scale a Deployment?
- [ ] 205. What is `kubectl scale`?
206. 
```bash
kubectl scale deployment nginx-deployment --replicas=5
```
What does this do?

- [ ] 207. What is rolling update?
- [ ] 208. What is the default update strategy?
- [ ] 209. What is RollingUpdate strategy?
- [ ] 210. What is Recreate strategy?
- [ ] 211. What is the difference between RollingUpdate and Recreate?
212. 
```yaml
strategy:
  type: RollingUpdate
  rollingUpdate:
    maxSurge: 1
    maxUnavailable: 0
```
Explain this strategy configuration.

- [ ] 213. What is maxSurge?
- [ ] 214. What is maxUnavailable?
- [ ] 215. How do you update a Deployment?
- [ ] 216. What is `kubectl set image`?
217. 
```bash
kubectl set image deployment/nginx-deployment nginx=nginx:1.16.1
```
What does this do?

- [ ] 218. What is rollout?
- [ ] 219. What is `kubectl rollout status`?
- [ ] 220. What is `kubectl rollout history`?
- [ ] 221. What is rollback?
- [ ] 222. What is `kubectl rollout undo`?
- [ ] 223. How do you rollback to a specific revision?
- [ ] 224. What is revision in Deployment?
- [ ] 225. What is `kubectl rollout pause`?
- [ ] 226. What is `kubectl rollout resume`?
- [ ] 227. Why would you pause a rollout?
- [ ] 228. What is deployment annotation?
- [ ] 229. What is `kubernetes.io/change-cause`?
- [ ] 230. How do you view Deployment details?

---

### Services

- [ ] 231. What is a Service?
- [ ] 232. Why do we need Services?
- [ ] 233. What is the problem with Pod IP addresses?
- [ ] 234. What is service discovery?
- [ ] 235. What is load balancing in Services?
- [ ] 236. What are the types of Services?
- [ ] 237. What is ClusterIP?
- [ ] 238. What is NodePort?
- [ ] 239. What is LoadBalancer?
- [ ] 240. What is ExternalName?
- [ ] 241. What is the difference between ClusterIP and NodePort?
- [ ] 242. What is the difference between NodePort and LoadBalancer?
243. 
```yaml
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
  type: ClusterIP
```
Explain this Service manifest.

- [ ] 244. What is selector in Service?
- [ ] 245. What is port in Service?
- [ ] 246. What is targetPort?
- [ ] 247. What is the difference between port and targetPort?
- [ ] 248. What is the default Service type?
- [ ] 249. What is ClusterIP Service used for?
- [ ] 250. Can you access ClusterIP from outside the cluster?
251. 
```yaml
type: NodePort
ports:
- port: 80
  targetPort: 80
  nodePort: 30080
```
What does this configuration do?

- [ ] 252. What is nodePort?
- [ ] 253. What is the nodePort range?
- [ ] 254. How do you access NodePort Service?
- [ ] 255. What is the LoadBalancer Service?
- [ ] 256. How does LoadBalancer Service work?
- [ ] 257. What cloud providers support LoadBalancer?
- [ ] 258. What happens when you create LoadBalancer on local cluster?
- [ ] 259. What is the Service endpoint?
- [ ] 260. What is the Endpoints object?
- [ ] 261. What is headless Service?
- [ ] 262. How do you create a headless Service?
263. 
```yaml
clusterIP: None
```
What does this do?

- [ ] 264. When should you use headless Service?
- [ ] 265. What is service DNS?
- [ ] 266. What is the DNS name for a Service?
267. 
```
<service-name>.<namespace>.svc.cluster.local
```
Explain this DNS format.

- [ ] 268. How do Pods discover Services?
- [ ] 269. What is kube-dns?
- [ ] 270. What is CoreDNS?

---

### ConfigMaps and Secrets

- [ ] 271. What is a ConfigMap?
- [ ] 272. Why use ConfigMap?
- [ ] 273. What is configuration management?
- [ ] 274. What is the 12-factor app configuration principle?
- [ ] 275. How do you create a ConfigMap?
276. 
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "postgres://localhost:5432/mydb"
  log_level: "info"
```
Explain this ConfigMap.

- [ ] 277. What is the data field in ConfigMap?
- [ ] 278. How do you use ConfigMap in a Pod?
- [ ] 279. What are the ways to consume ConfigMap?
- [ ] 280. What is environment variable from ConfigMap?
281. 
```yaml
env:
- name: DATABASE_URL
  valueFrom:
    configMapKeyRef:
      name: app-config
      key: database_url
```
What does this do?

- [ ] 282. What is volume mount from ConfigMap?
283. 
```yaml
volumes:
- name: config-volume
  configMap:
    name: app-config
volumeMounts:
- name: config-volume
  mountPath: /etc/config
```
What does this do?

- [ ] 284. What is the difference between env and volume mount?
- [ ] 285. What is a Secret?
- [ ] 286. What is the purpose of Secret?
- [ ] 287. What is the difference between ConfigMap and Secret?
- [ ] 288. Are Secrets encrypted?
- [ ] 289. Are Secrets secure?
- [ ] 290. How are Secrets stored in etcd?
- [ ] 291. What is base64 encoding?
- [ ] 292. Is base64 encryption?
- [ ] 293. How do you create a Secret?
294. 
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: db-secret
type: Opaque
data:
  username: YWRtaW4=
  password: cGFzc3dvcmQ=
```
Explain this Secret.

- [ ] 295. What is Opaque Secret type?
- [ ] 296. What are the Secret types?
- [ ] 297. What is docker-registry Secret?
- [ ] 298. What is TLS Secret?
- [ ] 299. How do you encode data for Secret?
300. 
```bash
echo -n 'admin' | base64
```
What does this do?

- [ ] 301. How do you decode Secret data?
- [ ] 302. How do you use Secret in a Pod?
303. 
```yaml
env:
- name: DB_PASSWORD
  valueFrom:
    secretKeyRef:
      name: db-secret
      key: password
```
What does this do?

- [ ] 304. What is Secret volume mount?
- [ ] 305. What is the best practice for Secrets?
- [ ] 306. Should you commit Secrets to Git?
- [ ] 307. What is external secret management?
- [ ] 308. What is HashiCorp Vault?
- [ ] 309. What is AWS Secrets Manager?
- [ ] 310. What is sealed-secrets?

---

### Volumes and Storage

- [ ] 311. What is a Volume in Kubernetes?
- [ ] 312. Why do we need Volumes?
- [ ] 313. What is the problem with container filesystem?
- [ ] 314. What is ephemeral storage?
- [ ] 315. What is persistent storage?
- [ ] 316. What are the types of Volumes?
- [ ] 317. What is emptyDir?
- [ ] 318. What is hostPath?
- [ ] 319. What is the difference between emptyDir and hostPath?
320. 
```yaml
volumes:
- name: cache-volume
  emptyDir: {}
```
What does this do?

- [ ] 321. When is emptyDir deleted?
- [ ] 322. What is the use case for emptyDir?
323. 
```yaml
volumes:
- name: host-volume
  hostPath:
    path: /data
    type: Directory
```
What does this do?

- [ ] 324. What is the security risk of hostPath?
- [ ] 325. What is PersistentVolume (PV)?
- [ ] 326. What is PersistentVolumeClaim (PVC)?
- [ ] 327. What is the relationship between PV and PVC?
- [ ] 328. What is static provisioning?
- [ ] 329. What is dynamic provisioning?
- [ ] 330. What is the difference between static and dynamic provisioning?
331. 
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: pv-example
spec:
  capacity:
    storage: 10Gi
  accessModes:
  - ReadWriteOnce
  persistentVolumeReclaimPolicy: Retain
  storageClassName: standard
  hostPath:
    path: /mnt/data
```
Explain this PV manifest.

- [ ] 332. What is capacity in PV?
- [ ] 333. What is accessModes?
- [ ] 334. What is ReadWriteOnce (RWO)?
- [ ] 335. What is ReadOnlyMany (ROX)?
- [ ] 336. What is ReadWriteMany (RWX)?
- [ ] 337. What is the difference between RWO, ROX, and RWX?
- [ ] 338. What is persistentVolumeReclaimPolicy?
- [ ] 339. What is Retain policy?
- [ ] 340. What is Delete policy?
- [ ] 341. What is Recycle policy?
- [ ] 342. What is storageClassName?
343. 
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pvc-example
spec:
  accessModes:
  - ReadWriteOnce
  resources:
    requests:
      storage: 5Gi
  storageClassName: standard
```
Explain this PVC manifest.

- [ ] 344. How does PVC bind to PV?
- [ ] 345. What is PVC binding?
- [ ] 346. What happens if no PV matches PVC?
- [ ] 347. How do you use PVC in a Pod?
348. 
```yaml
volumes:
- name: storage
  persistentVolumeClaim:
    claimName: pvc-example
```
What does this do?

- [ ] 349. What is StorageClass?
- [ ] 350. What is the purpose of StorageClass?
351. 
```yaml
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: fast
provisioner: kubernetes.io/aws-ebs
parameters:
  type: gp2
```
Explain this StorageClass.

- [ ] 352. What is provisioner in StorageClass?
- [ ] 353. What is dynamic volume provisioning?
- [ ] 354. What cloud storage options are available?
- [ ] 355. What is AWS EBS?
- [ ] 356. What is GCP Persistent Disk?
- [ ] 357. What is Azure Disk?
- [ ] 358. What is NFS?
- [ ] 359. What is Ceph?
- [ ] 360. What is the CSI (Container Storage Interface)?

---

### Namespaces

- [ ] 361. What is a Namespace?
- [ ] 362. What is the purpose of Namespace?
- [ ] 363. What is resource isolation?
- [ ] 364. What is the default namespace?
- [ ] 365. What are the built-in namespaces?
- [ ] 366. What is kube-system namespace?
- [ ] 367. What is kube-public namespace?
- [ ] 368. What is kube-node-lease namespace?
- [ ] 369. How do you create a Namespace?
370. 
```yaml
apiVersion: v1
kind: Namespace
metadata:
  name: development
```
What does this do?

- [ ] 371. How do you list namespaces?
- [ ] 372. How do you switch namespace context?
- [ ] 373. What is `kubectl config set-context`?
- [ ] 374. How do you specify namespace in kubectl?
375. 
```bash
kubectl get pods -n development
```
What does `-n` flag do?

- [ ] 376. What is `--all-namespaces` flag?
- [ ] 377. What resources are namespaced?
- [ ] 378. What resources are cluster-scoped?
- [ ] 379. Is Node namespaced?
- [ ] 380. Is PersistentVolume namespaced?
- [ ] 381. Is Namespace namespaced?
- [ ] 382. What is ResourceQuota?
- [ ] 383. What is the purpose of ResourceQuota?
384. 
```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: compute-quota
  namespace: development
spec:
  hard:
    requests.cpu: "10"
    requests.memory: 20Gi
    limits.cpu: "20"
    limits.memory: 40Gi
    pods: "10"
```
Explain this ResourceQuota.

- [ ] 385. What is LimitRange?
- [ ] 386. What is the purpose of LimitRange?
- [ ] 387. What is the difference between ResourceQuota and LimitRange?
388. 
```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: limit-range
spec:
  limits:
  - max:
      cpu: "2"
      memory: 1Gi
    min:
      cpu: 100m
      memory: 128Mi
    type: Container
```
What does this do?

- [ ] 389. What is multi-tenancy in Kubernetes?
- [ ] 390. How do Namespaces help with multi-tenancy?

---

### Ingress

- [ ] 391. What is Ingress?
- [ ] 392. What is the purpose of Ingress?
- [ ] 393. What is the difference between Service and Ingress?
- [ ] 394. What is an Ingress Controller?
- [ ] 395. What is the relationship between Ingress and Ingress Controller?
- [ ] 396. What Ingress Controllers are available?
- [ ] 397. What is Nginx Ingress Controller?
- [ ] 398. What is Traefik?
- [ ] 399. What is HAProxy Ingress?
- [ ] 400. What is the difference between Ingress Controllers?
- [ ] 401. How do you install Ingress Controller?
402. 
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
spec:
  rules:
  - host: example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: web-service
            port:
              number: 80
```
Explain this Ingress manifest.

- [ ] 403. What is rules in Ingress?
- [ ] 404. What is host in Ingress?
- [ ] 405. What is path in Ingress?
- [ ] 406. What is pathType?
- [ ] 407. What is Prefix pathType?
- [ ] 408. What is Exact pathType?
- [ ] 409. What is backend in Ingress?
- [ ] 410. What is the default backend?
- [ ] 411. How does Ingress route traffic?
- [ ] 412. What is path-based routing?
- [ ] 413. What is host-based routing?
414. 
```yaml
rules:
- host: api.example.com
  http:
    paths:
    - path: /
      backend:
        service:
          name: api-service
- host: web.example.com
  http:
    paths:
    - path: /
      backend:
        service:
          name: web-service
```
What does this configuration do?

- [ ] 415. What is TLS in Ingress?
- [ ] 416. How do you configure HTTPS in Ingress?
417. 
```yaml
tls:
- hosts:
  - example.com
  secretName: tls-secret
```
What does this do?

- [ ] 418. What is the tls-secret?
- [ ] 419. How do you create TLS secret?
- [ ] 420. What is cert-manager?
- [ ] 421. What is the purpose of cert-manager?
- [ ] 422. What is Let's Encrypt integration?
- [ ] 423. What is Ingress annotation?
- [ ] 424. What are common Ingress annotations?
425. 
```yaml
annotations:
  nginx.ingress.kubernetes.io/rewrite-target: /
```
What does this annotation do?

- [ ] 426. What is URL rewriting in Ingress?
- [ ] 427. What is rate limiting in Ingress?
- [ ] 428. What is authentication in Ingress?
- [ ] 429. What is CORS configuration in Ingress?
- [ ] 430. What is the Ingress class?

---

### Labels and Selectors

- [ ] 431. What is a Label?
- [ ] 432. What is the purpose of Labels?
- [ ] 433. What is the format of Labels?
434. 
```yaml
metadata:
  labels:
    app: nginx
    environment: production
    tier: frontend
```
Explain these Labels.

- [ ] 435. What are the Label naming conventions?
- [ ] 436. What is a Selector?
- [ ] 437. What is the purpose of Selectors?
- [ ] 438. What is equality-based selector?
- [ ] 439. What is set-based selector?
440. 
```yaml
selector:
  matchLabels:
    app: nginx
```
What does this do?

441. 
```yaml
selector:
  matchExpressions:
  - key: environment
    operator: In
    values:
    - production
    - staging
```
What does this do?

- [ ] 442. What operators are available in matchExpressions?
- [ ] 443. What is the In operator?
- [ ] 444. What is the NotIn operator?
- [ ] 445. What is the Exists operator?
- [ ] 446. What is the DoesNotExist operator?
- [ ] 447. How do Services use Selectors?
- [ ] 448. How do Deployments use Selectors?
- [ ] 449. What is label selector in kubectl?
450. 
```bash
kubectl get pods -l app=nginx
```
What does this do?

451. 
```bash
kubectl get pods -l 'environment in (production,staging)'
```
What does this do?

- [ ] 452. What is the difference between Labels and Annotations?
- [ ] 453. What is an Annotation?
- [ ] 454. What is the purpose of Annotations?
455. 
```yaml
metadata:
  annotations:
    description: "This is a production nginx deployment"
    contact: "team@example.com"
```
What are Annotations used for?

- [ ] 456. Can you use Selectors with Annotations?
- [ ] 457. What is the size limit for Labels?
- [ ] 458. What is the size limit for Annotations?
- [ ] 459. What is the recommended use of Labels?
- [ ] 460. What is the recommended use of Annotations?

---

### StatefulSets

- [ ] 461. What is a StatefulSet?
- [ ] 462. What is the purpose of StatefulSet?
- [ ] 463. What is the difference between Deployment and StatefulSet?
- [ ] 464. When should you use StatefulSet?
- [ ] 465. What is stateful application?
- [ ] 466. What is stateless application?
- [ ] 467. What are examples of stateful applications?
- [ ] 468. What are the characteristics of StatefulSet?
- [ ] 469. What is stable network identity?
- [ ] 470. What is stable storage?
- [ ] 471. What is ordered deployment?
- [ ] 472. What is ordered scaling?
473. 
```yaml
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: web
spec:
  serviceName: "nginx"
  replicas: 3
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx
        ports:
        - containerPort: 80
  volumeClaimTemplates:
  - metadata:
      name: www
    spec:
      accessModes: [ "ReadWriteOnce" ]
      resources:
        requests:
          storage: 1Gi
```
Explain this StatefulSet manifest.

- [ ] 474. What is serviceName in StatefulSet?
- [ ] 475. What is volumeClaimTemplates?
- [ ] 476. What is the Pod naming in StatefulSet?
477. 
```
web-0, web-1, web-2
```
Explain this naming pattern.

- [ ] 478. What is the Pod DNS in StatefulSet?
479. 
```
<pod-name>.<service-name>.<namespace>.svc.cluster.local
```
Explain this DNS format.

- [ ] 480. What is the deployment order in StatefulSet?
- [ ] 481. What is the scaling order in StatefulSet?
- [ ] 482. What happens when you scale down StatefulSet?
- [ ] 483. What is the deletion order?
- [ ] 484. What is the update strategy for StatefulSet?
- [ ] 485. What is RollingUpdate for StatefulSet?
- [ ] 486. What is OnDelete update strategy?
- [ ] 487. What is partition in StatefulSet update?
488. 
```yaml
updateStrategy:
  type: RollingUpdate
  rollingUpdate:
    partition: 2
```
What does this do?

- [ ] 489. What is the headless Service requirement?
- [ ] 490. Why does StatefulSet need headless Service?
- [ ] 491. What is stable storage in StatefulSet?
- [ ] 492. What happens to PVC when StatefulSet Pod is deleted?
- [ ] 493. What is the PVC retention policy?
- [ ] 494. What are use cases for StatefulSet?
- [ ] 495. What is database deployment with StatefulSet?
- [ ] 496. What is the challenge of StatefulSet?
- [ ] 497. What is the complexity of StatefulSet?
- [ ] 498. What is the alternative to StatefulSet?
- [ ] 499. Should you use StatefulSet for all databases?
- [ ] 500. What is the operator pattern for stateful apps?

---

### DaemonSets

- [ ] 501. What is a DaemonSet?
- [ ] 502. What is the purpose of DaemonSet?
- [ ] 503. What is the difference between Deployment and DaemonSet?
- [ ] 504. When should you use DaemonSet?
- [ ] 505. What is the Pod scheduling in DaemonSet?
- [ ] 506. How many Pods does DaemonSet create?
507. 
```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: fluentd
spec:
  selector:
    matchLabels:
      name: fluentd
  template:
    metadata:
      labels:
        name: fluentd
    spec:
      containers:
      - name: fluentd
        image: fluentd:latest
```
Explain this DaemonSet.

- [ ] 508. What are common use cases for DaemonSet?
- [ ] 509. What is log collection with DaemonSet?
- [ ] 510. What is node monitoring with DaemonSet?
- [ ] 511. What is network plugin with DaemonSet?
- [ ] 512. What is kube-proxy DaemonSet?
- [ ] 513. What is node selector in DaemonSet?
514. 
```yaml
spec:
  template:
    spec:
      nodeSelector:
        disk: ssd
```
What does this do?

- [ ] 515. What is toleration in DaemonSet?
- [ ] 516. What is taint?
- [ ] 517. What is the relationship between taint and toleration?
518. 
```yaml
tolerations:
- key: node-role.kubernetes.io/master
  effect: NoSchedule
```
What does this do?

- [ ] 519. What is the update strategy for DaemonSet?
- [ ] 520. What is RollingUpdate for DaemonSet?
- [ ] 521. What is OnDelete for DaemonSet?
- [ ] 522. What is maxUnavailable in DaemonSet?
- [ ] 523. How do you update DaemonSet?
- [ ] 524. What happens when a new node is added?
- [ ] 525. What happens when a node is removed?
- [ ] 526. Can you scale DaemonSet?
- [ ] 527. What is the difference between DaemonSet and StatefulSet?
- [ ] 528. What is the difference between DaemonSet and Deployment?
- [ ] 529. What is the scheduling behavior of DaemonSet?
- [ ] 530. Does DaemonSet respect node taints?

---

### Jobs and CronJobs

- [ ] 531. What is a Job?
- [ ] 532. What is the purpose of Job?
- [ ] 533. What is the difference between Deployment and Job?
- [ ] 534. When should you use Job?
- [ ] 535. What is batch processing?
536. 
```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: pi
spec:
  template:
    spec:
      containers:
      - name: pi
        image: perl
        command: ["perl", "-Mbignum=bpi", "-wle", "print bpi(2000)"]
      restartPolicy: Never
  backoffLimit: 4
```
Explain this Job manifest.

- [ ] 537. What is restartPolicy in Job?
- [ ] 538. What is backoffLimit?
- [ ] 539. What is the default backoffLimit?
- [ ] 540. What happens when Job fails?
- [ ] 541. What is completions in Job?
- [ ] 542. What is parallelism in Job?
543. 
```yaml
spec:
  completions: 5
  parallelism: 2
```
What does this configuration do?

- [ ] 544. What is the difference between completions and parallelism?
- [ ] 545. What is Job completion?
- [ ] 546. What is Job success?
- [ ] 547. What is Job failure?
- [ ] 548. How do you view Job status?
- [ ] 549. What is `kubectl get jobs`?
- [ ] 550. What happens to Pods after Job completion?
- [ ] 551. What is ttlSecondsAfterFinished?
552. 
```yaml
spec:
  ttlSecondsAfterFinished: 100
```
What does this do?

- [ ] 553. What is a CronJob?
- [ ] 554. What is the purpose of CronJob?
- [ ] 555. What is the difference between Job and CronJob?
556. 
```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hello
spec:
  schedule: "*/1 * * * *"
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: hello
            image: busybox
            command: ["echo", "Hello World"]
          restartPolicy: OnFailure
```
Explain this CronJob manifest.

- [ ] 557. What is schedule in CronJob?
- [ ] 558. What is the cron format?
559. 
```
*/1 * * * *
```
What does this schedule mean?

560. 
```
0 0 * * *
```
What does this schedule mean?

- [ ] 561. What is jobTemplate in CronJob?
- [ ] 562. What is concurrencyPolicy?
- [ ] 563. What is Allow concurrency policy?
- [ ] 564. What is Forbid concurrency policy?
- [ ] 565. What is Replace concurrency policy?
- [ ] 566. What is startingDeadlineSeconds?
- [ ] 567. What is successfulJobsHistoryLimit?
- [ ] 568. What is failedJobsHistoryLimit?
- [ ] 569. How do you suspend a CronJob?
- [ ] 570. What is the suspend field?
- [ ] 571. What are use cases for CronJob?
- [ ] 572. What is backup with CronJob?
- [ ] 573. What is report generation with CronJob?
- [ ] 574. What is cleanup with CronJob?
- [ ] 575. What is the timezone for CronJob?
- [ ] 576. What is the default timezone?
- [ ] 577. How do you specify timezone in CronJob?
- [ ] 578. What is the limitation of CronJob?
- [ ] 579. What is the alternative to CronJob?
- [ ] 580. What is external cron vs Kubernetes CronJob?

---

### Networking

- [ ] 581. What is Kubernetes networking?
- [ ] 582. What are the networking requirements in Kubernetes?
- [ ] 583. What is the Kubernetes networking model?
- [ ] 584. What are the four networking problems in Kubernetes?
- [ ] 585. What is container-to-container networking?
- [ ] 586. What is Pod-to-Pod networking?
- [ ] 587. What is Pod-to-Service networking?
- [ ] 588. What is external-to-Service networking?
- [ ] 589. How does container-to-container work in a Pod?
- [ ] 590. What is localhost in a Pod?
- [ ] 591. How does Pod-to-Pod networking work?
- [ ] 592. What is the Pod network?
- [ ] 593. What is CNI (Container Network Interface)?
- [ ] 594. What is the purpose of CNI?
- [ ] 595. What CNI plugins are available?
- [ ] 596. What is Calico?
- [ ] 597. What is Flannel?
- [ ] 598. What is Weave?
- [ ] 599. What is Cilium?
- [ ] 600. What is the difference between CNI plugins?
- [ ] 601. What is the Pod CIDR?
- [ ] 602. What is the Service CIDR?
- [ ] 603. What is the difference between Pod CIDR and Service CIDR?
- [ ] 604. What is kube-proxy?
- [ ] 605. What is the role of kube-proxy in networking?
- [ ] 606. What is iptables mode?
- [ ] 607. What is IPVS mode?
- [ ] 608. What is the difference between iptables and IPVS?
- [ ] 609. What is Service IP?
- [ ] 610. What is virtual IP?
- [ ] 611. How does Service load balancing work?
- [ ] 612. What is the load balancing algorithm?
- [ ] 613. What is DNS in Kubernetes?
- [ ] 614. What is CoreDNS?
- [ ] 615. What is the DNS resolution in Kubernetes?
- [ ] 616. What is the FQDN (Fully Qualified Domain Name)?
617. 
```
my-service.my-namespace.svc.cluster.local
```
Explain this DNS name.

- [ ] 618. What is the short DNS name?
- [ ] 619. Can Pods in the same namespace use short names?
- [ ] 620. What is NetworkPolicy?
- [ ] 621. What is the purpose of NetworkPolicy?
- [ ] 622. What is the default network policy?
- [ ] 623. Is Kubernetes network secure by default?
624. 
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-frontend
spec:
  podSelector:
    matchLabels:
      role: backend
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend
    ports:
    - protocol: TCP
      port: 6379
```
Explain this NetworkPolicy.

- [ ] 625. What is podSelector in NetworkPolicy?
- [ ] 626. What is ingress in NetworkPolicy?
- [ ] 627. What is egress in NetworkPolicy?
- [ ] 628. What is the difference between ingress and egress?
- [ ] 629. What is the from field?
- [ ] 630. What is the to field?
- [ ] 631. What is namespaceSelector?
- [ ] 632. What is ipBlock?
- [ ] 633. What CNI plugins support NetworkPolicy?
- [ ] 634. Does Flannel support NetworkPolicy?
- [ ] 635. What is the default deny policy?
636. 
```yaml
spec:
  podSelector: {}
  policyTypes:
  - Ingress
  - Egress
```
What does this do?

- [ ] 637. What is allow all policy?
- [ ] 638. What is the best practice for NetworkPolicy?
- [ ] 639. What is zero-trust networking?
- [ ] 640. What is service mesh?

---

### Configuration and Security

- [ ] 641. What is RBAC in Kubernetes?
- [ ] 642. What does RBAC stand for?
- [ ] 643. What is the purpose of RBAC?
- [ ] 644. What is Role?
- [ ] 645. What is ClusterRole?
- [ ] 646. What is the difference between Role and ClusterRole?
- [ ] 647. What is RoleBinding?
- [ ] 648. What is ClusterRoleBinding?
- [ ] 649. What is the difference between RoleBinding and ClusterRoleBinding?
650. 
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: pod-reader
  namespace: default
rules:
- apiGroups: [""]
  resources: ["pods"]
  verbs: ["get", "list", "watch"]
```
Explain this Role.

- [ ] 651. What is apiGroups in RBAC?
- [ ] 652. What is resources in RBAC?
- [ ] 653. What is verbs in RBAC?
- [ ] 654. What verbs are available?
- [ ] 655. What is get verb?
- [ ] 656. What is list verb?
- [ ] 657. What is create verb?
- [ ] 658. What is update verb?
- [ ] 659. What is delete verb?
660. 
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: read-pods
  namespace: default
subjects:
- kind: User
  name: jane
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: Role
  name: pod-reader
  apiGroup: rbac.authorization.k8s.io
```
Explain this RoleBinding.

- [ ] 661. What is subjects in RoleBinding?
- [ ] 662. What is roleRef in RoleBinding?
- [ ] 663. What is ServiceAccount?
- [ ] 664. What is the purpose of ServiceAccount?
- [ ] 665. What is the default ServiceAccount?
- [ ] 666. How do you create a ServiceAccount?
667. 
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-service-account
```
What does this do?

- [ ] 668. How do you use ServiceAccount in a Pod?
669. 
```yaml
spec:
  serviceAccountName: my-service-account
```
What does this do?

- [ ] 670. What is the ServiceAccount token?
- [ ] 671. Where is the token mounted?
- [ ] 672. What is SecurityContext?
- [ ] 673. What is the purpose of SecurityContext?
- [ ] 674. What is runAsUser?
- [ ] 675. What is runAsGroup?
- [ ] 676. What is fsGroup?
677. 
```yaml
securityContext:
  runAsUser: 1000
  runAsGroup: 3000
  fsGroup: 2000
```
What does this do?

- [ ] 678. What is runAsNonRoot?
- [ ] 679. What is readOnlyRootFilesystem?
- [ ] 680. What is privileged container?
- [ ] 681. What is the security risk of privileged container?
- [ ] 682. What is capabilities in SecurityContext?
- [ ] 683. What is PodSecurityPolicy?
- [ ] 684. What is the purpose of PodSecurityPolicy?
- [ ] 685. What is PodSecurityStandard?
- [ ] 686. What is the difference between PodSecurityPolicy and PodSecurityStandard?
- [ ] 687. What is the privileged policy?
- [ ] 688. What is the baseline policy?
- [ ] 689. What is the restricted policy?
- [ ] 690. What is admission controller?
- [ ] 691. What is the purpose of admission controller?
- [ ] 692. What is validating admission webhook?
- [ ] 693. What is mutating admission webhook?
- [ ] 694. What is the difference between validating and mutating?
- [ ] 695. What is OPA (Open Policy Agent)?
- [ ] 696. What is Gatekeeper?
- [ ] 697. What is the purpose of Gatekeeper?
- [ ] 698. What is image security?
- [ ] 699. What is image scanning?
- [ ] 700. What is private registry?

---

### kubectl Commands

- [ ] 701. What is kubectl?
- [ ] 702. What is the purpose of kubectl?
- [ ] 703. How do you install kubectl?
- [ ] 704. What is kubeconfig?
- [ ] 705. Where is kubeconfig located?
- [ ] 706. What is the default kubeconfig path?
- [ ] 707. What is context in kubeconfig?
- [ ] 708. What is cluster in kubeconfig?
- [ ] 709. What is user in kubeconfig?
- [ ] 710. How do you view current context?
- [ ] 711. What is `kubectl config current-context`?
- [ ] 712. How do you list all contexts?
- [ ] 713. What is `kubectl config get-contexts`?
- [ ] 714. How do you switch context?
- [ ] 715. What is `kubectl config use-context`?
- [ ] 716. What is `kubectl get`?
- [ ] 717. What is `kubectl describe`?
- [ ] 718. What is `kubectl create`?
- [ ] 719. What is `kubectl apply`?
- [ ] 720. What is `kubectl delete`?
- [ ] 721. What is the difference between create and apply?
- [ ] 722. What is declarative vs imperative?
- [ ] 723. What is `kubectl edit`?
- [ ] 724. What is `kubectl patch`?
- [ ] 725. What is `kubectl replace`?
- [ ] 726. What is `kubectl scale`?
- [ ] 727. What is `kubectl rollout`?
- [ ] 728. What is `kubectl logs`?
- [ ] 729. How do you view Pod logs?
730. 
```bash
kubectl logs pod-name
```
What does this do?

- [ ] 731. How do you follow logs?
- [ ] 732. What is `kubectl logs -f`?
- [ ] 733. How do you view logs from specific container?
734. 
```bash
kubectl logs pod-name -c container-name
```
What does this do?

- [ ] 735. What is `kubectl exec`?
- [ ] 736. How do you execute command in a Pod?
737. 
```bash
kubectl exec -it pod-name -- /bin/bash
```
What does this do?

- [ ] 738. What is the `-it` flag?
- [ ] 739. What is `kubectl port-forward`?
740. 
```bash
kubectl port-forward pod-name 8080:80
```
What does this do?

- [ ] 741. What is `kubectl cp`?
- [ ] 742. How do you copy files to/from Pod?
- [ ] 743. What is `kubectl top`?
- [ ] 744. What does `kubectl top nodes` show?
- [ ] 745. What does `kubectl top pods` show?
- [ ] 746. What is metrics-server?
- [ ] 747. What is `kubectl explain`?
748. 
```bash
kubectl explain pod.spec.containers
```
What does this do?

- [ ] 749. What is `kubectl api-resources`?
- [ ] 750. What is `kubectl api-versions`?
- [ ] 751. What is `kubectl cluster-info`?
- [ ] 752. What is `kubectl version`?
- [ ] 753. What is dry-run in kubectl?
754. 
```bash
kubectl create deployment nginx --image=nginx --dry-run=client -o yaml
```
What does this do?

- [ ] 755. What is the `-o` flag?
- [ ] 756. What output formats are available?
- [ ] 757. What is `-o yaml`?
- [ ] 758. What is `-o json`?
- [ ] 759. What is `-o wide`?
- [ ] 760. What is `kubectl diff`?

---

### Helm

- [ ] 761. What is Helm?
- [ ] 762. What is the purpose of Helm?
- [ ] 763. What is a Helm chart?
- [ ] 764. What is the difference between kubectl and Helm?
- [ ] 765. What is package management in Kubernetes?
- [ ] 766. What is a Helm release?
- [ ] 767. What is a Helm repository?
- [ ] 768. What is Helm Hub?
- [ ] 769. What is Artifact Hub?
- [ ] 770. How do you install Helm?
- [ ] 771. What is Helm 2 vs Helm 3?
- [ ] 772. What is Tiller?
- [ ] 773. Why was Tiller removed in Helm 3?
- [ ] 774. What is the Helm chart structure?
- [ ] 775. What is Chart.yaml?
- [ ] 776. What is values.yaml?
- [ ] 777. What is templates directory?
- [ ] 778. What is the purpose of templates?
- [ ] 779. What is Helm templating?
- [ ] 780. What is Go templating in Helm?
781. 
```yaml
apiVersion: v1
kind: Service
metadata:
  name: {{ .Values.service.name }}
spec:
  type: {{ .Values.service.type }}
  ports:
  - port: {{ .Values.service.port }}
```
Explain this Helm template.

- [ ] 782. What is `.Values` in Helm?
- [ ] 783. How do you install a Helm chart?
- [ ] 784. What is `helm install`?
785. 
```bash
helm install my-release stable/nginx
```
What does this do?

- [ ] 786. How do you upgrade a Helm release?
- [ ] 787. What is `helm upgrade`?
- [ ] 788. How do you rollback a Helm release?
- [ ] 789. What is `helm rollback`?
- [ ] 790. How do you uninstall a Helm release?
- [ ] 791. What is `helm uninstall`?
- [ ] 792. How do you list Helm releases?
- [ ] 793. What is `helm list`?
- [ ] 794. How do you search for charts?
- [ ] 795. What is `helm search`?
- [ ] 796. How do you add a Helm repository?
- [ ] 797. What is `helm repo add`?
- [ ] 798. How do you update repositories?
- [ ] 799. What is `helm repo update`?
- [ ] 800. How do you create a custom chart?
- [ ] 801. What is `helm create`?
- [ ] 802. What is the chart version?
- [ ] 803. What is the app version?
- [ ] 804. What is the difference between chart version and app version?
- [ ] 805. What is `helm template`?
- [ ] 806. What is the purpose of `helm template`?
- [ ] 807. What is `helm lint`?
- [ ] 808. What is chart testing?
- [ ] 809. What is the best practice for Helm charts?
- [ ] 810. What is the subchart?

---

### Monitoring and Logging

- [ ] 811. What is monitoring in Kubernetes?
- [ ] 812. What should you monitor in Kubernetes?
- [ ] 813. What is cluster monitoring?
- [ ] 814. What is application monitoring?
- [ ] 815. What is Prometheus in Kubernetes?
- [ ] 816. What is the Prometheus Operator?
- [ ] 817. What is ServiceMonitor?
- [ ] 818. What is PodMonitor?
- [ ] 819. What is Grafana in Kubernetes?
- [ ] 820. How do you deploy Prometheus in Kubernetes?
- [ ] 821. What is kube-state-metrics?
- [ ] 822. What is the purpose of kube-state-metrics?
- [ ] 823. What metrics does kube-state-metrics provide?
- [ ] 824. What is node-exporter in Kubernetes?
- [ ] 825. What is cAdvisor?
- [ ] 826. What is the purpose of cAdvisor?
- [ ] 827. What is logging in Kubernetes?
- [ ] 828. What is the logging architecture?
- [ ] 829. What is node-level logging?
- [ ] 830. What is cluster-level logging?
- [ ] 831. What is the EFK stack?
- [ ] 832. What is Elasticsearch in Kubernetes?
- [ ] 833. What is Fluentd in Kubernetes?
- [ ] 834. What is Kibana in Kubernetes?
- [ ] 835. What is the difference between ELK and EFK?
- [ ] 836. What is Loki?
- [ ] 837. What is the difference between Elasticsearch and Loki?
- [ ] 838. How do you access Pod logs?
- [ ] 839. What is the log retention in Kubernetes?
- [ ] 840. What is log rotation?
- [ ] 841. What is the logging driver?
- [ ] 842. What is stdout and stderr in containers?
- [ ] 843. What is the best practice for logging?
- [ ] 844. What is structured logging in Kubernetes?
- [ ] 845. What is log aggregation?
- [ ] 846. What is distributed tracing in Kubernetes?
- [ ] 847. What is Jaeger?
- [ ] 848. What is Zipkin?
- [ ] 849. What is OpenTelemetry in Kubernetes?
- [ ] 850. What is the observability stack?

---

### Best Practices and Production

- [ ] 851. What are Kubernetes best practices?
- [ ] 852. What is the 12-factor app?
- [ ] 853. How does Kubernetes align with 12-factor?
- [ ] 854. What is resource management best practice?
- [ ] 855. Should you always set resource requests?
- [ ] 856. Should you always set resource limits?
- [ ] 857. What is the QoS (Quality of Service) class?
- [ ] 858. What is Guaranteed QoS?
- [ ] 859. What is Burstable QoS?
- [ ] 860. What is BestEffort QoS?
- [ ] 861. What is the difference between QoS classes?
- [ ] 862. What is Pod priority?
- [ ] 863. What is PriorityClass?
- [ ] 864. What is Pod preemption?
- [ ] 865. What is the health check best practice?
- [ ] 866. Should every Pod have probes?
- [ ] 867. What is the graceful shutdown?
- [ ] 868. What is preStop hook?
- [ ] 869. What is postStart hook?
870. 
```yaml
lifecycle:
  preStop:
    exec:
      command: ["/bin/sh", "-c", "sleep 15"]
```
What does this do?

- [ ] 871. What is the termination grace period?
- [ ] 872. What is `terminationGracePeriodSeconds`?
- [ ] 873. What is the deployment strategy best practice?
- [ ] 874. What is blue-green deployment?
- [ ] 875. What is canary deployment?
- [ ] 876. What is A/B testing?
- [ ] 877. How do you implement canary in Kubernetes?
- [ ] 878. What is Flagger?
- [ ] 879. What is Argo Rollouts?
- [ ] 880. What is GitOps?
- [ ] 881. What is ArgoCD?
- [ ] 882. What is Flux?
- [ ] 883. What is the difference between ArgoCD and Flux?
- [ ] 884. What is the CI/CD pipeline for Kubernetes?
- [ ] 885. What is the image tagging best practice?
- [ ] 886. Should you use `latest` tag?
- [ ] 887. What is the immutable tag?
- [ ] 888. What is the security best practice?
- [ ] 889. What is the principle of least privilege?
- [ ] 890. What is Pod Security Standards?
- [ ] 891. What is network segmentation?
- [ ] 892. What is the backup strategy?
- [ ] 893. What is Velero?
- [ ] 894. What is the disaster recovery plan?
- [ ] 895. What is multi-cluster strategy?
- [ ] 896. What is cluster federation?
- [ ] 897. What is the cost optimization?
- [ ] 898. What is the right-sizing?
- [ ] 899. What is the autoscaling strategy?
- [ ] 900. What is the Horizontal Pod Autoscaler (HPA)?

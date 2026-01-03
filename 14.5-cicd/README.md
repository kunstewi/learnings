### CI/CD Fundamentals

- [ ] 1. What is CI (Continuous Integration)?
- [ ] 2. What is CD (Continuous Delivery)?
- [ ] 3. What is Continuous Deployment?
- [ ] 4. What is the difference between Continuous Delivery and Continuous Deployment?
- [ ] 5. What is the CI/CD pipeline?
- [ ] 6. What are the benefits of CI/CD?
- [ ] 7. What is the traditional software development lifecycle?
- [ ] 8. What problems does CI/CD solve?
- [ ] 9. What is automated testing in CI/CD?
- [ ] 10. What is automated deployment?
- [ ] 11. What is a build?
- [ ] 12. What is a build artifact?
- [ ] 13. What is a deployment environment?
- [ ] 14. What are the common environments? (development, staging, production)
- [ ] 15. What is the development environment?
- [ ] 16. What is the staging environment?
- [ ] 17. What is the production environment?
- [ ] 18. What is a CI/CD tool?
- [ ] 19. What are popular CI/CD tools? (GitHub Actions, GitLab CI, Jenkins, CircleCI, Travis CI)
- [ ] 20. What is a pipeline trigger?
- [ ] 21. What triggers a CI/CD pipeline?
- [ ] 22. What is a webhook?
- [ ] 23. What is a pipeline stage?
- [ ] 24. What is a pipeline job?
- [ ] 25. What is a pipeline step?
- [ ] 26. What is the difference between stage, job, and step?
- [ ] 27. What is pipeline parallelization?
- [ ] 28. What is pipeline caching?
- [ ] 29. What is a pipeline artifact?
- [ ] 30. What is pipeline failure handling?

---

### Version Control & Git Workflows

- [ ] 31. What is version control?
- [ ] 32. What is Git?
- [ ] 33. What is a Git repository?
- [ ] 34. What is a commit?
- [ ] 35. What is a branch?
- [ ] 36. What is the main/master branch?
- [ ] 37. What is a feature branch?
- [ ] 38. What is the Git workflow?
- [ ] 39. What is the feature branch workflow?
- [ ] 40. What is the Gitflow workflow?
- [ ] 41. What is the GitHub flow?
- [ ] 42. What is the GitLab flow?
- [ ] 43. What is trunk-based development?
- [ ] 44. What is the difference between Gitflow and GitHub flow?
- [ ] 45. When should you use Gitflow?
- [ ] 46. When should you use GitHub flow?
- [ ] 47. What is a pull request (PR)?
- [ ] 48. What is a merge request (MR)?
- [ ] 49. What is code review?
- [ ] 50. What is the purpose of code review in CI/CD?
- [ ] 51. What is a merge conflict?
- [ ] 52. How do you resolve merge conflicts?
- [ ] 53. What is rebasing?
- [ ] 54. What is the difference between merge and rebase?
- [ ] 55. What is cherry-picking?
- [ ] 56. What is a Git tag?
- [ ] 57. What is semantic versioning?
- [ ] 58. What is the format of semantic versioning? (MAJOR.MINOR.PATCH)
- [ ] 59. When do you increment MAJOR version?
- [ ] 60. When do you increment MINOR version?
- [ ] 61. When do you increment PATCH version?
- [ ] 62. What is a pre-release version?
- [ ] 63. What is the `v1.0.0-alpha.1` format?
- [ ] 64. What is a Git hook?
- [ ] 65. What are client-side Git hooks?
- [ ] 66. What are server-side Git hooks?
- [ ] 67. What is the `pre-commit` hook?
- [ ] 68. What is the `pre-push` hook?
- [ ] 69. What is Husky?
- [ ] 70. How do you set up pre-commit hooks with Husky?

---

### GitHub Actions Fundamentals

- [ ] 71. What is GitHub Actions?
- [ ] 72. What is a GitHub Actions workflow?
- [ ] 73. What is a workflow file?
- [ ] 74. Where are workflow files stored?
- [ ] 75. What is the `.github/workflows/` directory?
- [ ] 76. What is the workflow file format?
- [ ] 77. What is YAML?
- [ ] 78. What is the basic structure of a workflow file?
- [ ] 79. What is the `name` field in a workflow?
- [ ] 80. What is the `on` field in a workflow?
- [ ] 81. What are workflow triggers?
- [ ] 82. What is the `push` trigger?
- [ ] 83. What is the `pull_request` trigger?
- [ ] 84. What is the `workflow_dispatch` trigger?
- [ ] 85. What is the `schedule` trigger?
- [ ] 86. What is cron syntax?
87. 
```yaml
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]
```
Explain this trigger configuration.

- [ ] 88. What is the `jobs` field in a workflow?
- [ ] 89. What is a job in GitHub Actions?
- [ ] 90. What is the `runs-on` field?
- [ ] 91. What are GitHub-hosted runners?
- [ ] 92. What are self-hosted runners?
- [ ] 93. What is `ubuntu-latest`?
- [ ] 94. What is `windows-latest`?
- [ ] 95. What is `macos-latest`?
- [ ] 96. What is the `steps` field in a job?
- [ ] 97. What is a step in GitHub Actions?
- [ ] 98. What is the `uses` field in a step?
- [ ] 99. What is the `run` field in a step?
- [ ] 100. What is the difference between `uses` and `run`?

---

### GitHub Actions - Actions & Steps

- [ ] 101. What is a GitHub Action (the reusable unit)?
- [ ] 102. What is the GitHub Actions Marketplace?
- [ ] 103. What is `actions/checkout`?
104. 
```yaml
- uses: actions/checkout@v4
```
What does this step do?

- [ ] 105. What is `actions/setup-node`?
106. 
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '18'
```
What does this do?

- [ ] 107. What is the `with` field?
- [ ] 108. How do you pass inputs to an action?
- [ ] 109. What is `actions/cache`?
- [ ] 110. How do you cache dependencies in GitHub Actions?
111. 
```yaml
- uses: actions/cache@v3
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```
Explain this caching configuration.

- [ ] 112. What is `hashFiles()`?
- [ ] 113. What is the `restore-keys` field?
- [ ] 114. What is `actions/upload-artifact`?
- [ ] 115. What is `actions/download-artifact`?
- [ ] 116. How do you share files between jobs?
- [ ] 117. What is the `run` command?
118. 
```yaml
- run: npm install
- run: npm run build
- run: npm test
```
What do these steps do?

- [ ] 119. How do you run multiple commands in a single step?
120. 
```yaml
- run: |
    npm install
    npm run build
    npm test
```
What is the `|` syntax?

---

### GitHub Actions - Environment Variables & Secrets

- [ ] 121. What are environment variables in GitHub Actions?
- [ ] 122. How do you set environment variables?
- [ ] 123. What is the `env` field?
124. 
```yaml
env:
  NODE_ENV: production
  API_URL: https://api.example.com
```
What does this do?

- [ ] 125. What is the scope of environment variables?
- [ ] 126. Can you set environment variables at workflow, job, or step level?
- [ ] 127. What are GitHub Secrets?
- [ ] 128. How do you create a secret in GitHub?
- [ ] 129. How do you access secrets in a workflow?
130. 
```yaml
env:
  DATABASE_URL: ${{ secrets.DATABASE_URL }}
```
What does this do?

- [ ] 131. What is the `secrets` context?
- [ ] 132. What is the `github` context?
- [ ] 133. What is `github.sha`?
- [ ] 134. What is `github.ref`?
- [ ] 135. What is `github.actor`?
- [ ] 136. What is `github.repository`?
- [ ] 137. What are context variables?
- [ ] 138. What is the `runner` context?
- [ ] 139. What is `runner.os`?
- [ ] 140. What is the `matrix` strategy?
141. 
```yaml
strategy:
  matrix:
    node-version: [16, 18, 20]
    os: [ubuntu-latest, windows-latest]
```
What does this matrix do?

- [ ] 142. How many jobs will run with this matrix?
- [ ] 143. What is the `fail-fast` option?
- [ ] 144. What is the `max-parallel` option?
- [ ] 145. How do you access matrix values?
- [ ] 146. What is `${{ matrix.node-version }}`?
- [ ] 147. What are outputs in GitHub Actions?
- [ ] 148. How do you set outputs in a step?
- [ ] 149. How do you use outputs from a previous step?
- [ ] 150. What is the `id` field in a step?

---

### GitHub Actions - Advanced Features

- [ ] 151. What is job dependency?
- [ ] 152. How do you make a job depend on another job?
- [ ] 153. What is the `needs` field?
154. 
```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - run: npm run build
  
  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: npm test
```
Explain this job dependency.

- [ ] 155. What is conditional execution?
- [ ] 156. What is the `if` field?
157. 
```yaml
- name: Deploy
  if: github.ref == 'refs/heads/main'
  run: npm run deploy
```
What does this condition do?

- [ ] 158. What is `success()`?
- [ ] 159. What is `failure()`?
- [ ] 160. What is `always()`?
- [ ] 161. What is `cancelled()`?
162. 
```yaml
- name: Cleanup
  if: always()
  run: npm run cleanup
```
When will this step run?

- [ ] 163. What is a reusable workflow?
- [ ] 164. How do you create a reusable workflow?
- [ ] 165. What is the `workflow_call` trigger?
- [ ] 166. How do you call a reusable workflow?
- [ ] 167. What is a composite action?
- [ ] 168. How do you create a custom action?
- [ ] 169. What is the `action.yml` file?
- [ ] 170. What are the types of GitHub Actions? (JavaScript, Docker, Composite)
- [ ] 171. What is the difference between JavaScript and Docker actions?
- [ ] 172. What is the GitHub Actions timeout?
- [ ] 173. What is the default timeout for a job?
- [ ] 174. How do you set a custom timeout?
- [ ] 175. What is the `timeout-minutes` field?
- [ ] 176. What is concurrency control?
- [ ] 177. What is the `concurrency` field?
178. 
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
What does this do?

- [ ] 179. What is the purpose of `cancel-in-progress`?
- [ ] 180. What is the GitHub Actions usage limit?

---

### Building & Testing in CI/CD

- [ ] 181. What is the build stage in CI/CD?
- [ ] 182. What is the test stage in CI/CD?
- [ ] 183. What is the difference between build and test stages?
- [ ] 184. How do you run tests in GitHub Actions?
- [ ] 185. What is unit testing in CI/CD?
- [ ] 186. What is integration testing in CI/CD?
- [ ] 187. What is end-to-end testing in CI/CD?
- [ ] 188. When should each type of test run?
- [ ] 189. What is test parallelization?
- [ ] 190. How do you parallelize tests in GitHub Actions?
- [ ] 191. What is test sharding?
- [ ] 192. What is code coverage?
- [ ] 193. How do you generate code coverage reports?
- [ ] 194. What is the `--coverage` flag?
- [ ] 195. What is Codecov?
- [ ] 196. What is Coveralls?
- [ ] 197. How do you upload coverage reports?
198. 
```yaml
- name: Run tests
  run: npm test -- --coverage
  
- name: Upload coverage
  uses: codecov/codecov-action@v3
  with:
    files: ./coverage/coverage-final.json
```
What does this workflow do?

- [ ] 199. What is linting in CI/CD?
- [ ] 200. What is the purpose of running linters in CI?
- [ ] 201. How do you run ESLint in CI?
- [ ] 202. What is Prettier in CI?
- [ ] 203. Should linting fail the build?
- [ ] 204. What is type checking in CI?
- [ ] 205. How do you run TypeScript type checking?
206. 
```yaml
- run: npm run lint
- run: npm run type-check
- run: npm run test
- run: npm run build
```
What is the recommended order of these steps?

- [ ] 207. What is the fail-fast principle?
- [ ] 208. Should you run tests before or after build?
- [ ] 209. What is build artifact generation?
- [ ] 210. How do you save build artifacts?

---

### Deployment Strategies

- [ ] 211. What is deployment?
- [ ] 212. What is manual deployment?
- [ ] 213. What is automated deployment?
- [ ] 214. What is continuous deployment?
- [ ] 215. What is the difference between continuous delivery and continuous deployment?
- [ ] 216. What is a deployment strategy?
- [ ] 217. What is blue-green deployment?
- [ ] 218. How does blue-green deployment work?
- [ ] 219. What are the benefits of blue-green deployment?
- [ ] 220. What is canary deployment?
- [ ] 221. How does canary deployment work?
- [ ] 222. What is the canary percentage?
- [ ] 223. What is rolling deployment?
- [ ] 224. How does rolling deployment work?
- [ ] 225. What is recreate deployment?
- [ ] 226. What is the downtime in recreate deployment?
- [ ] 227. What is A/B testing deployment?
- [ ] 228. What is the difference between canary and A/B testing?
- [ ] 229. What is feature flag deployment?
- [ ] 230. What is shadow deployment?
- [ ] 231. What is the deployment pipeline?
- [ ] 232. What are deployment gates?
- [ ] 233. What is manual approval in deployment?
- [ ] 234. What is the `environment` field in GitHub Actions?
235. 
```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - run: npm run deploy
```
What does the `environment` field do?

- [ ] 236. What is environment protection rules?
- [ ] 237. How do you require approval for deployment?
- [ ] 238. What is deployment history?
- [ ] 239. What is rollback?
- [ ] 240. How do you rollback a deployment?

---

### Deploying to Different Platforms

- [ ] 241. How do you deploy to Vercel from GitHub Actions?
- [ ] 242. What is the Vercel CLI?
243. 
```yaml
- name: Deploy to Vercel
  run: vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
```
What does this do?

- [ ] 244. How do you deploy to Netlify from GitHub Actions?
- [ ] 245. What is the Netlify CLI?
- [ ] 246. How do you deploy to AWS from GitHub Actions?
- [ ] 247. What is AWS credentials configuration?
- [ ] 248. What is the `aws-actions/configure-aws-credentials` action?
249. 
```yaml
- uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: us-east-1
```
What does this do?

- [ ] 250. How do you deploy to S3?
- [ ] 251. How do you deploy to EC2?
- [ ] 252. How do you deploy to ECS?
- [ ] 253. How do you deploy to Lambda?
- [ ] 254. What is the Serverless Framework?
- [ ] 255. How do you deploy with Serverless Framework in CI?
- [ ] 256. How do you deploy to Google Cloud Platform?
- [ ] 257. What is the `google-github-actions/auth` action?
- [ ] 258. How do you deploy to Firebase?
- [ ] 259. How do you deploy to Heroku?
- [ ] 260. What is the Heroku CLI?
- [ ] 261. How do you deploy Docker images?
- [ ] 262. How do you push to Docker Hub?
- [ ] 263. How do you push to GitHub Container Registry?
264. 
```yaml
- name: Login to Docker Hub
  uses: docker/login-action@v3
  with:
    username: ${{ secrets.DOCKER_USERNAME }}
    password: ${{ secrets.DOCKER_PASSWORD }}

- name: Build and push
  uses: docker/build-push-action@v5
  with:
    push: true
    tags: user/app:latest
```
Explain this Docker workflow.

- [ ] 265. What is the `docker/build-push-action`?
- [ ] 266. How do you deploy to Kubernetes?
- [ ] 267. What is kubectl?
- [ ] 268. How do you configure kubectl in CI?
- [ ] 269. What is Helm?
- [ ] 270. How do you deploy with Helm in CI?

---

### GitLab CI/CD

- [ ] 271. What is GitLab CI/CD?
- [ ] 272. What is the `.gitlab-ci.yml` file?
- [ ] 273. What is the structure of `.gitlab-ci.yml`?
- [ ] 274. What is a GitLab Runner?
- [ ] 275. What is the difference between shared and specific runners?
- [ ] 276. What is a pipeline in GitLab CI?
- [ ] 277. What is a stage in GitLab CI?
- [ ] 278. What is a job in GitLab CI?
279. 
```yaml
stages:
  - build
  - test
  - deploy

build-job:
  stage: build
  script:
    - npm install
    - npm run build

test-job:
  stage: test
  script:
    - npm test

deploy-job:
  stage: deploy
  script:
    - npm run deploy
```
Explain this GitLab CI configuration.

- [ ] 280. What is the `script` field in GitLab CI?
- [ ] 281. What is the `image` field in GitLab CI?
- [ ] 282. What is the `before_script` field?
- [ ] 283. What is the `after_script` field?
- [ ] 284. What is the `artifacts` field in GitLab CI?
285. 
```yaml
artifacts:
  paths:
    - dist/
  expire_in: 1 week
```
What does this do?

- [ ] 286. What is the `cache` field in GitLab CI?
- [ ] 287. What is the difference between `artifacts` and `cache`?
- [ ] 288. What is the `only` field in GitLab CI?
- [ ] 289. What is the `except` field?
- [ ] 290. What is the `rules` field?
291. 
```yaml
deploy-job:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main
```
What does this configuration do?

- [ ] 292. What is the `when` field in GitLab CI?
- [ ] 293. What are the `when` options? (on_success, on_failure, always, manual)
- [ ] 294. What is a manual job in GitLab CI?
- [ ] 295. What is the `dependencies` field?
- [ ] 296. What is the `needs` field in GitLab CI?
- [ ] 297. What is the difference between `dependencies` and `needs`?
- [ ] 298. What are GitLab CI/CD variables?
- [ ] 299. What is the `variables` field?
- [ ] 300. How do you use predefined variables in GitLab CI?

---

### Jenkins

- [ ] 301. What is Jenkins?
- [ ] 302. What is a Jenkins pipeline?
- [ ] 303. What is a Jenkinsfile?
- [ ] 304. What is declarative pipeline in Jenkins?
- [ ] 305. What is scripted pipeline in Jenkins?
- [ ] 306. What is the difference between declarative and scripted pipeline?
- [ ] 307. What is the basic structure of a declarative pipeline?
308. 
```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
```
Explain this Jenkinsfile.

- [ ] 309. What is the `agent` directive?
- [ ] 310. What is `agent any`?
- [ ] 311. What is the `stages` directive?
- [ ] 312. What is the `stage` directive?
- [ ] 313. What is the `steps` directive?
- [ ] 314. What is the `sh` step?
- [ ] 315. What is the `post` directive?
316. 
```groovy
post {
    always {
        cleanWs()
    }
    success {
        echo 'Build succeeded!'
    }
    failure {
        echo 'Build failed!'
    }
}
```
What does this post section do?

- [ ] 317. What is the `environment` directive in Jenkins?
- [ ] 318. What is the `parameters` directive?
- [ ] 319. What is the `triggers` directive?
- [ ] 320. What is the `cron` trigger in Jenkins?
- [ ] 321. What is the `pollSCM` trigger?
- [ ] 322. What is a Jenkins plugin?
- [ ] 323. What are popular Jenkins plugins?
- [ ] 324. What is the Blue Ocean plugin?
- [ ] 325. What is Jenkins agent?
- [ ] 326. What is master-agent architecture in Jenkins?
- [ ] 327. What is distributed builds in Jenkins?
- [ ] 328. What is Jenkins credentials?
- [ ] 329. How do you manage secrets in Jenkins?
- [ ] 330. What is the Jenkins credentials store?

---

### Docker in CI/CD

- [ ] 331. Why use Docker in CI/CD?
- [ ] 332. What is containerized build?
- [ ] 333. What are the benefits of using Docker in CI?
- [ ] 334. How do you build Docker images in CI?
- [ ] 335. What is multi-stage Docker build in CI?
- [ ] 336. How do you optimize Docker builds in CI?
- [ ] 337. What is Docker layer caching?
- [ ] 338. How do you use Docker layer caching in GitHub Actions?
339. 
```yaml
- name: Set up Docker Buildx
  uses: docker/setup-buildx-action@v3

- name: Build and push
  uses: docker/build-push-action@v5
  with:
    context: .
    push: true
    tags: user/app:latest
    cache-from: type=gha
    cache-to: type=gha,mode=max
```
Explain this Docker build workflow.

- [ ] 340. What is Docker Buildx?
- [ ] 341. What is the GitHub Actions cache for Docker?
- [ ] 342. What is `cache-from` and `cache-to`?
- [ ] 343. How do you run tests in Docker containers?
- [ ] 344. What is Docker Compose in CI?
- [ ] 345. How do you use Docker Compose for integration tests?
346. 
```yaml
- name: Run integration tests
  run: |
    docker-compose up -d
    docker-compose exec -T app npm test
    docker-compose down
```
What does this do?

- [ ] 347. What is the `-T` flag in `docker-compose exec`?
- [ ] 348. How do you handle database containers in CI?
- [ ] 349. What is the service container in GitHub Actions?
350. 
```yaml
services:
  postgres:
    image: postgres:15
    env:
      POSTGRES_PASSWORD: postgres
    options: >-
      --health-cmd pg_isready
      --health-interval 10s
      --health-timeout 5s
      --health-retries 5
```
What does this service configuration do?

- [ ] 351. How do you wait for services to be ready?
- [ ] 352. What is the health check in service containers?
- [ ] 353. How do you push Docker images to registry in CI?
- [ ] 354. What is image tagging strategy?
- [ ] 355. Should you use `latest` tag in production?
- [ ] 356. What is semantic versioning for Docker images?
- [ ] 357. How do you tag images with commit SHA?
358. 
```yaml
tags: |
  user/app:latest
  user/app:${{ github.sha }}
  user/app:v1.0.0
```
Explain this tagging strategy.

- [ ] 359. What is vulnerability scanning for Docker images?
- [ ] 360. What is Trivy?

---

### Testing in CI/CD

- [ ] 361. What is the testing pyramid?
- [ ] 362. What percentage of tests should be unit tests?
- [ ] 363. What is test automation?
- [ ] 364. What is the purpose of automated tests in CI?
- [ ] 365. How do you run unit tests in CI?
- [ ] 366. How do you run integration tests in CI?
- [ ] 367. How do you run E2E tests in CI?
- [ ] 368. What is Playwright?
- [ ] 369. What is Cypress?
- [ ] 370. How do you run Playwright tests in CI?
371. 
```yaml
- name: Install Playwright
  run: npx playwright install --with-deps

- name: Run E2E tests
  run: npx playwright test
```
What does this do?

- [ ] 372. How do you run Cypress tests in CI?
- [ ] 373. What is headless browser testing?
- [ ] 374. What is the `--headless` flag?
- [ ] 375. How do you capture test screenshots in CI?
- [ ] 376. How do you capture test videos in CI?
- [ ] 377. What is test reporting?
- [ ] 378. How do you generate test reports?
- [ ] 379. What is JUnit XML format?
- [ ] 380. How do you publish test results in GitHub Actions?
- [ ] 381. What is the `test-results` artifact?
- [ ] 382. What is smoke testing?
- [ ] 383. What is regression testing?
- [ ] 384. What is performance testing in CI?
- [ ] 385. What is load testing?
- [ ] 386. What is the difference between load testing and stress testing?
- [ ] 387. What is k6?
- [ ] 388. What is Apache JMeter?
- [ ] 389. How do you run performance tests in CI?
- [ ] 390. Should performance tests run on every commit?

---

### Security in CI/CD

- [ ] 391. What is security scanning in CI/CD?
- [ ] 392. What is SAST (Static Application Security Testing)?
- [ ] 393. What is DAST (Dynamic Application Security Testing)?
- [ ] 394. What is the difference between SAST and DAST?
- [ ] 395. What is dependency scanning?
- [ ] 396. What is vulnerability scanning?
- [ ] 397. What is npm audit?
- [ ] 398. How do you run npm audit in CI?
399. 
```yaml
- name: Security audit
  run: npm audit --audit-level=high
```
What does this do?

- [ ] 400. What is the `--audit-level` flag?
- [ ] 401. What is Snyk?
- [ ] 402. How do you integrate Snyk in CI?
- [ ] 403. What is Dependabot?
- [ ] 404. What does Dependabot do?
- [ ] 405. How do you configure Dependabot?
- [ ] 406. What is the `dependabot.yml` file?
- [ ] 407. What is automated dependency updates?
- [ ] 408. What is the security risk of outdated dependencies?
- [ ] 409. What is secret scanning?
- [ ] 410. What is the risk of committing secrets?
- [ ] 411. How do you prevent secrets from being committed?
- [ ] 412. What is git-secrets?
- [ ] 413. What is TruffleHog?
- [ ] 414. What is the GitHub secret scanning feature?
- [ ] 415. What is code signing?
- [ ] 416. What is artifact signing?
- [ ] 417. What is Sigstore?
- [ ] 418. What is supply chain security?
- [ ] 419. What is SBOM (Software Bill of Materials)?
- [ ] 420. What is the purpose of SBOM?

---

### Monitoring & Observability

- [ ] 421. What is monitoring in CI/CD?
- [ ] 422. What is observability?
- [ ] 423. What is the difference between monitoring and observability?
- [ ] 424. What should you monitor in CI/CD?
- [ ] 425. What is build success rate?
- [ ] 426. What is build duration?
- [ ] 427. What is deployment frequency?
- [ ] 428. What is mean time to recovery (MTTR)?
- [ ] 429. What is change failure rate?
- [ ] 430. What are DORA metrics?
- [ ] 431. What is the purpose of DORA metrics?
- [ ] 432. What is pipeline analytics?
- [ ] 433. How do you track pipeline performance?
- [ ] 434. What is build time optimization?
- [ ] 435. How do you reduce build time?
- [ ] 436. What is the impact of caching on build time?
- [ ] 437. What is parallel execution impact?
- [ ] 438. What is notification in CI/CD?
- [ ] 439. How do you send notifications on build failure?
- [ ] 440. What is Slack integration in CI/CD?
441. 
```yaml
- name: Notify Slack
  if: failure()
  uses: slackapi/slack-github-action@v1
  with:
    webhook-url: ${{ secrets.SLACK_WEBHOOK }}
    payload: |
      {
        "text": "Build failed: ${{ github.repository }}"
      }
```
What does this do?

- [ ] 442. What is email notification?
- [ ] 443. What is Discord webhook?
- [ ] 444. What is status badge?
- [ ] 445. How do you add a build status badge to README?
- [ ] 446. What is the GitHub Actions badge?
- [ ] 447. What is deployment tracking?
- [ ] 448. How do you track deployments?
- [ ] 449. What is APM (Application Performance Monitoring)?
- [ ] 450. What is error tracking in production?

---

### Advanced CI/CD Patterns

- [ ] 451. What is trunk-based development?
- [ ] 452. What is the benefit of trunk-based development for CI/CD?
- [ ] 453. What is feature flag?
- [ ] 454. How do feature flags enable continuous deployment?
- [ ] 455. What is dark launch?
- [ ] 456. What is the difference between feature flag and dark launch?
- [ ] 457. What is GitOps?
- [ ] 458. What is the GitOps workflow?
- [ ] 459. What is ArgoCD?
- [ ] 460. What is Flux?
- [ ] 461. What is infrastructure as code (IaC)?
- [ ] 462. What is Terraform?
- [ ] 463. How do you use Terraform in CI/CD?
- [ ] 464. What is the Terraform plan step?
- [ ] 465. What is the Terraform apply step?
- [ ] 466. Should Terraform apply be automated?
- [ ] 467. What is configuration management?
- [ ] 468. What is Ansible?
- [ ] 469. How do you use Ansible in CI/CD?
- [ ] 470. What is immutable infrastructure?
- [ ] 471. What is the benefit of immutable infrastructure?
- [ ] 472. What is blue-green deployment with infrastructure?
- [ ] 473. What is canary deployment with infrastructure?
- [ ] 474. What is progressive delivery?
- [ ] 475. What is the difference between continuous delivery and progressive delivery?
- [ ] 476. What is chaos engineering in CI/CD?
- [ ] 477. What is the purpose of chaos testing?
- [ ] 478. What is shift-left testing?
- [ ] 479. What is the shift-left principle?
- [ ] 480. What is shift-right testing?

---

### Monorepo CI/CD

- [ ] 481. What is the challenge of CI/CD in monorepos?
- [ ] 482. What is affected detection?
- [ ] 483. How do you run CI only for changed packages?
- [ ] 484. What is Turborepo in CI/CD?
- [ ] 485. How do you use Turborepo in GitHub Actions?
486. 
```yaml
- name: Build
  run: turbo build --filter=[HEAD^1]
```
What does this do?

- [ ] 487. What is the `--filter` flag in Turborepo?
- [ ] 488. What is remote caching in CI?
- [ ] 489. How do you configure Turborepo remote cache?
- [ ] 490. What is Nx in CI/CD?
- [ ] 491. What is Nx Cloud?
- [ ] 492. How does Nx detect affected projects?
- [ ] 493. What is the benefit of affected detection?
- [ ] 494. How do you deploy only changed apps in a monorepo?
- [ ] 495. What is the matrix strategy for monorepo?
- [ ] 496. How do you parallelize monorepo builds?
- [ ] 497. What is the challenge of versioning in monorepo?
- [ ] 498. How do you use changesets in CI?
- [ ] 499. What is the changeset release workflow?
500. 
```yaml
- name: Create Release PR
  uses: changesets/action@v1
  with:
    publish: npm run release
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```
What does this do?

---

### Performance & Optimization

- [ ] 501. How do you optimize CI/CD pipeline performance?
- [ ] 502. What is the impact of caching?
- [ ] 503. What should you cache in CI?
- [ ] 504. What is dependency caching?
- [ ] 505. What is build artifact caching?
- [ ] 506. What is Docker layer caching?
- [ ] 507. What is the trade-off of caching?
- [ ] 508. When should you invalidate cache?
- [ ] 509. What is parallel execution?
- [ ] 510. How do you parallelize jobs?
- [ ] 511. What is the matrix strategy for parallelization?
- [ ] 512. What is the cost of parallelization?
- [ ] 513. What is the optimal number of parallel jobs?
- [ ] 514. What is job splitting?
- [ ] 515. How do you split tests across multiple jobs?
- [ ] 516. What is test sharding?
- [ ] 517. What is the benefit of test sharding?
- [ ] 518. What is incremental builds?
- [ ] 519. How do you implement incremental builds?
- [ ] 520. What is the benefit of incremental builds?
- [ ] 521. What is build time analysis?
- [ ] 522. How do you identify slow steps?
- [ ] 523. What is the GitHub Actions timing feature?
- [ ] 524. What is pipeline optimization strategy?
- [ ] 525. Should you run linting before tests?
- [ ] 526. Should you run tests before build?
- [ ] 527. What is the fail-fast strategy?
- [ ] 528. What is the cost optimization in CI/CD?
- [ ] 529. What is the GitHub Actions billing?
- [ ] 530. How do you reduce CI/CD costs?

---

### Real-World CI/CD Workflows

531. 
```yaml
name: CI/CD

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm test -- --coverage
      - uses: codecov/codecov-action@v3

  build:
    needs: [lint, test]
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: build
          path: dist/

  deploy:
    needs: build
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    environment: production
    steps:
      - uses: actions/checkout@v4
      - uses: actions/download-artifact@v3
        with:
          name: build
          path: dist/
      - run: npm run deploy
        env:
          DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
```
Explain this complete CI/CD workflow.

- [ ] 532. What is the purpose of `npm ci` vs `npm install`?
- [ ] 533. Why is caching important in this workflow?
- [ ] 534. Why does build need lint and test?
- [ ] 535. Why does deploy only run on main branch?
- [ ] 536. What is the purpose of the environment field?

537. 
```yaml
name: Docker Build and Deploy

on:
  push:
    branches: [main]
    tags: ['v*']

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3
      
      - name: Login to Docker Hub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
      
      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v5
        with:
          images: user/app
          tags: |
            type=ref,event=branch
            type=semver,pattern={{version}}
            type=sha
      
      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```
Explain this Docker workflow.

- [ ] 538. What is the `docker/metadata-action`?
- [ ] 539. What tags will be created for a push to main?
- [ ] 540. What tags will be created for a tag `v1.2.3`?

541. 
```yaml
name: Monorepo CI

on: [push, pull_request]

jobs:
  changes:
    runs-on: ubuntu-latest
    outputs:
      web: ${{ steps.filter.outputs.web }}
      api: ${{ steps.filter.outputs.api }}
    steps:
      - uses: actions/checkout@v4
      - uses: dorny/paths-filter@v2
        id: filter
        with:
          filters: |
            web:
              - 'apps/web/**'
            api:
              - 'apps/api/**'
  
  build-web:
    needs: changes
    if: needs.changes.outputs.web == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: turbo build --filter=web
  
  build-api:
    needs: changes
    if: needs.changes.outputs.api == 'true'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: turbo build --filter=api
```
Explain this monorepo workflow.

- [ ] 542. What is the `dorny/paths-filter` action?
- [ ] 543. What is the purpose of the changes job?
- [ ] 544. When will build-web run?
- [ ] 545. What is the benefit of this approach?

546. 
```yaml
name: E2E Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5
        ports:
          - 5432:5432
    
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      
      - run: npm ci
      
      - name: Run migrations
        run: npm run db:migrate
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
      
      - name: Run E2E tests
        run: npx playwright test
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
      
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```
Explain this E2E testing workflow.

- [ ] 547. Why do we need a PostgreSQL service?
- [ ] 548. What is the purpose of health checks?
- [ ] 549. Why do we run migrations before tests?
- [ ] 550. Why upload artifacts with `if: always()`?

---

### Troubleshooting & Best Practices

- [ ] 551. How do you debug a failing CI/CD pipeline?
- [ ] 552. What is the GitHub Actions logs?
- [ ] 553. How do you enable debug logging?
- [ ] 554. What is the `ACTIONS_STEP_DEBUG` secret?
- [ ] 555. What is the `ACTIONS_RUNNER_DEBUG` secret?
- [ ] 556. How do you reproduce CI failures locally?
- [ ] 557. What is act?
- [ ] 558. How do you use act to run GitHub Actions locally?
- [ ] 559. What are CI/CD best practices?
- [ ] 560. Should you commit directly to main?
- [ ] 561. Should you require PR reviews?
- [ ] 562. Should you require passing CI before merge?
- [ ] 563. What is branch protection?
- [ ] 564. How do you configure branch protection rules?
- [ ] 565. Should you allow force push to main?
- [ ] 566. What is the principle of fast feedback?
- [ ] 567. How fast should CI pipelines be?
- [ ] 568. What is an acceptable CI pipeline duration?
- [ ] 569. Should you run all tests on every commit?
- [ ] 570. What is the smoke test strategy?
- [ ] 571. What is the full test suite strategy?
- [ ] 572. When should you run full test suite?
- [ ] 573. What is the nightly build?
- [ ] 574. What is the purpose of nightly builds?
- [ ] 575. Should you deploy on Friday?
- [ ] 576. What is the Friday deployment debate?
- [ ] 577. What is the deployment freeze?
- [ ] 578. When should you have deployment freeze?
- [ ] 579. What is hotfix deployment?
- [ ] 580. How do you handle emergency deployments?

---

### Final Advanced Challenges

- [ ] 581. Design a complete CI/CD pipeline for a full-stack Next.js application with PostgreSQL database.

- [ ] 582. Implement a blue-green deployment strategy using GitHub Actions and AWS.

- [ ] 583. Create a monorepo CI/CD workflow that only builds and deploys changed applications.

- [ ] 584. Design a security-first CI/CD pipeline with SAST, DAST, and dependency scanning.

- [ ] 585. Implement a canary deployment with automatic rollback on error rate increase.

- [ ] 586. Create a CI/CD pipeline that supports multiple environments (dev, staging, production) with different configurations.

- [ ] 587. Design a Docker-based CI/CD workflow with multi-stage builds and layer caching optimization.

- [ ] 588. Implement a GitOps workflow using ArgoCD for Kubernetes deployments.

- [ ] 589. Create a CI/CD pipeline with comprehensive testing (unit, integration, E2E) and parallel execution.

- [ ] 590. Design a cost-optimized CI/CD pipeline for a high-traffic application with frequent deployments.

- [ ] 591. Implement a CI/CD pipeline with feature flag integration for progressive rollout.

- [ ] 592. Create a workflow that automatically creates release notes and changelogs from commits.

- [ ] 593. Design a CI/CD pipeline with automatic semantic versioning and npm package publishing.

- [ ] 594. Implement a pipeline that runs performance tests and fails if metrics degrade.

- [ ] 595. Create a CI/CD workflow with automatic database migration and rollback capability.

- [ ] 596. Design a pipeline with comprehensive monitoring and alerting integration.

- [ ] 597. Implement a CI/CD workflow that supports A/B testing deployments.

- [ ] 598. Create a pipeline with automatic security vulnerability patching.

- [ ] 599. Design a CI/CD system that supports multiple cloud providers (AWS, GCP, Azure).

- [ ] 600. Implement a complete DevOps workflow from code commit to production monitoring.

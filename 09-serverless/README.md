### Serverless Fundamentals

- [ ] 1. What is serverless computing?
- [ ] 2. Does "serverless" mean there are no servers?
- [ ] 3. What are the main characteristics of serverless architecture?
- [ ] 4. What problems does serverless solve?
- [ ] 5. What are the benefits of serverless?
- [ ] 6. What are the drawbacks of serverless?
- [ ] 7. What is Function as a Service (FaaS)?
- [ ] 8. What is Backend as a Service (BaaS)?
- [ ] 9. What is the difference between FaaS and BaaS?
- [ ] 10. What are the main serverless providers?
- [ ] 11. What is AWS Lambda?
- [ ] 12. What is Google Cloud Functions?
- [ ] 13. What is Azure Functions?
- [ ] 14. What is Cloudflare Workers?
- [ ] 15. What is Vercel Functions?
- [ ] 16. What is Netlify Functions?
- [ ] 17. How does serverless differ from traditional server architecture?
- [ ] 18. How does serverless differ from containers?
- [ ] 19. How does serverless differ from Platform as a Service (PaaS)?
- [ ] 20. What is the serverless execution model?
- [ ] 21. What is event-driven architecture?
- [ ] 22. How does serverless relate to microservices?
- [ ] 23. What is the pay-per-use pricing model?
- [ ] 24. What is cold start in serverless?
- [ ] 25. What is warm start in serverless?
- [ ] 26. What causes cold starts?
- [ ] 27. How can you minimize cold starts?
- [ ] 28. What is function timeout?
- [ ] 29. What is function memory limit?
- [ ] 30. What is stateless execution?

---

### AWS Lambda Fundamentals

- [ ] 31. What is AWS Lambda?
- [ ] 32. What languages does AWS Lambda support?
- [ ] 33. How do you create a Lambda function?
- [ ] 34. What is a Lambda handler?
- [ ] 35. What is the handler signature in Node.js?
36. 
```js
exports.handler = async (event, context) => {
  // function code
};
```
Explain the `event` and `context` parameters.
- [ ] 37. What is the `event` object?
- [ ] 38. What is the `context` object?
- [ ] 39. What properties does the `context` object have?
- [ ] 40. What is `context.functionName`?
- [ ] 41. What is `context.requestId`?
- [ ] 42. What is `context.getRemainingTimeInMillis()`?
- [ ] 43. How do you return a response from a Lambda function?
- [ ] 44. What is the difference between callback and async/await in Lambda?
- [ ] 45. Should you use callbacks or async/await?
- [ ] 46. How do you handle errors in Lambda?
- [ ] 47. What happens when a Lambda function throws an error?
- [ ] 48. What is a Lambda execution role?
- [ ] 49. What is IAM in AWS?
- [ ] 50. What permissions does a Lambda function need?
- [ ] 51. How do you grant permissions to a Lambda function?
- [ ] 52. What is the Lambda execution environment?
- [ ] 53. What is the `/tmp` directory in Lambda?
- [ ] 54. How much storage is available in `/tmp`?
- [ ] 55. Is data in `/tmp` persistent across invocations?
- [ ] 56. What is the maximum execution time for a Lambda function?
- [ ] 57. What is the maximum memory allocation for a Lambda function?
- [ ] 58. What is the maximum deployment package size?
- [ ] 59. What is the maximum unzipped deployment package size?
- [ ] 60. How does memory allocation affect CPU in Lambda?

---

### Lambda Triggers & Event Sources

- [ ] 61. What is a Lambda trigger?
- [ ] 62. What are the different types of Lambda triggers?
- [ ] 63. What is an API Gateway trigger?
- [ ] 64. What is an S3 trigger?
- [ ] 65. What is a DynamoDB trigger?
- [ ] 66. What is an SNS trigger?
- [ ] 67. What is an SQS trigger?
- [ ] 68. What is a CloudWatch Events trigger?
- [ ] 69. What is an EventBridge trigger?
- [ ] 70. What is the difference between synchronous and asynchronous invocation?
- [ ] 71. What triggers invoke Lambda synchronously?
- [ ] 72. What triggers invoke Lambda asynchronously?
- [ ] 73. How do you invoke a Lambda function manually?
- [ ] 74. What is the AWS SDK?
- [ ] 75. How do you invoke a Lambda from another Lambda?
- [ ] 76. What is the `lambda.invoke()` method?
- [ ] 77. What is event source mapping?
- [ ] 78. How does Lambda poll SQS?
- [ ] 79. How does Lambda process DynamoDB Streams?
- [ ] 80. What is batch processing in Lambda?
- [ ] 81. What is the batch size for SQS?
- [ ] 82. What is the batch window?
- [ ] 83. How do you handle partial batch failures?
- [ ] 84. What is the dead letter queue (DLQ)?
- [ ] 85. When should you use a DLQ?
- [ ] 86. How do you configure a DLQ for Lambda?
- [ ] 87. What is Lambda Destinations?
- [ ] 88. What is the difference between DLQ and Destinations?
- [ ] 89. How do you send events to different destinations based on success/failure?
- [ ] 90. What is the maximum concurrency for Lambda?

---

### API Gateway & Lambda Integration

- [ ] 91. What is AWS API Gateway?
- [ ] 92. What types of APIs can API Gateway create?
- [ ] 93. What is a REST API in API Gateway?
- [ ] 94. What is an HTTP API in API Gateway?
- [ ] 95. What is a WebSocket API in API Gateway?
- [ ] 96. What is the difference between REST API and HTTP API?
- [ ] 97. When should you use HTTP API vs REST API?
- [ ] 98. How do you integrate API Gateway with Lambda?
- [ ] 99. What is Lambda proxy integration?
- [ ] 100. What is Lambda custom integration?
- [ ] 101. What is the difference between proxy and custom integration?
- [ ] 102. What is the event structure for API Gateway Lambda proxy integration?
- [ ] 103. What properties does the API Gateway event have?
- [ ] 104. What is `event.body`?
- [ ] 105. What is `event.pathParameters`?
- [ ] 106. What is `event.queryStringParameters`?
- [ ] 107. What is `event.headers`?
- [ ] 108. What is `event.requestContext`?
- [ ] 109. How do you return a response from Lambda to API Gateway?
- [ ] 110. What is the required response format for Lambda proxy integration?
111. 
```js
return {
  statusCode: 200,
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Success' })
};
```
Explain this response structure.
- [ ] 112. How do you enable CORS in API Gateway?
- [ ] 113. What headers are needed for CORS?
- [ ] 114. How do you handle different HTTP methods?
- [ ] 115. How do you define routes in API Gateway?
- [ ] 116. What is a resource in API Gateway?
- [ ] 117. What is a stage in API Gateway?
- [ ] 118. What is deployment in API Gateway?
- [ ] 119. How do you deploy an API?
- [ ] 120. What is a stage variable?
- [ ] 121. How do you use environment-specific configurations?
- [ ] 122. What is request validation in API Gateway?
- [ ] 123. How do you validate request body?
- [ ] 124. What is a request model?
- [ ] 125. What is API Gateway throttling?
- [ ] 126. What is the default throttle limit?
- [ ] 127. How do you implement rate limiting?
- [ ] 128. What is a usage plan?
- [ ] 129. What are API keys?
- [ ] 130. How do you secure an API with API keys?

---

### Lambda Layers & Dependencies

- [ ] 131. What is a Lambda Layer?
- [ ] 132. Why do we need Lambda Layers?
- [ ] 133. What can you include in a Layer?
- [ ] 134. How do you create a Lambda Layer?
- [ ] 135. How do you attach a Layer to a Lambda function?
- [ ] 136. What is the maximum number of layers per function?
- [ ] 137. What is the maximum size of all layers combined?
- [ ] 138. How do you share code between Lambda functions?
- [ ] 139. How do you include npm packages in Lambda?
- [ ] 140. Where should you place `node_modules` in a deployment package?
- [ ] 141. How do you handle large dependencies?
- [ ] 142. What is the AWS SDK included in Lambda?
- [ ] 143. Do you need to include the AWS SDK in your deployment package?
- [ ] 144. How do you use native dependencies in Lambda?
- [ ] 145. What is the Lambda execution environment OS?
- [ ] 146. How do you compile native modules for Lambda?
- [ ] 147. What is the `package.json` scripts for Lambda?
- [ ] 148. How do you bundle Lambda functions?
- [ ] 149. What is webpack for Lambda?
- [ ] 150. What is esbuild for Lambda?
- [ ] 151. How do you reduce deployment package size?
- [ ] 152. What is tree shaking?
- [ ] 153. Should you minify Lambda code?
- [ ] 154. How do you handle environment variables?
- [ ] 155. How do you set environment variables in Lambda?
- [ ] 156. How do you access environment variables in code?
- [ ] 157. How do you encrypt environment variables?
- [ ] 158. What is AWS Secrets Manager?
- [ ] 159. What is AWS Systems Manager Parameter Store?
- [ ] 160. When should you use Secrets Manager vs Parameter Store?

---

### Lambda Performance & Optimization

- [ ] 161. What factors affect Lambda performance?
- [ ] 162. How does memory allocation affect performance?
- [ ] 163. What is the relationship between memory and CPU?
- [ ] 164. How do you choose the right memory size?
- [ ] 165. What is Lambda Power Tuning?
- [ ] 166. How do you optimize cold starts?
- [ ] 167. What is provisioned concurrency?
- [ ] 168. How does provisioned concurrency help with cold starts?
- [ ] 169. What is the cost of provisioned concurrency?
- [ ] 170. When should you use provisioned concurrency?
- [ ] 171. How do you keep Lambda functions warm?
- [ ] 172. What is the warming strategy?
- [ ] 173. Should you use scheduled events to keep functions warm?
- [ ] 174. How do you optimize initialization code?
- [ ] 175. What should you put outside the handler?
- [ ] 176. What should you put inside the handler?
177. 
```js
// Outside handler
const db = connectToDatabase();

exports.handler = async (event) => {
  // Use db connection
};
```
Why is this pattern beneficial?
- [ ] 178. How do you reuse database connections?
- [ ] 179. What is connection pooling in serverless?
- [ ] 180. How many database connections should you use?
- [ ] 181. What is the Lambda execution context?
- [ ] 182. What is context reuse?
- [ ] 183. How long does the execution context stay alive?
- [ ] 184. How do you optimize package size?
- [ ] 185. Should you use webpack/esbuild for bundling?
- [ ] 186. How do you reduce cold start time?
- [ ] 187. What is the impact of VPC on cold starts?
- [ ] 188. Should you put Lambda in a VPC?
- [ ] 189. What is VPC cold start penalty?
- [ ] 190. How do you minimize VPC cold start?
- [ ] 191. What is Hyperplane ENI?
- [ ] 192. How do you optimize for concurrent executions?
- [ ] 193. What is reserved concurrency?
- [ ] 194. What is unreserved concurrency?
- [ ] 195. How do you prevent throttling?
- [ ] 196. What happens when Lambda is throttled?
- [ ] 197. How do you monitor Lambda performance?
- [ ] 198. What is AWS CloudWatch?
- [ ] 199. What metrics does Lambda provide?
- [ ] 200. What is invocation count?

---

### Serverless Framework & Tools

- [ ] 201. What is the Serverless Framework?
- [ ] 202. How do you install Serverless Framework?
- [ ] 203. What is `serverless.yml`?
- [ ] 204. How do you define a Lambda function in `serverless.yml`?
- [ ] 205. What is a service in Serverless Framework?
- [ ] 206. How do you deploy with Serverless Framework?
- [ ] 207. What is `serverless deploy`?
- [ ] 208. What is `serverless invoke`?
- [ ] 209. How do you view logs with Serverless Framework?
- [ ] 210. What is `serverless logs`?
- [ ] 211. How do you remove a deployed service?
- [ ] 212. What is `serverless remove`?
- [ ] 213. What are Serverless Framework plugins?
- [ ] 214. What is `serverless-offline`?
- [ ] 215. How do you test Lambda locally?
- [ ] 216. What is SAM (Serverless Application Model)?
- [ ] 217. What is the difference between Serverless Framework and SAM?
- [ ] 218. What is AWS CDK?
- [ ] 219. How does CDK differ from CloudFormation?
- [ ] 220. What is Terraform for serverless?
- [ ] 221. What is the difference between Serverless Framework and Terraform?
- [ ] 222. What is SST (Serverless Stack)?
- [ ] 223. What is Architect?
- [ ] 224. What is Claudia.js?
- [ ] 225. What is Apex?
- [ ] 226. When should you use Serverless Framework vs SAM vs CDK?
- [ ] 227. How do you manage multiple environments?
- [ ] 228. How do you use stages in Serverless Framework?
- [ ] 229. How do you share configuration across functions?
- [ ] 230. How do you organize a large serverless project?

---

### DynamoDB & Serverless

- [ ] 231. What is DynamoDB?
- [ ] 232. Why is DynamoDB popular with serverless?
- [ ] 233. What is a NoSQL database?
- [ ] 234. What is the difference between DynamoDB and traditional databases?
- [ ] 235. What is a table in DynamoDB?
- [ ] 236. What is an item in DynamoDB?
- [ ] 237. What is an attribute in DynamoDB?
- [ ] 238. What is a primary key in DynamoDB?
- [ ] 239. What is a partition key?
- [ ] 240. What is a sort key?
- [ ] 241. What is a composite primary key?
- [ ] 242. How do you design a DynamoDB table?
- [ ] 243. What is single-table design?
- [ ] 244. Why use single-table design?
- [ ] 245. What are the benefits of single-table design?
- [ ] 246. What are the drawbacks of single-table design?
- [ ] 247. How do you query DynamoDB?
- [ ] 248. What is the difference between Query and Scan?
- [ ] 249. Why is Scan expensive?
- [ ] 250. When should you use Scan?
- [ ] 251. What is a Global Secondary Index (GSI)?
- [ ] 252. What is a Local Secondary Index (LSI)?
- [ ] 253. What is the difference between GSI and LSI?
- [ ] 254. When should you create an index?
- [ ] 255. How many GSIs can you have?
- [ ] 256. What is eventual consistency?
- [ ] 257. What is strong consistency?
- [ ] 258. What is the difference between eventual and strong consistency?
- [ ] 259. How do you use the AWS SDK for DynamoDB?
- [ ] 260. What is the DynamoDB DocumentClient?
- [ ] 261. How do you put an item in DynamoDB?
- [ ] 262. How do you get an item from DynamoDB?
- [ ] 263. How do you update an item?
- [ ] 264. How do you delete an item?
- [ ] 265. What is a conditional write?
- [ ] 266. How do you implement optimistic locking?
- [ ] 267. What is DynamoDB Streams?
- [ ] 268. How do you trigger Lambda from DynamoDB Streams?
- [ ] 269. What are the use cases for DynamoDB Streams?
- [ ] 270. What is Time to Live (TTL) in DynamoDB?

---

### S3 & Serverless

- [ ] 271. What is Amazon S3?
- [ ] 272. What is an S3 bucket?
- [ ] 273. What is an S3 object?
- [ ] 274. How do you trigger Lambda from S3?
- [ ] 275. What S3 events can trigger Lambda?
- [ ] 276. What is the S3 event structure?
- [ ] 277. How do you process uploaded files with Lambda?
- [ ] 278. How do you read a file from S3 in Lambda?
- [ ] 279. How do you write a file to S3 from Lambda?
- [ ] 280. What is the AWS SDK S3 client?
- [ ] 281. What is `s3.getObject()`?
- [ ] 282. What is `s3.putObject()`?
- [ ] 283. How do you handle large files in Lambda?
- [ ] 284. What is the Lambda timeout for file processing?
- [ ] 285. How do you process files larger than Lambda limits?
- [ ] 286. What is S3 presigned URL?
- [ ] 287. How do you generate a presigned URL?
- [ ] 288. When would you use presigned URLs?
- [ ] 289. What is S3 Select?
- [ ] 290. How can S3 Select help with Lambda?
- [ ] 291. What is S3 Transfer Acceleration?
- [ ] 292. What is S3 versioning?
- [ ] 293. How do you enable CORS on S3?
- [ ] 294. What is S3 lifecycle policy?
- [ ] 295. What is S3 storage class?
- [ ] 296. What is the difference between S3 Standard and S3 Glacier?
- [ ] 297. How do you secure S3 buckets?
- [ ] 298. What is S3 bucket policy?
- [ ] 299. What is S3 ACL?
- [ ] 300. What is the difference between bucket policy and IAM policy?

---

### Authentication & Authorization

- [ ] 301. How do you implement authentication in serverless?
- [ ] 302. What is Amazon Cognito?
- [ ] 303. What is a Cognito User Pool?
- [ ] 304. What is a Cognito Identity Pool?
- [ ] 305. What is the difference between User Pool and Identity Pool?
- [ ] 306. How do you integrate Cognito with API Gateway?
- [ ] 307. What is a Cognito authorizer?
- [ ] 308. How do you protect API routes with Cognito?
- [ ] 309. What is JWT in serverless?
- [ ] 310. How do you validate JWT tokens in Lambda?
- [ ] 311. What is a Lambda authorizer?
- [ ] 312. What is the difference between token-based and request-based authorizers?
- [ ] 313. How do you implement a custom authorizer?
- [ ] 314. What should a Lambda authorizer return?
- [ ] 315. What is an IAM policy document?
- [ ] 316. How do you generate an IAM policy in a Lambda authorizer?
- [ ] 317. What is the authorizer response caching?
- [ ] 318. How long are authorizer results cached?
- [ ] 319. What is Auth0 with serverless?
- [ ] 320. What is Firebase Auth with serverless?
- [ ] 321. How do you implement OAuth in serverless?
- [ ] 322. How do you implement social login?
- [ ] 323. How do you handle user sessions in serverless?
- [ ] 324. Should you use cookies in serverless APIs?
- [ ] 325. How do you implement refresh tokens?
- [ ] 326. What is the principle of least privilege?
- [ ] 327. How do you implement role-based access control (RBAC)?
- [ ] 328. How do you implement attribute-based access control (ABAC)?
- [ ] 329. How do you secure environment variables?
- [ ] 330. How do you rotate secrets in serverless?

---

### Serverless Databases & Storage

- [ ] 331. What database options are available for serverless?
- [ ] 332. Why is DynamoDB popular for serverless?
- [ ] 333. Can you use RDS with Lambda?
- [ ] 334. What is Aurora Serverless?
- [ ] 335. What is the difference between Aurora Serverless v1 and v2?
- [ ] 336. How does Aurora Serverless scale?
- [ ] 337. What is the Data API for Aurora Serverless?
- [ ] 338. How do you connect Lambda to RDS?
- [ ] 339. What is RDS Proxy?
- [ ] 340. Why do you need RDS Proxy with Lambda?
- [ ] 341. How does RDS Proxy help with connection pooling?
- [ ] 342. What is FaunaDB?
- [ ] 343. What is MongoDB Atlas?
- [ ] 344. Can you use MongoDB with serverless?
- [ ] 345. What is Firestore?
- [ ] 346. What is Supabase?
- [ ] 347. What is PlanetScale?
- [ ] 348. What is Neon?
- [ ] 349. What are the benefits of serverless databases?
- [ ] 350. What is ElastiCache?
- [ ] 351. Can you use Redis with Lambda?
- [ ] 352. What is MemoryDB?
- [ ] 353. What is the challenge of using Redis with Lambda?
- [ ] 354. How do you implement caching in serverless?
- [ ] 355. What is API Gateway caching?
- [ ] 356. What is CloudFront caching?
- [ ] 357. How do you invalidate cache?
- [ ] 358. What is the difference between edge caching and origin caching?
- [ ] 359. What is DynamoDB DAX?
- [ ] 360. When should you use DAX?

---

### Async Processing & Queues

- [ ] 361. What is asynchronous processing in serverless?
- [ ] 362. Why use async processing?
- [ ] 363. What is Amazon SQS?
- [ ] 364. What is a queue?
- [ ] 365. What is the difference between standard and FIFO queues?
- [ ] 366. When should you use FIFO queues?
- [ ] 367. How do you send a message to SQS?
- [ ] 368. How do you process SQS messages with Lambda?
- [ ] 369. What is the visibility timeout?
- [ ] 370. What happens if a message is not deleted?
- [ ] 371. How do you handle message failures?
- [ ] 372. What is the maximum number of receives?
- [ ] 373. What is a dead letter queue in SQS?
- [ ] 374. How do you configure a DLQ for SQS?
- [ ] 375. What is Amazon SNS?
- [ ] 376. What is a topic in SNS?
- [ ] 377. What is pub/sub pattern?
- [ ] 378. What is the difference between SQS and SNS?
- [ ] 379. When should you use SNS vs SQS?
- [ ] 380. How do you use SNS with Lambda?
- [ ] 381. How do you fan out messages?
- [ ] 382. What is the SNS + SQS pattern?
- [ ] 383. Why combine SNS and SQS?
- [ ] 384. What is Amazon EventBridge?
- [ ] 385. What is an event bus?
- [ ] 386. What is the difference between EventBridge and SNS?
- [ ] 387. When should you use EventBridge?
- [ ] 388. What is an EventBridge rule?
- [ ] 389. How do you route events with EventBridge?
- [ ] 390. What is event-driven architecture?
- [ ] 391. What are the benefits of event-driven architecture?
- [ ] 392. What is choreography vs orchestration?
- [ ] 393. What is AWS Step Functions?
- [ ] 394. When should you use Step Functions?
- [ ] 395. What is a state machine?
- [ ] 396. What types of states are in Step Functions?
- [ ] 397. What is the difference between Standard and Express workflows?
- [ ] 398. How do you handle long-running processes?
- [ ] 399. What is the maximum Lambda execution time?
- [ ] 400. How do you break down long tasks?

---

### Monitoring & Logging

- [ ] 401. How do you monitor serverless applications?
- [ ] 402. What is CloudWatch Logs?
- [ ] 403. How do you log in Lambda?
- [ ] 404. What is `console.log` in Lambda?
- [ ] 405. Where do Lambda logs go?
- [ ] 406. What is a log group?
- [ ] 407. What is a log stream?
- [ ] 408. How do you search logs in CloudWatch?
- [ ] 409. What is CloudWatch Insights?
- [ ] 410. How do you write queries in Insights?
- [ ] 411. What is structured logging?
- [ ] 412. Why use structured logging?
- [ ] 413. How do you implement structured logging?
- [ ] 414. What is the difference between `console.log` and structured logging?
- [ ] 415. What logging libraries can you use? (Winston, Pino, Bunyan)
- [ ] 416. What is CloudWatch Metrics?
- [ ] 417. What metrics does Lambda provide by default?
- [ ] 418. What is invocation count?
- [ ] 419. What is error count?
- [ ] 420. What is duration?
- [ ] 421. What is throttle count?
- [ ] 422. What is concurrent executions?
- [ ] 423. How do you create custom metrics?
- [ ] 424. What is the `putMetricData` API?
- [ ] 425. What is CloudWatch Alarms?
- [ ] 426. How do you set up an alarm?
- [ ] 427. What is SNS notification for alarms?
- [ ] 428. What is AWS X-Ray?
- [ ] 429. What is distributed tracing?
- [ ] 430. How do you enable X-Ray for Lambda?
- [ ] 431. What is a trace?
- [ ] 432. What is a segment?
- [ ] 433. What is a subsegment?
- [ ] 434. How do you add custom segments?
- [ ] 435. What is the X-Ray SDK?
- [ ] 436. What is the service map in X-Ray?
- [ ] 437. How do you debug cold starts with X-Ray?
- [ ] 438. What third-party monitoring tools work with Lambda?
- [ ] 439. What is Datadog for serverless?
- [ ] 440. What is New Relic for serverless?
- [ ] 441. What is Lumigo?
- [ ] 442. What is Thundra?
- [ ] 443. What is Epsagon?
- [ ] 444. What is Dashbird?
- [ ] 445. How do you implement error tracking?
- [ ] 446. What is Sentry for serverless?
- [ ] 447. How do you track errors in production?
- [ ] 448. What is the cost of CloudWatch Logs?
- [ ] 449. How do you reduce logging costs?
- [ ] 450. Should you log everything?

---

### CI/CD for Serverless

- [ ] 451. What is CI/CD?
- [ ] 452. Why is CI/CD important for serverless?
- [ ] 453. What is continuous integration?
- [ ] 454. What is continuous deployment?
- [ ] 455. What is the difference between deployment and release?
- [ ] 456. How do you set up CI/CD for serverless?
- [ ] 457. What is GitHub Actions?
- [ ] 458. How do you deploy Lambda with GitHub Actions?
- [ ] 459. What is AWS CodePipeline?
- [ ] 460. What is AWS CodeBuild?
- [ ] 461. What is AWS CodeDeploy?
- [ ] 462. How do you use CodePipeline for serverless?
- [ ] 463. What is GitLab CI/CD?
- [ ] 464. What is CircleCI?
- [ ] 465. What is Jenkins for serverless?
- [ ] 466. How do you run tests in CI/CD?
- [ ] 467. What is unit testing for Lambda?
- [ ] 468. What is integration testing for serverless?
- [ ] 469. What is end-to-end testing?
- [ ] 470. How do you test Lambda functions locally?
- [ ] 471. What is SAM Local?
- [ ] 472. What is LocalStack?
- [ ] 473. How do you mock AWS services?
- [ ] 474. What is the AWS SDK mock?
- [ ] 475. How do you test API Gateway locally?
- [ ] 476. What is blue-green deployment?
- [ ] 477. What is canary deployment?
- [ ] 478. How do you implement canary deployment in Lambda?
- [ ] 479. What is Lambda alias?
- [ ] 480. What is Lambda version?
- [ ] 481. What is the difference between alias and version?
- [ ] 482. How do you use aliases for deployment?
- [ ] 483. What is traffic shifting?
- [ ] 484. How do you gradually shift traffic?
- [ ] 485. What is rollback strategy?
- [ ] 486. How do you rollback a failed deployment?
- [ ] 487. What is infrastructure as code (IaC)?
- [ ] 488. Why use IaC for serverless?
- [ ] 489. What is CloudFormation?
- [ ] 490. What is the difference between CloudFormation and Terraform?

---

### Serverless Best Practices

- [ ] 491. What are serverless best practices?
- [ ] 492. Should you use one function per endpoint?
- [ ] 493. What is the monolith vs microservices debate in serverless?
- [ ] 494. What is the single-purpose function principle?
- [ ] 495. How do you organize Lambda functions?
- [ ] 496. Should you share code between functions?
- [ ] 497. How do you handle shared dependencies?
- [ ] 498. What is the DRY principle in serverless?
- [ ] 499. How do you handle configuration?
- [ ] 500. Should you hardcode values in Lambda?
- [ ] 501. How do you manage secrets?
- [ ] 502. What is the principle of least privilege for IAM?
- [ ] 503. How do you minimize IAM permissions?
- [ ] 504. Should you use wildcard permissions?
- [ ] 505. How do you handle errors gracefully?
- [ ] 506. What is idempotency?
- [ ] 507. Why is idempotency important in serverless?
- [ ] 508. How do you implement idempotency?
- [ ] 509. What is the idempotency key pattern?
- [ ] 510. How do you handle retries?
- [ ] 511. What is exponential backoff?
- [ ] 512. How do you implement exponential backoff?
- [ ] 513. What is circuit breaker pattern?
- [ ] 514. How do you prevent cascading failures?
- [ ] 515. What is the timeout strategy?
- [ ] 516. How do you set appropriate timeouts?
- [ ] 517. What is the memory allocation strategy?
- [ ] 518. How do you optimize costs?
- [ ] 519. What factors affect Lambda costs?
- [ ] 520. How do you reduce Lambda costs?
- [ ] 521. Should you use provisioned concurrency for all functions?
- [ ] 522. What is the cost of API Gateway?
- [ ] 523. What is the cost of DynamoDB?
- [ ] 524. How do you monitor costs?
- [ ] 525. What is AWS Cost Explorer?
- [ ] 526. What is AWS Budgets?
- [ ] 527. How do you set up cost alerts?
- [ ] 528. What is the serverless cold start problem?
- [ ] 529. What is the vendor lock-in concern?
- [ ] 530. How do you mitigate vendor lock-in?

---

### Advanced Serverless Patterns

- [ ] 531. What is the API Gateway + Lambda + DynamoDB pattern?
- [ ] 532. What is the S3 + Lambda pattern for file processing?
- [ ] 533. What is the SQS + Lambda pattern for async processing?
- [ ] 534. What is the EventBridge + Lambda pattern?
- [ ] 535. What is the Step Functions orchestration pattern?
- [ ] 536. What is the Lambda + RDS Proxy pattern?
- [ ] 537. What is the fan-out pattern?
- [ ] 538. How do you implement fan-out with SNS?
- [ ] 539. What is the aggregator pattern?
- [ ] 540. What is the saga pattern?
- [ ] 541. How do you implement distributed transactions?
- [ ] 542. What is the CQRS pattern in serverless?
- [ ] 543. What is event sourcing?
- [ ] 544. How do you implement event sourcing with Lambda?
- [ ] 545. What is the strangler fig pattern?
- [ ] 546. How do you migrate from monolith to serverless?
- [ ] 547. What is the backend for frontend (BFF) pattern?
- [ ] 548. What is the API composition pattern?
- [ ] 549. What is the gateway aggregation pattern?
- [ ] 550. What is the sidecar pattern in serverless?
- [ ] 551. What is the bulkhead pattern?
- [ ] 552. How do you isolate failures?
- [ ] 553. What is the retry pattern?
- [ ] 554. What is the timeout pattern?
- [ ] 555. What is the cache-aside pattern?
- [ ] 556. How do you implement caching in serverless?
- [ ] 557. What is the write-through cache pattern?
- [ ] 558. What is the write-behind cache pattern?
- [ ] 559. What is the priority queue pattern?
- [ ] 560. How do you process high-priority messages first?

---

### Serverless Security

- [ ] 561. What are the main security concerns in serverless?
- [ ] 562. How do you secure Lambda functions?
- [ ] 563. What is the shared responsibility model?
- [ ] 564. What is AWS responsible for?
- [ ] 565. What are you responsible for?
- [ ] 566. How do you implement least privilege?
- [ ] 567. What is IAM role for Lambda?
- [ ] 568. What is resource-based policy?
- [ ] 569. What is the difference between IAM role and resource policy?
- [ ] 570. How do you secure API Gateway?
- [ ] 571. What is API Gateway resource policy?
- [ ] 572. How do you implement IP whitelisting?
- [ ] 573. What is AWS WAF?
- [ ] 574. How do you protect against DDoS?
- [ ] 575. What is AWS Shield?
- [ ] 576. How do you prevent SQL injection in serverless?
- [ ] 577. How do you validate input?
- [ ] 578. What is input sanitization?
- [ ] 579. How do you prevent XSS attacks?
- [ ] 580. How do you handle CORS securely?
- [ ] 581. What is the same-origin policy?
- [ ] 582. How do you encrypt data at rest?
- [ ] 583. What is KMS?
- [ ] 584. How do you use KMS with Lambda?
- [ ] 585. How do you encrypt environment variables?
- [ ] 586. How do you encrypt data in transit?
- [ ] 587. What is TLS/SSL?
- [ ] 588. How do you enforce HTTPS?
- [ ] 589. What is certificate management?
- [ ] 590. What is AWS Certificate Manager?
- [ ] 591. How do you implement audit logging?
- [ ] 592. What is CloudTrail?
- [ ] 593. How do you track API calls?
- [ ] 594. What is VPC for Lambda?
- [ ] 595. When should you use VPC?
- [ ] 596. What are the security groups?
- [ ] 597. What are network ACLs?
- [ ] 598. How do you access private resources?
- [ ] 599. What is VPC endpoint?
- [ ] 600. How do you secure secrets?

---

### Serverless at Scale

- [ ] 601. How does serverless scale?
- [ ] 602. What is auto-scaling in serverless?
- [ ] 603. What is the default concurrency limit?
- [ ] 604. How do you increase concurrency limits?
- [ ] 605. What is reserved concurrency?
- [ ] 606. What is provisioned concurrency?
- [ ] 607. When do you need reserved concurrency?
- [ ] 608. What is throttling?
- [ ] 609. How do you handle throttling?
- [ ] 610. What is the burst concurrency?
- [ ] 611. What happens when you exceed concurrency limits?
- [ ] 612. How do you design for scale?
- [ ] 613. What is the database bottleneck?
- [ ] 614. How do you scale DynamoDB?
- [ ] 615. What is on-demand capacity mode?
- [ ] 616. What is provisioned capacity mode?
- [ ] 617. When should you use on-demand vs provisioned?
- [ ] 618. What is DynamoDB auto-scaling?
- [ ] 619. How do you handle hot partitions?
- [ ] 620. What is partition key design?
- [ ] 621. How do you distribute load evenly?
- [ ] 622. What is the thundering herd problem?
- [ ] 623. How do you prevent thundering herd?
- [ ] 624. What is rate limiting?
- [ ] 625. How do you implement rate limiting in API Gateway?
- [ ] 626. What is the token bucket algorithm?
- [ ] 627. What is backpressure?
- [ ] 628. How do you handle backpressure?
- [ ] 629. What is the queue-based load leveling pattern?
- [ ] 630. How do you handle traffic spikes?
- [ ] 631. What is the circuit breaker for external services?
- [ ] 632. How do you handle third-party API limits?
- [ ] 633. What is the retry with exponential backoff?
- [ ] 634. What is jitter in retries?
- [ ] 635. How do you monitor at scale?
- [ ] 636. What is distributed tracing at scale?
- [ ] 637. How do you aggregate logs from multiple functions?
- [ ] 638. What is log sampling?
- [ ] 639. How do you reduce logging costs at scale?
- [ ] 640. What is the cost optimization at scale?

---

### Serverless Real-World Scenarios

- [ ] 641. How do you build a REST API with serverless?
- [ ] 642. How do you build a GraphQL API with serverless?
- [ ] 643. What is AWS AppSync?
- [ ] 644. How do you implement real-time features?
- [ ] 645. What is WebSocket API in API Gateway?
- [ ] 646. How do you implement chat with serverless?
- [ ] 647. How do you implement notifications?
- [ ] 648. How do you send emails from Lambda?
- [ ] 649. What is Amazon SES?
- [ ] 650. How do you send SMS from Lambda?
- [ ] 651. What is Amazon SNS for SMS?
- [ ] 652. How do you process images with Lambda?
- [ ] 653. How do you resize images on upload?
- [ ] 654. How do you generate thumbnails?
- [ ] 655. How do you implement video processing?
- [ ] 656. What is AWS MediaConvert?
- [ ] 657. How do you implement file uploads?
- [ ] 658. What is the presigned URL pattern for uploads?
- [ ] 659. How do you implement CSV processing?
- [ ] 660. How do you process large CSV files?
- [ ] 661. How do you implement ETL pipelines?
- [ ] 662. What is AWS Glue?
- [ ] 663. How do you implement scheduled tasks?
- [ ] 664. What is CloudWatch Events for scheduling?
- [ ] 665. What is the cron expression?
- [ ] 666. How do you implement webhooks?
- [ ] 667. How do you validate webhook signatures?
- [ ] 668. How do you implement payment processing?
- [ ] 669. How do you integrate with Stripe?
- [ ] 670. How do you handle payment webhooks?
- [ ] 671. How do you implement search functionality?
- [ ] 672. What is Amazon OpenSearch?
- [ ] 673. How do you index data for search?
- [ ] 674. How do you implement analytics?
- [ ] 675. What is Amazon Kinesis?
- [ ] 676. What is Kinesis Data Streams?
- [ ] 677. What is Kinesis Firehose?
- [ ] 678. How do you process streaming data?
- [ ] 679. How do you implement data pipelines?
- [ ] 680. What is the Lambda + Kinesis pattern?

---

### Serverless Migration & Adoption

- [ ] 681. How do you migrate to serverless?
- [ ] 682. What is the strangler fig pattern for migration?
- [ ] 683. How do you identify good candidates for serverless?
- [ ] 684. What workloads are suitable for serverless?
- [ ] 685. What workloads are NOT suitable for serverless?
- [ ] 686. How do you migrate a monolith to serverless?
- [ ] 687. What is the incremental migration approach?
- [ ] 688. How do you handle database migration?
- [ ] 689. How do you migrate from EC2 to Lambda?
- [ ] 690. How do you migrate from containers to serverless?
- [ ] 691. What is the lift and shift approach?
- [ ] 692. What is the re-architecture approach?
- [ ] 693. How do you handle state in migration?
- [ ] 694. How do you migrate sessions?
- [ ] 695. How do you handle file storage migration?
- [ ] 696. What are the common migration challenges?
- [ ] 697. How do you train teams on serverless?
- [ ] 698. What is the learning curve for serverless?
- [ ] 699. How do you convince stakeholders to adopt serverless?
- [ ] 700. What is the ROI of serverless?
- [ ] 701. How do you measure serverless success?
- [ ] 702. What metrics indicate successful adoption?
- [ ] 703. What is the serverless maturity model?
- [ ] 704. How do you govern serverless at enterprise scale?
- [ ] 705. What are serverless governance best practices?
- [ ] 706. How do you standardize serverless development?
- [ ] 707. What is a serverless center of excellence?
- [ ] 708. How do you share knowledge across teams?
- [ ] 709. What are common serverless anti-patterns?
- [ ] 710. How do you avoid serverless pitfalls?
- [ ] 711. What is the future of serverless?
- [ ] 712. What are emerging serverless trends?
- [ ] 713. What is edge computing?
- [ ] 714. What is Cloudflare Workers?
- [ ] 715. What is Deno Deploy?
- [ ] 716. What is the difference between Lambda and edge functions?
- [ ] 717. When should you use edge functions?
- [ ] 718. What is the multi-cloud serverless strategy?
- [ ] 719. How do you avoid vendor lock-in?
- [ ] 720. What is the serverless community like?

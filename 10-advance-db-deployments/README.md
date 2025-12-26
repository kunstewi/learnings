### Advanced Database Concepts

1. What is database normalization?
2. What are the different normal forms (1NF, 2NF, 3NF, BCNF)?
3. What is First Normal Form (1NF)?
4. What is Second Normal Form (2NF)?
5. What is Third Normal Form (3NF)?
6. What is Boyce-Codd Normal Form (BCNF)?
7. What is denormalization and when should you use it?
8. What are the trade-offs between normalization and denormalization?
9. What is database indexing?
10. What is a clustered index?
11. What is a non-clustered index?
12. What is the difference between clustered and non-clustered indexes?
13. What is a composite index?
14. When should you create a composite index?
15. What is index cardinality?
16. What is a covering index?
17. What are the performance implications of too many indexes?
18. What is database sharding?
19. What is horizontal sharding?
20. What is vertical sharding?
21. What is the difference between sharding and partitioning?
22. What is database partitioning?
23. What are the different types of partitioning (range, list, hash)?
24. What is replication in databases?
25. What is master-slave replication?
26. What is master-master replication?
27. What is the difference between synchronous and asynchronous replication?
28. What is eventual consistency?
29. What is strong consistency?
30. What is the CAP theorem?
31. Explain the three properties of CAP theorem (Consistency, Availability, Partition Tolerance).
32. Can you have all three properties of CAP theorem?
33. What is BASE in databases?
34. What is the difference between ACID and BASE?
35. What is a database transaction?
36. What is a distributed transaction?
37. What is the two-phase commit protocol?
38. What is optimistic locking?
39. What is pessimistic locking?
40. What is the difference between optimistic and pessimistic locking?
41. What is a deadlock in databases?
42. How do you prevent deadlocks?
43. What is database connection pooling?
44. Why is connection pooling important?
45. What is the N+1 query problem?
46. How do you solve the N+1 query problem?
47. What is query optimization?
48. What is an execution plan?
49. How do you read a database execution plan?
50. What is database caching?
51. What are the different caching strategies (cache-aside, write-through, write-behind)?
52. What is Redis and when should you use it?
53. What is Memcached?
54. What is the difference between Redis and Memcached?
55. What is a materialized view?
56. When should you use materialized views?
57. What is database migration?
58. What tools can you use for database migrations?
59. What is schema versioning?
60. What is blue-green deployment for databases?

---

### SQL Relationships and Joins

61. What is a relationship in a relational database?
62. What are the different types of relationships?
63. What is a one-to-one relationship?
64. What is a one-to-many relationship?
65. What is a many-to-many relationship?
66. How do you implement a one-to-one relationship?
67. How do you implement a one-to-many relationship?
68. How do you implement a many-to-many relationship?
69. What is a junction table (or join table)?
70. When do you need a junction table?
71. What is referential integrity?
72. What is a foreign key constraint?
73. What does `ON DELETE CASCADE` do?
74. What does `ON DELETE SET NULL` do?
75. What does `ON DELETE RESTRICT` do?
76. What does `ON UPDATE CASCADE` do?
77. What is the difference between `RESTRICT` and `NO ACTION`?
78. What is a self-referencing relationship?
79. When would you use a self-referencing relationship?
80. What is an INNER JOIN?
81. What is a LEFT JOIN (LEFT OUTER JOIN)?
82. What is a RIGHT JOIN (RIGHT OUTER JOIN)?
83. What is a FULL OUTER JOIN?
84. What is a CROSS JOIN?
85. What is the difference between INNER JOIN and LEFT JOIN?
86. 
```sql
SELECT users.name, orders.order_id
FROM users
INNER JOIN orders ON users.id = orders.user_id;
```
What does this query return?
87. 
```sql
SELECT users.name, orders.order_id
FROM users
LEFT JOIN orders ON users.id = orders.user_id;
```
How is this different from the INNER JOIN?
88. What is a self-join?
89. When would you use a self-join? Give an example.
90. 
```sql
SELECT e.name AS employee, m.name AS manager
FROM employees e
LEFT JOIN employees m ON e.manager_id = m.id;
```
Explain this self-join query.
91. How do you join three or more tables?
92. 
```sql
SELECT u.name, o.order_id, p.product_name
FROM users u
INNER JOIN orders o ON u.id = o.user_id
INNER JOIN order_items oi ON o.id = oi.order_id
INNER JOIN products p ON oi.product_id = p.id;
```
Explain this multi-table join.
93. What is the difference between explicit JOIN syntax and implicit JOIN (using WHERE)?
94. Which JOIN syntax is preferred and why?
95. What is a natural join?
96. Should you use natural joins? Why or why not?
97. What is the `USING` clause in joins?
98. What is the difference between `ON` and `USING`?
99. What is a subquery?
100. What is a correlated subquery?
101. What is the difference between a JOIN and a subquery?
102. When should you use a JOIN vs a subquery?
103. What is the performance difference between JOINs and subqueries?
104. What is a Common Table Expression (CTE)?
105. How do you use `WITH` clause for complex joins?
106. 
```sql
WITH user_orders AS (
  SELECT user_id, COUNT(*) as order_count
  FROM orders
  GROUP BY user_id
)
SELECT u.name, uo.order_count
FROM users u
LEFT JOIN user_orders uo ON u.id = uo.user_id;
```
Explain this CTE with JOIN.
107. What is a recursive CTE and when would you use it with joins?
108. What are the performance implications of different JOIN types?
109. What is a nested loop join?
110. What is a hash join?
111. What is a merge join?
112. Which join algorithm is most efficient?
113. How do you optimize JOIN queries?
114. What is the importance of indexes in JOIN operations?
115. How do you handle NULL values in JOINs?
116. What is the difference between `WHERE` and `ON` in JOIN queries?
117. Can you use aggregate functions with JOINs?
118. 
```sql
SELECT u.name, COUNT(o.id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id, u.name;
```
Explain this aggregation with JOIN.
119. What is the `HAVING` clause and how does it work with JOINs?
120. How do you implement pagination with JOINs?

---

### Introduction to Deployments

121. What is deployment in software development?
122. What is the difference between deployment and release?
123. What is a deployment environment?
124. What are the common deployment environments (dev, staging, production)?
125. What is the purpose of a staging environment?
126. What is continuous integration (CI)?
127. What is continuous deployment (CD)?
128. What is continuous delivery?
129. What is the difference between continuous deployment and continuous delivery?
130. What is a CI/CD pipeline?
131. What are the stages of a typical CI/CD pipeline?
132. What is version control and why is it important for deployment?
133. What is Git and how does it relate to deployment?
134. What is a deployment strategy?
135. What is blue-green deployment?
136. What is canary deployment?
137. What is rolling deployment?
138. What is the difference between blue-green and canary deployment?
139. What is a rollback strategy?
140. When should you rollback a deployment?
141. What is infrastructure as code (IaC)?
142. What tools are used for IaC (Terraform, CloudFormation, Pulumi)?
143. What is containerization?
144. What is Docker?
145. What is a Docker container?
146. What is a Docker image?
147. What is the difference between a Docker image and a container?
148. What is a Dockerfile?
149. How do you create a Dockerfile for a Node.js application?
150. What is Docker Compose?
151. What is container orchestration?
152. What is Kubernetes?
153. What is the difference between Docker and Kubernetes?
154. What is a deployment manifest?
155. What is environment configuration?
156. What are environment variables?
157. How do you manage environment variables in different environments?
158. What is a `.env` file?
159. Should you commit `.env` files to version control?
160. What is secrets management?
161. What tools can you use for secrets management (AWS Secrets Manager, HashiCorp Vault)?
162. What is a health check endpoint?
163. Why do you need health checks in production?
164. What is monitoring in deployment?
165. What is logging in production?
166. What is the difference between monitoring and logging?
167. What is application performance monitoring (APM)?
168. What tools can you use for monitoring (CloudWatch, Datadog, New Relic)?
169. What is a deployment checklist?
170. What should you verify before deploying to production?
171. What is zero-downtime deployment?
172. How do you achieve zero-downtime deployment?
173. What is a load balancer?
174. What is the role of a load balancer in deployment?
175. What is horizontal scaling?
176. What is vertical scaling?
177. What is the difference between horizontal and vertical scaling?
178. What is auto-scaling?
179. What is a reverse proxy?
180. What is Nginx and how is it used in deployment?

---

### Deploying Frontends on AWS

181. What is AWS (Amazon Web Services)?
182. What services does AWS offer for frontend deployment?
183. What is Amazon S3?
184. What is an S3 bucket?
185. How do you host a static website on S3?
186. What are the steps to deploy a React app to S3?
187. How do you configure S3 bucket for static website hosting?
188. What is S3 bucket policy?
189. How do you make an S3 bucket public?
190. What is Amazon CloudFront?
191. What is a CDN (Content Delivery Network)?
192. Why should you use CloudFront with S3?
193. What are the benefits of using a CDN?
194. How do you create a CloudFront distribution?
195. How do you connect CloudFront to an S3 bucket?
196. What is an origin in CloudFront?
197. What is edge location in CloudFront?
198. What is cache invalidation in CloudFront?
199. How do you invalidate CloudFront cache?
200. Why would you need to invalidate cache?
201. What is AWS Route 53?
202. What is Route 53 used for?
203. How do you configure a custom domain for your S3 website?
204. How do you point a domain to CloudFront?
205. What is an A record in DNS?
206. What is a CNAME record in DNS?
207. What is an alias record in Route 53?
208. What is SSL/TLS?
209. What is HTTPS?
210. Why is HTTPS important for websites?
211. What is AWS Certificate Manager (ACM)?
212. How do you get a free SSL certificate from AWS?
213. How do you attach an SSL certificate to CloudFront?
214. What is the difference between HTTP and HTTPS?
215. How do you build a React app for production?
216. What is the `npm run build` command?
217. What files are generated in the build folder?
218. How do you upload files to S3?
219. What is the AWS CLI?
220. How do you install AWS CLI?
221. How do you configure AWS CLI credentials?
222. What is an AWS access key?
223. What is an AWS secret key?
224. How do you sync a local folder to S3 using AWS CLI?
225. What is the `aws s3 sync` command?
226. 
```bash
aws s3 sync build/ s3://my-bucket-name --delete
```
What does this command do?
227. How do you automate frontend deployment?
228. What is GitHub Actions?
229. How do you create a GitHub Actions workflow?
230. What is a workflow file in GitHub Actions?
231. 
```yaml
name: Deploy to S3
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to S3
        run: aws s3 sync build/ s3://my-bucket
```
Explain this GitHub Actions workflow.
232. How do you store AWS credentials in GitHub Secrets?
233. What are GitHub Secrets?
234. What is AWS Amplify?
235. How is Amplify different from S3 + CloudFront?
236. What are the benefits of using Amplify?
237. How do you deploy a frontend to Amplify?
238. What is Amplify Hosting?
239. How do you connect a Git repository to Amplify?
240. What is automatic deployment in Amplify?
241. How do you configure build settings in Amplify?
242. What is an `amplify.yml` file?
243. How do you set environment variables in Amplify?
244. What is Vercel?
245. How do you deploy a Next.js app to Vercel?
246. What is Netlify?
247. How do you deploy a React app to Netlify?
248. What is the difference between deploying to AWS vs Vercel/Netlify?
249. What is AWS Elastic Beanstalk?
250. When would you use Elastic Beanstalk for frontend deployment?
251. What is AWS EC2?
252. How do you deploy a frontend to EC2?
253. What is the difference between S3 and EC2 for hosting?
254. When should you use S3 vs EC2?
255. What is AWS Lambda@Edge?
256. How can you use Lambda@Edge with CloudFront?
257. What is server-side rendering (SSR)?
258. How do you deploy a Next.js app with SSR to AWS?
259. What is AWS Fargate?
260. How do you containerize and deploy a frontend to Fargate?

---

### Deploying NPM Packages

261. What is npm?
262. What is an npm package?
263. What is the npm registry?
264. What is the difference between a library and a package?
265. Why would you publish an npm package?
266. What is `package.json`?
267. What are the required fields in `package.json` for publishing?
268. What is the `name` field in `package.json`?
269. What is the `version` field in `package.json`?
270. What is semantic versioning (semver)?
271. Explain the format of semantic versioning (MAJOR.MINOR.PATCH).
272. When should you increment the MAJOR version?
273. When should you increment the MINOR version?
274. When should you increment the PATCH version?
275. What is the `main` field in `package.json`?
276. What is the `module` field in `package.json`?
277. What is the difference between `main` and `module`?
278. What is the `types` field in `package.json`?
279. What is the `exports` field in `package.json`?
280. What is the `files` field in `package.json`?
281. Why is the `files` field important?
282. What is `.npmignore`?
283. What is the difference between `.gitignore` and `.npmignore`?
284. What is the `scripts` field in `package.json`?
285. What is the `prepublishOnly` script?
286. What is the `prepare` script?
287. How do you create an npm account?
288. How do you login to npm from the CLI?
289. What is the `npm login` command?
290. How do you publish a package to npm?
291. What is the `npm publish` command?
292. What is a scoped package?
293. What is the format of a scoped package name?
294. How do you publish a scoped package?
295. What is the difference between public and private packages?
296. How do you publish a private package?
297. What is npm access?
298. How do you make a scoped package public?
299. What is the `npm access` command?
300. How do you unpublish a package?
301. What is the `npm unpublish` command?
302. What are the restrictions on unpublishing?
303. How do you deprecate a package version?
304. What is the `npm deprecate` command?
305. What is a README.md file?
306. Why is README important for npm packages?
307. What should you include in a package README?
308. What is a LICENSE file?
309. What are common open-source licenses (MIT, Apache, GPL)?
310. What is the MIT license?
311. How do you add a license to your package?
312. What is TypeScript declaration file (.d.ts)?
313. Why should you include TypeScript types in your package?
314. How do you generate TypeScript declaration files?
315. What is the `tsc` command?
316. How do you configure TypeScript for a library?
317. What is `tsconfig.json` for a library?
318. What is the `declaration` option in `tsconfig.json`?
319. What is bundling?
320. Why should you bundle your npm package?
321. What tools can you use for bundling (webpack, rollup, esbuild)?
322. What is Rollup?
323. How do you configure Rollup for a library?
324. What is tree-shaking?
325. Why is tree-shaking important for libraries?
326. What is the difference between CommonJS and ES Modules?
327. Should you publish both CommonJS and ES Module versions?
328. What is dual package publishing?
329. How do you test an npm package locally?
330. What is `npm link`?
331. How do you use `npm link` to test a package?
332. What is `npm pack`?
333. How do you use `npm pack` to test before publishing?
334. What is a beta version?
335. How do you publish a beta version?
336. What is a dist-tag in npm?
337. What is the `latest` tag?
338. What is the `next` tag?
339. How do you publish with a specific tag?
340. What is the `npm dist-tag` command?
341. How do you install a specific version of a package?
342. How do you install a beta version?
343. What is a monorepo?
344. What is Lerna?
345. What is Changesets?
346. How do you manage multiple packages in a monorepo?
347. What is automated versioning?
348. What is automated changelog generation?
349. How do you set up CI/CD for npm publishing?
350. How do you use GitHub Actions to publish to npm?
351. 
```yaml
- name: Publish to npm
  run: npm publish
  env:
    NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```
Explain this GitHub Actions step.
352. What is an npm token?
353. How do you create an npm token?
354. How do you store npm token in GitHub Secrets?
355. What is semantic-release?
356. How does semantic-release automate publishing?
357. What are peer dependencies?
358. When should you use peer dependencies?
359. What is the `peerDependencies` field?
360. What happens if peer dependencies are not met?

---

### Advanced TypeScript APIs

361. What is TypeScript?
362. What are the benefits of using TypeScript for APIs?
363. What is type safety?
364. How does TypeScript improve API development?
365. What is an interface in TypeScript?
366. What is a type alias in TypeScript?
367. What is the difference between `interface` and `type`?
368. When should you use `interface` vs `type`?
369. How do you define a request body type?
370. 
```typescript
interface CreateUserRequest {
  name: string;
  email: string;
  age?: number;
}
```
Explain this interface.
371. What does the `?` mean in TypeScript?
372. How do you define a response type?
373. 
```typescript
interface UserResponse {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}
```
How would you use this in an Express route?
374. What is the `Request` type in Express with TypeScript?
375. What is the `Response` type in Express with TypeScript?
376. How do you type Express request and response?
377. 
```typescript
app.post('/users', (req: Request<{}, {}, CreateUserRequest>, res: Response) => {
  // handler
});
```
Explain this typed Express route.
378. What are the generic parameters of `Request<P, ResBody, ReqBody, ReqQuery>`?
379. How do you type route parameters?
380. 
```typescript
interface UserParams {
  id: string;
}

app.get('/users/:id', (req: Request<UserParams>, res: Response) => {
  const userId = req.params.id; // typed as string
});
```
Explain this.
381. How do you type query parameters?
382. 
```typescript
interface UserQuery {
  page?: string;
  limit?: string;
}

app.get('/users', (req: Request<{}, {}, {}, UserQuery>, res: Response) => {
  const page = req.query.page; // typed as string | undefined
});
```
Explain this.
383. What is a generic type in TypeScript?
384. How do you create a generic API response type?
385. 
```typescript
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
```
How would you use this generic type?
386. What is the `Partial<T>` utility type?
387. When would you use `Partial<T>` in APIs?
388. What is the `Required<T>` utility type?
389. What is the `Pick<T, K>` utility type?
390. What is the `Omit<T, K>` utility type?
391. 
```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

type UserResponse = Omit<User, 'password'>;
```
What does this do?
392. What is the `Record<K, T>` utility type?
393. When would you use `Record<K, T>`?
394. What is type assertion in TypeScript?
395. What is the `as` keyword?
396. When should you use type assertions?
397. What is a type guard?
398. How do you create a type guard?
399. 
```typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}
```
Explain this type guard.
400. What is the `unknown` type?
401. What is the difference between `unknown` and `any`?
402. Should you use `any` in TypeScript APIs?
403. What is strict mode in TypeScript?
404. What is `strictNullChecks`?
405. How does `strictNullChecks` improve API safety?
406. What is the `never` type?
407. When would you use the `never` type?
408. What is discriminated union?
409. 
```typescript
type ApiResponse = 
  | { success: true; data: User }
  | { success: false; error: string };
```
How is this discriminated union useful?
410. How do you handle errors in TypeScript APIs?
411. How do you create custom error classes?
412. 
```typescript
class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}
```
Explain this custom error class.
413. What is middleware typing in Express?
414. How do you type custom middleware?
415. 
```typescript
const authMiddleware: RequestHandler = (req, res, next) => {
  // middleware logic
  next();
};
```
What is `RequestHandler`?
416. How do you extend Express Request type?
417. 
```typescript
declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}
```
What does this declaration do?
418. What is declaration merging?
419. How do you type async route handlers?
420. What is the difference between `Promise<void>` and `void`?
421. How do you type database models with TypeScript?
422. What is Zod?
423. How does Zod help with API validation?
424. How do you create a Zod schema?
425. 
```typescript
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().optional()
});
```
Explain this Zod schema.
426. How do you infer TypeScript types from Zod schemas?
427. What is `z.infer<typeof schema>`?
428. How do you validate request body with Zod?
429. How do you handle Zod validation errors?
430. What is the difference between runtime validation and compile-time type checking?
431. Why do you need both TypeScript and Zod?
432. What is tRPC?
433. How does tRPC provide end-to-end type safety?
434. What is the difference between REST and tRPC?
435. How do you define a tRPC router?
436. What is a tRPC procedure?
437. What is input validation in tRPC?
438. How do you use Zod with tRPC?
439. What is type inference in tRPC?
440. How does tRPC eliminate the need for API documentation?
441. What is GraphQL?
442. How do you use TypeScript with GraphQL?
443. What is GraphQL Code Generator?
444. How do you generate TypeScript types from GraphQL schema?
445. What is a resolver in GraphQL?
446. How do you type GraphQL resolvers?
447. What is the difference between GraphQL and REST for type safety?
448. What is OpenAPI (Swagger)?
449. How do you generate TypeScript types from OpenAPI spec?
450. What tools can you use to generate types from OpenAPI?
451. What is `ts-rest`?
452. How does `ts-rest` provide type safety for REST APIs?
453. What is the difference between `ts-rest` and tRPC?
454. What is dependency injection in TypeScript?
455. How do you implement dependency injection in Express?
456. What is the repository pattern?
457. How do you type repositories in TypeScript?
458. What is the service layer pattern?
459. How do you structure a TypeScript API with layers?
460. What is the DTO (Data Transfer Object) pattern?
461. How do you create DTOs in TypeScript?
462. What is the difference between entities and DTOs?
463. How do you handle file uploads with TypeScript?
464. How do you type `multer` in TypeScript?
465. What is `Express.Multer.File`?
466. How do you type WebSocket connections?
467. What is Socket.IO?
468. How do you use TypeScript with Socket.IO?
469. How do you type Socket.IO events?
470. 
```typescript
interface ServerToClientEvents {
  message: (data: { text: string; userId: string }) => void;
}

interface ClientToServerEvents {
  sendMessage: (text: string) => void;
}
```
How would you use these event interfaces?
471. What is type-safe environment variables?
472. How do you validate environment variables with TypeScript?
473. 
```typescript
const envSchema = z.object({
  PORT: z.string(),
  DATABASE_URL: z.string().url(),
  JWT_SECRET: z.string().min(32)
});

const env = envSchema.parse(process.env);
```
Explain this pattern.
474. What is the `dotenv` package?
475. How do you type `process.env`?
476. What is branded types in TypeScript?
477. How do you create branded types for IDs?
478. 
```typescript
type UserId = string & { __brand: 'UserId' };
type ProductId = string & { __brand: 'ProductId' };
```
What is the benefit of branded types?
479. What is nominal typing?
480. What is structural typing?
481. Is TypeScript nominally or structurally typed?
482. What is the `satisfies` operator in TypeScript?
483. How does `satisfies` improve type safety?
484. What is const assertion?
485. 
```typescript
const routes = {
  users: '/api/users',
  products: '/api/products'
} as const;
```
What does `as const` do?
486. How do you create a type-safe API client?
487. What is Axios?
488. How do you type Axios requests and responses?
489. What is `fetch` API?
490. How do you type `fetch` requests?
491. What is the `Response` type in fetch?
492. How do you handle JSON parsing with type safety?
493. What is the danger of `response.json()`?
494. How do you create a type-safe wrapper around `fetch`?
495. What is API versioning?
496. How do you implement API versioning in TypeScript?
497. How do you maintain types across API versions?
498. What is backward compatibility?
499. How do you ensure backward compatibility with TypeScript?
500. What is the builder pattern in TypeScript?
501. How do you use the builder pattern for API requests?
502. What is method chaining?
503. How do you implement type-safe method chaining?
504. What is the factory pattern?
505. How do you use the factory pattern in TypeScript APIs?
506. What is dependency inversion principle?
507. How do you apply SOLID principles in TypeScript APIs?
508. What is the single responsibility principle?
509. How do you organize TypeScript API code?
510. What is the recommended folder structure for TypeScript APIs?
511. What is path aliasing in TypeScript?
512. How do you configure path aliases in `tsconfig.json`?
513. 
```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@models/*": ["models/*"],
      "@controllers/*": ["controllers/*"]
    }
  }
}
```
What does this configuration do?
514. What is the `strict` flag in TypeScript?
515. What checks does `strict` enable?
516. Should you always use strict mode?
517. What is `noImplicitAny`?
518. What is `strictFunctionTypes`?
519. What is `strictBindCallApply`?
520. What is `strictPropertyInitialization`?

---

### AWS Deployment Deep Dive

521. What is AWS IAM?
522. What is an IAM user?
523. What is an IAM role?
524. What is the difference between IAM user and IAM role?
525. What is an IAM policy?
526. What is the principle of least privilege in IAM?
527. How do you create an IAM user for deployment?
528. What permissions does a user need to deploy to S3?
529. What is an access key in IAM?
530. How do you create access keys?
531. Should you commit access keys to Git?
532. What is AWS EC2?
533. What is an EC2 instance?
534. What are EC2 instance types?
535. What is the difference between t2.micro and t3.medium?
536. How do you launch an EC2 instance?
537. What is an AMI (Amazon Machine Image)?
538. What is a security group in EC2?
539. How do you configure security group rules?
540. What ports should you open for a web server?
541. What is SSH?
542. How do you SSH into an EC2 instance?
543. What is a key pair in EC2?
544. How do you deploy a Node.js app to EC2?
545. What is PM2?
546. How do you use PM2 to run Node.js apps?
547. What is the `pm2 start` command?
548. How do you make PM2 start on system boot?
549. What is Nginx?
550. How do you install Nginx on EC2?
551. How do you configure Nginx as a reverse proxy?
552. 
```nginx
server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://localhost:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
  }
}
```
Explain this Nginx configuration.
553. What is a reverse proxy?
554. Why use Nginx with Node.js?
555. How do you set up SSL on EC2 with Let's Encrypt?
556. What is Certbot?
557. How do you use Certbot to get SSL certificates?
558. What is AWS Elastic Load Balancer (ELB)?
559. What types of load balancers does AWS offer?
560. What is an Application Load Balancer (ALB)?
561. What is a Network Load Balancer (NLB)?
562. When should you use ALB vs NLB?
563. How do you configure a load balancer?
564. What is a target group?
565. How do you add EC2 instances to a target group?
566. What is health check in load balancer?
567. How do you configure health checks?
568. What is AWS Auto Scaling?
569. What is an Auto Scaling Group?
570. How do you create an Auto Scaling Group?
571. What is a launch template?
572. What is the difference between launch template and launch configuration?
573. What is scaling policy?
574. What is target tracking scaling?
575. What is step scaling?
576. What is the difference between target tracking and step scaling?
577. What is AWS RDS?
578. What is RDS used for?
579. What databases does RDS support?
580. How do you create an RDS instance?
581. What is a database subnet group?
582. How do you connect to RDS from EC2?
583. What is RDS security group configuration?
584. Should you make RDS publicly accessible?
585. What is AWS VPC?
586. What is a Virtual Private Cloud?
587. What is a subnet in VPC?
588. What is the difference between public and private subnet?
589. What is an Internet Gateway?
590. What is a NAT Gateway?
591. When do you need a NAT Gateway?
592. What is AWS CloudWatch?
593. What is CloudWatch Logs?
594. How do you send application logs to CloudWatch?
595. What is CloudWatch Metrics?
596. What is CloudWatch Alarms?
597. How do you set up an alarm for high CPU usage?
598. What is AWS SNS?
599. How do you use SNS for deployment notifications?
600. What is AWS Systems Manager?
601. What is Parameter Store?
602. How do you store secrets in Parameter Store?
603. What is AWS Secrets Manager?
604. What is the difference between Parameter Store and Secrets Manager?
605. When should you use Secrets Manager vs Parameter Store?
606. What is AWS CodeDeploy?
607. How does CodeDeploy work?
608. What is an AppSpec file?
609. What is AWS CodePipeline?
610. How do you create a CI/CD pipeline with CodePipeline?
611. What is AWS CodeBuild?
612. How do you use CodeBuild to build your application?
613. What is a buildspec.yml file?
614. 
```yaml
version: 0.2
phases:
  install:
    commands:
      - npm install
  build:
    commands:
      - npm run build
artifacts:
  files:
    - '**/*'
  base-directory: build
```
Explain this buildspec.yml.
615. What is AWS ECS?
616. What is Amazon Elastic Container Service?
617. What is the difference between ECS and EC2?
618. What is AWS Fargate?
619. What is the difference between ECS and Fargate?
620. How do you deploy a containerized app to ECS?
621. What is a task definition in ECS?
622. What is a service in ECS?
623. What is a cluster in ECS?
624. How do you configure auto-scaling in ECS?
625. What is AWS Lambda?
626. When should you use Lambda vs EC2?
627. What is serverless deployment?
628. What are the benefits of serverless?
629. What are the limitations of serverless?
630. What is cold start in Lambda?

---

### Database Deployment and Management

631. How do you deploy a database to production?
632. What is database hosting?
633. Should you host your own database or use a managed service?
634. What are managed database services?
635. What is AWS RDS?
636. What is MongoDB Atlas?
637. What is Supabase?
638. What is PlanetScale?
639. What is Neon?
640. What are the benefits of managed databases?
641. What are the drawbacks of managed databases?
642. How do you run database migrations in production?
643. What is the migration strategy for zero-downtime?
644. How do you handle backward-incompatible schema changes?
645. What is the expand-contract pattern for migrations?
646. How do you backup a production database?
647. What is automated backup?
648. How often should you backup your database?
649. What is point-in-time recovery?
650. How do you restore a database from backup?
651. How do you test database restoration?
652. What is database replication in production?
653. What is a read replica?
654. When should you use read replicas?
655. How do you configure read replicas in RDS?
656. What is database failover?
657. What is Multi-AZ deployment in RDS?
658. How does Multi-AZ improve availability?
659. What is the difference between read replica and Multi-AZ?
660. How do you monitor database performance?
661. What metrics should you monitor?
662. What is query performance monitoring?
663. How do you identify slow queries in production?
664. What is database connection pooling in production?
665. What is the maximum number of database connections?
666. How do you configure connection pooling?
667. What is PgBouncer?
668. How do you use PgBouncer with PostgreSQL?
669. What is database security in production?
670. How do you secure database credentials?
671. Should you use environment variables for database URLs?
672. What is database encryption at rest?
673. What is database encryption in transit?
674. How do you enable SSL for database connections?
675. What is database access control?
676. How do you implement least privilege for database users?
677. What is database auditing?
678. How do you audit database access?
679. What is database scaling?
680. When should you scale your database?
681. How do you scale a PostgreSQL database?
682. What is vertical scaling for databases?
683. What is horizontal scaling for databases?
684. What is database sharding in production?
685. How do you implement sharding?
686. What are the challenges of sharding?
687. What is database partitioning in production?
688. How do you partition a large table?
689. What is the difference between sharding and partitioning?
690. What is database caching in production?
691. How do you implement caching with Redis?
692. What is cache invalidation strategy?
693. What is the cache-aside pattern?
694. What is write-through caching?
695. What is database indexing in production?
696. How do you identify missing indexes?
697. How do you monitor index usage?
698. What is index maintenance?
699. How do you rebuild indexes?
700. What is database vacuuming (PostgreSQL)?
701. How often should you run VACUUM?
702. What is autovacuum?
703. Should you disable autovacuum?
704. What is database bloat?
705. How do you reduce database bloat?
706. What is connection timeout?
707. How do you configure connection timeout?
708. What is query timeout?
709. How do you set query timeout?
710. What is database versioning?
711. How do you track database schema versions?
712. What tools help with database versioning (Flyway, Liquibase)?
713. What is Prisma Migrate?
714. How do you use Prisma Migrate in production?
715. What is the `prisma migrate deploy` command?
716. How do you handle migration failures in production?
717. What is a migration rollback strategy?
718. Can you rollback Prisma migrations?
719. What is database seeding in production?
720. Should you seed production databases?

---

### Monitoring and Debugging in Production

721. What is production monitoring?
722. Why is monitoring important?
723. What should you monitor in production?
724. What is application monitoring?
725. What is infrastructure monitoring?
726. What is the difference between logs and metrics?
727. What are the three pillars of observability?
728. What is logging?
729. What is metrics?
730. What is tracing?
731. What is structured logging?
732. Why use structured logging?
733. How do you implement structured logging?
734. What is log aggregation?
735. What tools can you use for log aggregation?
736. What is ELK stack?
737. What is Elasticsearch?
738. What is Logstash?
739. What is Kibana?
740. What is CloudWatch Logs?
741. How do you search logs in CloudWatch?
742. What is CloudWatch Insights query language?
743. What is log retention?
744. How long should you retain logs?
745. What is the cost of log storage?
746. What are metrics?
747. What is time-series data?
748. What metrics should you track for APIs?
749. What is request rate?
750. What is error rate?
751. What is response time?
752. What is latency?
753. What is throughput?
754. What is the difference between latency and throughput?
755. What is the 95th percentile (p95)?
756. What is the 99th percentile (p99)?
757. Why use percentiles instead of averages?
758. What is CloudWatch Metrics?
759. How do you create custom metrics?
760. What is Prometheus?
761. What is Grafana?
762. How do you use Prometheus with Grafana?
763. What is Datadog?
764. What is New Relic?
765. What is distributed tracing?
766. What is AWS X-Ray?
767. What is OpenTelemetry?
768. What is a trace?
769. What is a span?
770. How do you implement tracing in Node.js?
771. What is error tracking?
772. What is Sentry?
773. How do you integrate Sentry with Node.js?
774. What is error rate monitoring?
775. What is an alert?
776. What is an alarm?
777. How do you set up alerts?
778. What is alert fatigue?
779. How do you prevent alert fatigue?
780. What is on-call rotation?
781. What is incident response?
782. What is a runbook?
783. What should a runbook include?
784. What is a postmortem?
785. What is the purpose of a postmortem?
786. What is SLA (Service Level Agreement)?
787. What is SLO (Service Level Objective)?
788. What is SLI (Service Level Indicator)?
789. What is the difference between SLA, SLO, and SLI?
790. What is uptime?
791. What is the difference between 99% and 99.9% uptime?
792. How do you calculate uptime?
793. What is downtime?
794. What is planned downtime?
795. What is unplanned downtime?
796. How do you minimize downtime?
797. What is a health check endpoint?
798. How do you implement a health check?
799. 
```typescript
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});
```
Is this a good health check?
800. What should a comprehensive health check include?
801. Should health checks verify database connectivity?
802. What is a readiness probe?
803. What is a liveness probe?
804. What is the difference between readiness and liveness probes?
805. What is performance monitoring?
806. What is APM (Application Performance Monitoring)?
807. What tools provide APM?
808. What is profiling?
809. How do you profile a Node.js application?
810. What is memory leak?
811. How do you detect memory leaks?
812. What is heap snapshot?
813. How do you analyze heap snapshots?
814. What is CPU profiling?
815. What is flame graph?
816. How do you read a flame graph?
817. What is the Node.js event loop?
818. How do you monitor event loop lag?
819. What is garbage collection?
820. How do you monitor garbage collection?

---

### Security in Deployment

821. What is application security?
822. What is the OWASP Top 10?
823. What is SQL injection?
824. How do you prevent SQL injection?
825. What is XSS (Cross-Site Scripting)?
826. How do you prevent XSS attacks?
827. What is CSRF (Cross-Site Request Forgery)?
828. How do you prevent CSRF attacks?
829. What is CORS?
830. How do you configure CORS securely?
831. What is the same-origin policy?
832. What is content security policy (CSP)?
833. How do you implement CSP?
834. What is HTTPS?
835. Why is HTTPS important?
836. What is SSL/TLS?
837. What is an SSL certificate?
838. How do you get an SSL certificate?
839. What is Let's Encrypt?
840. How do you renew SSL certificates?
841. What is certificate expiration monitoring?
842. What is authentication?
843. What is authorization?
844. What is the difference between authentication and authorization?
845. What is JWT?
846. How do you secure JWT tokens?
847. Where should you store JWT tokens?
848. Should you store JWT in localStorage?
849. What is the risk of storing JWT in localStorage?
850. What is httpOnly cookie?
851. What is secure cookie?
852. What is SameSite cookie attribute?
853. How do you implement secure session management?
854. What is session hijacking?
855. How do you prevent session hijacking?
856. What is rate limiting?
857. Why is rate limiting important?
858. How do you implement rate limiting?
859. What is express-rate-limit?
860. 
```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```
Explain this rate limiting configuration.
861. What is DDoS attack?
862. How do you protect against DDoS?
863. What is AWS Shield?
864. What is AWS WAF (Web Application Firewall)?
865. How do you configure WAF rules?
866. What is input validation?
867. Why is input validation important?
868. How do you validate input in TypeScript?
869. What is Zod validation?
870. What is sanitization?
871. What is the difference between validation and sanitization?
872. What is helmet.js?
873. What security headers does helmet set?
874. 
```typescript
import helmet from 'helmet';
app.use(helmet());
```
What does this do?
875. What is X-Frame-Options header?
876. What is X-Content-Type-Options header?
877. What is Strict-Transport-Security header?
878. What is secrets management?
879. How do you manage secrets in production?
880. Should you commit secrets to Git?
881. What is .env file?
882. Should you commit .env files?
883. What is environment variable?
884. How do you access environment variables in Node.js?
885. What is AWS Secrets Manager?
886. How do you retrieve secrets from Secrets Manager?
887. What is HashiCorp Vault?
888. What is secret rotation?
889. How often should you rotate secrets?
890. What is the principle of least privilege?
891. How do you apply least privilege in deployment?
892. What is IAM role for EC2?
893. What is instance profile?
894. How do you attach IAM role to EC2?
895. What is security group?
896. How do you configure security group rules?
897. What is the principle of defense in depth?
898. What is network segmentation?
899. What is VPC in AWS?
900. How do you isolate resources in VPC?
901. What is private subnet?
902. What is public subnet?
903. What is bastion host?
904. What is the purpose of a bastion host?
905. What is encryption at rest?
906. What is encryption in transit?
907. How do you enable encryption for RDS?
908. What is KMS (Key Management Service)?
909. How do you use KMS for encryption?
910. What is audit logging?
911. What is AWS CloudTrail?
912. What does CloudTrail log?
913. How do you enable CloudTrail?
914. What is compliance?
915. What is GDPR?
916. What is HIPAA?
917. What is SOC 2?
918. How do you ensure compliance in deployment?
919. What is vulnerability scanning?
920. What tools can you use for vulnerability scanning?
921. What is dependency scanning?
922. What is npm audit?
923. How do you use npm audit?
924. What is Snyk?
925. How do you integrate Snyk in CI/CD?
926. What is container scanning?
927. How do you scan Docker images for vulnerabilities?
928. What is penetration testing?
929. When should you perform penetration testing?
930. What is security incident response?

---

### Performance Optimization

931. What is performance optimization?
932. Why is performance important?
933. What is page load time?
934. What is Time to First Byte (TTFB)?
935. What is First Contentful Paint (FCP)?
936. What is Largest Contentful Paint (LCP)?
937. What is Cumulative Layout Shift (CLS)?
938. What is First Input Delay (FID)?
939. What are Core Web Vitals?
940. How do you measure Core Web Vitals?
941. What is Lighthouse?
942. How do you use Lighthouse for performance testing?
943. What is code splitting?
944. How do you implement code splitting in React?
945. What is lazy loading?
946. How do you lazy load components?
947. What is tree shaking?
948. How does tree shaking improve performance?
949. What is minification?
950. What is the difference between minification and compression?
951. What is gzip compression?
952. What is Brotli compression?
953. How do you enable compression in Nginx?
954. What is caching?
955. What are the different types of caching?
956. What is browser caching?
957. How do you configure browser caching?
958. What is Cache-Control header?
959. What is the difference between `max-age` and `s-maxage`?
960. What is `no-cache` vs `no-store`?
961. What is CDN caching?
962. How does CloudFront caching work?
963. What is cache invalidation?
964. What is the cache invalidation problem?
965. What is image optimization?
966. How do you optimize images for web?
967. What is WebP format?
968. What is AVIF format?
969. Should you use WebP or AVIF?
970. What is responsive images?
971. What is the `srcset` attribute?
972. What is lazy loading images?
973. How do you implement lazy loading for images?
974. What is the `loading="lazy"` attribute?
975. What is font optimization?
976. What is font-display?
977. What is the difference between `swap`, `block`, and `fallback`?
978. What is preloading?
979. What is prefetching?
980. What is the difference between preload and prefetch?
981. What is DNS prefetch?
982. What is preconnect?
983. How do you use resource hints?
984. What is bundle size optimization?
985. How do you analyze bundle size?
986. What is webpack-bundle-analyzer?
987. What is code splitting in webpack?
988. What is dynamic import?
989. How do you use dynamic imports?
990. What is server-side rendering (SSR)?
991. What is static site generation (SSG)?
992. What is incremental static regeneration (ISR)?
993. What is the difference between SSR, SSG, and ISR?
994. When should you use SSR vs SSG?
995. What is database query optimization?
996. How do you optimize slow queries?
997. What is database indexing for performance?
998. What is connection pooling for performance?
999. What is API response caching?
1000. How do you implement API caching with Redis?

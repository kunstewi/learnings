### DDoS Fundamentals

1. What is DDoS (Distributed Denial of Service)?
2. What is the difference between DoS and DDoS?
3. What is the goal of a DDoS attack?
4. What are the main types of DDoS attacks?
5. What is a volumetric attack?
6. What is a protocol attack?
7. What is an application layer attack?
8. What is a SYN flood attack?
9. What is a UDP flood attack?
10. What is an HTTP flood attack?
11. What is a Slowloris attack?
12. How does a Slowloris attack work?
13. What is amplification attack?
14. What is a DNS amplification attack?
15. What is a botnet?
16. How are botnets used in DDoS attacks?
17. What is the impact of a DDoS attack on a web application?
18. What is service degradation?
19. What is complete service outage?
20. What is the financial impact of DDoS attacks?
21. What is the difference between Layer 3, Layer 4, and Layer 7 attacks?
22. What OSI layer does HTTP flood target?
23. What OSI layer does SYN flood target?
24. What is the challenge in detecting DDoS attacks?
25. What is the difference between legitimate traffic spike and DDoS?
26. What is a zero-day DDoS attack?
27. What is ransom DDoS (RDDoS)?
28. What are common DDoS attack vectors?
29. What is the typical duration of a DDoS attack?
30. What is the largest DDoS attack ever recorded?

---

### DDoS Protection Strategies

31. What is DDoS mitigation?
32. What are the layers of DDoS protection?
33. What is network-level protection?
34. What is application-level protection?
35. What is a Web Application Firewall (WAF)?
36. How does a WAF help prevent DDoS?
37. What is Cloudflare?
38. How does Cloudflare protect against DDoS?
39. What is AWS Shield?
40. What is the difference between AWS Shield Standard and AWS Shield Advanced?
41. What is Azure DDoS Protection?
42. What is Google Cloud Armor?
43. What is a CDN (Content Delivery Network)?
44. How does a CDN help mitigate DDoS attacks?
45. What is traffic filtering?
46. What is IP blacklisting?
47. What is IP whitelisting?
48. What is geoblocking?
49. When should you use geoblocking?
50. What is rate limiting?
51. How does rate limiting help prevent DDoS?
52. What is traffic shaping?
53. What is load balancing?
54. How does load balancing help with DDoS?
55. What is auto-scaling?
56. How does auto-scaling help during DDoS attacks?
57. What is over-provisioning?
58. What is the cost of over-provisioning?
59. What is anycast network?
60. How does anycast help with DDoS mitigation?
61. What is traffic scrubbing?
62. What is a scrubbing center?
63. What is BGP (Border Gateway Protocol) routing?
64. How is BGP used in DDoS mitigation?
65. What is null routing (blackholing)?
66. When should you use null routing?
67. What is the downside of null routing?
68. What is CAPTCHA?
69. How does CAPTCHA help prevent DDoS?
70. What is JavaScript challenge?
71. What is proof-of-work challenge?
72. What is connection limiting?
73. What is SYN cookie?
74. How do SYN cookies prevent SYN flood attacks?
75. What is the three-way handshake in TCP?
76. What is monitoring and alerting?
77. What metrics should you monitor for DDoS detection?
78. What is anomaly detection?
79. What is baseline traffic analysis?
80. What is an incident response plan?

---

### Rate Limiting Fundamentals

81. What is rate limiting?
82. Why is rate limiting important?
83. What is the purpose of rate limiting?
84. What is the difference between rate limiting and throttling?
85. What is a rate limit?
86. What is a quota?
87. What is the difference between rate limit and quota?
88. What is requests per second (RPS)?
89. What is requests per minute (RPM)?
90. What is requests per hour (RPH)?
91. Which time window is most common for rate limiting?
92. What is burst traffic?
93. How do you handle burst traffic with rate limiting?
94. What is the user experience impact of rate limiting?
95. What HTTP status code should you return when rate limit is exceeded?
96. What is the 429 Too Many Requests status code?
97. What headers should you include in rate limit responses?
98. What is the `X-RateLimit-Limit` header?
99. What is the `X-RateLimit-Remaining` header?
100. What is the `X-RateLimit-Reset` header?
101. What is the `Retry-After` header?
102. 
```http
HTTP/1.1 429 Too Many Requests
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1640000000
Retry-After: 60
```
Explain these headers.

103. What is per-user rate limiting?
104. What is per-IP rate limiting?
105. What is per-API-key rate limiting?
106. What is global rate limiting?
107. What is the difference between per-user and per-IP rate limiting?
108. When should you use per-IP rate limiting?
109. When should you use per-user rate limiting?
110. What is the problem with per-IP rate limiting behind NAT?
111. What is NAT (Network Address Translation)?
112. How does NAT affect rate limiting?
113. What is the problem with rate limiting in distributed systems?
114. What is the challenge of rate limiting across multiple servers?
115. What is centralized rate limiting?
116. What is distributed rate limiting?
117. What is the trade-off between centralized and distributed rate limiting?
118. What is tiered rate limiting?
119. What is the difference between free tier and paid tier rate limits?
120. What is dynamic rate limiting?

---

### Rate Limiting Algorithms

121. What are the common rate limiting algorithms?
122. What is the token bucket algorithm?
123. How does the token bucket algorithm work?
124. What is a token in token bucket?
125. What is the bucket capacity?
126. What is the refill rate?
127. 
```
Bucket capacity: 10 tokens
Refill rate: 1 token per second
Request cost: 1 token
```
Explain this token bucket configuration.

128. What happens when the bucket is empty?
129. What happens when the bucket is full?
130. Can you accumulate tokens in token bucket?
131. What is the advantage of token bucket?
132. What is the leaky bucket algorithm?
133. How does the leaky bucket algorithm work?
134. What is the difference between token bucket and leaky bucket?
135. What is the leak rate?
136. What is the queue in leaky bucket?
137. What happens when the queue is full in leaky bucket?
138. Does leaky bucket allow burst traffic?
139. Does token bucket allow burst traffic?
140. Which algorithm is better for handling bursts?
141. What is the fixed window algorithm?
142. How does the fixed window algorithm work?
143. 
```
Window: 1 minute
Limit: 100 requests
Current window: 10:00:00 - 10:01:00
```
What happens at 10:01:00?

144. What is the problem with fixed window?
145. What is the edge case issue in fixed window?
146. 
```
10:00:50 - 60 requests
10:01:10 - 60 requests
```
What is the problem here with a 100 req/min limit?

147. What is the sliding window log algorithm?
148. How does the sliding window log algorithm work?
149. What data structure is used in sliding window log?
150. What is the space complexity of sliding window log?
151. What is the time complexity of sliding window log?
152. What is the sliding window counter algorithm?
153. How does the sliding window counter algorithm work?
154. What is the formula for sliding window counter?
155. What is the advantage of sliding window counter over fixed window?
156. What is the advantage of sliding window counter over sliding window log?
157. Which rate limiting algorithm is most commonly used?
158. Which algorithm is most memory efficient?
159. Which algorithm is most accurate?
160. Which algorithm should you use for API rate limiting?

---

### Rate Limiting Implementation

161. How do you implement rate limiting in Express?
162. What is the `express-rate-limit` package?
163. 
```js
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests'
});

app.use(limiter);
```
Explain this rate limiting configuration.

164. What is the `windowMs` option?
165. What is the `max` option?
166. What is the `message` option?
167. How do you apply rate limiting to specific routes?
168. 
```js
app.use('/api/', limiter);
```
What does this do?

169. How do you customize the rate limit key?
170. What is the `keyGenerator` function?
171. 
```js
const limiter = rateLimit({
  keyGenerator: (req) => req.user.id
});
```
What does this do?

172. How do you skip rate limiting for certain requests?
173. What is the `skip` function?
174. How do you implement different rate limits for different endpoints?
175. 
```js
const strictLimiter = rateLimit({ max: 10 });
const normalLimiter = rateLimit({ max: 100 });

app.post('/login', strictLimiter);
app.get('/api/data', normalLimiter);
```
Explain this configuration.

176. What is the `standardHeaders` option?
177. What is the `legacyHeaders` option?
178. Should you enable rate limit headers?
179. What is the `store` option in express-rate-limit?
180. What is the default store?
181. What is the problem with the default memory store?
182. Why doesn't memory store work in distributed systems?
183. What is Redis-based rate limiting?
184. How do you use Redis for rate limiting?
185. What is the `rate-limit-redis` package?
186. 
```js
const RedisStore = require('rate-limit-redis');
const Redis = require('ioredis');

const limiter = rateLimit({
  store: new RedisStore({
    client: new Redis(),
    prefix: 'rl:'
  }),
  max: 100
});
```
Explain this Redis-based rate limiting.

187. What is the `prefix` option?
188. Why is Redis good for rate limiting?
189. What Redis commands are used for rate limiting?
190. What is the `INCR` command?
191. What is the `EXPIRE` command?
192. 
```js
const key = `rate_limit:${userId}`;
const count = await redis.incr(key);
if (count === 1) {
  await redis.expire(key, 60);
}
if (count > 100) {
  throw new Error('Rate limit exceeded');
}
```
Explain this rate limiting logic.

193. What is the race condition in this implementation?
194. How do you implement atomic rate limiting with Redis?
195. What is a Lua script in Redis?
196. How do you use Lua scripts for rate limiting?
197. 
```lua
local key = KEYS[1]
local limit = tonumber(ARGV[1])
local window = tonumber(ARGV[2])
local current = redis.call('INCR', key)
if current == 1 then
  redis.call('EXPIRE', key, window)
end
if current > limit then
  return 0
end
return 1
```
Explain this Lua script.

198. What is the benefit of using Lua scripts?
199. What is the `EVAL` command?
200. How do you implement sliding window with Redis?

---

### Advanced Rate Limiting

201. What is distributed rate limiting?
202. How do you implement rate limiting across multiple servers?
203. What is the challenge of distributed rate limiting?
204. What is eventual consistency in rate limiting?
205. What is the trade-off between accuracy and performance?
206. What is local rate limiting with sync?
207. What is the rate limiting strategy for microservices?
208. Should each microservice have its own rate limit?
209. What is API gateway rate limiting?
210. What is the benefit of gateway-level rate limiting?
211. What is per-endpoint rate limiting?
212. How do you implement different limits for different HTTP methods?
213. 
```js
app.get('/api/data', rateLimit({ max: 1000 }));
app.post('/api/data', rateLimit({ max: 100 }));
app.delete('/api/data', rateLimit({ max: 10 }));
```
Why would you use different limits?

214. What is cost-based rate limiting?
215. What is weighted rate limiting?
216. 
```js
const cost = {
  'GET /users': 1,
  'POST /users': 5,
  'GET /analytics': 10
};
```
Explain this cost-based approach.

217. What is adaptive rate limiting?
218. How does adaptive rate limiting work?
219. What is circuit breaker pattern?
220. How is circuit breaker related to rate limiting?
221. What is backpressure?
222. What is the relationship between rate limiting and backpressure?
223. What is graceful degradation?
224. How do you implement graceful degradation with rate limiting?
225. What is the queue pattern with rate limiting?
226. Should you queue requests when rate limit is exceeded?
227. What is the downside of queuing requests?
228. What is rate limiting bypass?
229. How do you prevent rate limit bypass?
230. What is IP spoofing?
231. Can rate limiting be bypassed with IP spoofing?
232. What is the X-Forwarded-For header?
233. Should you trust X-Forwarded-For for rate limiting?
234. What is the security risk of trusting X-Forwarded-For?
235. How do you safely use X-Forwarded-For?
236. What is proxy detection?
237. What is VPN detection?
238. Should you block VPN users?
239. What is fingerprinting for rate limiting?
240. What is device fingerprinting?

---

### Singleton Pattern Fundamentals

241. What is the Singleton pattern?
242. What is the purpose of the Singleton pattern?
243. What problem does Singleton solve?
244. What are the characteristics of a Singleton?
245. How many instances can a Singleton have?
246. What is the difference between Singleton and static class?
247. When should you use the Singleton pattern?
248. When should you NOT use the Singleton pattern?
249. What are the disadvantages of Singleton?
250. What is the global state problem?
251. Why is global state considered bad?
252. What is the testing problem with Singletons?
253. How does Singleton violate the Single Responsibility Principle?
254. What is tight coupling?
255. How do Singletons create tight coupling?
256. What are common use cases for Singleton?
257. What is a database connection pool Singleton?
258. What is a configuration manager Singleton?
259. What is a logger Singleton?
260. What is a cache manager Singleton?

---

### Singleton Implementation in JavaScript

261. How do you implement a Singleton in JavaScript?
262. 
```js
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = null;
    Database.instance = this;
  }

  connect() {
    this.connection = 'connected';
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2);
```
What does this output? Explain the pattern.

263. What is the problem with this implementation?
264. What is the static instance property?
265. How do you make the constructor private in JavaScript?
266. Can you make constructors private in JavaScript?
267. What is the alternative to private constructor in JavaScript?
268. 
```js
class Database {
  static #instance;

  constructor() {
    if (Database.#instance) {
      throw new Error('Use Database.getInstance()');
    }
    Database.#instance = this;
  }

  static getInstance() {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }
}
```
Explain this Singleton implementation.

269. What is the `#instance` syntax?
270. What are private static fields in JavaScript?
271. What is the `getInstance()` method?
272. What is lazy initialization?
273. What is eager initialization?
274. 
```js
class Database {
  static instance = new Database();
  
  static getInstance() {
    return Database.instance;
  }
}
```
Is this lazy or eager initialization?

275. What is the difference between lazy and eager initialization?
276. When should you use lazy initialization?
277. When should you use eager initialization?
278. What is the module pattern for Singleton?
279. 
```js
// database.js
class Database {
  constructor() {
    this.connection = null;
  }
  
  connect() {
    this.connection = 'connected';
  }
}

module.exports = new Database();
```
Is this a Singleton? Explain.

280. How does Node.js module caching create Singletons?
281. What is module caching in Node.js?
282. 
```js
// file1.js
const db = require('./database');

// file2.js
const db = require('./database');
```
Are these the same instance?

283. What is the ES6 module Singleton pattern?
284. 
```js
// database.js
class Database {
  constructor() {
    this.connection = null;
  }
}

export default new Database();
```
Explain this pattern.

285. What is the IIFE (Immediately Invoked Function Expression) Singleton?
286. 
```js
const Database = (function() {
  let instance;

  function createInstance() {
    return {
      connection: null,
      connect() {
        this.connection = 'connected';
      }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();
```
Explain this Singleton pattern.

287. What is closure in this context?
288. What is the benefit of using closure for Singleton?
289. How do you reset a Singleton instance?
290. Should Singletons be resettable?
291. What is the Singleton reset pattern for testing?
292. 
```js
class Database {
  static #instance;

  static getInstance() {
    if (!Database.#instance) {
      Database.#instance = new Database();
    }
    return Database.#instance;
  }

  static resetInstance() {
    Database.#instance = null;
  }
}
```
Why would you need `resetInstance()`?

293. What is thread safety in Singleton?
294. Is JavaScript single-threaded?
295. Do you need thread-safe Singleton in Node.js?
296. What about Worker Threads?
297. How do Worker Threads affect Singleton?
298. What is the Singleton pattern in TypeScript?
299. 
```ts
class Database {
  private static instance: Database;
  private connection: string | null = null;

  private constructor() {}

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  public connect(): void {
    this.connection = 'connected';
  }
}
```
Explain this TypeScript Singleton.

300. What is the `private constructor` in TypeScript?

---

### Singleton in Real-World Applications

301. What is Prisma Client as a Singleton?
302. Why should Prisma Client be a Singleton?
303. 
```js
// prisma.js
const { PrismaClient } = require('@prisma/client');

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

module.exports = prisma;
```
Explain this Prisma Singleton pattern.

304. Why do we use `global.prisma`?
305. What is the hot reload problem in development?
306. How does this pattern solve the hot reload problem?
307. What is the Redis client Singleton?
308. 
```js
const Redis = require('ioredis');

let redis;

function getRedisClient() {
  if (!redis) {
    redis = new Redis({
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT
    });
  }
  return redis;
}

module.exports = getRedisClient;
```
Is this a good Singleton implementation?

309. What is the MongoDB connection Singleton?
310. What is the connection pool Singleton pattern?
311. Why should connection pools be Singletons?
312. What happens if you create multiple connection pools?
313. What is the logger Singleton?
314. 
```js
const winston = require('winston');

class Logger {
  static instance;

  constructor() {
    if (Logger.instance) {
      return Logger.instance;
    }

    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
      ]
    });

    Logger.instance = this;
  }

  info(message) {
    this.logger.info(message);
  }

  error(message) {
    this.logger.error(message);
  }
}

module.exports = new Logger();
```
Explain this logger Singleton.

315. What is the configuration Singleton?
316. 
```js
class Config {
  static instance;

  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    this.settings = {
      apiUrl: process.env.API_URL,
      dbUrl: process.env.DATABASE_URL,
      port: process.env.PORT || 3000
    };

    Config.instance = this;
  }

  get(key) {
    return this.settings[key];
  }

  set(key, value) {
    this.settings[key] = value;
  }
}

module.exports = new Config();
```
Is this a good use case for Singleton?

317. What is the cache manager Singleton?
318. What is the event emitter Singleton?
319. What is the application state Singleton?
320. Should you use Singleton for application state?

---

### Singleton Alternatives and Best Practices

321. What is dependency injection?
322. How is dependency injection an alternative to Singleton?
323. 
```js
// Without Singleton
class UserService {
  constructor(database) {
    this.db = database;
  }

  async getUser(id) {
    return this.db.user.findUnique({ where: { id } });
  }
}

// Usage
const db = new Database();
const userService = new UserService(db);
```
What is the benefit of this approach?

324. What is inversion of control?
325. What is the service locator pattern?
326. What is the difference between Singleton and service locator?
327. What is the factory pattern?
328. How can factory pattern replace Singleton?
329. What is the module pattern?
330. Is the module pattern better than Singleton?
331. What is the registry pattern?
332. What is the multiton pattern?
333. How is multiton different from Singleton?
334. What is the object pool pattern?
335. When should you use object pool instead of Singleton?
336. What is the best practice for database connections?
337. Should you use Singleton for database connections?
338. What is the best practice for configuration?
339. Should configuration be a Singleton?
340. What is the 12-factor app methodology?
341. What does 12-factor say about configuration?
342. What is environment-based configuration?
343. How do you test code that uses Singletons?
344. What is the problem with testing Singletons?
345. How do you mock a Singleton?
346. 
```js
// database.js
class Database {
  static instance;
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

// test.js
beforeEach(() => {
  Database.instance = null;
});
```
What is the problem with this approach?

347. What is dependency injection for testing?
348. How do you make Singletons testable?
349. What is the anti-pattern of Singletons?
350. Why are Singletons considered an anti-pattern by some?
351. What is the "global variable in disguise" criticism?
352. What is the hidden dependency problem?
353. What is the lifetime management problem?
354. When is Singleton acceptable?
355. What is the modern alternative to Singleton in Node.js?
356. What is the context pattern?
357. What is React Context as an alternative to Singleton?
358. What is the provider pattern?
359. How do modern frameworks handle Singleton-like behavior?
360. What is the singleton scope in dependency injection frameworks?

---

### Pub/Sub Fundamentals

361. What is Pub/Sub (Publish/Subscribe)?
362. What is the publish-subscribe pattern?
363. What is a publisher?
364. What is a subscriber?
365. What is a message in Pub/Sub?
366. What is a topic?
367. What is a channel?
368. What is the difference between topic and channel?
369. What is the difference between Pub/Sub and message queue?
370. What is the difference between Pub/Sub and request-response?
371. What is decoupling in Pub/Sub?
372. What is the benefit of decoupling?
373. What is asynchronous communication?
374. What is event-driven architecture?
375. How is Pub/Sub related to event-driven architecture?
376. What is the observer pattern?
377. What is the difference between Pub/Sub and observer pattern?
378. What is fan-out in Pub/Sub?
379. What is one-to-many communication?
380. What is many-to-many communication?
381. Can multiple publishers publish to the same topic?
382. Can multiple subscribers subscribe to the same topic?
383. What happens when a message is published?
384. Do all subscribers receive the message?
385. What is message delivery guarantee?
386. What is at-most-once delivery?
387. What is at-least-once delivery?
388. What is exactly-once delivery?
389. Is exactly-once delivery possible?
390. What is message ordering in Pub/Sub?
391. Is message order guaranteed in Pub/Sub?
392. What is message persistence?
393. What happens if a subscriber is offline?
394. What is the difference between durable and non-durable subscriptions?
395. What is a durable subscription?
396. What is a non-durable subscription?
397. What is message retention?
398. What is message expiration?
399. What is the TTL (Time To Live) for messages?
400. What are common use cases for Pub/Sub?

---

### Pub/Sub Implementations

401. What is Redis Pub/Sub?
402. How does Redis Pub/Sub work?
403. What is the `PUBLISH` command?
404. What is the `SUBSCRIBE` command?
405. What is the `UNSUBSCRIBE` command?
406. 
```js
const Redis = require('ioredis');

const publisher = new Redis();
const subscriber = new Redis();

subscriber.subscribe('notifications', (err, count) => {
  console.log(`Subscribed to ${count} channel(s)`);
});

subscriber.on('message', (channel, message) => {
  console.log(`Received from ${channel}:`, message);
});

publisher.publish('notifications', 'Hello World!');
```
Explain this Redis Pub/Sub example.

407. Why do you need two Redis connections?
408. Can you use the same connection for publish and subscribe?
409. What is pattern subscription in Redis?
410. What is the `PSUBSCRIBE` command?
411. 
```js
subscriber.psubscribe('user:*', (err, count) => {
  console.log(`Subscribed to ${count} pattern(s)`);
});
```
What does this do?

412. What is the wildcard pattern?
413. What channels does `user:*` match?
414. What is the difference between `SUBSCRIBE` and `PSUBSCRIBE`?
415. What is the `PUBSUB` command?
416. What is `PUBSUB CHANNELS`?
417. What is `PUBSUB NUMSUB`?
418. What is `PUBSUB NUMPAT`?
419. What is the limitation of Redis Pub/Sub?
420. Is Redis Pub/Sub persistent?
421. What happens if there are no subscribers?
422. What happens if a subscriber disconnects?
423. Does the subscriber receive missed messages?
424. When should you use Redis Pub/Sub?
425. When should you NOT use Redis Pub/Sub?
426. What is the difference between Redis Pub/Sub and Redis Streams?
427. Should you use Redis Pub/Sub for critical messages?
428. What is the message size limit in Redis Pub/Sub?
429. What is the performance of Redis Pub/Sub?
430. Can Redis Pub/Sub handle millions of messages?

---

### Pub/Sub with Node.js

431. How do you implement Pub/Sub in Node.js?
432. What is the EventEmitter in Node.js?
433. Is EventEmitter a Pub/Sub pattern?
434. 
```js
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const emitter = new MyEmitter();

emitter.on('event', (data) => {
  console.log('Event received:', data);
});

emitter.emit('event', { message: 'Hello' });
```
Explain this EventEmitter example.

435. What is the `on()` method?
436. What is the `emit()` method?
437. What is the `once()` method?
438. What is the difference between `on()` and `once()`?
439. What is the `removeListener()` method?
440. What is the `removeAllListeners()` method?
441. What is the `listenerCount()` method?
442. What is the maximum number of listeners?
443. What is the memory leak warning?
444. 
```
(node:1234) MaxListenersExceededWarning: Possible EventEmitter memory leak detected
```
What does this warning mean?

445. How do you increase the max listeners?
446. What is `setMaxListeners()`?
447. What is the difference between EventEmitter and Redis Pub/Sub?
448. Can EventEmitter work across processes?
449. What is inter-process communication (IPC)?
450. How do you implement Pub/Sub across multiple Node.js processes?
451. What is the cluster module?
452. Can you use EventEmitter with cluster?
453. What is the Socket.IO adapter?
454. What is the Redis adapter for Socket.IO?
455. 
```js
const io = require('socket.io')(3000);
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ host: 'localhost', port: 6379 });
const subClient = pubClient.duplicate();

io.adapter(createAdapter(pubClient, subClient));
```
What does this Socket.IO adapter do?

456. Why do you need an adapter for Socket.IO?
457. How does the Redis adapter enable horizontal scaling?
458. What is horizontal scaling?
459. What is the problem with Socket.IO without an adapter?
460. What is the room pattern in Socket.IO?

---

### Advanced Pub/Sub Patterns

461. What is the topic-based Pub/Sub?
462. What is the content-based Pub/Sub?
463. What is message filtering?
464. How do you filter messages in Pub/Sub?
465. What is the routing key?
466. What is the binding key?
467. What is the exchange in RabbitMQ?
468. What is a topic exchange?
469. How does topic exchange routing work?
470. 
```
Topic: logs.error
Topic: logs.warning
Topic: logs.info

Subscriber pattern: logs.*
Subscriber pattern: logs.error
```
Which subscriber receives which messages?

471. What is the `#` wildcard in topic patterns?
472. What is the `*` wildcard in topic patterns?
473. What is the difference between `#` and `*`?
474. What is message acknowledgment in Pub/Sub?
475. Should Pub/Sub have acknowledgments?
476. What is the fire-and-forget pattern?
477. What is the request-reply pattern over Pub/Sub?
478. How do you implement request-reply with Pub/Sub?
479. What is the correlation ID pattern?
480. 
```js
// Request
publisher.publish('requests', JSON.stringify({
  id: 'req-123',
  replyTo: 'responses',
  data: { query: 'hello' }
}));

// Response
subscriber.on('message', (channel, message) => {
  const req = JSON.parse(message);
  // Process request
  publisher.publish(req.replyTo, JSON.stringify({
    id: req.id,
    result: 'processed'
  }));
});
```
Explain this request-reply pattern.

481. What is the dead letter pattern in Pub/Sub?
482. What is message retry in Pub/Sub?
483. How do you handle failed message processing?
484. What is the circuit breaker pattern with Pub/Sub?
485. What is backpressure in Pub/Sub?
486. How do you handle slow subscribers?
487. What is the buffering strategy?
488. What is the dropping strategy?
489. What is the blocking strategy?
490. Which strategy should you use for slow subscribers?

---

### Pub/Sub in Distributed Systems

491. What is distributed Pub/Sub?
492. What is Google Cloud Pub/Sub?
493. What is AWS SNS (Simple Notification Service)?
494. What is AWS SQS (Simple Queue Service)?
495. What is the difference between SNS and SQS?
496. Can you combine SNS and SQS?
497. What is the fan-out pattern with SNS and SQS?
498. What is Azure Service Bus?
499. What is Apache Kafka as Pub/Sub?
500. Is Kafka a Pub/Sub system?
501. What is the difference between Kafka and traditional Pub/Sub?
502. What is a Kafka topic?
503. What is a Kafka partition?
504. What is a consumer group in Kafka?
505. How is consumer group different from Pub/Sub?
506. What is the log-based Pub/Sub?
507. What is event sourcing?
508. How is Pub/Sub related to event sourcing?
509. What is CQRS (Command Query Responsibility Segregation)?
510. How is Pub/Sub used in CQRS?
511. What is the saga pattern?
512. How is Pub/Sub used in saga pattern?
513. What is choreography in microservices?
514. What is orchestration in microservices?
515. What is the difference between choreography and orchestration?
516. How is Pub/Sub used in choreography?
517. What is event-driven microservices?
518. What is the benefit of Pub/Sub in microservices?
519. What is service coupling?
520. How does Pub/Sub reduce coupling?

---

### Pub/Sub Best Practices

521. What is idempotency in Pub/Sub?
522. Why is idempotency important?
523. How do you make message handlers idempotent?
524. What is message deduplication?
525. How do you prevent duplicate message processing?
526. What is the idempotency key?
527. 
```js
const processedMessages = new Set();

subscriber.on('message', (channel, message) => {
  const msg = JSON.parse(message);
  
  if (processedMessages.has(msg.id)) {
    console.log('Duplicate message, skipping');
    return;
  }
  
  // Process message
  processedMessages.add(msg.id);
});
```
What is the problem with this approach?

528. How do you implement persistent deduplication?
529. What is the message schema?
530. Should you version your messages?
531. What is message versioning?
532. How do you handle schema evolution?
533. What is backward compatibility?
534. What is forward compatibility?
535. 
```js
const message = {
  version: 1,
  type: 'user.created',
  timestamp: Date.now(),
  data: {
    userId: 123,
    email: 'user@example.com'
  }
};
```
Is this a good message structure?

536. What is the message envelope pattern?
537. What metadata should you include in messages?
538. What is message tracing?
539. What is distributed tracing?
540. How do you trace messages across services?
541. What is the correlation ID?
542. What is the causation ID?
543. What is the difference between correlation ID and causation ID?
544. What is message monitoring?
545. What metrics should you monitor for Pub/Sub?
546. What is message lag?
547. What is subscriber lag?
548. How do you monitor subscriber health?
549. What is the poison message problem?
550. What is a poison message?
551. How do you handle poison messages?
552. What is the dead letter queue (DLQ)?
553. How do you implement DLQ with Pub/Sub?
554. What is message replay?
555. Should you support message replay?
556. What is the security consideration for Pub/Sub?
557. How do you secure Pub/Sub channels?
558. What is message encryption?
559. Should you encrypt messages?
560. What is access control for Pub/Sub?
561. How do you implement authentication for publishers?
562. How do you implement authentication for subscribers?
563. What is the performance consideration for Pub/Sub?
564. What is the latency of Pub/Sub?
565. What is the throughput of Pub/Sub?
566. How do you optimize Pub/Sub performance?
567. What is message batching?
568. Should you batch messages?
569. What is the trade-off of message batching?
570. What is the error handling strategy for Pub/Sub?
571. Should subscribers throw errors?
572. How do you handle subscriber errors?
573. What is the retry strategy?
574. What is exponential backoff?
575. How do you implement exponential backoff?
576. 
```js
async function processWithRetry(message, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      await processMessage(message);
      return;
    } catch (error) {
      const delay = Math.pow(2, i) * 1000;
      await sleep(delay);
    }
  }
  // Send to DLQ
}
```
Explain this retry logic.

577. What is the circuit breaker pattern?
578. When should you stop retrying?
579. What is the testing strategy for Pub/Sub?
580. How do you test Pub/Sub systems?
581. How do you mock Pub/Sub in tests?
582. What is the integration testing approach?
583. What is the end-to-end testing approach?
584. What is the observability for Pub/Sub?
585. What is logging for Pub/Sub?
586. What should you log in Pub/Sub systems?
587. What is the documentation for Pub/Sub?
588. How do you document Pub/Sub topics?
589. What is the message catalog?
590. What is the event catalog?
591. Why is documentation important for Pub/Sub?
592. What is the versioning strategy for topics?
593. Should you version topics?
594. What is the deprecation strategy?
595. How do you deprecate a topic?
596. What is the migration strategy?
597. How do you migrate subscribers to a new topic?
598. What is the rollback strategy?
599. How do you rollback Pub/Sub changes?
600. What is the future of Pub/Sub?

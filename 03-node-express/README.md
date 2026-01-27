# Node.js and Express.js Mastery

A comprehensive collection of 200 theoretical and practical problems to master Node.js and Express.js, covering basics, internals, advanced concepts, and real-world patterns.

## Node.js Internals & Architecture

1. [ ] **Theory:** Explain the Node.js architecture. What role do V8 and Libuv play?
2. [ ] **Theory:** Describe the Node.js Event Loop in detail. What are the specific phases (Timers, Pending Callbacks, Idle/Prepare, Poll, Check, Close)?
3. [ ] **Practice:** Write a script to demonstrate the execution order of `setTimeout`, `setImmediate`, `process.nextTick`, and `Promise`.
4. [ ] **Theory:** Why is Node.js called "single-threaded"? How does it handle concurrency?
5. [ ] **Theory:** What is the reactor pattern in Node.js?
6. [ ] **Theory:** Explain the difference between blocking and non-blocking I/O code with examples.
7. [ ] **Theory:** What is the Thread Pool in Libuv? Which operations use it?
8. [ ] **Practice:** Create a CPU-intensive task that blocks the event loop and observe its effect on other incoming requests.
9. [ ] **Theory:** What is `process.nextTick()` used for? How is it different from `setImmediate()`?
10. [ ] **Practice:** Refactor the blocking CPU task from problem #8 using the `worker_threads` module to avoid blocking the main thread.
11. [ ] **Theory:** What are "Event Emitters"? How do they work internally?
12. [ ] **Practice:** Build a custom `EventEmitter` class from scratch that supports `.on()`, `.emit()`, and `.off()`.
13. [ ] **Theory:** Explain the concept of "Backpressure" in streams.
14. [ ] **Theory:** What are the different types of Streams in Node.js (Readable, Writable, Duplex, Transform)?
15. [ ] **Practice:** Create a script that pipes a large file from one location to another using Streams to minimize memory usage.
16. [ ] **Practice:** Implement a Transform stream that compresses text (gzip) on the fly.
17. [ ] **Theory:** What is the global `process` object? List 5 useful properties/methods.
18. [ ] **Practice:** Write a CLI tool that accepts arguments via `process.argv` and processes them.
19. [ ] **Theory:** How does Garbage Collection work in V8? What are Young and Old generations?
20. [ ] **Theory:** Explain how `module.exports` and `require` work under the hood (CommonJS wrapper function).

## Modules, NPM & Package Management

21. [ ] **Theory:** Difference between CommonJS (`require`) and ES Modules (`import`).
22. [ ] **Practice:** Convert a project from CommonJS to ES Modules (using `"type": "module"` in package.json).
23. [ ] **Theory:** What is the algorithm Node.js uses to resolve modules (`node_modules`, standard library, relative files)?
24. [ ] **Theory:** Explain Semantic Versioning (SemVer) (e.g., `^1.0.0` vs `~1.0.0`).
25. [ ] **Practice:** Create a local NPM package and install it in another project using `npm link`.
26. [ ] **Theory:** What is a `package-lock.json` file and why is it crucial?
27. [ ] **Theory:** What are "peerDependencies"? When should you use them?
28. [ ] **Practice:** Write a script that detects circular dependencies in a set of modules.
29. [ ] **Theory:** Contrast `dependencies` vs `devDependencies`.
30. [ ] **Practice:** Use `npm audit` to identify and fix security vulnerabilities in a project.

## File System & OS

31. [ ] **Theory:** Synchronous vs Asynchronous `fs` methods. When to use which?
32. [ ] **Practice:** Write a script to recursively list all files in a directory tree (handling subdirectories).
33. [ ] **Practice:** Build a file watcher that logs "File changed" whenever a file is modified (use `fs.watch` or `fs.watchFile`).
34. [ ] **Theory:** What are file descriptors in Unix/Linux systems?
35. [ ] **Practice:** Open a file, write to a specific buffer offset, and read from it without closing.
36. [ ] **Theory:** Explain usage of the `path` module (`path.join`, `path.resolve`, `path.basename`).
37. [ ] **Practice:** Create a script that organizes files in a folder by extension (moves `.jpg` to `/images`, `.txt` to `/docs`).
38. [ ] **Theory:** What is the `os` module? How can you find the number of CPU cores?
39. [ ] **Practice:** Write a script that prints memory usage (total vs free) and load averages every 5 seconds.
40. [ ] **Practice:** Implement a simple log rotation system (rename `app.log` to `app.log.1` when it exceeds 1MB).

## Networking (HTTP, TCP, UDP)

41. [ ] **Theory:** How does the `http` module work? Anatomy of `http.createServer`.
42. [ ] **Practice:** Build a raw HTTP server without frameworks that handles `/home` and `/about` routes.
43. [ ] **Theory:** What is `keep-alive` in HTTP? How does Node handles it?
44. [ ] **Practice:** Implement a TCP server using `net` module that echoes back any data sent to it.
45. [ ] **Theory:** Difference between TCP and UDP. When to use `dgram` module?
46. [ ] **Practice:** Build a simple UDP chat server.
47. [ ] **Theory:** What is TLS/SSL? How to implement HTTPS in Node.js?
48. [ ] **Practice:** Create a self-signed certificate and run a secure HTTPS server using the `https` module.
49. [ ] **Theory:** Explain CORS (Cross-Origin Resource Sharing). How to handle it manually?
50. [ ] **Practice:** Write a script that makes 100 concurrent HTTP requests to a server and measures response time.

## Express.js Basics

51. [ ] **Theory:** What is Express.js? How does it simplify the raw `http` module?
52. [ ] **Theory:** Explain the concept of "Middleware" in Express. Types of middleware (Application-level, Router-level, Error-handling).
53. [ ] **Practice:** create a middleware that logs the Request Method, URL, and Timestamp for every incoming request.
54. [ ] **Theory:** What is the difference between `app.use()`, `app.get()`, `app.all()`?
55. [ ] **Practice:** Create a simple REST API for a "To-Do List" (GET, POST, PUT, DELETE).
56. [ ] **Theory:** Handling URL parameters (`:id`) and Query parameters (`?sort=asc`).
57. [ ] **Practice:** Implement a route that accepts a dynamic user ID and returns data for that user.
58. [ ] **Theory:** How does `res.json()` differ from `res.send()`?
59. [ ] **Practice:** Serve static files (images, CSS) using `express.static`.
60. [ ] **Theory:** What is the "Request" object (`req`)? List 5 key properties.
61. [ ] **Theory:** What is the "Response" object (`res`)? List 5 key methods.
62. [ ] **Practice:** Implement a form submission using `express.urlencoded` body parser.
63. [ ] **Practice:** Handle 404 errors by creating a catch-all middleware at the end of the stack.
64. [ ] **Theory:** How routing works internally in Express (Layer, Route, Stack).
65. [ ] **Practice:** Use `express.Router()` to modularize routes into separate files (e.g., `routes/users.js`, `routes/products.js`).

## Express.js Advanced & Security

66. [ ] **Theory:** Explain the Error Handling middleware signature `(err, req, res, next)`.
67. [ ] **Practice:** Create a global error handler that catches exceptions and sends a standard JSON error response.
68. [ ] **Theory:** What is `helmet` middleware? What security headers does it set?
69. [ ] **Practice:** Implement Rate Limiting to prevent DDoS attacks (use `express-rate-limit`).
70. [ ] **Theory:** What is Cross-Site Scripting (XSS) and how to prevent it in Express?
71. [ ] **Theory:** What is CSRF (Cross-Site Request Forgery)? Prevention techniques?
72. [ ] **Practice:** Use `cors` middleware to whitelist specific domains.
73. [ ] **Theory:** Explain Template Engines (EJS, Pug, Handlebars). Server-side rendering vs API.
74. [ ] **Practice:** Render a dynamic HTML page using EJS with data passed from the server.
75. [ ] **Practice:** Handle file uploads using `multer`. Validation of file type and size.
76. [ ] **Theory:** Cookie management in Express (`cookie-parser`). Signed vs Unsigned cookies.
77. [ ] **Practice:** Implement a generic "Async Handler" wrapper to avoid `try-catch` blocks in every route.
78. [ ] **Theory:** Session management. How `express-session` works (Store, Secret, Cookie).
79. [ ] **Practice:** Store sessions in Redis instead of Memory (using `connect-redis`).
80. [ ] **Theory:** Input Validation. Why validate on server side?

## Databases & ORMs

81. [ ] **Theory:** SQL vs NoSQL. When to use Node with MongoDB vs PostgreSQL?
82. [ ] **Practice:** Connect Node.js to MongoDB using the native driver. Perform CRUD.
83. [ ] **Theory:** What is Mongoose? Schemas, Models, and Document middleware.
84. [ ] **Practice:** Define a Mongoose schema with validation (required, unique, default values).
85. [ ] **Practice:** Implement "Population" in Mongoose (referencing other documents).
86. [ ] **Theory:** Connect Node.js to PostgreSQL using `pg` library.
87. [ ] **Practice:** Build a Transaction using SQL (BEGIN, COMMIT, ROLLBACK) in Node.js.
88. [ ] **Theory:** What is an ORM (Sequelize, TypeORM, Prisma)? Pros and Cons.
89. [ ] **Practice:** Setup Prisma with a SQLite database and run migrations.
90. [ ] **Practice:** Implement Pagination for an API endpoint (limit, offset/cursor).
91. [ ] **Practice:** Implement Filtering and Sorting for an API endpoint based on query params.
92. [ ] **Theory:** Connection Pooling. Why is it important?
93. [ ] **Practice:** Handle database connection failures gracefully (retries/logging).
94. [ ] **Theory:** What is "N+1 Problem" in database queries? How to solve it?
95. [ ] **Practice:** Use Redis for caching API responses to reduce database load.

## Authentication & Authorization

96. [ ] **Theory:** Difference between Authentication and Authorization.
97. [ ] **Theory:** Explain JWT (Json Web Token) structure. Header, Payload, Signature.
98. [ ] **Practice:** Implement a Signup/Login flow. Hash passwords using `bcrypt`.
99. [ ] **Practice:** Generate a JWT upon login and send it to the client.
100. [ ] **Practice:** Create a middleware `authenticateToken` that verifies the JWT for protected routes.
101. [ ] **Theory:** Access Tokens vs Refresh Tokens. Why use Refresh Tokens?
102. [ ] **Practice:** Implement a Refresh Token rotation mechanism.
103. [ ] **Theory:** What is OAuth 2.0? Describe the flow.
104. [ ] **Practice:** Implement specific social login (e.g., Log in with Google) using `passport.js`.
105. [ ] **Theory:** Role-Based Access Control (RBAC).
106. [ ] **Practice:** Implement an RBAC middleware: `authorize(['admin', 'editor'])`.
107. [ ] **Theory:** Session-based auth vs Token-based auth. Comparison.
108. [ ] **Practice:** Implement "Forgot Password" flow (send email with reset token).
109. [ ] **Practice:** Securely store API keys and secrets using `.env` (dotenv).
110. [ ] **Theory:** Best practices for storing passwords (Salting, Hashing, Argpn2/Bcrypt).

## Real-Time Communication

111. [ ] **Theory:** Polling vs Long Polling vs WebSockets.
112. [ ] **Theory:** What is `socket.io`? How does it differ from native `ws`?
113. [ ] **Practice:** Build a basic real-time Chat Application using `socket.io`.
114. [ ] **Practice:** Implement "Rooms" in Socket.io (private chat functionality).
115. [ ] **Practice:** Broadcast a notification to all connected clients except the sender.
116. [ ] **Theory:** Scaling WebSockets. How to use Redis Adapter for multiple nodes?
117. [ ] **Practice:** Create a real-time progress bar for a long-running background task.
118. [ ] **Theory:** Server-Sent Events (SSE). When to use SSE over WebSockets?
119. [ ] **Practice:** Implement an SSE endpoint that streams stock price updates every second.
120. [ ] **Practice:** Handle WebSocket disconnection and reconnection strategies on the client.

## Testing Node.js Applications

121. [ ] **Theory:** Unit Testing vs Integration Testing vs End-to-End Testing.
122. [ ] **Theory:** Introduction to Jest/Mocha/Chai.
123. [ ] **Practice:** Write a Unit Test for a simple utility function using Jest.
124. [ ] **Practice:** Mock a database dependency using `jest.mock`.
125. [ ] **Theory:** What is Supertest?
126. [ ] **Practice:** Write an Integration Test for an API endpoint using Supertest (test status code and response body).
127. [ ] **Practice:** Test an authenticated route (mock the auth middleware or generate a test token).
128. [ ] **Theory:** What is Code Coverage inside testing?
129. [ ] **Practice:** Setup a pre-commit hook (using `husky`) to run tests before committing code.
130. [ ] **Practice:** Debug a failing test using the Node.js debugger or VS Code debugger.

## Performance & Scalability

131. [ ] **Theory:** What is Clustering in Node.js? How to fork processes?
132. [ ] **Practice:** Use the `cluster` module to spawn a worker for each CPU core.
133. [ ] **Theory:** What is a Reverse Proxy (Nginx)? Why put it in front of Node?
134. [ ] **Practice:** Set up PM2 to manage Node processes (restart, logs, monitoring).
135. [ ] **Theory:** Identifying Memory Leaks. Tools (Chrome DevTools, heapdump).
136. [ ] **Practice:** Simulate a memory leak (global variable reference) and detect it.
137. [ ] **Theory:** Caching strategies (Client-side, Server-side, Database-side).
138. [ ] **Practice:** implement route-level caching using simple in-memory object (valid for 60s).
139. [ ] **Theory:** Explain Horizontal vs Vertical Scaling.
140. [ ] **Theory:** Load Balancing concepts.

## Architecture & Design Patterns

141. [ ] **Theory:** MVC Pattern in Node.js (Model-View-Controller).
142. [ ] **Practice:** Refactor a monolithic `app.js` into Controllers, Services, and Data Access Layers (DAL).
143. [ ] **Theory:** Dependency Injection (DI) in Node.js. Why is it useful?
144. [ ] **Practice:** Implement a simple DI container or use a library (e.g., InversifyJS basics).
145. [ ] **Theory:** Singleton Pattern in Node.js modules.
146. [ ] **Theory:** Factory functions vs Classes.
147. [ ] **Practice:** Implement the Repository Pattern to abstract database logic.
148. [ ] **Theory:** What is Microservices architecture? Node.js fit for it?
149. [ ] **Theory:** Message Queues (RabbitMQ, Kafka). Why use them?
150. [ ] **Practice:** Implement a simple producer/consumer setup using a Redis list as a queue.

## Debugging & Tooling

151. [ ] **Theory:** How to use the built-in `debugger`.
152. [ ] **Practice:** Debug a logic error using `node inspect`.
153. [ ] **Theory:** Logging best practices. Why `console.log` is bad in production?
154. [ ] **Practice:** Integrate a proper logger (Winston or Pino) with different log levels (info, error, debug).
155. [ ] **Practice:** Configure the logger to save logs to a file and rotate them.
156. [ ] **Theory:** Profiling Node.js applications.
157. [ ] **Practice:** Generate a Flame Graph or CPU profile.
158. [ ] **Practice:** Use `nodemon` for development and configure it to ignore test files.
159. [ ] **Theory:** Linting and Formatting (ESLint, Prettier).
160. [ ] **Practice:** Setup ESLint with the Airbnb style guide in a project.

## Advanced Topics & Internals II

161. [ ] **Theory:** Buffers in depth. Allocation, concatenation.
162. [ ] **Practice:** Convert an image file to Base64 string and back to binary using Buffer.
163. [ ] **Theory:** Character Sets and Encoding (UTF-8, ASCII).
164. [ ] **Theory:** `child_process` module: `spawn` vs `exec` vs `fork`.
165. [ ] **Practice:** Spawn a Python script from Node.js, pass data to it, and read the result.
166. [ ] **Theory:** What are "addons" in Node.js (C++ integration)?
167. [ ] **Theory:** How `util.promisify` works.
168. [ ] **Practice:** Convert legacy callback-based functions (e.g., `fs.readFile`) to Promises manually and via `util.promisify`.
169. [ ] **Theory:** What are 'vm' (Virtual Machine) module capabilities? Sandbox execution.
170. [ ] **Practice:** Execute a string of JavaScript code safely within a sandboxed context.

## GraphQL (Bonus/Related)

171. [ ] **Theory:** REST vs GraphQL. Pros and cons.
172. [ ] **Practice:** Set up a basic Apollo Server with Express.
173. [ ] **Practice:** Define a GraphQL Schema (typedefs) and Resolvers.
174. [ ] **Practice:** Implement a Query to fetch data and a Mutation to modify data.
175. [ ] **Theory:** Solving the N+1 problem in GraphQL (DataLoader).

## Deployment & DevOps

176. [ ] **Theory:** Why Dockerize a Node app?
177. [ ] **Practice:** Write a `Dockerfile` for a Node/Express app (optimized multi-stage build).
178. [ ] **Practice:** Use `docker-compose` to spin up Node App + MongoDB.
179. [ ] **Theory:** CI/CD pipelines (GitHub Actions, GitLab CI). basic steps for Node.
180. [ ] **Practice:** Create a GitHub Action that runs `npm test` on every push.
181. [ ] **Theory:** Environment Variables management in production (System envs vs .env).
182. [ ] **Theory:** Serverless (AWS Lambda, Vercel). How Node runs there.
183. [ ] **Practice:** Deploy a simple Express function to Vercel or similar platform.
184. [ ] **Theory:** Health Checks and graceful shutdown (handling SIGTERM/SIGINT).
185. [ ] **Practice:** Implement code to close DB connections and server when receiving SIGTERM.

## Open Source Codebase & Patterns

186. [ ] **Study:** **Express.js Source Code**: Look at `application.js` and `router/index.js` in the Express repo. How is the `app` object created?
187. [ ] **Study:** **Axios**: How does it handle Interceptors? (Chain of promises pattern).
188. [ ] **Study:** **Redux (if applicable) or similar state libs**: How middleware (thunk/saga) is composed. Same pattern applies to backend middleware chains.
189. [ ] **Study:** Analyse how `NestJS` uses decorators (pattern study).
190. [ ] **Study:** Look at `Socket.io` implementation of packet encoding.
191. [ ] **Practice:** Implement a "Plugin System" for your app where external modules can extend functionality (like Fastify plugins).
192. [ ] **Theory:** Dependency Inversion vs Dependency Injection.
193. [ ] **Practice:** Create a config manager that reads from environment, defaults, and command line args (Precedence pattern).
194. [ ] **Theory:** The "Circuit Breaker" pattern for microservices.
195. [ ] **Practice:** Implement a simple Circuit Breaker for an external API call.
196. [ ] **Theory:** Domain-Driven Design (DDD) basics in context of Node backend.
197. [ ] **Practice:** Structure a small feature using DDD (Domain, Infra, Application layers).
198. [ ] **Theory:** Event Sourcing concept.
199. [ ] **Practice:** Build a task queue using `Bull` or `BullMQ` (Redis based).
200. [ ] **Capstone:** **Build a Mini-Clone of a popular tool**: Create a simplified version of `git` or a `static site generator` using Node.js filesystem and CLI capabilities.
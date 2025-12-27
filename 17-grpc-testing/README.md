### gRPC Fundamentals

1. What is gRPC?
2. What does gRPC stand for?
3. Who developed gRPC?
4. What is RPC (Remote Procedure Call)?
5. What is the difference between RPC and REST?
6. What is the difference between gRPC and REST API?
7. When should you use gRPC?
8. When should you use REST instead of gRPC?
9. What is Protocol Buffers (protobuf)?
10. What is the relationship between gRPC and Protocol Buffers?
11. What is HTTP/2?
12. Why does gRPC use HTTP/2?
13. What are the benefits of HTTP/2 for gRPC?
14. What is binary serialization?
15. What is the difference between JSON and protobuf?
16. What is the performance difference between gRPC and REST?
17. What is multiplexing in HTTP/2?
18. What is server push in HTTP/2?
19. What is header compression in HTTP/2?
20. What are the main features of gRPC?
21. What is streaming in gRPC?
22. What types of streaming does gRPC support?
23. What is unary RPC?
24. What is server streaming RPC?
25. What is client streaming RPC?
26. What is bidirectional streaming RPC?
27. What is the difference between these streaming types?
28. What is a .proto file?
29. What is the protobuf syntax?
30. What is code generation in gRPC?

---

### Protocol Buffers

31. What is Protocol Buffers?
32. What is the file extension for Protocol Buffers?
33. What is the syntax version in protobuf?
34. What is `syntax = "proto3"`?
35. What is the difference between proto2 and proto3?
36. What is a message in protobuf?
37. What is a field in protobuf?
38. What is a field number?
39. Why are field numbers important?
40. Can you change field numbers?
41. What are the scalar types in protobuf?
42. What is the `string` type?
43. What is the `int32` type?
44. What is the `int64` type?
45. What is the `bool` type?
46. What is the `bytes` type?
47. What is the `float` type?
48. What is the `double` type?
49. What is an enum in protobuf?
50. 
```protobuf
syntax = "proto3";

message User {
  int32 id = 1;
  string name = 2;
  string email = 3;
  bool is_active = 4;
}
```
Explain this protobuf message.

51. What is a repeated field?
52. 
```protobuf
message User {
  int32 id = 1;
  string name = 2;
  repeated string tags = 3;
}
```
What does `repeated` mean?

53. What is a nested message?
54. What is the `oneof` keyword?
55. What is the `map` type in protobuf?
56. 
```protobuf
message User {
  int32 id = 1;
  map<string, string> metadata = 2;
}
```
Explain this map field.

57. What is a service in protobuf?
58. 
```protobuf
service UserService {
  rpc GetUser(GetUserRequest) returns (GetUserResponse);
  rpc CreateUser(CreateUserRequest) returns (CreateUserResponse);
}
```
Explain this service definition.

59. What is the protoc compiler?
60. How do you compile a .proto file?
61. What is code generation?
62. What languages does protobuf support?
63. How do you generate JavaScript/TypeScript code from protobuf?
64. What is the `google.protobuf.Empty` type?
65. What is the `google.protobuf.Timestamp` type?
66. What is the `google.protobuf.Any` type?
67. What is the `import` statement in protobuf?
68. What is the `package` keyword?
69. What is the `option` keyword?
70. What is backward compatibility in protobuf?

---

### gRPC Implementation in Node.js

71. What is the `@grpc/grpc-js` package?
72. What is the difference between `grpc` and `@grpc/grpc-js`?
73. How do you create a gRPC server in Node.js?
74. 
```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync('user.proto');
const userProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

server.addService(userProto.UserService.service, {
  getUser: (call, callback) => {
    const user = { id: call.request.id, name: 'John' };
    callback(null, user);
  }
});

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  server.start();
});
```
Explain this gRPC server implementation.

75. What is `protoLoader.loadSync()`?
76. What is `grpc.loadPackageDefinition()`?
77. What is `server.addService()`?
78. What is the callback pattern in gRPC handlers?
79. What is `grpc.ServerCredentials.createInsecure()`?
80. What is the difference between insecure and secure credentials?
81. How do you create a gRPC client?
82. 
```js
const client = new userProto.UserService(
  'localhost:50051',
  grpc.credentials.createInsecure()
);

client.getUser({ id: 1 }, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(response);
  }
});
```
Explain this gRPC client implementation.

83. What is the client callback pattern?
84. How do you handle errors in gRPC?
85. What are gRPC status codes?
86. What is `grpc.status.OK`?
87. What is `grpc.status.NOT_FOUND`?
88. What is `grpc.status.INVALID_ARGUMENT`?
89. What is `grpc.status.INTERNAL`?
90. What is `grpc.status.UNAUTHENTICATED`?
91. How do you return an error from a gRPC handler?
92. 
```js
callback({
  code: grpc.status.NOT_FOUND,
  message: 'User not found'
});
```
What does this do?

93. What is metadata in gRPC?
94. How do you send metadata from client?
95. How do you read metadata in server?
96. What is the use case for metadata?
97. How do you implement authentication with metadata?
98. What is a deadline in gRPC?
99. How do you set a deadline?
100. What happens when a deadline is exceeded?

---

### gRPC Streaming

101. What is server streaming?
102. How do you implement server streaming?
103. 
```protobuf
service UserService {
  rpc ListUsers(ListUsersRequest) returns (stream User);
}
```
What does this service do?

104. 
```js
listUsers: (call) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  
  users.forEach(user => {
    call.write(user);
  });
  
  call.end();
}
```
Explain this server streaming implementation.

105. What is `call.write()`?
106. What is `call.end()`?
107. How do you consume server streaming on the client?
108. 
```js
const call = client.listUsers({});

call.on('data', (user) => {
  console.log(user);
});

call.on('end', () => {
  console.log('Stream ended');
});

call.on('error', (error) => {
  console.error(error);
});
```
Explain this client streaming consumption.

109. What is client streaming?
110. How do you implement client streaming?
111. 
```protobuf
service UserService {
  rpc CreateUsers(stream CreateUserRequest) returns (CreateUsersResponse);
}
```
What does this service do?

112. 
```js
createUsers: (call, callback) => {
  const users = [];
  
  call.on('data', (request) => {
    users.push(request);
  });
  
  call.on('end', () => {
    callback(null, { count: users.length });
  });
}
```
Explain this client streaming implementation.

113. How do you send data in client streaming?
114. 
```js
const call = client.createUsers((error, response) => {
  console.log(response);
});

call.write({ name: 'John' });
call.write({ name: 'Jane' });
call.end();
```
Explain this client streaming usage.

115. What is bidirectional streaming?
116. How do you implement bidirectional streaming?
117. 
```protobuf
service ChatService {
  rpc Chat(stream ChatMessage) returns (stream ChatMessage);
}
```
What does this service do?

118. 
```js
chat: (call) => {
  call.on('data', (message) => {
    console.log('Received:', message);
    call.write({ text: `Echo: ${message.text}` });
  });
  
  call.on('end', () => {
    call.end();
  });
}
```
Explain this bidirectional streaming implementation.

119. What is the use case for bidirectional streaming?
120. What is the difference between WebSocket and gRPC bidirectional streaming?

---

### tRPC Fundamentals

121. What is tRPC?
122. What does tRPC stand for?
123. What is the main benefit of tRPC?
124. What is end-to-end type safety?
125. How does tRPC provide type safety?
126. What is the difference between tRPC and gRPC?
127. What is the difference between tRPC and REST?
128. When should you use tRPC?
129. When should you NOT use tRPC?
130. What is the requirement for using tRPC?
131. Can you use tRPC with non-TypeScript clients?
132. What is a tRPC router?
133. What is a tRPC procedure?
134. What is a query in tRPC?
135. What is a mutation in tRPC?
136. What is the difference between query and mutation?
137. What is tRPC context?
138. What is middleware in tRPC?
139. What is input validation in tRPC?
140. What is Zod?
141. How is Zod used with tRPC?
142. What is the tRPC client?
143. What is the tRPC server?
144. What transport does tRPC use?
145. Does tRPC use HTTP?
146. What is the tRPC protocol?
147. What is batching in tRPC?
148. What is the benefit of request batching?
149. What is the tRPC link?
150. What is the HTTP link?

---

### tRPC Implementation

151. How do you create a tRPC router?
152. 
```ts
import { initTRPC } from '@trpc/server';

const t = initTRPC.create();

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      return { id: input.id, name: 'John' };
    }),
  
  createUser: t.procedure
    .input(z.object({ name: z.string(), email: z.string() }))
    .mutation(({ input }) => {
      return { id: 1, ...input };
    })
});

export type AppRouter = typeof appRouter;
```
Explain this tRPC router.

153. What is `initTRPC.create()`?
154. What is `t.procedure`?
155. What is `.input()`?
156. What is `.query()`?
157. What is `.mutation()`?
158. What is the `AppRouter` type export?
159. How do you create a tRPC client?
160. 
```ts
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from './server';

const client = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});

const user = await client.getUser.query({ id: 1 });
const newUser = await client.createUser.mutate({ name: 'John', email: 'john@example.com' });
```
Explain this tRPC client usage.

161. What is `createTRPCProxyClient`?
162. What is `httpBatchLink`?
163. How does the client get type safety?
164. What is the proxy pattern in tRPC?
165. How do you use tRPC with Next.js?
166. What is the tRPC Next.js adapter?
167. 
```ts
// pages/api/trpc/[trpc].ts
import { createNextApiHandler } from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/router';

export default createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});
```
Explain this Next.js API route.

168. What is `createNextApiHandler`?
169. What is the `createContext` function?
170. How do you use tRPC in Next.js pages?
171. 
```tsx
import { trpc } from '../utils/trpc';

function UserPage() {
  const { data, isLoading } = trpc.getUser.useQuery({ id: 1 });
  
  if (isLoading) return <div>Loading...</div>;
  
  return <div>{data?.name}</div>;
}
```
Explain this React Query integration.

172. What is `trpc.getUser.useQuery`?
173. How does tRPC integrate with React Query?
174. What is the benefit of this integration?
175. How do you use mutations in tRPC?
176. 
```tsx
const createUser = trpc.createUser.useMutation();

const handleSubmit = async (data) => {
  await createUser.mutateAsync(data);
};
```
Explain this mutation usage.

177. What is `useMutation`?
178. What is `mutateAsync`?
179. How do you handle errors in tRPC?
180. What is tRPC error handling?
181. 
```ts
import { TRPCError } from '@trpc/server';

export const appRouter = t.router({
  getUser: t.procedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => {
      if (input.id < 0) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'Invalid user ID',
        });
      }
      return { id: input.id, name: 'John' };
    }),
});
```
Explain this error handling.

182. What is `TRPCError`?
183. What are the tRPC error codes?
184. What is the `BAD_REQUEST` code?
185. What is the `UNAUTHORIZED` code?
186. What is the `NOT_FOUND` code?
187. What is the `INTERNAL_SERVER_ERROR` code?
188. How do you implement authentication in tRPC?
189. What is tRPC middleware?
190. 
```ts
const isAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

const protectedProcedure = t.procedure.use(isAuthed);

export const appRouter = t.router({
  getProfile: protectedProcedure.query(({ ctx }) => {
    return ctx.user;
  }),
});
```
Explain this authentication middleware.

191. What is `t.middleware`?
192. What is `next()`?
193. What is `.use()`?
194. How do you create protected procedures?
195. What is context in tRPC?
196. 
```ts
export const createContext = async ({ req, res }) => {
  const token = req.headers.authorization?.split(' ')[1];
  const user = await getUserFromToken(token);
  
  return {
    user,
    req,
    res,
  };
};

const t = initTRPC.context<typeof createContext>().create();
```
Explain this context creation.

197. How do you access context in procedures?
198. What is the benefit of context?
199. What is input validation in tRPC?
200. How does Zod integrate with tRPC?

---

### Testing Fundamentals

201. What is software testing?
202. Why is testing important?
203. What is the testing pyramid?
204. What are the levels of the testing pyramid?
205. What is unit testing?
206. What is integration testing?
207. What is end-to-end (E2E) testing?
208. What is the difference between unit and integration testing?
209. What is the difference between integration and E2E testing?
210. What percentage of tests should be unit tests?
211. What percentage should be integration tests?
212. What percentage should be E2E tests?
213. What is Test-Driven Development (TDD)?
214. What is the TDD cycle?
215. What is Red-Green-Refactor?
216. What is Behavior-Driven Development (BDD)?
217. What is the difference between TDD and BDD?
218. What is a test case?
219. What is a test suite?
220. What is a test runner?
221. What is an assertion?
222. What is a mock?
223. What is a stub?
224. What is a spy?
225. What is the difference between mock, stub, and spy?
226. What is test coverage?
227. What is code coverage?
228. What is line coverage?
229. What is branch coverage?
230. What is function coverage?
231. What is statement coverage?
232. What is a good code coverage percentage?
233. Is 100% code coverage necessary?
234. What is the problem with focusing only on coverage?
235. What is a flaky test?
236. What causes flaky tests?
237. How do you fix flaky tests?
238. What is test isolation?
239. What is test independence?
240. Why should tests be independent?

---

### Testing Tools and Frameworks

241. What is Jest?
242. What is Mocha?
243. What is Jasmine?
244. What is Vitest?
245. What is the difference between Jest and Vitest?
246. When should you use Vitest?
247. What is Chai?
248. What is the relationship between Mocha and Chai?
249. What is an assertion library?
250. What is Sinon?
251. What does Sinon provide?
252. What is Testing Library?
253. What is React Testing Library?
254. What is the philosophy of Testing Library?
255. What is Enzyme?
256. What is the difference between React Testing Library and Enzyme?
257. Which is recommended: RTL or Enzyme?
258. What is Cypress?
259. What is Playwright?
260. What is Selenium?
261. What is the difference between Cypress and Playwright?
262. What is Puppeteer?
263. What is the difference between Playwright and Puppeteer?
264. What is Supertest?
265. What is MSW (Mock Service Worker)?
266. What is the benefit of MSW?
267. What is Storybook?
268. How is Storybook related to testing?
269. What is visual regression testing?
270. What is snapshot testing?

---

### Jest Fundamentals

271. What is Jest?
272. Who created Jest?
273. What are the main features of Jest?
274. What is zero configuration in Jest?
275. How do you install Jest?
276. How do you run Jest tests?
277. What is the `test()` function?
278. What is the `it()` function?
279. What is the difference between `test()` and `it()`?
280. 
```js
test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});
```
Explain this test.

281. What is `expect()`?
282. What is `toBe()`?
283. What is the difference between `toBe()` and `toEqual()`?
284. 
```js
expect({ name: 'John' }).toBe({ name: 'John' }); // Fails
expect({ name: 'John' }).toEqual({ name: 'John' }); // Passes
```
Why does the first fail?

285. What is `toStrictEqual()`?
286. What is `toBeNull()`?
287. What is `toBeUndefined()`?
288. What is `toBeDefined()`?
289. What is `toBeTruthy()`?
290. What is `toBeFalsy()`?
291. What is `toBeGreaterThan()`?
292. What is `toContain()`?
293. What is `toMatch()`?
294. What is `toThrow()`?
295. 
```js
expect(() => {
  throw new Error('Error');
}).toThrow('Error');
```
Explain this test.

296. What is `describe()`?
297. What is the purpose of `describe()`?
298. 
```js
describe('Calculator', () => {
  test('adds numbers', () => {
    expect(1 + 2).toBe(3);
  });
  
  test('subtracts numbers', () => {
    expect(5 - 2).toBe(3);
  });
});
```
Explain this test structure.

299. What is `beforeEach()`?
300. What is `afterEach()`?
301. What is `beforeAll()`?
302. What is `afterAll()`?
303. 
```js
describe('Database', () => {
  beforeAll(() => {
    // Connect to database
  });
  
  afterAll(() => {
    // Disconnect from database
  });
  
  beforeEach(() => {
    // Clear database
  });
  
  test('creates user', () => {
    // Test
  });
});
```
Explain this setup/teardown pattern.

304. What is the execution order of these hooks?
305. What is `test.only()`?
306. What is `test.skip()`?
307. What is `test.todo()`?
308. When should you use `test.only()`?
309. What is async testing in Jest?
310. 
```js
test('fetches user data', async () => {
  const data = await fetchUser(1);
  expect(data.name).toBe('John');
});
```
How do you test async code?

311. What is `resolves` matcher?
312. What is `rejects` matcher?
313. 
```js
test('fetches user', () => {
  return expect(fetchUser(1)).resolves.toEqual({ name: 'John' });
});

test('handles error', () => {
  return expect(fetchUser(-1)).rejects.toThrow('Invalid ID');
});
```
Explain these async tests.

314. What is Jest mocking?
315. What is `jest.fn()`?
316. 
```js
const mockFn = jest.fn();
mockFn('hello');
mockFn('world');

expect(mockFn).toHaveBeenCalledTimes(2);
expect(mockFn).toHaveBeenCalledWith('hello');
```
Explain this mock function.

317. What is `toHaveBeenCalled()`?
318. What is `toHaveBeenCalledTimes()`?
319. What is `toHaveBeenCalledWith()`?
320. What is `toHaveBeenLastCalledWith()`?

---

### Jest Mocking

321. How do you mock a module in Jest?
322. What is `jest.mock()`?
323. 
```js
jest.mock('./api');

import { fetchUser } from './api';

test('fetches user', async () => {
  fetchUser.mockResolvedValue({ name: 'John' });
  
  const user = await fetchUser(1);
  expect(user.name).toBe('John');
});
```
Explain this module mock.

324. What is `mockResolvedValue()`?
325. What is `mockRejectedValue()`?
326. What is `mockReturnValue()`?
327. What is `mockImplementation()`?
328. 
```js
const mockFn = jest.fn().mockImplementation((x) => x * 2);
expect(mockFn(5)).toBe(10);
```
Explain this mock implementation.

329. What is `mockReturnValueOnce()`?
330. 
```js
const mockFn = jest.fn()
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(2)
  .mockReturnValue(3);

expect(mockFn()).toBe(1);
expect(mockFn()).toBe(2);
expect(mockFn()).toBe(3);
expect(mockFn()).toBe(3);
```
Explain this behavior.

331. How do you mock a specific function from a module?
332. 
```js
jest.mock('./api', () => ({
  fetchUser: jest.fn(),
  createUser: jest.fn(),
}));
```
What does this do?

333. What is `jest.spyOn()`?
334. 
```js
const spy = jest.spyOn(console, 'log');
console.log('hello');
expect(spy).toHaveBeenCalledWith('hello');
spy.mockRestore();
```
Explain this spy usage.

335. What is `mockRestore()`?
336. What is the difference between `jest.fn()` and `jest.spyOn()`?
337. How do you mock timers in Jest?
338. What is `jest.useFakeTimers()`?
339. What is `jest.advanceTimersByTime()`?
340. 
```js
jest.useFakeTimers();

test('calls callback after 1 second', () => {
  const callback = jest.fn();
  setTimeout(callback, 1000);
  
  jest.advanceTimersByTime(1000);
  
  expect(callback).toHaveBeenCalled();
});
```
Explain this timer test.

341. What is `jest.runAllTimers()`?
342. What is `jest.runOnlyPendingTimers()`?
343. What is `jest.clearAllTimers()`?
344. How do you mock dates in Jest?
345. What is `jest.setSystemTime()`?
346. How do you mock environment variables?
347. What is `process.env` mocking?
348. How do you mock fetch in Jest?
349. What is `jest.resetModules()`?
350. What is `jest.clearAllMocks()`?

---

### React Testing Library

351. What is React Testing Library?
352. What is the philosophy of React Testing Library?
353. What does "test how users interact" mean?
354. What is the difference between testing implementation and behavior?
355. How do you install React Testing Library?
356. What is the `render()` function?
357. 
```jsx
import { render, screen } from '@testing-library/react';

test('renders hello world', () => {
  render(<div>Hello World</div>);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});
```
Explain this test.

358. What is `screen`?
359. What is `getByText()`?
360. What is `getByRole()`?
361. What is `getByLabelText()`?
362. What is `getByPlaceholderText()`?
363. What is `getByTestId()`?
364. What is the difference between `getBy`, `queryBy`, and `findBy`?
365. When should you use `getBy`?
366. When should you use `queryBy`?
367. When should you use `findBy`?
368. 
```jsx
// getBy - throws error if not found
const element = screen.getByText('Hello');

// queryBy - returns null if not found
const element = screen.queryByText('Hello');

// findBy - async, waits for element
const element = await screen.findByText('Hello');
```
Explain these query differences.

369. What is `getAllByText()`?
370. What is `queryAllByText()`?
371. What is `findAllByText()`?
372. What is `toBeInTheDocument()`?
373. What is `toHaveTextContent()`?
374. What is `toHaveValue()`?
375. What is `toBeDisabled()`?
376. What is `toBeVisible()`?
377. What is `toHaveClass()`?
378. How do you test user interactions?
379. What is `@testing-library/user-event`?
380. 
```jsx
import userEvent from '@testing-library/user-event';

test('clicks button', async () => {
  const user = userEvent.setup();
  render(<button onClick={handleClick}>Click me</button>);
  
  await user.click(screen.getByRole('button'));
  
  expect(handleClick).toHaveBeenCalled();
});
```
Explain this interaction test.

381. What is `userEvent.setup()`?
382. What is `user.click()`?
383. What is `user.type()`?
384. What is `user.clear()`?
385. What is `user.selectOptions()`?
386. What is `user.upload()`?
387. 
```jsx
test('types in input', async () => {
  const user = userEvent.setup();
  render(<input placeholder="Name" />);
  
  await user.type(screen.getByPlaceholderText('Name'), 'John');
  
  expect(screen.getByPlaceholderText('Name')).toHaveValue('John');
});
```
Explain this typing test.

388. What is `fireEvent`?
389. What is the difference between `fireEvent` and `userEvent`?
390. Which should you use: `fireEvent` or `userEvent`?
391. How do you test async components?
392. What is `waitFor()`?
393. 
```jsx
test('loads data', async () => {
  render(<UserProfile userId={1} />);
  
  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
  });
});
```
Explain this async test.

394. What is `waitForElementToBeRemoved()`?
395. How do you test forms?
396. How do you test conditional rendering?
397. How do you test lists?
398. How do you test error states?
399. How do you test loading states?
400. How do you mock API calls in React tests?

---

### Testing React Components

401. How do you test props?
402. 
```jsx
function Greeting({ name }) {
  return <h1>Hello, {name}</h1>;
}

test('renders with name prop', () => {
  render(<Greeting name="John" />);
  expect(screen.getByText('Hello, John')).toBeInTheDocument();
});
```
Explain this prop test.

403. How do you test state changes?
404. 
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

test('increments counter', async () => {
  const user = userEvent.setup();
  render(<Counter />);
  
  expect(screen.getByText('0')).toBeInTheDocument();
  
  await user.click(screen.getByRole('button'));
  
  expect(screen.getByText('1')).toBeInTheDocument();
});
```
Explain this state test.

405. How do you test hooks?
406. What is `@testing-library/react-hooks`?
407. What is `renderHook()`?
408. 
```jsx
import { renderHook, act } from '@testing-library/react';

test('useCounter hook', () => {
  const { result } = renderHook(() => useCounter());
  
  expect(result.current.count).toBe(0);
  
  act(() => {
    result.current.increment();
  });
  
  expect(result.current.count).toBe(1);
});
```
Explain this hook test.

409. What is `act()`?
410. When do you need to use `act()`?
411. How do you test custom hooks with dependencies?
412. How do you test context?
413. 
```jsx
test('uses theme context', () => {
  render(
    <ThemeProvider value="dark">
      <ThemedButton />
    </ThemeProvider>
  );
  
  expect(screen.getByRole('button')).toHaveClass('dark');
});
```
Explain this context test.

414. How do you test Redux?
415. What is the Redux testing approach?
416. How do you provide a store to tests?
417. 
```jsx
import { Provider } from 'react-redux';
import { createStore } from 'redux';

test('renders with Redux', () => {
  const store = createStore(reducer, initialState);
  
  render(
    <Provider store={store}>
      <ConnectedComponent />
    </Provider>
  );
});
```
Explain this Redux test.

418. How do you test Redux actions?
419. How do you test Redux reducers?
420. How do you test Redux selectors?
421. How do you test React Router?
422. 
```jsx
import { MemoryRouter } from 'react-router-dom';

test('navigates to user page', async () => {
  const user = userEvent.setup();
  
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  
  await user.click(screen.getByText('Users'));
  
  expect(screen.getByText('User List')).toBeInTheDocument();
});
```
Explain this routing test.

423. What is `MemoryRouter`?
424. How do you test with initial routes?
425. How do you test route parameters?
426. How do you test error boundaries?
427. 
```jsx
test('catches errors', () => {
  const spy = jest.spyOn(console, 'error').mockImplementation();
  
  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );
  
  expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  
  spy.mockRestore();
});
```
Explain this error boundary test.

428. How do you test portals?
429. How do you test refs?
430. How do you test lazy-loaded components?

---

### Testing Node.js/Express

431. How do you test Express routes?
432. What is Supertest?
433. How do you install Supertest?
434. 
```js
const request = require('supertest');
const app = require('./app');

test('GET /users returns users', async () => {
  const response = await request(app)
    .get('/users')
    .expect(200);
  
  expect(response.body).toHaveLength(2);
});
```
Explain this API test.

435. What is `request(app)`?
436. What is `.expect(200)`?
437. How do you test POST requests?
438. 
```js
test('POST /users creates user', async () => {
  const response = await request(app)
    .post('/users')
    .send({ name: 'John', email: 'john@example.com' })
    .expect(201);
  
  expect(response.body.name).toBe('John');
});
```
Explain this POST test.

439. What is `.send()`?
440. How do you test authentication?
441. 
```js
test('requires authentication', async () => {
  await request(app)
    .get('/profile')
    .expect(401);
});

test('allows authenticated user', async () => {
  await request(app)
    .get('/profile')
    .set('Authorization', 'Bearer token')
    .expect(200);
});
```
Explain these auth tests.

442. What is `.set()`?
443. How do you test file uploads?
444. What is `.attach()`?
445. How do you test cookies?
446. How do you test database operations?
447. What is the test database strategy?
448. Should you use the same database for tests?
449. What is an in-memory database?
450. How do you use SQLite for testing?
451. 
```js
beforeAll(async () => {
  await db.connect();
});

afterAll(async () => {
  await db.disconnect();
});

beforeEach(async () => {
  await db.clear();
});

test('creates user in database', async () => {
  const user = await User.create({ name: 'John' });
  expect(user.id).toBeDefined();
});
```
Explain this database test setup.

452. How do you mock database calls?
453. How do you test Prisma?
454. What is `@prisma/client` mocking?
455. 
```js
jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    user: {
      create: jest.fn(),
      findMany: jest.fn(),
    },
  })),
}));
```
Explain this Prisma mock.

456. How do you test MongoDB with Mongoose?
457. What is `mongodb-memory-server`?
458. How do you test middleware?
459. 
```js
test('auth middleware blocks unauthenticated', () => {
  const req = { headers: {} };
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
  const next = jest.fn();
  
  authMiddleware(req, res, next);
  
  expect(res.status).toHaveBeenCalledWith(401);
  expect(next).not.toHaveBeenCalled();
});
```
Explain this middleware test.

460. How do you test error handling middleware?

---

### Testing Next.js Applications

461. How do you test Next.js pages?
462. What is the difference between testing Next.js and React?
463. How do you test getServerSideProps?
464. 
```jsx
import { render, screen } from '@testing-library/react';

test('renders page with props', () => {
  const props = { user: { name: 'John' } };
  render(<UserPage {...props} />);
  
  expect(screen.getByText('John')).toBeInTheDocument();
});
```
Is this sufficient for testing SSR?

465. How do you test getStaticProps?
466. How do you test API routes?
467. 
```js
import handler from './pages/api/users';

test('GET /api/users returns users', async () => {
  const req = { method: 'GET' };
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  
  await handler(req, res);
  
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalled();
});
```
Explain this API route test.

468. How do you test Next.js middleware?
469. How do you test App Router components?
470. What is the difference between testing Pages Router and App Router?
471. How do you test Server Components?
472. Can you use React Testing Library for Server Components?
473. How do you test Client Components?
474. How do you test Server Actions?
475. 
```jsx
test('server action creates user', async () => {
  const formData = new FormData();
  formData.append('name', 'John');
  
  const result = await createUser(formData);
  
  expect(result.success).toBe(true);
});
```
Explain this Server Action test.

476. How do you test Next.js navigation?
477. What is `next/router` mocking?
478. 
```js
jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

test('navigates on click', async () => {
  const push = jest.fn();
  useRouter.mockReturnValue({ push });
  
  const user = userEvent.setup();
  render(<NavigationButton />);
  
  await user.click(screen.getByRole('button'));
  
  expect(push).toHaveBeenCalledWith('/users');
});
```
Explain this navigation test.

479. How do you test Next.js Image component?
480. How do you test Next.js Link component?
481. How do you test dynamic routes?
482. How do you test catch-all routes?
483. How do you test internationalization (i18n)?
484. How do you test Next.js authentication?
485. How do you test NextAuth.js?
486. 
```js
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

test('shows profile when authenticated', () => {
  useSession.mockReturnValue({
    data: { user: { name: 'John' } },
    status: 'authenticated',
  });
  
  render(<Profile />);
  
  expect(screen.getByText('John')).toBeInTheDocument();
});
```
Explain this NextAuth test.

487. How do you test environment variables in Next.js?
488. How do you test Next.js configuration?
489. How do you test custom _app.js?
490. How do you test custom _document.js?

---

### Playwright Fundamentals

491. What is Playwright?
492. Who created Playwright?
493. What browsers does Playwright support?
494. What is the difference between Playwright and Cypress?
495. What is the difference between Playwright and Selenium?
496. What are the advantages of Playwright?
497. What is auto-waiting in Playwright?
498. What is the Playwright Test runner?
499. How do you install Playwright?
500. 
```bash
npm init playwright@latest
```
What does this command do?

501. What is the Playwright configuration file?
502. What is `playwright.config.ts`?
503. 
```ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:3000',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
```
Explain this configuration.

504. What is `testDir`?
505. What is `baseURL`?
506. What is the `use` option?
507. How do you write a Playwright test?
508. 
```ts
import { test, expect } from '@playwright/test';

test('homepage has title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Home/);
});
```
Explain this test.

509. What is the `page` fixture?
510. What is `page.goto()`?
511. What is `expect(page).toHaveTitle()`?
512. How do you interact with elements?
513. 
```ts
test('clicks button', async ({ page }) => {
  await page.goto('/');
  await page.click('button');
  await expect(page.locator('.result')).toHaveText('Clicked');
});
```
Explain this interaction.

514. What is `page.click()`?
515. What is `page.locator()`?
516. What is `toHaveText()`?
517. How do you fill forms?
518. 
```ts
test('submits form', async ({ page }) => {
  await page.goto('/login');
  await page.fill('input[name="email"]', 'user@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('/dashboard');
});
```
Explain this form test.

519. What is `page.fill()`?
520. What is `toHaveURL()`?
521. How do you select options?
522. What is `page.selectOption()`?
523. How do you upload files?
524. What is `page.setInputFiles()`?
525. How do you handle navigation?
526. What is `page.waitForNavigation()`?
527. How do you wait for elements?
528. What is `page.waitForSelector()`?
529. What is auto-waiting?
530. Do you need explicit waits in Playwright?

---

### Advanced Playwright

531. What are Playwright locators?
532. What is `page.locator()`?
533. What is `page.getByRole()`?
534. What is `page.getByText()`?
535. What is `page.getByLabel()`?
536. What is `page.getByPlaceholder()`?
537. What is `page.getByTestId()`?
538. 
```ts
await page.getByRole('button', { name: 'Submit' }).click();
await page.getByLabel('Email').fill('user@example.com');
await page.getByPlaceholder('Enter name').fill('John');
```
Explain these locator strategies.

539. Which locator strategy is recommended?
540. What is the locator priority?
541. How do you chain locators?
542. 
```ts
const form = page.locator('form');
await form.locator('input[name="email"]').fill('user@example.com');
```
What does this do?

543. What are Playwright assertions?
544. What is `toBeVisible()`?
545. What is `toBeHidden()`?
546. What is `toBeEnabled()`?
547. What is `toBeDisabled()`?
548. What is `toHaveValue()`?
549. What is `toHaveCount()`?
550. What is `toContainText()`?
551. How do you test multiple browsers?
552. What is the `projects` configuration?
553. 
```ts
export default defineConfig({
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
```
What does this configuration do?

554. How do you test mobile browsers?
555. What is device emulation?
556. 
```ts
use: {
  ...devices['iPhone 13'],
}
```
What does this do?

557. How do you take screenshots?
558. What is `page.screenshot()`?
559. How do you record videos?
560. What is the video configuration?
561. How do you test authentication?
562. What is the authentication storage?
563. 
```ts
test.use({
  storageState: 'auth.json',
});
```
What does this do?

564. How do you save authentication state?
565. 
```ts
await page.context().storageState({ path: 'auth.json' });
```
What does this do?

566. What is test parallelization in Playwright?
567. How many workers does Playwright use by default?
568. How do you configure workers?
569. What is test sharding?
570. How do you run tests in CI?
571. What is the Playwright Docker image?
572. How do you debug Playwright tests?
573. What is `page.pause()`?
574. What is the Playwright Inspector?
575. What is trace viewer?
576. How do you generate traces?
577. 
```ts
use: {
  trace: 'on-first-retry',
}
```
What does this do?

578. How do you view traces?
579. What is codegen in Playwright?
580. How do you generate test code?

---

### Testing in Monorepos

581. What is a monorepo?
582. What are the challenges of testing in monorepos?
583. What is workspace testing?
584. How do you run tests for a specific package?
585. 
```bash
npm test --workspace=packages/ui
```
What does this do?

586. How do you run tests for all packages?
587. What is the test configuration in monorepos?
588. Should each package have its own Jest config?
589. What is a shared Jest config?
590. 
```js
// jest.config.base.js
module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
};

// packages/api/jest.config.js
const base = require('../../jest.config.base');

module.exports = {
  ...base,
  displayName: 'api',
  testMatch: ['**/*.test.js'],
};
```
Explain this shared config pattern.

591. How do you handle dependencies between packages in tests?
592. What is the test execution order in monorepos?
593. How do you test package interdependencies?
594. What is Turborepo?
595. How does Turborepo help with testing?
596. What is test caching in Turborepo?
597. 
```json
{
  "pipeline": {
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    }
  }
}
```
Explain this Turborepo pipeline.

598. What is Nx?
599. How does Nx help with testing?
600. What is affected testing in Nx?
601. 
```bash
nx affected:test
```
What does this command do?

602. How does Nx determine affected projects?
603. What is the benefit of affected testing?
604. How do you configure code coverage in monorepos?
605. Should you have separate coverage reports?
606. How do you aggregate coverage across packages?
607. What is Lerna?
608. How do you run tests with Lerna?
609. 
```bash
lerna run test
```
What does this do?

610. What is the `--scope` flag in Lerna?
611. How do you handle shared test utilities?
612. Where should you put shared test helpers?
613. How do you mock packages in monorepos?
614. What is the challenge of mocking workspace packages?
615. How do you test E2E in monorepos?
616. Should E2E tests be in a separate package?
617. How do you handle test databases in monorepos?
618. What is the CI strategy for monorepo testing?
619. How do you parallelize tests in CI for monorepos?
620. What is the matrix strategy in GitHub Actions?

---

### Advanced Testing Concepts

621. What is integration testing in full-stack apps?
622. How do you test the full MERN stack?
623. What is the testing strategy for MERN apps?
624. How do you set up a test environment for MERN?
625. 
```js
// Test setup for MERN
beforeAll(async () => {
  // Start MongoDB
  await mongoose.connect(process.env.MONGO_TEST_URL);
  
  // Start Express server
  server = app.listen(3001);
});

afterAll(async () => {
  await mongoose.connection.close();
  server.close();
});
```
Explain this MERN test setup.

626. How do you test MongoDB operations?
627. How do you test Express routes with MongoDB?
628. How do you test React components that fetch from Express?
629. What is MSW (Mock Service Worker)?
630. How does MSW work?
631. 
```js
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```
Explain this MSW setup.

632. What is the benefit of MSW over mocking fetch?
633. How do you test error scenarios with MSW?
634. How do you test loading states with MSW?
635. What is contract testing?
636. What is Pact?
637. How does contract testing work?
638. What is consumer-driven contract testing?
639. What is the difference between integration and contract testing?
640. What is snapshot testing?
641. How does snapshot testing work in Jest?
642. 
```js
test('renders correctly', () => {
  const tree = renderer.create(<Button>Click me</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
```
Explain this snapshot test.

643. When should you use snapshot testing?
644. When should you NOT use snapshot testing?
645. What is the problem with snapshot testing?
646. How do you update snapshots?
647. What is visual regression testing?
648. What is Percy?
649. What is Chromatic?
650. How does visual regression testing work?
651. What is accessibility testing?
652. What is axe-core?
653. What is jest-axe?
654. 
```js
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

test('has no accessibility violations', async () => {
  const { container } = render(<App />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```
Explain this accessibility test.

655. What is performance testing?
656. How do you test performance in React?
657. What is the React Profiler?
658. What is load testing?
659. What is stress testing?
660. What is k6?

---

### Testing Best Practices

661. What is the AAA pattern in testing?
662. What does AAA stand for?
663. 
```js
test('creates user', async () => {
  // Arrange
  const userData = { name: 'John', email: 'john@example.com' };
  
  // Act
  const user = await createUser(userData);
  
  // Assert
  expect(user.name).toBe('John');
});
```
Explain the AAA pattern.

664. What is the Given-When-Then pattern?
665. How is it different from AAA?
666. What is test naming convention?
667. How should you name your tests?
668. What makes a good test name?
669. 
```js
// Bad
test('test 1', () => {});

// Good
test('creates user with valid data', () => {});
test('throws error when email is invalid', () => {});
```
Why is the second approach better?

670. What is test organization?
671. How should you structure test files?
672. Should tests be in the same directory as source code?
673. What is the `__tests__` directory convention?
674. What is the `.test.js` vs `.spec.js` convention?
675. What is test data management?
676. What are test fixtures?
677. How do you create test data?
678. What is a factory pattern for test data?
679. 
```js
function createUser(overrides = {}) {
  return {
    id: 1,
    name: 'John',
    email: 'john@example.com',
    ...overrides,
  };
}

test('updates user email', () => {
  const user = createUser({ email: 'new@example.com' });
  expect(user.email).toBe('new@example.com');
});
```
Explain this factory pattern.

680. What is the builder pattern for test data?
681. What is test isolation?
682. Why is test isolation important?
683. How do you ensure test isolation?
684. What is test pollution?
685. How do you prevent test pollution?
686. What is the problem with shared state?
687. What is test determinism?
688. What makes a test non-deterministic?
689. How do you make tests deterministic?
690. What is the problem with random data in tests?
691. What is the problem with time-dependent tests?
692. How do you test code that uses `Date.now()`?
693. What is test maintainability?
694. How do you make tests maintainable?
695. What is the DRY principle in testing?
696. Should you apply DRY to tests?
697. What is the trade-off between DRY and test clarity?
698. What is test documentation?
699. Do tests serve as documentation?
700. How do you write self-documenting tests?

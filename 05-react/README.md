### React Fundamentals

1. What is React? Is it a library or a framework? What problems does it solve?
2. What is the Virtual DOM? How does it differ from the Real DOM?
3. Explain the reconciliation algorithm in React. How does React decide what to update?
4. What is JSX? Is it mandatory to use JSX in React?
5. What happens when you write JSX? How does it get converted to JavaScript?
6. What is the difference between `React.createElement()` and JSX?
7. What are Components in React? What are the two main types?
8. What is the difference between Functional Components and Class Components?
9. Why are Functional Components preferred over Class Components in modern React?
10. What is `props` in React? How do you pass data from parent to child components?
11. What is `props.children` and when would you use it?
12. Are props mutable or immutable? Why?
13. What is `state` in React? How is it different from `props`?
14. What is the difference between controlled and uncontrolled components?
15. What are "keys" in React lists? Why are they important?
16. Why should you avoid using array index as a key?
17. What is the difference between `state` and regular JavaScript variables?
18. What happens when you call `setState()`? Is it synchronous or asynchronous?
19. Can you modify state directly like `this.state.count = 5`? Why or why not?
20. What is the purpose of the `constructor()` in a class component?
21. What is `super(props)` and why do we need to call it?
22. What are Synthetic Events in React?
23. How is event handling different in React compared to vanilla JavaScript?
24. What is event delegation and does React use it?
25. How do you prevent default behavior in React events?
26. What is the difference between `onClick={handleClick}` and `onClick={handleClick()}`?
27. How do you pass arguments to an event handler?
28. What is "lifting state up" in React? Give an example scenario.
29. What is prop drilling? What problems does it cause?
30. What are fragments in React? Why would you use `<React.Fragment>` or `<>`?

---

### React Hooks

31. What are React Hooks? Why were they introduced?
32. What are the rules of Hooks? (Where can you call them?)
33. What is the `useState` hook? How does it work?
34. 
```jsx
const [count, setCount] = useState(0);
setCount(count + 1);
setCount(count + 1);
```
What will be the final value of `count` and why?

35. How do you update state based on the previous state value?
36. What is the `useEffect` hook? What does it replace from class components?
37. When does `useEffect` run? Explain the execution timing.
38. What is the dependency array in `useEffect`? What happens if you:
    - Don't provide it
    - Provide an empty array `[]`
    - Provide specific dependencies `[count, name]`
39. How do you perform cleanup in `useEffect`? Give an example (e.g., removing event listeners).
40. What is the `useContext` hook? How does it help avoid prop drilling?
41. How do you create and use a Context in React?
42. What is the `useReducer` hook? When would you use it instead of `useState`?
43. What is the difference between `useReducer` and `useState`?
44. What is the `useRef` hook? What are its common use cases?
45. What is the difference between `useRef` and `useState`?
46. Does changing a `ref.current` value trigger a re-render?
47. What is the `useMemo` hook? When should you use it?
48. What is the `useCallback` hook? How is it different from `useMemo`?
49. When should you use `useMemo` and `useCallback`? Can they cause performance issues if overused?
50. What is the `useLayoutEffect` hook? How is it different from `useEffect`?
51. What is the `useImperativeHandle` hook? When would you use it?
52. What is the `useDebugValue` hook?
53. Can you create custom hooks? What are the naming conventions?
54. 
```jsx
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}
```
Is this a valid custom hook? How would you use it?

55. What is the `useId` hook introduced in React 18?

---

### Component Lifecycle (Class Components)

56. What are the three main phases of a React component lifecycle?
57. Name the lifecycle methods in the Mounting phase.
58. Name the lifecycle methods in the Updating phase.
59. Name the lifecycle methods in the Unmounting phase.
60. What is `componentDidMount()` used for? What is its equivalent in functional components?
61. What is `componentDidUpdate()`? What parameters does it receive?
62. What is `componentWillUnmount()` used for? Give examples.
63. What is `shouldComponentUpdate()`? How can it optimize performance?
64. What is `getDerivedStateFromProps()`? When should you use it (or avoid it)?
65. What is `getSnapshotBeforeUpdate()`? Give a use case.
66. What is `componentDidCatch()` and how does it relate to Error Boundaries?
67. What are Error Boundaries? Can you create them with functional components?
68. How do you handle errors in functional components?

---

### Advanced React Concepts

69. What is React.memo()? How does it work?
70. What is the difference between `React.memo()` and `useMemo()`?
71. What is PureComponent? How is it different from a regular Component?
72. What is the difference between shallow comparison and deep comparison?
73. What are Higher-Order Components (HOC)? Give an example.
74. What are Render Props? Give an example.
75. What is the difference between HOC and Render Props?
76. What are Portals in React? When would you use them?
77. How do you create a Portal? What is `ReactDOM.createPortal()`?
78. What is code splitting in React?
79. What is `React.lazy()` and how does it work?
80. What is `Suspense` component? How do you use it with `React.lazy()`?
81. What is the difference between `React.lazy()` and dynamic `import()`?
82. What is Server-Side Rendering (SSR)? What are its benefits?
83. What is Static Site Generation (SSG)?
84. What is the difference between SSR, SSG, and Client-Side Rendering (CSR)?
85. What is hydration in React?
86. What is Concurrent Rendering in React 18?
87. What are Transitions in React 18? (`useTransition`, `startTransition`)
88. What is the `useDeferredValue` hook in React 18?
89. What is Automatic Batching in React 18?
90. What is the difference between batching in React 17 and React 18?

---

### React Router

91. What is React Router? Why do we need it?
92. What is the difference between `BrowserRouter` and `HashRouter`?
93. What is the difference between `Link` and `NavLink`?
94. How do you navigate programmatically in React Router v6?
95. What is the `useNavigate` hook?
96. What is the `useParams` hook? When would you use it?
97. What is the `useLocation` hook?
98. What is the `useSearchParams` hook?
99. How do you create nested routes in React Router v6?
100. What is the `Outlet` component?
101. How do you implement protected/private routes?
102. What is the difference between `<Route path="/user/:id">` and `<Route path="/user/*">`?
103. How do you handle 404 (Not Found) pages in React Router?
104. What is the difference between `<Navigate>` and `useNavigate()`?
105. What are route loaders and actions in React Router v6.4+?

---

### State Management

106. What is state management? Why do we need it in large applications?
107. What are the different ways to manage state in React?
108. What is Redux? What problem does it solve?
109. What are the three core principles of Redux?
110. What is a Redux store?
111. What is an action in Redux?
112. What is an action creator?
113. What is a reducer in Redux? What rules must it follow?
114. What is the difference between `state` and `store` in Redux?
115. What is a dispatch in Redux?
116. What is middleware in Redux? Give examples (redux-thunk, redux-saga).
117. What is Redux Thunk? When would you use it?
118. What is the difference between synchronous and asynchronous actions in Redux?
119. What is Redux Toolkit (RTK)? Why was it created?
120. What is `createSlice` in Redux Toolkit?
121. What is `configureStore` in Redux Toolkit?
122. What is RTK Query? How does it simplify data fetching?
123. What is Zustand? How is it different from Redux?
124. What is Recoil? What are atoms and selectors?
125. What is Jotai? How does it differ from Recoil?
126. What is MobX? How does it differ from Redux?
127. What is the Context API? Can it replace Redux?
128. What are the performance implications of using Context for global state?
129. When should you use Context vs Redux vs other state management libraries?
130. What is the Flux architecture pattern?

---

### Forms & Validation

131. How do you handle form inputs in React?
132. What is the difference between controlled and uncontrolled form inputs?
133. When would you use an uncontrolled component with `ref`?
134. How do you handle multiple input fields in a single form?
135. What is Formik? What problems does it solve?
136. What is React Hook Form? How is it different from Formik?
137. What is Yup? How do you use it for form validation?
138. What is Zod? How does it compare to Yup?
139. How do you handle file uploads in React?
140. How do you implement debouncing for search inputs in React?

---

### Performance Optimization

141. What are the common performance issues in React applications?
142. How do you identify performance bottlenecks in React?
143. What is the React DevTools Profiler? How do you use it?
144. What causes unnecessary re-renders in React?
145. How can you prevent unnecessary re-renders?
146. What is the purpose of `React.memo()`?
147. When should you use `useCallback`?
148. When should you use `useMemo`?
149. What is the difference between memoization and caching?
150. What is lazy loading? How do you implement it in React?
151. What is virtualization? What libraries help with it (react-window, react-virtualized)?
152. What is the difference between `key` and `index` when rendering lists?
153. How do you optimize images in React applications?
154. What is bundle size optimization? What tools can help (webpack-bundle-analyzer)?
155. What is tree shaking?
156. What is code splitting and how does it improve performance?
157. What are Web Vitals (LCP, FID, CLS)? How do they relate to React performance?
158. What is the `useTransition` hook and how does it help with performance?
159. What is the difference between `startTransition` and `setTimeout`?
160. How does Concurrent Mode improve user experience?

---

### TypeScript with React

161. Why use TypeScript with React?
162. How do you type a functional component in TypeScript?
163. How do you type props in a React component?
164. How do you type state in `useState`?
165. How do you type event handlers in React?
166. What is `React.FC` (or `React.FunctionComponent`)? Should you use it?
167. How do you type `useRef` in TypeScript?
168. How do you type `useContext` in TypeScript?
169. How do you type `useReducer` in TypeScript?
170. What is the difference between `interface` and `type` for component props?
171. How do you type children props?
172. How do you make props optional in TypeScript?
173. How do you type a generic component in TypeScript?
174. What are discriminated unions and how are they useful in React?
175. How do you type custom hooks in TypeScript?

---

### Testing React Applications

176. Why is testing important in React applications?
177. What are the different types of testing (Unit, Integration, E2E)?
178. What is Jest? What is it used for?
179. What is React Testing Library? How is it different from Enzyme?
180. What is the philosophy behind React Testing Library?
181. How do you render a component in a test?
182. What is `screen` in React Testing Library?
183. What are queries in React Testing Library? (getBy, queryBy, findBy)
184. What is the difference between `getBy`, `queryBy`, and `findBy`?
185. How do you test user interactions (clicks, typing)?
186. What is `fireEvent` vs `userEvent`?
187. How do you test asynchronous code in React?
188. What is `waitFor` and when do you use it?
189. How do you mock API calls in tests?
190. What is MSW (Mock Service Worker)?
191. How do you test components that use Context?
192. How do you test components that use Redux?
193. How do you test custom hooks?
194. What is snapshot testing? When should you use it?
195. What is code coverage? What is a good coverage percentage?
196. What is Cypress? How is it different from Jest?
197. What is Playwright? How does it compare to Cypress?
198. How do you test accessibility in React components?
199. What is the `jest-axe` library?
200. What are testing best practices in React?

---

### Styling in React

201. What are the different ways to style React components?
202. What are inline styles in React? What are their limitations?
203. What is CSS Modules? How do they work?
204. What is the difference between CSS Modules and regular CSS?
205. What is CSS-in-JS? Give examples of libraries (styled-components, Emotion).
206. What is styled-components? How do you use it?
207. What are the pros and cons of CSS-in-JS?
208. What is Tailwind CSS? How do you use it with React?
209. What is the utility-first CSS approach?
210. What is Sass/SCSS? How do you use it in React?
211. What is the difference between `.css` and `.module.css` files?
212. How do you conditionally apply CSS classes in React?
213. What is the `classnames` (or `clsx`) library?
214. How do you implement dark mode in React?
215. What are CSS variables and how do you use them in React?

---

### API Integration & Data Fetching

216. How do you fetch data in React?
217. Where should you fetch data in a functional component?
218. What is the Fetch API? How do you use it in React?
219. What is Axios? How is it different from Fetch?
220. How do you handle loading states when fetching data?
221. How do you handle errors when fetching data?
222. What is the `useEffect` cleanup function and why is it important for API calls?
223. What is the race condition problem in `useEffect`?
224. How do you cancel API requests in React?
225. What is the AbortController API?
226. What is React Query (TanStack Query)? What problems does it solve?
227. What are the benefits of using React Query over manual `useEffect` + `fetch`?
228. What is SWR? How is it different from React Query?
229. What is data caching? How do React Query and SWR implement it?
230. What is optimistic updating?
231. What is pagination? How do you implement it in React?
232. What is infinite scrolling? How do you implement it?
233. What is GraphQL? How is it different from REST?
234. What is Apollo Client? How do you use it with React?
235. What is the `useQuery` hook in Apollo Client?
236. What is the `useMutation` hook in Apollo Client?
237. What is WebSocket? How do you use it in React?
238. What is Socket.io? How do you integrate it with React?
239. How do you handle real-time data updates in React?
240. What is Server-Sent Events (SSE)?

---

### Build Tools & Development Environment

241. What is Create React App (CRA)? What does it provide?
242. What is Vite? How is it different from Create React App?
243. Why is Vite faster than CRA?
244. What is webpack? What role does it play in React applications?
245. What is Babel? Why do we need it?
246. What is the difference between development and production builds?
247. What is Hot Module Replacement (HMR)?
248. What is Fast Refresh in React?
249. What are environment variables? How do you use them in React?
250. What is the `.env` file? What is the naming convention for React env variables?
251. What is ESLint? Why is it important?
252. What is Prettier? How is it different from ESLint?
253. What is Husky? What are Git hooks?
254. What is lint-staged?
255. What is the purpose of `.gitignore` in a React project?

---

### Next.js & React Frameworks

256. What is Next.js? How is it different from plain React?
257. What are the rendering strategies in Next.js (SSR, SSG, ISR, CSR)?
258. What is the App Router in Next.js 13+?
259. What is the Pages Router in Next.js?
260. What are Server Components in Next.js?
261. What is the difference between Server Components and Client Components?
262. What is the `'use client'` directive?
263. What is the `'use server'` directive?
264. What is Incremental Static Regeneration (ISR)?
265. What is the `getStaticProps` function?
266. What is the `getServerSideProps` function?
267. What is the `getStaticPaths` function?
268. What is file-based routing in Next.js?
269. What is the `Link` component in Next.js?
270. What is the `Image` component in Next.js? Why should you use it?
271. What is Remix? How does it differ from Next.js?
272. What is Gatsby? When would you use it?
273. What is Astro? How does it compare to Next.js?

---

### Security in React

274. What are common security vulnerabilities in React applications?
275. What is XSS (Cross-Site Scripting)? How does React prevent it?
276. Is `dangerouslySetInnerHTML` safe? When should you use it?
277. What is CSRF (Cross-Site Request Forgery)?
278. How do you store authentication tokens securely in React?
279. Should you store JWT tokens in localStorage? What are the alternatives?
280. What is the httpOnly cookie flag?
281. What is Content Security Policy (CSP)?
282. How do you sanitize user input in React?
283. What is the DOMPurify library?
284. What are the security implications of using third-party libraries?

---

### Accessibility (a11y)

285. What is accessibility (a11y) in web development?
286. Why is accessibility important in React applications?
287. What are ARIA attributes? Give examples.
288. What is the `role` attribute?
289. What is semantic HTML and why is it important for accessibility?
290. How do you make a button accessible?
291. How do you handle focus management in React?
292. What is the `useRef` hook used for in accessibility?
293. What is keyboard navigation? How do you implement it?
294. What is the `tabIndex` attribute?
295. How do you create accessible forms in React?
296. What is the `label` element and why is it important?
297. What is screen reader testing?
298. What tools can you use to test accessibility (Lighthouse, axe DevTools)?
299. What is the `alt` attribute for images?
300. How do you announce dynamic content changes to screen readers?

---

### Code Snippets & Practical Questions

301. 
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('Effect ran');
  });
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
How many times will "Effect ran" be logged when you click the button 3 times?

302. 
```jsx
function App() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };
  
  return <button onClick={handleClick}>{count}</button>;
}
```
What will be the value of `count` after clicking the button once? How do you fix this to increment by 3?

303. 
```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Tick');
  }, 1000);
}, []);
```
What's wrong with this code? How do you fix it?

304. 
```jsx
function Parent() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <Child count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const Child = React.memo(({ count }) => {
  console.log('Child rendered');
  return <div>{count}</div>;
});
```
Will `Child` re-render when you click the button? Why or why not?

305. 
```jsx
function App() {
  const [user, setUser] = useState({ name: 'John', age: 25 });
  
  const updateAge = () => {
    user.age = 26;
    setUser(user);
  };
  
  return <div>{user.age}</div>;
}
```
What's wrong with this code? How do you fix it?

306. Write a custom hook `useFetch(url)` that fetches data from an API and returns `{ data, loading, error }`.

307. Write a custom hook `useLocalStorage(key, initialValue)` that syncs state with localStorage.

308. Write a custom hook `useDebounce(value, delay)` that debounces a value.

309. How do you implement a simple counter with increment, decrement, and reset functionality?

310. How do you create a toggle component (show/hide content)?

311. How do you implement a simple todo list with add and delete functionality?

312. How do you create a search filter for a list of items?

313. How do you implement a modal/dialog component?

314. How do you create an accordion component?

315. How do you implement tabs in React?

316. How do you create a dropdown menu?

317. How do you implement pagination for a list?

318. How do you create a carousel/slider component?

319. How do you implement drag and drop functionality?

320. How do you create an infinite scroll component?

321. 
```jsx
const MyContext = React.createContext();

function Parent() {
  const [value, setValue] = useState('Hello');
  
  return (
    <MyContext.Provider value={value}>
      <Child />
    </MyContext.Provider>
  );
}

function Child() {
  const value = useContext(MyContext);
  return <div>{value}</div>;
}
```
Explain how this code works and what will be displayed.

322. 
```jsx
function App() {
  const inputRef = useRef(null);
  
  const focusInput = () => {
    inputRef.current.focus();
  };
  
  return (
    <div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}
```
What does this code do? When would you use `useRef` like this?

323. 
```jsx
const expensiveCalculation = (num) => {
  console.log('Calculating...');
  return num * 2;
};

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  
  const doubled = expensiveCalculation(count);
  
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <div>{doubled}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
What's the performance issue here? How do you optimize it with `useMemo`?

324. 
```jsx
function Parent() {
  const [count, setCount] = useState(0);
  
  const handleClick = () => {
    console.log('Clicked');
  };
  
  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
    </div>
  );
}

const Child = React.memo(({ onClick }) => {
  console.log('Child rendered');
  return <button onClick={onClick}>Click Me</button>;
});
```
Will `Child` re-render when you click "Re-render Parent"? How do you prevent it?

325. How do you implement a protected route that redirects to login if the user is not authenticated?

326. How do you implement a loading spinner while fetching data?

327. How do you handle form submission and prevent default behavior?

328. How do you implement a controlled input field?

329. How do you handle multiple checkboxes in a form?

330. How do you implement a radio button group?

331. 
```jsx
function App() {
  const [items, setItems] = useState(['a', 'b', 'c']);
  
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
```
What's the problem with using `index` as a key? Demonstrate with an example where items can be reordered.

332. How do you conditionally render components in React? Show 3 different methods.

333. How do you render a list of components from an array of objects?

334. How do you handle null or undefined values when rendering?

335. What is the difference between `&&` and ternary operator for conditional rendering?

336. 
```jsx
function App() {
  const isLoggedIn = false;
  
  return (
    <div>
      {isLoggedIn && <Dashboard />}
    </div>
  );
}
```
What will be rendered? What if `isLoggedIn` is `0` instead of `false`?

337. How do you pass a function as a prop to a child component?

338. How do you call a parent function from a child component?

339. How do you share state between sibling components?

340. How do you prevent a component from rendering?

341. 
```jsx
function App() {
  console.log('App rendered');
  
  return (
    <div>
      <ExpensiveComponent />
    </div>
  );
}
```
If `ExpensiveComponent` is expensive to render and doesn't change often, how do you optimize it?

342. How do you implement error boundaries to catch errors in child components?

343. Write a simple error boundary component.

344. How do you handle async errors in React?

345. How do you retry a failed API request?

346. How do you implement optimistic UI updates?

347. How do you handle race conditions when fetching data?

348. How do you implement a search with autocomplete/suggestions?

349. How do you implement a theme switcher (light/dark mode)?

350. How do you persist state across page refreshes?

---

### React Patterns & Best Practices

351. What is the Container/Presentational pattern?
352. What is the Compound Components pattern?
353. What is the Controlled Props pattern?
354. What is the Custom Hook pattern?
355. What is the State Reducer pattern?
356. What is the Props Getter pattern?
357. What are the benefits of composition over inheritance in React?
358. How do you avoid prop drilling?
359. When should you split a component into smaller components?
360. What is the Single Responsibility Principle in React components?
361. How do you organize your React project structure?
362. What is the difference between presentational and container components?
363. Should you use default exports or named exports?
364. How do you handle magic numbers and strings in React?
365. What are the best practices for naming components and files?
366. How do you handle constants in React applications?
367. What is the DRY (Don't Repeat Yourself) principle?
368. How do you make your React components reusable?
369. What is component coupling and how do you minimize it?
370. What are the code review best practices for React?

---

### Modern React Features & Future

371. What is React Server Components?
372. What is the difference between Server Components and SSR?
373. What are React Server Actions?
374. What is Streaming SSR?
375. What is Selective Hydration?
376. What is the new `use` hook (experimental)?
377. What is the `cache` function in React?
378. What are the benefits of Server Components?
379. What are the limitations of Server Components?
380. How do you mix Server and Client Components?
381. What is the future of React according to the core team?
382. What is React Forget (React Compiler)?
383. What is the purpose of automatic memoization?
384. What is the `use()` hook for promises and context?
385. What are React Canary releases?

---

### Debugging & Developer Tools

386. How do you debug React applications?
387. What are React DevTools? What features do they provide?
388. How do you inspect component props and state?
389. How do you use the Profiler in React DevTools?
390. What is the Components tab in React DevTools?
391. What is the Profiler tab in React DevTools?
392. How do you debug performance issues?
393. How do you identify which component is causing re-renders?
394. What is the "Highlight Updates" feature in React DevTools?
395. How do you debug hooks in React DevTools?
396. What are console.log best practices in React?
397. How do you use breakpoints in React?
398. What is the React Strict Mode? What does it do?
399. Why does React render components twice in Strict Mode?
400. How do you handle warnings in the console?

---

### Final Advanced Challenges

401. Build a custom `useAsync` hook that handles async operations with loading, error, and data states.
402. Implement a custom `useOnClickOutside` hook that detects clicks outside a component.
403. Create a custom `useMediaQuery` hook for responsive design.
404. Build a custom `useInterval` hook that works correctly with React.
405. Implement a custom `usePrevious` hook that returns the previous value of a state.
406. Create a `useWindowSize` hook that tracks window dimensions.
407. Build a `useOnlineStatus` hook that detects online/offline status.
408. Implement a `useCopyToClipboard` hook.
409. Create a `useToggle` hook with multiple states (not just boolean).
410. Build a form validation system from scratch without libraries.
411. Implement a virtualized list component for rendering thousands of items.
412. Create a drag-and-drop sortable list.
413. Build a multi-step form with validation.
414. Implement a real-time collaborative feature (like Google Docs).
415. Create a state machine using `useReducer` for complex UI flows.
416. Build a custom data table with sorting, filtering, and pagination.
417. Implement a notification/toast system.
418. Create a command palette (like Cmd+K) component.
419. Build a file upload component with progress tracking.
420. Implement a calendar/date picker component from scratch.

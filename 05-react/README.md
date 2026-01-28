# React Mastery: From Basics to Advanced

This document contains 300 problems (Theory & Practice) designed to take you from a React beginner to an expert capable of understanding complex open-source codebases.

## 🟢 Section 1: Fundamentals (JSX, Components, Props, State)

### Theory
1. What is React and why is it referred to as a "library" rather than a "framework"?
2. Explain the concept of the Virtual DOM. How is it different from the Real DOM?
3. What is JSX? Is it valid JavaScript? What does browser do with it?
4. What is the difference between an Element and a Component in React?
5. Explain "One-way Data Flow" (Unidirectional Data Flow) in React.
6. What is the difference between `Functional Components` and `Class Components`?
7. What are `Fragment`s and why do we use `<React.Fragment>` or `<>`?
8. Why must component names start with a capital letter?
9. What happens if you return `null` or `false` from a component?
10. Explain the significance of the `key` prop in lists. Why is using `index` as a key discouraged?
11. What is specific about `props.children`?
12. Are Props mutable or immutable? Why?
13. What is State? How does it differ from Props?
14. Why should we not modify `state` directly (e.g., `this.state.count = 2`)?
15. What does `ReactDOM.createRoot` do?
16. What is `React.StrictMode` and what checks does it run?
17. Explain the difference between `export default` and named exports for components.
18. What is Conditional Rendering? Name three ways to achieve it.
19. How do you pass a boolean `true` to a prop? (e.g., `<Comp active />`)
20. What are "Controlled" vs "Uncontrolled" components?

### Practice
21. Create a "Hello World" React app without using `create-react-app` or `vite` (using CDN links).
22. Create a functional component `Greeting` that accepts a `name` prop and displays "Hello, {name}!".
23. Create a component that renders a list of items from an array of strings using `map`.
24. Create a `Counter` component with strict type checking (use PropTypes or TypeScript interface).
25. Build a `Toggle` button that switches text between "ON" and "OFF" when clicked.
26. Create a component that conditionally renders a "Login" or "Logout" button based on a boolean prop `isLoggedIn`.
27. Render a list of objects (e.g., Users: {id, name, age}) and display them in a table. Use `id` as key.
28. Create a component that backgrounds turns red if the `count` prop is negative, and green if positive.
29. Implement a component that takes an array of numbers as props and displays only the even ones.
30. Create a `Card` component that expects a `title` (string), `image` (url), and `children` (description). Use it to display 3 different cards.
31. Build a simplified "Tweet" component with props for `author`, `content`, `timestamp`, and `likes`.
32. Create a component that catches a click event on a button and logs "Clicked!" to the console.
33. Create an Input field that updates a `<p>` tag with the current text as you type (Controlled Component).
34. Create a form with First Name and Last Name inputs. Display the full name dynamically below the form.
35. Implement a "Show/Hide" password button for an input field.
36. Create a `ColorBox` component that changes its background color to a random color when clicked.
37. Build an Accordion component where only one section can be open at a time (State lifting might be needed later, but try local state first).
38. Create a "Character Counter" for a generic textarea (e.g., "15/100 characters").
39. Implement a generic `Button` component that accepts `variant` ("primary", "secondary") and `size` ("sm", "lg") props to change styling.
40. Create a component that renders HTML string content safely (dangerouslySetInnerHTML) - understand the risks.

## 🔵 Section 2: Component Lifecycle & Rendering

### Theory
41. What are the main phases of the React Component Lifecycle?
42. Which lifecycle method corresponds to `useEffect(() => {}, [])`?
43. Which lifecycle method corresponds to `useEffect(() => {}, [prop])`?
44. Which lifecycle method corresponds to the cleanup function in `useEffect`?
45. What triggers a re-render in React?
46. What is "Reconciliation"?
47. How does React handle DOM updates efficiently (Diffing Algorithm)?
48. What is the purpose of `shouldComponentUpdate` (in classes) or `React.memo` (in functions)?
49. What is "Prop Drilling"? Why is it a problem?
50. What is "Lifting State Up"?
51. What is an Error Boundary? Which lifecycle methods are used for it?
52. Can Error Boundaries catch errors in event handlers? Why or why not?
53. What is the difference between `mounting` and `rendering`?
54. Why does React StrictMode result in double invocation of lifecycle methods/hooks in development?
55. What is "Batching" of state updates? How did it change in React 18?

### Practice
56. Create a Clock component that updates the time every second. Ensure you clear the interval on unmount.
57. Build a component that logs "Component Mounted" when it appears and "Component Unmounted" when it disappears (use a parent toggle to test).
58. Create a component that fetches data from an API (e.g., JSONPlaceholder) on mount and displays it.
59. Implement a component that listens to window `resize` events and displays the current window width. Remove listener on cleanup.
60. Create a component that takes a `userId` prop. Fetch new user details whenever the `userId` changes.
61. Build a "Scroll Progress Bar" that indicates how far down the page the user has scrolled.
62. Create a Timer (Stopwatch) with Start, Pause, and Reset functionality.
63. Implement a "Debounced" input that only logs to the console 500ms after the user stops typing.
64. Create a component that captures the mouse position (x, y) and displays it.
65. Build an Image Gallery that loads images. Display a "Loading..." spinner until the image is fully loaded.
66. Create a functional component heavily relying on `React.memo` to prevent re-renders when parent state changes unrelated props.
67. Implement a "Countdown" timer that accepts `seconds` as a prop and counts down to 0.
68. Create a component that syncs the page title (`document.title`) with a text input.
69. Build a component that auto-saves a draft to `localStorage` every 5 seconds.
70. Create a "Sticky" header that changes style when the user scrolls past a certain point.

## 🟠 Section 3: React Hooks (Standard)
### Theory
71. What are Hooks in React? Why were they introduced?
72. What are the "Rules of Hooks"?
73. Why cannot hooks be called inside loops or conditions?
74. Explain the dependency array in `useEffect`. What happens if it's omitted? Empty? Contains values?
75. What is the difference between `useState` and `useRef` Regarding re-renders?
76. What is `useLayoutEffect` and how does it differ from `useEffect`?
77. What does `useReducer` do? When should you use it over `useState`?
78. What is `useContext`? How does it relate to the Context API?
79. What are `useMemo` and `useCallback`? How do they help with performance?
80. What is the difference between `useCallback(fn, deps)` and `useMemo(() => fn, deps)`?

### Practice
81. Convert a Class component with `componentDidMount` and `setState` to a Function component with hooks.
82. Create a `usePrevious` custom hook that returns the previous value of a state variable.
83. Implement a `useToggle` hook for boolean states.
84. Implement a `useFetch` hook that handles loading, error, and data states for a given URL.
85. Create a component using `useReducer` to manage a complex form state (e.g., multi-step wizard).
86. Build a "Dark Mode" toggle using `useContext` to provide the theme to deep child components.
87. Create a component using `useRef` to focus an input field automatically on mount.
88. Implement a generic `useLocalStorage` hook that syncs state with local storage.
89. Use `useMemo` to cache a heavy calculation (e.g., factorial or large list filtering).
90. Use `useCallback` to prevent a child component (wrapped in `React.memo`) from re-rendering when passing a callback prop.
91. Create a `useOnClickOutside` hook to close a modal when clicking outside of it.
92. Create a `useWindowSize` hook.
93. Build a `useDebounce` hook for a search input.
94. Implement a `useInterval` hook (that works correctly with React's closure model).
95. Create a `useEventListener` hook that attaches events safely.
96. Build a `useMediaQuery` hook for responsive designs in JS.
97. Create a component where `useLayoutEffect` prevents a visual flicker compared to `useEffect` (e.g., measuring DOM nodes).
98. Determine the "dirty" state of a form using a custom hook.
99. Create a `useHistory` hook that allows Undo/Redo functionality for a state.
100. Implement a `useHover` hook to detect hover state without CSS.

## 🔴 Section 4: Advanced Concepts & State Management

### Theory
101. What is Prop Drilling and how do Context, Redux, or Composition solve it?
102. Explain the "Context Hell" or "Provider Wrapper Hell" problem.
103. What is Flux Architecture?
104. How does Redux work? (Store, Actions, Reducers, Dispatch).
105. What is the role of "Redux Thunk" or "Redux Saga"?
106. Compare Redux vs. Context API vs. Zustand/Recoil/Jotai.
107. What is "State Colocation"?
108. What is Higher-Order Component (HOC)?
109. What is "Render Props" pattern?
110. What is "Composition" in React (Containment vs Specialization)?
111. What are "Portals" in React (`ReactDOM.createPortal`)? When are they used?
112. what is "Suspense" in React?
113. What is `React.lazy`? How does it work with Webpack Code Splitting?
114. What are Error Boundaries? Can they be implemented as Functional Components?
115. What is "Concurrent Mode" (now concurrent features like transitions)?

### Practice
116. Build a Modal component using `React.createPortal`.
117. Create an HOC `withAuth` that redirects to login if the user is not authenticated.
118. Create an HOC `withLogger` that logs props of the wrapped component on every render.
119. Implement a "ToolTip" component using Render Props to handle the hover logic.
120. Refactor the ToolTip above to use a Custom Hook instead -> compare the readability.
121. Build a basic Redux setup from scratch: Store, Reducer for a Counter.
122. Integrate Redux Toolkit (RTK) for a "Todo List" app.
123. Use `createAsyncThunk` in RTK to fetch users.
124. Build a simplified "Redux" implementation yourself (implement `createStore`, `subscribe`, `dispatch`).
125. Create a Context Provider `UserProvider` that manages specific user settings and consumes it in 3 distinct places.
126. Implement a "Skeleton Loader" component that shows while data is being lazily loaded with `React.lazy` and `Suspense`.
127. Use `useTransition` to prioritize typing in an input over rendering a huge list (UI responsiveness).
128. Create a Compound Component pattern (e.g., `<Tabs><Tabs.List/><Tabs.Panel/></Tabs>`).
129. Implement a localized app (I18n) using a `LanguageContext`.
130. Build a "Toast" notification system using Context and Portals.

## 🟣 Section 5: React Router & SPAs

### Theory
131. What is a Single Page Application (SPA)? How is it different from Multi-Page Apps?
132. How does Client-Side Routing work (History API)?
133. What is the difference between `BrowserRouter`, `HashRouter`, and `MemoryRouter`?
134. Explain the difference between `<Link>` and `<a>` tag.
135. What are Layout Routes in React Router v6?
136. How do you handle "Not Found" (404) routes?
137. What is the `useNavigate` hook?
138. How do you read URL parameters (`/user/:id`) and Query Strings (`?sort=asc`)?
139. What is "Protected Route" pattern?
140. How does `lazy` loading routes improve performance?

### Practice
141. Set up a basic React Router with Home, About, and Contact pages.
142. Implement a `NavBar` that highlights the active link using `<NavLink>`.
143. Create a dynamic route `/product/:id` that displays the Product ID on the page.
144. Read query parameters (e.g., `?search=apple`) in a Search page component.
145. Implement a "Protected Route" that redirects unauthenticated users to `/login`.
146. Create nested routes for a Dashboard (e.g., `/dashboard/profile`, `/dashboard/settings`).
147. Implement a "Breadcrumbs" component based on the current route path.
148. Create a custom "Prompt" component that warns user before leaving a page with unsaved changes (Note: heavily changed in v6, try `useBlocker` or equivalent).
149. Implement a programmatic navigation after a form submission (redirect to success page).
150. Configure Code Splitting for routes (lazy load pages) to reduce initial bundle size.

## 🟤 Section 6: Forms & Validation

### Theory
151. What are the challenges of handling forms in React (controlled vs uncontrolled)?
152. Why use libraries like `React Hook Form` or `Formik`?
153. What is "Schema Validation" (e.g., Zod, Yup)?
154. How to handle file uploads in React?
155. How to handle multiple inputs with a single `onChange` handler?

### Practice
156. Build a Login form with client-side validation (email format, password length).
157. Create a generic `Input` component that displays error messages.
158. Build a multi-step registration wizard (Step 1: Info, Step 2: Address, Step 3: Review).
159. Implement a form utilizing `React Hook Form` for performance (uncontrolled inputs).
160. Integrate `Zod` validation with `React Hook Form`.
161. Create a File Upload component with drag-and-drop functionality.
162. Implement a form that dynamic adds fields (e.g., "Add another phone number").
163. Build a "Search with Autocomplete" input (debounced API calls).
164. Create a checkbox group where "Select All" toggles all items.
165. Handle a large form state using `useReducer`.

## ⚫ Section 7: Testing

### Theory
166. What is the difference between Unit, Integration, and E2E testing?
167. What is Jest? What is React Testing Library (RTL)?
168. Why does RTL philosophy prefer `getByRole` or `getByText` over `querySelector`?
169. What is "Snapshot Testing"? Pros and Cons?
170. How do you test asynchronous code (API calls) in React?
171. What is "Mocking"? Why mock modules or fetch?

### Practice
172. Write a unit test for a simple `Button` component (check if it renders text).
173. Test a `Counter` component: click button, assert count increment.
174. Test two components: Input and Display. Type in input, check if Display updates.
175. Mock a fetch call using `jest.spyOn` or `msw` and test a component that displays API data.
176. Test a component that shows "Loading..." then Data. Use `findBy` (async).
177. Write a test for a generic hook `useToggle`.
178. Test a form submission: fill inputs, click submit, check if submit handler was called.
179. Test a component that uses `useContext` (supply a custom provider in test).
180. Capture and verify a Snapshot for a static UI card.

## ⚪ Section 8: Performance Optimization

### Theory
181. What is the "Commit" vs "Render" phase?
182. How relies React key prop for reusing DOM nodes?
183. What is Virtualization (Windowing) for long lists?
184. Why avoid defining functions or objects inside the render body without `useMemo`/`useCallback`?
185. How to analyze bundle size? (Source Map Explorer).
186. What is "Tree Shaking"?
187. What is `React.PureComponent`?
188. Explain "Interaction to Next Paint" (INP) context in React.

### Practice
189. Optimization Challenge: Given a slow component (renders 1000 items), optimize it using `React.memo`.
190. Use `react-window` or `react-virtualized` to render a list of 10,000 items efficiently.
191. Implement "Lazy Loading" for images (Intersection Observer) in a feed.
192. Identify wasted renders using React DevTools "Profiler".
193. Optimize a Context provider that causes all consumers to re-render unnecessarily (split context).
194. Refactor a large component into smaller chunks to enable code-splitting.
195. Optimize an animation that causes layout thrashing (use CSS transform/opacity).

## 🔷 Section 9: Advanced Patterns & Internals

### Theory
196. Explain the "Fiber Architecture".
197. What is the difference between `stacks` and `fibers` in React context?
198. How does `setState` actually work internally? (queueing updates).
199. What are "Synthetic Events"? Why does React use them?
200. Explain "Event Delegation" in React.
201. What is "Render-as-you-fetch" pattern?
202. What is Server Components (RSC)? How are they different from SSR?

### Practice
203. Implement a "Clone Element" pattern: A parent that adds props to its children (`React.Children.map`, `React.cloneElement`).
204. Implement a "Slot" pattern component (Header, Content, Footer props as components).
205. Build a flexible "DataTable" using Headless UI concept (logic only, UI provided by user).
206. Create a recursive component (e.g., File Directory Tree View).
207. Create a component that hacks `ref` usage to communicate between siblings (Anti-pattern, but instructive).

## 🔶 Section 10: Open Source Codebase Understanding
*Questions designed to test your ability to read libraries like React-Router, Redux, or React Query.*

208. **React-Query:** Look at `useQuery` implementation. How does it handle caching? (Concept: Observers).
209. **Redux:** How does `connect` (HOC) inject props?
210. **React-Router:** How does the `<Route>` component decide to render? (Context matching).
211. **Formik:** How does it track "touched" state for nested fields?
212. **Material-UI:** How does the `styled` engine work? (HOC wrapping + Class generation).
213. **Next.js:** How does `getStaticProps` pass data to the component?
214. **Virtuoso:** How does it calculate the height of dynamic items?
215. **Zustand:** How does it implement state without a Context Provider? (Closure + Listeners).
216. **React Spring:** How does it animate outside the React render cycle?
217. **Draft.js / Slate:** How do they manage contenteditable state?

## 🔳 Section 11: Real World Application Scenarios

218. **Design System:** Architecture a Typography component that enforces distinct variants (h1..h6, body) using strict types.
219. **Auth Flow:** Design the frontend logic for Refresh Token rotation using `axios` interceptors.
220. **Permission:** Implement a `<Can permission="READ_USER">` component that hides children if user lacks role.
221. **Dashboard:** Design a layout where SideBar is static, but Header changes based on the active Route.
222. **Data Grid:** Build a table with client-side sorting, filtering, and pagination.
223. **Chat App:** Implement an auto-scroll-to-bottom feature for new messages (but not if user scrolled up).
224. **E-commerce:** Build a generic "AddToCart" hook that handles optimistic UI updates.
225. **Video Player:** Wrap a native `<video>` element to provide custom controls (Play, Pause, Volume, Seek).
226. **Drag and Drop:** Implement a Kanban board (Todo, Doing, Done) using `react-dnd` or `dnd-kit` concepts.
227. **Analytics:** Create a hook `useTrackPage` that sends an event to GA/Mixpanel on route change.

## 🏁 Section 12: Expert Trivia & Edge Cases

228. What happens if you call `useState` with a function? `useState(() => getInitial())` vs `useState(getInitial())`.
229. Why does `useEffect` sometimes run twice in React 18?
230. Can you use `hooks` in a request interceptor? Why/Why not?
231. How to force a component to re-render without changing state or props?
232. What is the difference between `super(props)` and `super()` in a class constructor?
233. Why is `index` as a key bad for lists where items can be re-ordered? (Explain reconciliation failure).
234. How does React handle "undefined" or "null" in JSX? (It ignores them).
235. What is the difference between HTML `onchange` and React `onChange`?
236. How to pass a ref to a functional component? (`forwardRef`).
237. Can a component render another component?
238. What is the argument of the `setState` updater function? `setCount(prev => ...)`
239. Is React Sync or Async? (Batching updates).
240. What is "Tearing" in UI?

## 🚀 Section 13: Final Boss - The "Build It" List
*Combine everything.*

241. **Social Media Feed:** Infinite scroll, optimistic likes, image lightbox, complex comments structure (nested).
242. **Trello Clone:** Drag and drop columns and cards, editable titles, modal details, local storage persistent.
243. **E-commerce Store:** Product filtering (multi-select), search, cart context, checkout wizard, responsive grid.
244. **Markdown Blog:** Load .md files, parse front-matter, render HTML, syntax highlighting for code blocks.
245. **Music Player:** Audio context, persistent player bar across routes, playlist management, visualization.
246. **Admin Dashboard:** Charts (Recharts/Chartjs), data tables with export CSV, user management, role-based access.
247. **Real-time Chat:** Socket.io integration, typing indicators, read receipts, online status.
248. **Quiz App:** Timer per question, score tracking, results summary, review answers mode.
249. **File Manager:** Folder tree navigation, breadcrumbs, file preview, right-click context menu.
250. **Calendar App:** Month/Week/Day view, event creation (drag to select time), overlapping event logic.

## 🧠 Section 14: Conceptualizing Internals (Mental Models)

251. Draw the component tree for a page with Navbar, Sidebar, and Content.
252. Visualize the flow of data when a "Delete" button in a nested list item is clicked.
253. Describe the lifecycle of a `useEffect` with dependency `[userId]` when `userId` changes from 1 to 2.
254. How does React know which state belongs to which component? (Linked list of fiber nodes).
255. Imagine React processing a `setState` loop. How does it prevent infinite loops?

## 🔬 Section 15: Debugging Scenarios
*Identify the bug.*

256. Bug: "Too many re-renders. React limits the number of renders..." (Cause: Setting state in render body).
257. Bug: Input loses focus after every keystroke. (Cause: Component defined inside another component).
258. Bug: `useEffect` running infinitely. (Cause: Object/Array dependency created in render).
259. Bug: "Can't perform a React state update on an unmounted component". (Cause: Async operation completes after unmount).
260. Bug: State not updating immediately after `setState`. (Cause: Logging state right after set line).

## 🧩 Section 16: Patterns II

261. **Module Pattern**: Encapsulating logic.
262. **Observer Pattern**: How Redux subscribes components.
263. **Singleton**: Is a Context Provider a singleton?
264. **Proxy Pattern**: Is Proxy used in React? (Valtio / MobX).
265. **Decorator Pattern**: Used in legacy Class components (e.g. `@connect`).

## 🛠 Section 17: Tooling & Ecosystem

266. What is CRA vs Vite? Why is Vite faster? (ESBuild, Native Modules).
267. What is ESLint-plugin-react-hooks? Why is it crucial?
268. What is Prettier?
269. What is Babel? What is its role in React? (JSX -> JS).
270. What is Webpack? (Bundling).

## 📜 Section 18: TypeScript with React

271. How to type `props`? (Interface vs Type).
272. How to type `useState`? `useState<User | null>(null)`.
273. How to type `useRef` for a DOM element? `useRef<HTMLDivElement>(null)`.
274. How to type `children`? (`React.ReactNode`).
275. How to type event handlers? (`React.ChangeEvent<HTMLInputElement>`).
276. What is `React.FC`? Why is it considered discouraged in modern React (sometimes)?
277. How to type Generic Components? (e.g. `<List<T> items={...} />`).
278. How to extend HTML attributes? (`React.HTMLAttributes<HTMLDivElement>`).
279. Type a reducer function and action types.
280. How to handle "prop types" with TS vs `prop-types` library.

## 📡 Section 19: Server State vs Client State
281. Difference between Server State (API data) and UI State (Modal open/close).
282. Why not put everything in Redux?
283. Benefits of React Query / SWR over manual `useEffect` fetching.
284. Concept of "Stale-while-revalidate".
285. Concept of Optimistic Updates.

## 🎓 Section 20: Interview Quick-Fire
286. Is `setState` async?
287. Can hooks be conditional?
288. Difference between Element and Component?
289. Does React redraw the whole page?
290. What is the second argument of `setState` (in classes)?
291. What is `React.strictMode`?
292. How to conditionally add a class? (Template literals or classnames/clsx).
293. How to render raw HTML?
294. What is a "Pure Component"?
295. Meaning of "Declarative" vs "Imperative".

## 🪐 Section 21: The Future & Trends
296. What is React Server Components (RSC)?
297. What is hydration?
298. What is "Islands Architecture" (Astro) vs React hydration?
299. Changes in React 19 (Compiler/React Forget, Actions).
300. Why are simple signals (Solid/Preact) competing with React's Virtual DOM?

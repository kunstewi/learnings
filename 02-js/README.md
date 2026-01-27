# 1000 JavaScript Theory & Practice Problems

This document contains a comprehensive list of 1000 theory and practice problems designed to take you from a JavaScript beginner to an advanced engineer capable of understanding complex open-source codebases.

## Structure
- **Part 1: The Foundation (Variables, Types, Operators)**
- **Part 2: Control Flow & Logic**
- **Part 3: Functions & Scope**
- **Part 4: Data Structures (Arrays, Strings, Objects)**
- **Part 5: The DOM & Browser APIs**
- **Part 6: Object-Oriented JavaScript (Prototypes, Classes, `this`)**
- **Part 7: Asynchronous JavaScript**
- **Part 8: Modern JS (ES6+ Features)**
- **Part 9: Error Handling, Regex, and Modules**
- **Part 10: Advanced, Performance, and Open Source Architecture**


## Part 1: The Foundation (Variables, Types, Operators)

### Theory
1. [ ] What are the primitive data types in JavaScript?
2. [ ] Explain the difference between `null` and `undefined`.
3. [ ] What is the difference between `==` and `===`?
4. [ ] How does type coercion work in JavaScript? Give examples.
5. [ ] What is `NaN`? What is its type?
6. [ ] Explain the concept of hoisting in relation to `var`.
7. [ ] What is the difference between declaring a variable with `var`, `let`, and `const`?
8. [ ] Are variables declared with `const` immutable? Explain.
9. [ ] What is the Temporal Dead Zone (TDZ)?
10. [ ] How does the `typeof` operator work? What are its quirks (e.g., `typeof null`)?
11. [ ] What is a Symbol? What is it used for?
12. [ ] How do BigInts differ from the Number type?
13. [ ] Explain pass-by-value vs pass-by-reference in JavaScript.
14. [ ] What is the global object in the browser vs Node.js?
15. [ ] How does JavaScript handle floating point arithmetic (e.g. `0.1 + 0.2`)?
16. [ ] What are falsy values in JavaScript? List them all.
17. [ ] What is the difference between explicit and implicit conversion?
18. [ ] Explain what strict mode is (`"use strict"`). What does it prevent?
19. [ ] What is the difference between `undeclared` and `undefined` variables?
20. [ ] How does the comma operator work?
21. [ ] What is short-circuit evaluation in logical operators (`&&`, `||`)?
22. [ ] Explain the implementation of the specific `void` operator.
23. [ ] What is the precedence of operators in JS? (General idea).
24. [ ] Explain the unary `+` operator.
25. [ ] What is the difference between `Infinity` and `-Infinity`?
26. [ ] How to check if a value is effectively an integer?
27. [ ] What is `Object.is()` and how does it differ from `===`?
28. [ ] Why is `[] == ![]` true? Explain the coercion steps.
29. [ ] What happens when you add a string to a number?
30. [ ] What happens when you subtract a string from a number?

### Practice
31. [ ] Write a program to swap two variables without a temp variable.
32. [ ] Create a function that checks if a variable is a number.
33. [ ] Convert the string "123" to a number in 3 different ways.
34. [ ] Write a function to check if a number is even or odd.
35. [ ] Implement a function that returns the type of the argument specifically (e.g. "array", "null", "date").
36. [ ] Write a script that logs the multiplication table of 5.
37. [ ] Create a customized `typeof` function that fixes `typeof null` returning "object".
38. [ ] Write a program that converts standard time to military time.
39. [ ] Calculate the area of a circle given its radius (use `Math.PI`).
40. [ ] Write a function that generates a random integer between min and max.
41. [ ] Create a function that rounds a number to a specific decimal place.
42. [ ] Write a function to check if a given year is a leap year.
43. [ ] Implement a function which restricts a number within a min/max range (clamp).
44. [ ] Convert a temperature from Celsius to Fahrenheit.
45. [ ] Write a program that reverses a 3-digit number mathematically.
46. [ ] Check if a number is a prime number.
47. [ ] Write a function to compute the Factorial of a number.
48. [ ] Implement a function that converts a boolean to a string ("Yes"/"No").
49. [ ] Check if two numbers are approximately equal (handle float precision).
50. [ ] Write a function that returns the last digit of a number.
51. [ ] Create a currency formatter function (adds commas and symbol).
52. [ ] Write code to verify if a variable is `NaN`.
53. [ ] Check if a value is a safe integer.
54. [ ] Implement a modulus operator without using `%`.
55. [ ] Write a simple calculator (add, sub, mul, div) using switch/case.
56. [ ] Create a function that tells if a number is positive, negative or zero.
57. [ ] Find the maximum of three numbers without `Math.max`.
58. [ ] Write a function to truncate a string if it exceeds N characters.
59. [ ] Convert a number to binary string.
60. [ ] Convert a binary string to a number.
61. [ ] Write a function to calculate the distance between two points (x1, y1) and (x2, y2).
62. [ ] Calculate the hypotenuse of a right triangle.
63. [ ] Check if a logical expression `!(A && B)` is equivalent to `!A || !B`.
64. [ ] Implement a function that performs a bitwise XOR swap.
65. [ ] Write a function to get the absolute value of a number.
66. [ ] Create a function to convert degrees to radians.
67. [ ] Write a function that returns the sign of a number (-1, 0, 1).
68. [ ] Check if a number is a power of 2 using bitwise operators.
69. [ ] Write a function to count the number of bits set to 1 in an integer (Hamming Weight).
70. [ ] Implement a function that returns the next multiple of 5 for a given number.
71. [ ] Write a function to extract the integer part of a float without `Math.floor`.
72. [ ] Create a function that generates a random boolean.
73. [ ] Write a function to check if a value is a finite number.
74. [ ] Implement a hex to decimal converter.
75. [ ] Implement a decimal to hex converter.
76. [ ] Write a function to calculate simple interest.
77. [ ] Write a function to calculate compound interest.
78. [ ] Check if a number is a perfect square.
79. [ ] Create a function that normalizes a number between 0 and 1.
80. [ ] Write a function to map a value from one range to another.
81. [ ] Implement an `isFalsy` function.
82. [ ] Implement an `isTruthy` function.
83. [ ] Write a function to check if a value is strictly `null`.
84. [ ] Write a function to check if a value is strictly `undefined`.
85. [ ] Create a function `safeDivide(a, b)` that returns 0 if b is 0.
86. [ ] Write a function to calculate the perimeter of a rectangle.
87. [ ] Write a function that returns the larger of two numbers using ternary operator.
88. [ ] Implement a logical XOR function (returns true if only one is true).
89. [ ] Write a function that returns the string "even" or "odd" without an if statement.
90. [ ] Calculate the average of 3 numbers.
91. [ ] Write a function that converts bytes to a human-readable string (KB, MB, GB).
92. [ ] Create a function that pads a number with leading zeros.
93. [ ] Write a function `rgbToHex(r, g, b)`.
94. [ ] Write a function `hexToRgb(hex)`.
95. [ ] Check if a number is divisible by both 3 and 5.
96. [ ] Perform a cyclic shift of a number's bits.
97. [ ] Write a code to swap the case of a character (if 'a' -> 'A').
98. [ ] Determine if a triangle is valid given 3 side lengths.
99. [ ] Write a function that returns the primitive value of a Wrapper Object.
100. [ ] Create a function that parses a URL query string manually (basic version).

## Part 2: Control Flow & Logic

### Theory
101. [ ] Explain how the `switch` statement works. What is "fall-through"?
102. [ ] Can you use expressions in `switch` cases?
103. [ ] What is the difference between `while` and `do...while` loops?
104. [ ] How does the `break` statement work? Can it break out of nested loops?
105. [ ] How does the `continue` statement work?
106. [ ] What is a labeled statement in JavaScript? When would you use it?
107. [ ] Explain the `for...in` loop. What does it iterate over?
108. [ ] Explain the `for...of` loop. What does it iterate over?
109. [ ] Can `for...of` work on Objects? Why or why not?
110. [ ] How to make an object iterable for `for...of`?
111. [ ] What is the difference between `for`, `forEach`, and `map`? (Conceptually)
112. [ ] What is "Tail Call Optimization"? Does JS support it?
113. [ ] How does exception handling work (`try...catch...finally`)?
114. [ ] What is the Error object? What properties does it have?
115. [ ] Can you catch syntax errors with `try...catch`?
116. [ ] What happens if you return from a `try` block? Does `finally` still execute?
117. [ ] What are custom errors? How to create them?
118. [ ] Explain the "Pyramid of Doom" or "Callback Hell" in control flow.
119. [ ] How does short-circuiting affect control flow?
120. [ ] Is `else` required in an `if` statement?

### Practice
121. [ ] Write a program that prints numbers from 1 to 100. But for multiples of 3 convert to "Fizz", 5 to "Buzz", both to "FizzBuzz".
122. [ ] Write a loop that sums numbers from 1 to N.
123. [ ] Write a function to reverse a string using a loop.
124. [ ] Implement a function to calculate the Fibonacci sequence up to N terms.
125. [ ] Write a function to check if a string is a palindrome.
126. [ ] Create a pyramid pattern of stars using nested loops.
127. [ ] Write a function that finds the largest number in an array using a loop.
128. [ ] Implement a "Retry" logic block that retries an operation N times on failure.
129. [ ] Write a function that counts the number of vowels in a string.
130. [ ] Write a function to remove duplicates from an array using loops.
131. [ ] Implement a binary search algorithm (iterative).
132. [ ] Write a function that flattens a nested array (1 level deep) using loops.
133. [ ] Create a multiplication table for numbers 1 to 10.
134. [ ] Write a program to find all prime numbers up to N.
135. [ ] Implement a function that merges two sorted arrays.
136. [ ] Write a function to find the intersection of two arrays.
137. [ ] Write a function that rotates an array elements to the left by 1.
138. [ ] Implement the logic to validate a Strong Password (length, symbols, etc).
139. [ ] Write a function that converts a number to Roman Numerals.
140. [ ] Write a function that converts Roman Numerals to a number.
141. [ ] Find the missing number in an array of 1 to N.
142. [ ] Write a function that moves all zeros to the end of an array.
143. [ ] Implement a bubblesort algorithm.
144. [ ] Implement a function to shuffle an array (Fisher-Yates).
145. [ ] Write a function that finds the longest word in a string.
146. [ ] Create a function to count occurrences of a character in a string.
147. [ ] Write a function that capitalizes the first letter of every word.
148. [ ] Implement a function ensuring a value is within a valid "enum" set.
149. [ ] Write a loop that iterates over object properties (own properties only).
150. [ ] Simulate a coin toss game (Heads/Tails) 100 times and count results.
151. [ ] Write a function to find the Factorial of a large number (iterative).
152. [ ] Check if two strings are anagrams of each other.
153. [ ] Write a function that prints a diamond pattern.
154. [ ] Implement a function that calculates the sum of digits of a number.
155. [ ] Write a program to find the Greatest Common Divisor (GCD) of two numbers.
156. [ ] Write a program to find the Least Common Multiple (LCM).
157. [ ] Implement a function to find the second largest element in an array.
158. [ ] Write a function that checks if an array is sorted.
159. [ ] Implement a generic `range(start, end, step)` function.
160. [ ] Write a function that counts how many words are in a camelCase string.
161. [ ] Create a loop that stops when a random number equals 10.
162. [ ] Write a function to find a specific element in a 2D array.
163. [ ] Implement valid parenthesis checking `((()))` logic.
164. [ ] Write a function to remove all falsy values from an array.
165. [ ] Create a function that repeats a string N times.
166. [ ] Write a simple rate limiter logic (allow N per second).
167. [ ] Implement a switch statement to handle Redux-style actions.
168. [ ] Write a function that truncates words in a sentence, not cutting words in half.
169. [ ] Create a function that validates an email format (simple logic).
170. [ ] Write a loop to calculate the power of a number.
171. [ ] Implement a function that finds unique characters in a string.
172. [ ] Create a function that replaces spaces with hyphens (slugify).
173. [ ] Write a function to calculate the Hamming distance between two strings.
174. [ ] Check if a matrix is symmetric.
175. [ ] Transpose a 2D matrix.
176. [ ] Write a function to generate Pascal's Triangle up to N rows.
177. [ ] Implement a number guessing game logic (Binary search approach).
178. [ ] Write a function that checks for a subsequence in an array.
179. [ ] Create a function that partitions an array into even and odd numbers.
180. [ ] Write a function that finds the majority element in an array.
181. [ ] Implement standard deviation calculation.
182. [ ] Write a function to calculate the variance of numbers.
183. [ ] Find the first non-repeating character in a string.
184. [ ] Write a function that compresses a string ("aabcccccaaa" -> "a2b1c5a3").
185. [ ] Implement a function to expand a compressed string.
186. [ ] Write a function to calculate the "Edit Distance" between two strings (recursive/iterative).
187. [ ] Implement a function to check if a sudoku board is valid.
188. [ ] Write a function that finds the longest consecutive sequence in an array.
189. [ ] Create a function that finds all pairs in an array that sum to a target.
190. [ ] Write a logical function to determine if point P is inside Rectangle R.
191. [ ] Implement a state machine logic using switch case.
192. [ ] Write a function that converts snake_case to camelCase.
193. [ ] Write a function that converts camelCase to snake_case.
194. [ ] Implement a function that creates a deep copy of a simple object (recursion).
195. [ ] Write a function to simplify a file path ("/a/./b/../../c/" -> "/c").
196. [ ] Check if a number is an Armstrong number.
197. [ ] Write a function to generate all subsets of a set.
198. [ ] Implement a function that finds the "Celebrity" in a party (graph logic).
199. [ ] Write a function to convert a number to words (123 -> "One Hundred Twenty Three").
200. [ ] Create a function that formats a phone number `(123) 456-7890`.

## Part 3: Functions & Scope

### Theory
201. [ ] What is the difference between Function Declaration and Function Expression?
202. [ ] Explain Function Hoisting. Do expressions hoist?
203. [ ] What is an Anonymous Function?
204. [ ] What is an IIFE (Immediately Invoked Function Expression)? Why use it?
205. [ ] Explain the concept of "Scope" in JavaScript (Global, Function, Block).
206. [ ] What is Lexical Scope?
207. [ ] What is a Closure? Give a practical example.
208. [ ] How does the `arguments` object work? Is it an array?
209. [ ] What are Arrow Functions? How do they differ from regular functions?
210. [ ] How does `this` behave in Arrow Functions vs Regular Functions?
211. [ ] Can you use `new` with an Arrow Function?
212. [ ] What are Default Parameters? How do they work?
213. [ ] Explain Rest Parameters (`...args`).
214. [ ] What is a Higher-Order Function (HOF)?
215. [ ] What is a Callback Function?
216. [ ] Explain the concept of "Pure Functions".
217. [ ] What is a "Side Effect" in a function?
218. [ ] What is Recursion? What is the base case?
219. [ ] What is the Call Stack?
220. [ ] Explain Stack Overflow in the context of recursion.
221. [ ] What is Currying?
222. [ ] What is Partial Application?
223. [ ] Helper: What is `Function.length`?
224. [ ] Helper: What is `Function.name`?
225. [ ] Explain the `call` method.
226. [ ] Explain the `apply` method.
227. [ ] Explain the `bind` method.
228. [ ] What is Function Composition?
229. [ ] What is a Generator Function (`function*`)?
230. [ ] What is the difference between a Method and a Function?
231. [ ] Can a function be a property of an object?
232. [ ] What is the "Module Pattern" using closures?
233. [ ] Explain Memoization.
234. [ ] What are First-Class Citizens? Is JS function one?
235. [ ] What is the difference between parameters and arguments?
236. [ ] How to handle variable number of arguments (ES5 vs ES6)?
237. [ ] What is the `new.target` property?
238. [ ] Can a function return another function?
239. [ ] What happens if you define two functions with the same name?
240. [ ] What is the Block Scope of `let` and `const` in functions?

### Practice
241. [ ] Write a function that returns the square of a number.
242. [ ] Convert a named function to an arrow function.
243. [ ] Create an IIFE that logs "Hello World".
244. [ ] Write a function that calculates the sum of arbitrary number of arguments.
245. [ ] Implement a counter function using closures (increment/decrement).
246. [ ] Write a recursive function to calculate factorial.
247. [ ] Write a recursive function to generate the Nth Fibonacci number.
248. [ ] Implement a `curry` function that turns `f(a,b,c)` into `f(a)(b)(c)`.
249. [ ] Write a function `once(fn)` that ensures a function is called only once.
250. [ ] Implement a `memoize` function to cache results of expensive calls.
251. [ ] Create a `compose` function (f, g) -> x -> f(g(x)).
252. [ ] Create a `pipe` function (f, g) -> x -> g(f(x)).
253. [ ] Write a function that takes a callback and executes it N times.
254. [ ] Implement a function that behaves like `Function.prototype.bind`.
255. [ ] Write a function to check if a string consists of unique characters using recursion.
256. [ ] Create a "private variable" using a closure.
257. [ ] Write a function that accepts an array of functions and runs them in sequence.
258. [ ] Implement a `debounce` function.
259. [ ] Implement a `throttle` function.
260. [ ] Write a recursive function to flatten a nested array.
261. [ ] Create a function that generates a customized greeting (Closure).
262. [ ] Write a function that limits the number of times it can be called.
263. [ ] Implement `map` using recursion.
264. [ ] Implement `filter` using recursion.
265. [ ] Write a generator function that yields infinite IDs.
266. [ ] Write a function that accepts named parameters (using object destructuring).
267. [ ] Create a generic error handler wrapper for functions.
268. [ ] Write a function that mimics `setTimeout` using a busy-wait loop (Theory proof).
269. [ ] Implement a "lazy" evaluation function.
270. [ ] Create a partial application function.
271. [ ] Write a function that determines if another function is a generator.
272. [ ] Create a simple middleware runner (like Express).
273. [ ] Write a function that deep freezes an object.
274. [ ] Implement a simple Pub/Sub pattern using functions.
275. [ ] Write a function to deep clone an object using recursion.
276. [ ] Create a recursive function to find the maximum depth of an object.
277. [ ] Write a function that wraps another function and logs its execution time.
278. [ ] Implement a function which adds n to a number, where n is curried.
279. [ ] Write a recursive binary search.
280. [ ] Create a function to traverse a DOM tree recursively.
281. [ ] Write a polyfill for `Array.prototype.map`.
282. [ ] Write a polyfill for `Array.prototype.filter`.
283. [ ] Write a polyfill for `Array.prototype.reduce`.
284. [ ] Write a function that performs a deep comparison of two values.
285. [ ] Implement a "sleep" function.
286. [ ] Write a function that returns a random integer, but allows a seed via closure.
287. [ ] Create a function that mimics the `new` keyword logic.
288. [ ] Write a recursive parser for a simple mathematical expression.
289. [ ] Implement a function that retries a promise-based function N times.
290. [ ] Write a function that captures the stack trace.
291. [ ] Create a function that converts a callback-based function to a Promise-based one.
292. [ ] Write a function that checks if a number is a "Happy Number".
293. [ ] Implement a simple state manager (Redux mini) using closures.
294. [ ] Write a recursive function to generate permutations of a string.
295. [ ] Create a chainable object (e.g. `calc.add(5).sub(2).val()`).
296. [ ] Write a function that finds the longest path in a DAG (Directed Acyclic Graph) if represented by object.
297. [ ] Create a function to curry a function with variable arity.
298. [ ] Write a function that creates a range generator.
299. [ ] Implement a function to find the LCA (Lowest Common Ancestor) in a tree.
300. [ ] Write a function `spyOn(obj, method)` that tracks calls.

## Part 4: Data Structures (Arrays, Strings, Objects)

### Theory
301. [ ] What is the time complexity of accessing an array element by index?
302. [ ] What is a "Sparse Array"?
303. [ ] Difference between `Array` and `Set`.
304. [ ] Difference between `Object` and `Map`.
305. [ ] What is a `WeakMap`? When to use it?
306. [ ] What is a `WeakSet`?
307. [ ] Are arrays really arrays in JS or objects?
308. [ ] How does `Array.length` property work? Can you set it?
309. [ ] Difference between `slice` and `splice`.
310. [ ] Explain Mutation vs Non-mutation methods.
311. [ ] What is an "Iterable"? What is the Iterator Protocol?
312. [ ] How does string immutability work?
313. [ ] What are Template Literals?
314. [ ] Explain `destructuring` assignments for Arrays and Objects.
315. [ ] What is the "Spread" syntax in objects? shallow or deep?
316. [ ] How are keys stored in an Object? (Order?)
317. [ ] What is JSON? Constraints?
318. [ ] `JSON.stringify` vs `toString()`.
319. [ ] How to copy an object? (Shallow vs Deep).
320. [ ] What are "Typed Arrays" (Int8Array, etc)?

### Practice
321. [ ] Write a function to remove an element from an array by index.
322. [ ] Insert an element at a specific index in an array.
323. [ ] Merge two arrays without duplicates.
324. [ ] Find the intersection of two Sets.
325. [ ] Find the union of two Sets.
326. [ ] Find the difference of two Sets.
327. [ ] Convert a Map to an Object.
328. [ ] Convert an Object to a Map.
329. [ ] Count the frequency of elements in an array (return Map/Object).
330. [ ] Group an array of objects by a property (GroupBy).
331. [ ] Implement a customized `sort` function (e.g. by age).
332. [ ] Flatten a nested array using `reduce`.
333. [ ] Check if an array contains a specific object (deep check).
334. [ ] Remove falsy values from an object.
335. [ ] Invert an object (keys become values, values become keys).
336. [ ] Deep merge two objects.
337. [ ] Find the max value in an array of objects.
338. [ ] Convert a string to Title Case.
339. [ ] Implement a method to shuffle a string.
340. [ ] Check if a string contains balanced brackets.
341. [ ] Implement a specialized Stack class.
342. [ ] Implement a specialized Queue class.
343. [ ] Implement a Linked List class.
344. [ ] Implement a Doubly Linked List.
345. [ ] Reverse a Linked List.
346. [ ] Detect a cycle in a Linked List.
347. [ ] Implement a Binary Search Tree (BST) insert method.
348. [ ] Implement a BST search method.
349. [ ] Find tree traversal (Inorder, Preorder, Postorder).
350. [ ] Implement a Breadth-First Search (BFS) on a tree.
351. [ ] Implement a Depth-First Search (DFS) on a tree.
352. [ ] Check if two trees are identical.
353. [ ] Find the Height of a BST.
354. [ ] Implement a Hash Table (basic).
355. [ ] Implement an LRU Cache.
356. [ ] Find the first non-repeating character using a Map.
357. [ ] Check if a string is a rotation of another.
358. [ ] find all extensive sub-arrays.
359. [ ] Write a function to split a string into chunks of N size.
360. [ ] Implement a priority queue.
361. [ ] Find the Kth largest element in an array.
362. [ ] Implement a Trie (Prefix Tree).
363. [ ] Add word to Trie.
364. [ ] Search word in Trie.
365. [ ] Auto-complete feature using Trie.
366. [ ] Serialize a Binary Tree to String.
367. [ ] Deserialize a String to Binary Tree.
368. [ ] Find the longest palindromic substring.
369. [ ] Implement a Graph class (Adjacency List).
370. [ ] Add Vertex/Edge to Graph.
371. [ ] BFS in Graph.
372. [ ] DFS in Graph.
373. [ ] Detect cycle in Directed Graph.
374. [ ] Detect cycle in Undirected Graph.
375. [ ] Find the shortest path in an unweighted graph (BFS).
376. [ ] Implement Dijkstra's Algorithm (Concept code).
377. [ ] Topological Sort of a Graph.
378. [ ] Find connected components in a graph.
379. [ ] Implement a Min-Heap.
380. [ ] Implement a Max-Heap.
381. [ ] Heap Sort implementation.
382. [ ] Find the median of a data stream.
383. [ ] Merge K sorted lists.
384. [ ] Text justification problem.
385. [ ] Implement a Circular Queue.
386. [ ] Implement a Deque (Double-ended queue).
387. [ ] Design a data structure that supports insert, delete, and getRandom in O(1).
388. [ ] Find the maximum sum subarray (Kadane's Algorithm).
389. [ ] Find the maximum product subarray.
390. [ ] Longest Increasing Subsequence.
391. [ ] Longest Common Subsequence.
392. [ ] 0/1 Knapsack Problem.
393. [ ] Coin Change Problem (Dynammic Programming).
394. [ ] Climbing Stairs Problem.
395. [ ] Edit Distance implementation.
396. [ ] Word Break Problem.
397. [ ] Sudoku Solver (Backtracking).
398. [ ] N-Queens Problem.
399. [ ] Generate Parentheses.
400. [ ] Trapping Rain Water problem.

## Part 5: The DOM & Browser APIs

### Theory
401. [ ] What is the DOM (Document Object Model)?
402. [ ] Difference between `window` and `document`.
403. [ ] What are the different ways to select elements in DOM?
404. [ ] Difference between `NodeList` and `HTMLCollection`.
405. [ ] Explain "Event Bubbling" vs "Event Capturing".
406. [ ] What is Event Delegation? Why is it useful?
407. [ ] What is `e.preventDefault()`?
408. [ ] What is `e.stopPropagation()`?
409. [ ] Difference between `target` and `currentTarget`.
410. [ ] Explain "Reflow" vs "Repaint". Which is more expensive?
411. [ ] What is the Critical Rendering Path?
412. [ ] Difference between Attributes and Properties in DOM elements.
413. [ ] What is the "Shadow DOM"?
414. [ ] What are Custom Elements (Web Components)?
415. [ ] Explain `localStorage` vs `sessionStorage` vs `cookies`.
416. [ ] What is the max size limit of `localStorage`?
417. [ ] How to clear cookies in JS?
418. [ ] What is `document.cookie` format?
419. [ ] What is the IntersectionObserver API?
420. [ ] What is the MutationObserver API?
421. [ ] What is the History API (`pushState`, `replaceState`)?
422. [ ] How does `window.location` differ from `history`?
423. [ ] What is the difference between `defer` and `async` script tags?
424. [ ] What is the `DOMContentLoaded` event vs `load` event?
425. [ ] Explain the Clipboard API.
426. [ ] What are Web Workers?
427. [ ] Can Web Workers access the DOM?
428. [ ] What is a Service Worker? (Basic concept).
429. [ ] What is IndexedDB?
430. [ ] How does the Geolocation API work?
431. [ ] What is `requestAnimationFrame`? Why use it over `setInterval`?
432. [ ] Explain the concept of "Virtual DOM" (React context basics in vanilla terms).
433. [ ] What is Accessibility (a11y) in DOM?
434. [ ] What is ARIA?
435. [ ] How to measure layout performance?
436. [ ] What is `contenteditable`?
437. [ ] Difference between `innerText` and `textContent`.
438. [ ] What is `innerHTML` vs `outerHTML`?
439. [ ] Security risks of `innerHTML` (XSS).
440. [ ] What is the Same-Origin Policy (SOP)?
441. [ ] What is CORS?
442. [ ] How to trigger a click event programmatically?
443. [ ] What is the `dataset` property?
444. [ ] How to detect screen size/media queries in JS? (`matchMedia`)
445. [ ] What is `getBoundingClientRect()`?
446. [ ] Explain `scroll` vs `wheel` events.
447. [ ] What is `focus` vs `focusin`?
448. [ ] How to detect if the tab is active/visible (`document.visibilityState`)?
449. [ ] What is the Fetch API?
450. [ ] What is the Navigator object?

### Practice
451. [ ] Write code to select an element by ID and change its color.
452. [ ] Write code to select all `li` elements and log their text.
453. [ ] Implement a function to create a new `div` and append it to the body.
454. [ ] Remove a specific element from the DOM.
455. [ ] Implement a function to toggle a class on click.
456. [ ] Create a list from an array of strings and append it to the DOM.
457. [ ] Implement "Event Delegation" to handle clicks on list items.
458. [ ] Create a "Modal" popup manipulation script.
459. [ ] Implement a simple "Tooltip" on hover.
460. [ ] Write a script to validate a form (required fields, email format).
461. [ ] Create an "Infinite Scroll" using `scroll` event (basic).
462. [ ] Optimize Infinite Scroll using `IntersectionObserver`.
463. [ ] Implement a "Lazy Loading" image feature.
464. [ ] Write a script to copy text to clipboard.
465. [ ] Detect illegal character input in a text box and prevent it.
466. [ ] Create a "Tabs" component logic.
467. [ ] Implement a simple "Accordion".
468. [ ] Write a script to count DOM elements of a specific type.
469. [ ] Implement a "Scroll to Top" button.
470. [ ] Create a draggable element (using Mouse events).
471. [ ] Create a draggable element (using Drag and Drop API).
472. [ ] Write a function to get all cookies as an object.
473. [ ] Write a function to set a cookie with expiry.
474. [ ] Write a function to delete a cookie.
475. [ ] Implement a simple "Dark Mode" toggle (using localStorage).
476. [ ] Create a "Carousel" / "Slider" logic.
477. [ ] Implement a "Search Filter" for a list `<ul>`.
478. [ ] Write a script that tracks mouse position and displays it.
479. [ ] Create a "Toast" notification system.
480. [ ] Implement a "Star Rating" widget.
481. [ ] Write a script to serialize a form into JSON.
482. [ ] Create a collaborative drawing canvas (basic 2D context).
483. [ ] Implement a custom context menu (right click).
484. [ ] Write a function to download a text file generated from a string.
485. [ ] Detect if the user is offline/online and show a banner.
486. [ ] Implement a simple Router (hash based).
487. [ ] Implement a "Debounced" search input handler.
488. [ ] Create a "Countdown Timer" visualization.
489. [ ] Build a simple "Todo List" with Add/Delete/Edit.
490. [ ] Highlight all words in a paragraph over 8 characters long.
491. [ ] Create a sidebar that slides in.
492. [ ] Implement "Pull to Refresh" logic (touch events).
493. [ ] Animate an element usage `requestAnimationFrame`.
494. [ ] Write a script to get the user's geolocation.
495. [ ] Implement a "Typewriter" effect.
496. [ ] Create a "Parallax" scrolling effect.
497. [ ] Build a custom video player controls.
498. [ ] Capture a screenshot of a div (using html2canvas concept code or logic).
499. [ ] Write a logic to detect "AdBlocker" (theory/heuristic).
500. [ ] Implement a "Konami Code" listener.

## Part 6: Object-Oriented JavaScript (Prototypes, Classes, `this`)

### Theory
501. [ ] What is the difference between Class-based and Prototype-based inheritance?
502. [ ] What is the Prototype Chain?
503. [ ] What is `__proto__`? How does it differ from `prototype`?
504. [ ] What does `Object.create()` do?
505. [ ] Explain the 4 rules of `this` binding (Default, Implicit, Explicit, New).
506. [ ] What is the `constructor` property?
507. [ ] What is a "Mixin"?
508. [ ] Explain ES6 `class` syntax. Is it syntactic sugar?
509. [ ] What is `super`?
510. [ ] How to define static methods in ES6 classes?
511. [ ] What are Getters and Setters (`get` / `set`)?
512. [ ] Can you have private properties in ES6 classes? (`#private`).
513. [ ] What is `Object.assign()`?
514. [ ] What is `Object.seal()` vs `Object.freeze()`?
515. [ ] What is `Object.defineProperty()`?
516. [ ] How to create a property that is not enumerable?
517. [ ] What is the "Factory Pattern"?
518. [ ] What is the "Singleton Pattern"?
519. [ ] What is the "Observer Pattern"?
520. [ ] What is the "module" pattern (revealing module)?
521. [ ] Explain Polymorphism in JS.
522. [ ] Explain Encapsulation in JS.
523. [ ] What is `instanceof` operator? How does it work?
524. [ ] How to check if an object acts as an instance of a class without `instanceof`?
525. [ ] What happens if you return an object from a constructor function?
526. [ ] What is the difference between composition and inheritance?
527. [ ] Why is composition often preferred over inheritance?
528. [ ] What are "Decorators" (experimental/TS)?
529. [ ] How to extend built-in classes (like Array)?
530. [ ] What is `Symbol.iterator`?
531. [ ] What is `Symbol.toStringTag`?
532. [ ] How to implement "Multiple Inheritance" in JS (Mixins)?
533. [ ] What is Duck Typing?
534. [ ] What is `Object.getPrototypeOf()`?
535. [ ] What is `Object.setPrototypeOf()`? Performance implications?
536. [ ] Explain the `Reflect` API.
537. [ ] What is a Proxy object? Use cases?
538. [ ] Who owns the method when defined in a class? (Instance vs Prototype).
539. [ ] Explain the concept of "boxing" and "unboxing".
540. [ ] What is the difference between `Object.keys()` and `for...in`?

### Practice
541. [ ] Implement inheritance using ES5 prototypes.
542. [ ] Refactor ES5 inheritance code to ES6 Classes.
543. [ ] Create a `Person` class with `getName` method.
544. [ ] Create a `Student` class extending `Person` with `grade`.
545. [ ] Implement a "Singleton" class (ensure only one instance).
546. [ ] Implement a "Factory" function that creates different shapes.
547. [ ] Implement a "Observer" pattern (Subject/Observer).
548. [ ] Create a Mixin that adds "logging" capability to any class.
549. [ ] Use `Object.create` to create an object with a null prototype.
550. [ ] Write a function to check if an object is an instance of a class manually (mimic instanceof).
551. [ ] Implement a class with Private fields using WeakMap (ES5 style).
552. [ ] Implement a class with Private fields using `#` syntax.
553. [ ] Create a class that extends `Array` and adds a method `last()`.
554. [ ] Use `Proxy` to create a validation object (prevent setting negative age).
555. [ ] Use `Proxy` to implement a negative array index access (arr[-1]).
556. [ ] Implement a simple "Event Emitter" class.
557. [ ] Write a function that deep freezes an object/class instance.
558. [ ] Implement the "Builder Pattern" for creating complex objects.
559. [ ] Create a class that is iterable (implements `[Symbol.iterator]`).
560. [ ] Implement a method that is not enumerable.
561. [ ] Create a read-only property using `defineProperty`.
562. [ ] Implement a "Module" that returns public API but keeps state private.
563. [ ] Write a function to deep copy an object handling Circular References.
564. [ ] Implement "Method Chaining" in a class.
565. [ ] Create a "Command Pattern" structure.
566. [ ] Implement a "State Pattern" (like a Traffic Light).
567. [ ] Create a specialized Error class extending `Error`.
568. [ ] Use `Reflect` to invoke a function.
569. [ ] Create a revocable Proxy.
570. [ ] Implement a "Mediator Pattern" (Chat room example).
571. [ ] Write a function that borrows a method from one object to another.
572. [ ] Implement a simple "Data Binding" (Two-way).
573. [ ] Create an immutable object wrapper.
574. [ ] Implement a "Strategy Pattern" (Sorting strategies).
575. [ ] Write a function to flatten a prototype chain to array.
576. [ ] Implement "Dependency Injection" (Basic Concept).
577. [ ] Create a class with static initialization block.
578. [ ] Write a script to monkey-patch a built-in method (bad practice, but educational).
579. [ ] Implement a "Flyweight Pattern" (shared state).
580. [ ] Create a "Composite Pattern" (File/Folder structure).
581. [ ] Write a function that detects if an object is a Promise.
582. [ ] Implement a dynamic getter that computes value on access.
583. [ ] Create a class that prevents extension (`Object.preventExtensions`).
584. [ ] Implement "Memoization" as a method decorator (conceptual).
585. [ ] Use `Symbol` to create truly unique property keys.
586. [ ] Implement a "Circuit Breaker" pattern class.
587. [ ] Implement a simple "Iterator" manually.
588. [ ] Write a function to clone a class instance.
589. [ ] Implement a "Visitor Pattern".
590. [ ] create a "Memento Pattern" (Undo/Redo).
591. [ ] Implement a `RingBuffer` class.
592. [ ] Create a class that auto-binds methods in constructor.
593. [ ] Implement "Lazy Initialization" of a property.
594. [ ] Write a function that lists all methods of an object (including prototype).
595. [ ] Implement a "Template Method Pattern".
596. [ ] Create a class that limits the number of instances.
597. [ ] Use `Symbol.toPrimitive` to customize object conversion.
598. [ ] Implement a "Chain of Responsibility".
599. [ ] Create a "Proxy" that logs all property access.
600. [ ] Implement an "Adapter Pattern" (wrapper for incompatible interface).

## Part 7: Asynchronous JavaScript

### Theory
601. [ ] What is the Event Loop?
602. [ ] Difference between Synchronous and Asynchronous programming.
603. [ ] What are Callbacks? What is "Callback Hell"?
604. [ ] What is a Promise? What are its states (Pending, Fulfilled, Rejected)?
605. [ ] Explain `Promise.resolve()` and `Promise.reject()`.
606. [ ] What is the difference between `.then()` and `await`?
607. [ ] What is `Promise.all()`? What happens if one fails?
608. [ ] What is `Promise.race()`?
609. [ ] What is `Promise.allSettled()`?
610. [ ] What is `Promise.any()`?
611. [ ] Explain `async` and `await`.
612. [ ] How to handle errors in async/await (`try...catch`)?
613. [ ] What is the "Microtask Queue" vs "Macrotask Queue" (Callback Queue)?
614. [ ] In what order do `setTimeout`, `Promise`, and sync code execute?
615. [ ] What is `process.nextTick()` (Node.js concept relevant to Event Loop)?
616. [ ] What is `setImmediate()`?
617. [ ] Can you pause executed code in JS given it is single-threaded?
618. [ ] What is "Non-blocking I/O"?
619. [ ] How does the `AbortController` work with Fetch?
620. [ ] What is a "Race Condition" in async code?
621. [ ] Can `await` be used at the top level? (Top-level await).
622. [ ] How do you cancel a Promise? (Is it natively possible?)
623. [ ] What is "Promisification"?
624. [ ] What happens if you `await` a non-promise value?
625. [ ] Explain "Thread starvation" in JS.
626. [ ] What is a "Deadlock"? Can it happen in JS?
627. [ ] How does `requestAnimationFrame` fit into the Event Loop?
628. [ ] What is the difference between Concurrency and Parallelism?
629. [ ] Does JavaScript run in parallel? (Web Workers).
630. [ ] What is "Debouncing" vs "Throttling" in context of async events?
631. [ ] What is the "Thundering Herd" problem?
632. [ ] Explain the "Producer-Consumer" problem in JS context.
633. [ ] What is "Backpressure"?
634. [ ] How does `queueMicrotask()` work?
635. [ ] What happens to an unhandled promise rejection?
636. [ ] How to debug async code execution order?
637. [ ] Is `setTimeout(fn, 0)` immediate?
638. [ ] What is the minimum delay for `setTimeout`? (nested limitations).
639. [ ] Explain standard "Error-first callback" pattern.
640. [ ] Usage of Generators for Async flow control (pre-async/await).

### Practice
641. [ ] Create a Promise that resolves after 2 seconds.
642. [ ] Create a Promise that rejects after 2 seconds.
643. [ ] Convert a callback-based function (like `fs.readFile`) to Promise-based.
644. [ ] Chain three promises together sequentially.
645. [ ] Run 3 promises in parallel and wait for all to finish.
646. [ ] Run 3 promises and take the result of the fastest one.
647. [ ] Implement a sleep/delay function `wait(ms)`.
648. [ ] Write a function to retry a failed API call N times.
649. [ ] Implement logic to timeout a promise after X seconds.
650. [ ] Write a function that executes promises in sequence (Waterfall).
651. [ ] Implement a "Promise.all" polyfill.
652. [ ] Implement a "Promise.allSettled" polyfill.
653. [ ] Implement a "Promise.race" polyfill.
654. [ ] Create a cancellation token mechanism for an async task.
655. [ ] Write an async function that throws an error and catch it.
656. [ ] Implement a "Producer-Consumer" queue using async/await.
657. [ ] Write a script to fetch data from 3 URLs in parallel.
658. [ ] Write a script to fetch data from 3 URLs sequentially.
659. [ ] Implement a rate limiter for async tasks (e.g. max 2 concurrent).
660. [ ] Use `AbortController` to cancel a Fetch request.
661. [ ] Write a function that pauses execution until an event occurs.
662. [ ] Create a specialized "Async Lock" / Mutex.
663. [ ] Implement a "polling" function that checks status every N seconds.
664. [ ] Write a function that works with both callback and promise.
665. [ ] Implement "Exponential Backoff" strategy for retries.
666. [ ] Write a custom Async Iterator.
667. [ ] Iterate over an async source using `for await...of`.
668. [ ] Create a task queue which processes tasks one by one.
669. [ ] Write a function to detect if code is running in a Worker.
670. [ ] Implement a "barrier" synchronization primitive.
671. [ ] Write a function to Batch async requests (group of N).
672. [ ] Simulate a slow network request using `setTimeout`.
673. [ ] Create a "Circuit Breaker" for API calls.
674. [ ] Write a function that races a promise against a timeout.
675. [ ] Implement a "Lazy Promise" (executes only when `.then` is called).
676. [ ] Write a function that memoizes an async operation.
677. [ ] Create a progress bar simulator using async.
678. [ ] Implement a "Post-Message" communication wrapper between Window/Worker.
679. [ ] Write a script to recursively fetch paginated data.
680. [ ] Create a deadlock scenario (educational).
681. [ ] Fix the deadlock scenario.
682. [ ] Write a function to "promisify" all methods of an object.
683. [ ] Implement a "Semaphore" to limit concurrency.
684. [ ] Write a fake "Database" driver with async methods.
685. [ ] Implement a "Cache-Aside" pattern async.
686. [ ] Write a function that ignores subsequent calls while one is pending.
687. [ ] Create a localized "Event Loop" simulator.
688. [ ] Write a wrapper to log duration of async calls.
689. [ ] Implement "Short-polling".
690. [ ] Implement "Long-polling" logic.
691. [ ] Write a function to check if a domain is reachable (timeout logic).
692. [ ] Create a sequence chain that stops on the first error.
693. [ ] Create a function that falls back to secondary API on failure.
694. [ ] Implement "SWR" (Stale-While-Revalidate) logic.
695. [ ] Write a function that collects results regardless of individual failures.
696. [ ] Implement "Debounce" for an async search function.
697. [ ] Implement "Throttle" for an async save function.
698. [ ] Write a benchmark for Async/Await vs .then().
699. [ ] Create a simple "Job Runner" that supports dependencies.
700. [ ] Write a function `delay` that is cancellable.

## Part 8: Modern JavaScript (ES6+ Features)

### Theory
701. [ ] What is Destructuring? (Array/Object).
702. [ ] What is the "Spread" and "Rest" operator (`...`)?
703. [ ] What is a Template Literal?
704. [ ] What are Tagged Template Literals?
705. [ ] What is the difference between `var` and `let` / `const` (Scope, TDZ)?
706. [ ] What does `Object.freeze` do? Does it deep freeze?
707. [ ] What is `Symbol`?
708. [ ] What is `BigInt`? Why do we need it?
709. [ ] What is "Optional Chaining" (`?.`)?
710. [ ] What is "Nullish Coalescing" (`??`)?
711. [ ] Difference between `??` and `||`.
712. [ ] What are Arrow Functions? (Recap).
713. [ ] What is `Object.entries()`?
714. [ ] What is `Object.values()`?
715. [ ] What is `Object.fromEntries()`?
716. [ ] What is `Array.from()`?
717. [ ] What is `Array.of()`?
718. [ ] What is `String.prototype.includes()`?
719. [ ] What is `String.prototype.padStart()` / `padEnd()`?
720. [ ] What is `String.prototype.trimStart()` / `trimEnd()`?
721. [ ] What is `Array.prototype.flat()`?
722. [ ] What is `Array.prototype.flatMap()`?
723. [ ] What is `Promise.allSettled()` (Recap ES2020)?
724. [ ] What is `globalThis`?
725. [ ] What are Private Class Fields (`#`)?
726. [ ] What are Static Class Fields?
727. [ ] What is Dynamic Import (`import()`)?
728. [ ] What is the `replaceAll()` string method?
729. [ ] What are Numeric Separators (`1_000_000`)?
730. [ ] What are Logical Assignment Operators (`&&=`, `||=`, `??=`)?
731. [ ] What is `WeakRef`?
732. [ ] What is `FinalizationRegistry`?
733. [ ] What is Top-level `await`?
734. [ ] What is `Object.hasOwn()` vs `hasOwnProperty()`?
735. [ ] What is the `at()` method for Arrays/Strings?
736. [ ] What is the `cause` property in Errors?
737. [ ] What are Import Assertions (JSON modules)?
738. [ ] What is `structuredClone()`?
739. [ ] What is `Array.prototype.findLast()`?
740. [ ] What is `String.prototype.matchAll()`?

### Practice
741. [ ] Swap two variables using destructuring.
742. [ ] Extract nested properties using destructuring.
743. [ ] Use Spread operator to merge two objects.
744. [ ] Use Rest operator to catch remaining arguments.
745. [ ] Write a Tagged Template function to sanction HTML content.
746. [ ] Convert a string to an array using `Array.from`.
747. [ ] Create a unique array using `Set` and Spread.
748. [ ] Iterate over an object's keys and values using `Object.entries`.
749. [ ] Convert a Map to an Object using `Object.fromEntries`.
750. [ ] Use Optional Chaining to safely access nested node `a?.b?.c`.
751. [ ] Use Nullish Coalescing to provide a default value for null/undefined.
752. [ ] Flatten an array of depth 2 using `.flat(2)`.
753. [ ] Use `.flatMap()` to map and flatten in one step.
754. [ ] Pad a string with zeros using `padStart`.
755. [ ] Create a BigInt and perform arithmetic.
756. [ ] Use Logical Assignment to assign a value only if a variable is null.
757. [ ] Dynamically import a module based on a condition.
758. [ ] Use `globalThis` to access the global object.
759. [ ] Create a class with a private method.
760. [ ] Use `replaceAll` to replace all occurrences of a word.
761. [ ] Create a large number using Numeric Separators.
762. [ ] Use `WeakRef` to hold a reference (Theory check/Basic usage).
763. [ ] Implement a deep clone efficiently using `structuredClone`.
764. [ ] Get the last element of an array using `.at(-1)`.
765. [ ] Check for property existence using `Object.hasOwn`.
766. [ ] Iterate over regex matches using `.matchAll()`.
767. [ ] Use `Promise.any()` to get the first successful promise.
768. [ ] Find the last element satisfying a condition using `.findLast()`.
769. [ ] Format a date using `Intl.DateTimeFormat`.
770. [ ] Format a currency number using `Intl.NumberFormat`.
771. [ ] Sort strings taking locale into account (`localeCompare`).
772. [ ] Create a relative time format ("5 minutes ago") using `Intl.RelativeTimeFormat`.
773. [ ] Use `Array.prototype.copyWithin()` to shift data.
774. [ ] Use `Array.prototype.fill()` to initialize an array.
775. [ ] Create a list formatting ("A, B, and C") using `Intl.ListFormat`.
776. [ ] Refactor `if (!val) val = 10` to `val ||= 10`.
777. [ ] Refactor `if (val === null || val === undefined) val = 10` to `val ??= 10`.
778. [ ] Write a module that exports default and named exports.
779. [ ] Import a module and rename its exports.
780. [ ] Use `new.target` to ensure a class is not instantiated directly (Abstract Class).
781. [ ] Use `Symbol.species` to return standard Array from MyArray class.
782. [ ] Implement a Custom Element (Web Component) extending HTMLElement.
783. [ ] Attach a Shadow DOM to a Custom Element.
784. [ ] Use `template` and `slot` elements.
785. [ ] Define a custom event and dispatch it.
786. [ ] Use `queueMicrotask` to schedule a task.
787. [ ] Write a script using Top-Level Await (module).
788. [ ] Use `Error` with `cause` property.
789. [ ] Group items in an array (using `Object.groupBy` or polyfill).
790. [ ] Sort an array without mutating it (`toSorted` - ES2023).
791. [ ] Reverse an array without mutating it (`toReversed`).
792. [ ] Splice an array without mutation (`toSpliced`).
793. [ ] Update an index without mutation (`with`).
794. [ ] Check if a private field exists in an object (`#field in obj`).
795. [ ] Use `RegExp` indices (d flag).
796. [ ] Use `RegExp` lookbehind assertions.
797. [ ] Use `RegExp` named capture groups.
798. [ ] Implement a tagged template for SQL sanitization.
799. [ ] Create a reusable utility library using ES Modules.
800. [ ] Convert a CommonJS `require` code to ESM `import`.

## Part 9: Error Handling, Regex, and Modules

### Theory
801. [ ] What are the built-in Error types in JS? (ReferenceError, TypeError, etc).
802. [ ] How to create a Custom Error class?
803. [ ] What is the difference between `throw "Error"` and `throw new Error("Error")`?
804. [ ] How to catch global unhandled errors? (`window.onerror`).
805. [ ] How to catch unhandled promise rejections globally?
806. [ ] Explain "Error Bubbling" (if applicable) or propagation.
807. [ ] What is Strict Mode? Name 3 things it changes.
808. [ ] Why is `eval()` considered "evil"?
809. [ ] What is the `with` statement? Why is it deprecated?
810. [ ] Explain JavaScript Memory Management lifecycle.
811. [ ] What is Garbage Collection?
812. [ ] Explain "Mark-and-Sweep" algorithm.
813. [ ] What causes Memory Leaks in JS?
814. [ ] How can closures cause memory leaks?
815. [ ] What are Detached DOM nodes?
816. [ ] What is a Regular Expression?
817. [ ] Explain Greedy vs Lazy quantifiers in Regex.
818. [ ] What are "Capture Groups"?
819. [ ] What are "Non-capturing Groups"?
820. [ ] Explain Lookahead and Lookbehind assertions.
821. [ ] What are Regex Flags (`g`, `i`, `m`, `s`, `u`, `y`)?
822. [ ] CommonJS vs ES Modules (Deep dive: Loading, Parsing, Execution).
823. [ ] How are Cyclic Dependencies handled in CJS vs ESM?
824. [ ] What is "Tree Shaking"?
825. [ ] How does `npm` handle dependencies? (Nested vs Flat).
826. [ ] What is a `package.lock` / `yarn.lock` file?
827. [ ] What is Semantic Versioning (SemVer)?
828. [ ] Difference between `dependencies` and `devDependencies`.
829. [ ] What are "Peer Dependencies"?
830. [ ] What is a "Polyfill" vs "Shim"?
831. [ ] What is "Transpilation" (Babel)?
832. [ ] What is a "Bundler" (Webpack, Vite)?
833. [ ] Explain "Hot Module Replacement" (HMR).
834. [ ] What is "Scope Hoisting"?
835. [ ] What is the "Temporal Dead Zone" (TDZ) for Classes?
836. [ ] Explain the "Revealing Module Pattern".
837. [ ] What is Function Currying vs Partial Application (Revisit)?
838. [ ] What is `Intl` API?
839. [ ] Explain standard Unicode support in JS.
840. [ ] What is `String.prototype.normalize()`?

### Practice
841. [ ] Write a Regex to validate an Email Address.
842. [ ] Write a Regex to validate a Password (specific complexity).
843. [ ] Write a Regex to match a Date format (YYYY-MM-DD).
844. [ ] Write a Regex to match an IP Address (IPv4).
845. [ ] Write a Regex to match a Hex Color Code.
846. [ ] Write a Regex to extract the domain from a URL.
847. [ ] Write a Regex to find duplicate words in a string.
848. [ ] Implement a function that parses a CSV string (basic).
849. [ ] Create a Custom Error Type `ValidationError`.
850. [ ] Write a wrapper function that attempts an async action and retries on failure.
851. [ ] Implement a global error logger that sends errors to an API.
852. [ ] Write a script that deliberately creates a memory leak (educational).
853. [ ] Write a script that fixes the memory leak.
854. [ ] Implement a basic "Module Loader" function (mimic `require`).
855. [ ] Write a function using `eval` safely (trick question: don't, but explain).
856. [ ] Implement a function to sanitize user input (prevent XSS).
857. [ ] Write a Regex to replace "camelCase" with "kebab-case".
858. [ ] Write a Regex to validate a Phone Number (various formats).
859. [ ] Extract all numbers from a string using Regex.
860. [ ] Write a function to check for balanced HTML tags (simple).
861. [ ] Implement a logic to handle circular dependencies in objects.
862. [ ] Write a function to parse a Semantic Version string.
863. [ ] Implement a "Version Comparator" function.
864. [ ] Create a Polyfill for `Array.prototype.flat`.
865. [ ] Create a Polyfill for `Function.prototype.bind`.
866. [ ] Write a script to detect the user's browser and version.
867. [ ] Implement a "Feature Detection" logic.
868. [ ] Write a regex to capture HTML attributes.
869. [ ] Validate a Credit Card number (Luhn Algorithm).
870. [ ] Write a custom `JSON.stringify` implementation.
871. [ ] Write a custom `JSON.parse` (simplified).
872. [ ] Implement a standard "Middleware" pattern pipeline.
873. [ ] Create a "Sandbox" environment for executing untrusted code (iframe/worker).
874. [ ] Write a function that formats raw bytes into Heildump format.
875. [ ] Implement a simple tokenizer for a programming language.
876. [ ] Write a parser for a simple math expression.
877. [ ] Implement a basic Virtual Machine (stack based).
878. [ ] Write a function that obfuscates a string.
879. [ ] Write a function that de-obfuscates a string.
880. [ ] Detect if a specific font is installed (heuristic).
881. [ ] Write a regex to match a valid USD currency amount.
882. [ ] Implement a "Slug Generator" from a string.
883. [ ] Write a function to escape Regex characters in a string.
884. [ ] Implement a simple dependency injection container.
885. [ ] Write a function that loads a script dynamically from a URL.
886. [ ] Implement a "Singleton" module.
887. [ ] Write a regex to match a valid hashtag.
888. [ ] Write a regex to match a valid Twitter handle.
889. [ ] Parse a User-Agent string.
890. [ ] Implement "LZW Compression" (simplified).
891. [ ] Implement "LZW Decompression".
892. [ ] Write a function to diff two strings.
893. [ ] Implement a "Fuzzy Search" logic.
894. [ ] Write a function that normalizes whitespace in a string.
895. [ ] Implement a basic Markdown parser.
896. [ ] Write a regex to remove comments from code.
897. [ ] Implement a function to format code (indentation).
898. [ ] Write a function to validate JSON syntax w/o `JSON.parse`.
899. [ ] Implement a basic event bus.
900. [ ] Write a function to get the current script path.

## Part 10: Advanced, Performance, Open Source & Arch

### Theory
901. [ ] Explain the V8 Engine Pipeline.
902. [ ] What is JIT (Just-In-Time) compilation?
903. [ ] What are Hidden Classes (Shapes) in V8?
904. [ ] What is "Inline Caching"?
905. [ ] How does V8 optimize code? (Ignition, TurboFan).
906. [ ] What is WebAssembly (Wasm)?
907. [ ] How does JS communicate with Wasm?
908. [ ] What is a "Memory Leak" in the context of SPA?
909. [ ] Explain "Layout Thrashing" (Forced Synchronous Layout).
910. [ ] What is "Compositing" in the browser?
911. [ ] What is the "RAIL Model" for performance?
912. [ ] What is "Hydration" in SSR?
913. [ ] Difference between CSR, SSR, and SSG.
914. [ ] What is a PWA (Progressive Web App)?
915. [ ] What is the difference between TCP and UDP? (Relevance to Web).
916. [ ] What is HTTP/2? Multiplexing?
917. [ ] What is HTTP/3 (QUIC)?
918. [ ] Explain JWT (JSON Web Token) structure.
919. [ ] Where to store tokens? (LocalStorage vs Cookie).
920. [ ] What is XSS (sross-Site Scripting)? Types?
921. [ ] What is CSRF (Cross-Site Request Forgery)?
922. [ ] What is Clickjacking?
923. [ ] What is CSP (Content Security Policy)?
924. [ ] What is CORS (Cross-Origin Resource Sharing) mechanics?
925. [ ] Explain MVC, MVP, MVVM patterns.
926. [ ] What is Flux Architecture?
927. [ ] What is Unidirectional Data Flow?
928. [ ] What is Functional Programming?
929. [ ] What is a Monad? (Simple explanation).
930. [ ] What is a Functor?
931. [ ] What is Immutability? Why is it important in React/Redux?
932. [ ] What is "Referential Transparency"?
933. [ ] What is TDD (Test Driven Development)?
934. [ ] What is BDD (Behavior Driven Development)?
935. [ ] Difference between Unit, Integration, and E2E testing.
936. [ ] What is "Mocking" vs "Stubbing"?
937. [ ] Explain "Dependency Injection" vs "Dependency Inversion".
938. [ ] What is "Solid" principle?
939. [ ] What is "Clean Architecture"?
940. [ ] How do you contribute to Open Source? (Fork, Branch, PR).

### Practice
941. [ ] Write a loop that is optimized for performance (reverse while).
942. [ ] Measure the execution time of a function using `performance.now()`.
943. [ ] Implement a "Virtual List" (render only visible items).
944. [ ] Write a function to "debounce" a window resize handler.
945. [ ] Implement a function to avoid Layout Thrashing.
946. [ ] Write a script to calculate First Contentful Paint (FCP).
947. [ ] Implement a JWT decoding function (base64).
948. [ ] Write a function to sanitize HTML string to prevent XSS.
949. [ ] Implement a CSRF token usage in a fetch request.
950. [ ] Set up a Service Worker to cache assets.
951. [ ] Implement a simple "Store" (Redux-like) from scratch.
952. [ ] Write a basic React-like `createElement` function.
953. [ ] Write a basic React-like `render` function (Virtual DOM to Real DOM).
954. [ ] Implement a simple "Diffing Algorithm" for VDOM.
955. [ ] Create a "Component" class with `setState`.
956. [ ] Implement a "Router" with history support.
957. [ ] Write a test runner from scratch (describe, it, expect).
958. [ ] Implement an assertion library (`expect(a).toBe(b)`).
959. [ ] Write a mocking function `jest.fn()`.
960. [ ] Implement a simple "IoC Container".
961. [ ] Write a script to pre-fetch links in the viewport.
962. [ ] Implement a "Theme Switcher" using CSS Variables and JS.
963. [ ] Write a function to detect "AdBlock" presence.
964. [ ] Create a "Web Component" for a custom button.
965. [ ] Implement a "HOC" (Higher Order Component) pattern.
966. [ ] Write a "Render Prop" component.
967. [ ] Implement "Hooks" logic (useState, useEffect mockup).
968. [ ] Create a basic "Static Site Generator" script.
969. [ ] Write a function to traverse an AST (Abstract Syntax Tree).
970. [ ] Create a Babel Plugin (concept: reverse identifiers).
971. [ ] Implement a simple "Module Bundler" (concept).
972. [ ] Write a function to generate a sourcemap (concept).
973. [ ] Implement a "WebSocket" chat client.
974. [ ] Write a script to handle "Offline" state changes.
975. [ ] Implement "Server-Sent Events" (SSE) client.
976. [ ] Write a function to encrypt a string (simple shift cipher).
977. [ ] Write a function to decrypt a string.
978. [ ] Implement a "Bloom Filter".
979. [ ] Implement a "Merkle Tree".
980. [ ] Write a function that calculates the hash of a file.
981. [ ] Create a "Blockchain" data structure (basic).
982. [ ] Implement "Proof of Work" logic.
983. [ ] Write a P2P node discovery simulation.
984. [ ] Implement a "Consistent Hashing" algorithm.
985. [ ] Write a Load Balancer simulation (Round Robin).
986. [ ] Implement a "Rate Limiter" (Token Bucket).
987. [ ] Implement a "Rate Limiter" (Leaky Bucket).
988. [ ] Write a function to detect "Clickjacking" (frame bust).
989. [ ] Implement "Content Negotiation" logic.
990. [ ] Write a GraphQL query parser (simplified).
991. [ ] Implement a "Redux Middleware" for logging.
992. [ ] Write a function to deep compare two VDOM trees.
993. [ ] Implement a "Fiber" architecture (scheduler requestIdleCallback).
994. [ ] Write a script to analyze bundle size.
995. [ ] Implement a "Tree Shaking" simulation (remove unused exports).
996. [ ] Write a function to get element visibility percentage.
997. [ ] Implement a "Headless Browser" script (Puppeteer/Playwright usage).
998. [ ] Write a script to automate a Login flow.
999. [ ] Write a function to "Hydrate" a server-rendered DOM.
1000. [ ] Build a comprehensive "Todo App" using only Vanilla JS and all concepts learned.


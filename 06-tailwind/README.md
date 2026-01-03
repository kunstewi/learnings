### Tailwind CSS Fundamentals

- [ ] 1. What is Tailwind CSS? Is it a CSS framework or a utility-first CSS framework?
- [ ] 2. What does "utility-first" mean in the context of Tailwind CSS?
- [ ] 3. What are the main advantages of using Tailwind CSS over traditional CSS or other frameworks like Bootstrap?
- [ ] 4. What are the disadvantages or criticisms of Tailwind CSS?
- [ ] 5. How does Tailwind CSS differ from Bootstrap or Material UI?
- [ ] 6. What is the philosophy behind Tailwind's approach to styling?
- [ ] 7. How do you install Tailwind CSS in a project?
- [ ] 8. What is the purpose of the `tailwind.config.js` file?
- [ ] 9. What is the purpose of the `postcss.config.js` file?
- [ ] 10. What are the three main directives you add to your CSS file when setting up Tailwind?
- [ ] 11. What does `@tailwind base;` do?
- [ ] 12. What does `@tailwind components;` do?
- [ ] 13. What does `@tailwind utilities;` do?
- [ ] 14. What is the `@layer` directive in Tailwind CSS?
- [ ] 15. What is the difference between adding custom CSS in `@layer base`, `@layer components`, and `@layer utilities`?
- [ ] 16. How does Tailwind's JIT (Just-In-Time) mode work?
- [ ] 17. What are the benefits of JIT mode over the classic mode?
- [ ] 18. Is JIT mode enabled by default in Tailwind CSS v3+?
- [ ] 19. What is PurgeCSS and why is it important for Tailwind?
- [ ] 20. How does Tailwind CSS keep the final bundle size small?
- [ ] 21. What is the `content` configuration in `tailwind.config.js`?
- [ ] 22. What happens if you don't configure the `content` array correctly?
- [ ] 23. How do you add custom colors to your Tailwind configuration?
- [ ] 24. How do you extend the default Tailwind theme?
- [ ] 25. What is the difference between `extend` and directly modifying the `theme` in the config?
- [ ] 26. How do you add custom fonts to Tailwind?
- [ ] 27. How do you add custom spacing values?
- [ ] 28. How do you add custom breakpoints?
- [ ] 29. What are the default breakpoints in Tailwind CSS?
- [ ] 30. What is the mobile-first approach in Tailwind CSS?

---

### Spacing & Sizing

- [ ] 31. How does Tailwind's spacing scale work? (e.g., what does `4` in `p-4` represent?)
- [ ] 32. What is the base unit for spacing in Tailwind? (1 unit = ? rem = ? px)
- [ ] 33. What does `m-4` do?
- [ ] 34. What does `p-4` do?
- [ ] 35. What is the difference between `m-4` and `mx-4`?
- [ ] 36. What does `mt-4`, `mr-4`, `mb-4`, `ml-4` do?
- [ ] 37. What does `mx-auto` do? When would you use it?
- [ ] 38. What does `my-4` do?
- [ ] 39. What is the difference between `p-4` and `px-4`?
- [ ] 40. What does `pt-4`, `pr-4`, `pb-4`, `pl-4` do?
- [ ] 41. How do you add negative margins in Tailwind?
- [ ] 42. What does `-m-4` do?
- [ ] 43. What are the available spacing values in Tailwind? (0, 0.5, 1, 2, 3, 4, etc.)
- [ ] 44. What does `space-x-4` do?
- [ ] 45. What does `space-y-4` do?
- [ ] 46. What is the difference between `gap-4` and `space-x-4`?
- [ ] 47. How do you set width in Tailwind?
- [ ] 48. What does `w-full` do?
- [ ] 49. What does `w-screen` do?
- [ ] 50. What is the difference between `w-full` and `w-screen`?
- [ ] 51. What does `w-1/2`, `w-1/3`, `w-1/4` do?
- [ ] 52. What does `w-fit` do?
- [ ] 53. What does `w-auto` do?
- [ ] 54. How do you set height in Tailwind?
- [ ] 55. What does `h-full` do?
- [ ] 56. What does `h-screen` do?
- [ ] 57. What does `h-fit` do?
- [ ] 58. What does `min-h-screen` do?
- [ ] 59. What does `max-w-md`, `max-w-lg`, `max-w-xl` do?
- [ ] 60. What are the available max-width values in Tailwind?

---

### Typography

- [ ] 61. How do you set font size in Tailwind?
- [ ] 62. What does `text-sm`, `text-base`, `text-lg`, `text-xl` do?
- [ ] 63. What is the default font size (`text-base`) in pixels?
- [ ] 64. What does `text-xs` and `text-9xl` represent?
- [ ] 65. How do you set font weight in Tailwind?
- [ ] 66. What does `font-thin`, `font-normal`, `font-bold` do?
- [ ] 67. What are all the available font weights?
- [ ] 68. How do you set text color in Tailwind?
- [ ] 69. What does `text-red-500` do?
- [ ] 70. What is the color scale in Tailwind? (50, 100, 200, ..., 900)
- [ ] 71. What does `text-gray-900` vs `text-gray-50` represent?
- [ ] 72. How do you set text alignment?
- [ ] 73. What does `text-center`, `text-left`, `text-right`, `text-justify` do?
- [ ] 74. How do you make text uppercase, lowercase, or capitalize?
- [ ] 75. What does `uppercase`, `lowercase`, `capitalize`, `normal-case` do?
- [ ] 76. How do you add text decoration?
- [ ] 77. What does `underline`, `line-through`, `no-underline` do?
- [ ] 78. How do you set line height in Tailwind?
- [ ] 79. What does `leading-tight`, `leading-normal`, `leading-loose` do?
- [ ] 80. How do you set letter spacing?
- [ ] 81. What does `tracking-tight`, `tracking-normal`, `tracking-wide` do?
- [ ] 82. How do you truncate text with ellipsis?
- [ ] 83. What does `truncate` do?
- [ ] 84. What does `line-clamp-3` do?
- [ ] 85. How do you set font family in Tailwind?
- [ ] 86. What are the default font families? (`font-sans`, `font-serif`, `font-mono`)
- [ ] 87. How do you add a custom font family?
- [ ] 88. What does `text-opacity-50` do?
- [ ] 89. How do you set text shadow in Tailwind?
- [ ] 90. What does `antialiased` and `subpixel-antialiased` do?

---

### Colors & Backgrounds

- [ ] 91. What are the default color palettes in Tailwind CSS?
- [ ] 92. How many shades does each color have?
- [ ] 93. What does `bg-blue-500` do?
- [ ] 94. What does `bg-transparent` do?
- [ ] 95. What does `bg-current` do?
- [ ] 96. What does `bg-inherit` do?
- [ ] 97. How do you set background opacity?
- [ ] 98. What does `bg-opacity-50` do?
- [ ] 99. How do you set gradient backgrounds?
- [ ] 100. What does `bg-gradient-to-r` do?
- [ ] 101. What does `from-blue-500 to-purple-500` do?
- [ ] 102. What does `via-pink-500` do in a gradient?
- [ ] 103. How do you create a three-color gradient?
- [ ] 104. What are all the gradient direction utilities? (`bg-gradient-to-t`, `bg-gradient-to-br`, etc.)
- [ ] 105. How do you set background images in Tailwind?
- [ ] 106. What does `bg-cover`, `bg-contain`, `bg-auto` do?
- [ ] 107. What does `bg-center`, `bg-top`, `bg-bottom` do?
- [ ] 108. What does `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y` do?
- [ ] 109. How do you set background attachment?
- [ ] 110. What does `bg-fixed`, `bg-local`, `bg-scroll` do?

---

### Borders & Shadows

- [ ] 111. How do you add borders in Tailwind?
- [ ] 112. What does `border` do?
- [ ] 113. What does `border-2`, `border-4`, `border-8` do?
- [ ] 114. What does `border-t`, `border-r`, `border-b`, `border-l` do?
- [ ] 115. What does `border-x` and `border-y` do?
- [ ] 116. How do you set border color?
- [ ] 117. What does `border-red-500` do?
- [ ] 118. How do you set border radius?
- [ ] 119. What does `rounded`, `rounded-md`, `rounded-lg`, `rounded-full` do?
- [ ] 120. What does `rounded-t`, `rounded-r`, `rounded-b`, `rounded-l` do?
- [ ] 121. What does `rounded-tl`, `rounded-tr`, `rounded-bl`, `rounded-br` do?
- [ ] 122. What does `rounded-none` do?
- [ ] 123. How do you add box shadows?
- [ ] 124. What does `shadow`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl` do?
- [ ] 125. What does `shadow-none` do?
- [ ] 126. What does `shadow-inner` do?
- [ ] 127. How do you set shadow color?
- [ ] 128. What does `shadow-red-500` do?
- [ ] 129. How do you add outline?
- [ ] 130. What does `outline`, `outline-2`, `outline-4` do?
- [ ] 131. What does `outline-offset-2` do?
- [ ] 132. How do you add ring (focus ring)?
- [ ] 133. What does `ring`, `ring-2`, `ring-4` do?
- [ ] 134. What does `ring-offset-2` do?
- [ ] 135. What does `ring-blue-500` do?
- [ ] 136. When would you use `ring` vs `border`?
- [ ] 137. What does `divide-y` do?
- [ ] 138. What does `divide-x-2` do?
- [ ] 139. What does `divide-gray-200` do?
- [ ] 140. How do you add border styles?
- [ ] 141. What does `border-solid`, `border-dashed`, `border-dotted`, `border-double`, `border-none` do?

---

### Flexbox

- [ ] 142. How do you create a flex container in Tailwind?
- [ ] 143. What does `flex` do?
- [ ] 144. What does `inline-flex` do?
- [ ] 145. What is the difference between `flex` and `inline-flex`?
- [ ] 146. How do you set flex direction?
- [ ] 147. What does `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse` do?
- [ ] 148. How do you set flex wrap?
- [ ] 149. What does `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse` do?
- [ ] 150. How do you set flex grow and shrink?
- [ ] 151. What does `flex-1`, `flex-auto`, `flex-initial`, `flex-none` do?
- [ ] 152. What does `grow`, `grow-0` do?
- [ ] 153. What does `shrink`, `shrink-0` do?
- [ ] 154. How do you justify content in flexbox?
- [ ] 155. What does `justify-start`, `justify-center`, `justify-end` do?
- [ ] 156. What does `justify-between`, `justify-around`, `justify-evenly` do?
- [ ] 157. What is the difference between `justify-around` and `justify-evenly`?
- [ ] 158. How do you align items in flexbox?
- [ ] 159. What does `items-start`, `items-center`, `items-end` do?
- [ ] 160. What does `items-baseline`, `items-stretch` do?
- [ ] 161. How do you align content?
- [ ] 162. What does `content-start`, `content-center`, `content-end` do?
- [ ] 163. How do you align a single flex item?
- [ ] 164. What does `self-start`, `self-center`, `self-end`, `self-stretch` do?
- [ ] 165. What does `order-1`, `order-2`, `order-first`, `order-last` do?
- [ ] 166. How do you create a centered div using flexbox in Tailwind?
- [ ] 167. How do you create a space-between layout?
- [ ] 168. How do you create a responsive flex layout that changes from column to row?

---

### Grid

- [ ] 169. How do you create a grid container in Tailwind?
- [ ] 170. What does `grid` do?
- [ ] 171. What does `inline-grid` do?
- [ ] 172. How do you set grid columns?
- [ ] 173. What does `grid-cols-3` do?
- [ ] 174. What does `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` do?
- [ ] 175. What does `grid-cols-none` do?
- [ ] 176. How do you set grid rows?
- [ ] 177. What does `grid-rows-3` do?
- [ ] 178. How do you set column span?
- [ ] 179. What does `col-span-2` do?
- [ ] 180. What does `col-span-full` do?
- [ ] 181. What does `col-start-2`, `col-end-4` do?
- [ ] 182. How do you set row span?
- [ ] 183. What does `row-span-2` do?
- [ ] 184. What does `row-span-full` do?
- [ ] 185. How do you set gap in grid?
- [ ] 186. What does `gap-4` do?
- [ ] 187. What does `gap-x-4` and `gap-y-2` do?
- [ ] 188. How do you set grid auto flow?
- [ ] 189. What does `grid-flow-row`, `grid-flow-col`, `grid-flow-dense` do?
- [ ] 190. How do you set grid auto columns/rows?
- [ ] 191. What does `auto-cols-auto`, `auto-cols-min`, `auto-cols-max`, `auto-cols-fr` do?
- [ ] 192. How do you justify items in grid?
- [ ] 193. What does `justify-items-start`, `justify-items-center`, `justify-items-end` do?
- [ ] 194. How do you align items in grid?
- [ ] 195. What does `place-items-center` do?
- [ ] 196. What does `place-content-center` do?
- [ ] 197. What does `place-self-center` do?

---

### Positioning & Layout

- [ ] 198. How do you set display property in Tailwind?
- [ ] 199. What does `block`, `inline-block`, `inline`, `hidden` do?
- [ ] 200. What does `flex`, `grid`, `table`, `table-row`, `table-cell` do?
- [ ] 201. How do you set position in Tailwind?
- [ ] 202. What does `static`, `relative`, `absolute`, `fixed`, `sticky` do?
- [ ] 203. How do you set top, right, bottom, left values?
- [ ] 204. What does `top-0`, `right-0`, `bottom-0`, `left-0` do?
- [ ] 205. What does `inset-0` do?
- [ ] 206. What does `inset-x-0` and `inset-y-0` do?
- [ ] 207. How do you center an absolutely positioned element?
- [ ] 208. What does `top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2` do?
- [ ] 209. How do you set z-index in Tailwind?
- [ ] 210. What does `z-0`, `z-10`, `z-20`, `z-50`, `z-auto` do?
- [ ] 211. What is the default z-index scale in Tailwind?
- [ ] 212. How do you set overflow?
- [ ] 213. What does `overflow-auto`, `overflow-hidden`, `overflow-visible`, `overflow-scroll` do?
- [ ] 214. What does `overflow-x-auto` and `overflow-y-auto` do?
- [ ] 215. How do you set object fit for images?
- [ ] 216. What does `object-contain`, `object-cover`, `object-fill`, `object-none` do?
- [ ] 217. What does `object-center`, `object-top`, `object-bottom` do?
- [ ] 218. How do you set aspect ratio?
- [ ] 219. What does `aspect-square`, `aspect-video` do?
- [ ] 220. How do you create a custom aspect ratio?

---

### Responsive Design

- [ ] 221. What is the mobile-first approach in Tailwind?
- [ ] 222. What are the default responsive breakpoints in Tailwind?
- [ ] 223. What does `sm:`, `md:`, `lg:`, `xl:`, `2xl:` represent in pixels?
- [ ] 224. How do you apply styles only on mobile?
- [ ] 225. How do you apply styles from medium screens and up?
- [ ] 226. What does `md:text-lg` do?
- [ ] 227. What does `hidden md:block` do?
- [ ] 228. What does `block md:hidden` do?
- [ ] 229. How do you create a responsive grid that changes columns at different breakpoints?
- [ ] 230. How do you create a responsive navigation that changes from vertical to horizontal?
- [ ] 231. Can you use multiple breakpoints on the same element?
- [ ] 232. What is the order of precedence when multiple breakpoints are applied?
- [ ] 233. How do you add custom breakpoints?
- [ ] 234. What does `max-md:hidden` do? (max-width breakpoints)
- [ ] 235. How do you use container queries in Tailwind?
- [ ] 236. What does `@container` do?
- [ ] 237. How do you target specific breakpoint ranges?
- [ ] 238. What is the difference between `md:` and `max-md:`?
- [ ] 239. How do you hide elements on specific screen sizes?
- [ ] 240. How do you create a responsive sidebar layout?

---

### Hover, Focus & Other States

- [ ] 241. How do you add hover styles in Tailwind?
- [ ] 242. What does `hover:bg-blue-500` do?
- [ ] 243. How do you add focus styles?
- [ ] 244. What does `focus:ring-2` do?
- [ ] 245. What does `focus:outline-none` do?
- [ ] 246. How do you add active styles?
- [ ] 247. What does `active:bg-blue-700` do?
- [ ] 248. How do you add disabled styles?
- [ ] 249. What does `disabled:opacity-50` do?
- [ ] 250. How do you add visited styles (for links)?
- [ ] 251. What does `visited:text-purple-600` do?
- [ ] 252. How do you style first child, last child?
- [ ] 253. What does `first:rounded-t-lg` do?
- [ ] 254. What does `last:border-b-0` do?
- [ ] 255. How do you style odd and even children?
- [ ] 256. What does `odd:bg-gray-100` do?
- [ ] 257. What does `even:bg-white` do?
- [ ] 258. How do you add group hover?
- [ ] 259. What does `group-hover:text-blue-500` do?
- [ ] 260. How do you use the `group` class?
- [ ] 261. What does `peer` do in Tailwind?
- [ ] 262. What does `peer-checked:bg-blue-500` do?
- [ ] 263. How do you style based on parent state?
- [ ] 264. What does `focus-within:ring-2` do?
- [ ] 265. What does `focus-visible:ring-2` do?
- [ ] 266. What is the difference between `focus:` and `focus-visible:`?
- [ ] 267. How do you add styles on checked state (checkboxes/radio)?
- [ ] 268. What does `checked:bg-blue-500` do?
- [ ] 269. How do you add placeholder styles?
- [ ] 270. What does `placeholder:text-gray-400` do?
- [ ] 271. How do you add selection styles?
- [ ] 272. What does `selection:bg-yellow-200` do?
- [ ] 273. How do you add styles based on required/optional state?
- [ ] 274. What does `required:border-red-500` do?
- [ ] 275. How do you add styles based on invalid/valid state?
- [ ] 276. What does `invalid:border-red-500` do?
- [ ] 277. How do you add dark mode styles?
- [ ] 278. What does `dark:bg-gray-900` do?
- [ ] 279. How do you enable dark mode in Tailwind?
- [ ] 280. What are the different dark mode strategies? (`media`, `class`)

---

### Transitions & Animations

- [ ] 281. How do you add transitions in Tailwind?
- [ ] 282. What does `transition` do?
- [ ] 283. What does `transition-all`, `transition-colors`, `transition-opacity` do?
- [ ] 284. How do you set transition duration?
- [ ] 285. What does `duration-300`, `duration-500`, `duration-1000` do?
- [ ] 286. How do you set transition timing function?
- [ ] 287. What does `ease-in`, `ease-out`, `ease-in-out`, `ease-linear` do?
- [ ] 288. How do you set transition delay?
- [ ] 289. What does `delay-150`, `delay-300` do?
- [ ] 290. How do you add animations in Tailwind?
- [ ] 291. What does `animate-spin` do?
- [ ] 292. What does `animate-ping` do?
- [ ] 293. What does `animate-pulse` do?
- [ ] 294. What does `animate-bounce` do?
- [ ] 295. How do you create custom animations?
- [ ] 296. How do you add keyframes in the Tailwind config?
- [ ] 297. How do you create a smooth hover transition?
- [ ] 298. What does `hover:scale-110 transition-transform` do?
- [ ] 299. How do you create a fade-in animation?
- [ ] 300. How do you pause animations on hover?

---

### Transforms

- [ ] 301. How do you scale elements in Tailwind?
- [ ] 302. What does `scale-50`, `scale-100`, `scale-150` do?
- [ ] 303. What does `scale-x-50` and `scale-y-50` do?
- [ ] 304. How do you rotate elements?
- [ ] 305. What does `rotate-45`, `rotate-90`, `rotate-180` do?
- [ ] 306. What does `-rotate-45` do?
- [ ] 307. How do you translate elements?
- [ ] 308. What does `translate-x-4`, `translate-y-4` do?
- [ ] 309. What does `-translate-x-1/2` do?
- [ ] 310. How do you skew elements?
- [ ] 311. What does `skew-x-12`, `skew-y-12` do?
- [ ] 312. How do you set transform origin?
- [ ] 313. What does `origin-center`, `origin-top`, `origin-bottom-right` do?
- [ ] 314. How do you combine multiple transforms?
- [ ] 315. What does `hover:scale-110 hover:rotate-3` do?
- [ ] 316. How do you create a 3D transform effect?
- [ ] 317. What is the `transform-gpu` utility?
- [ ] 318. How do you create a flip card effect?
- [ ] 319. How do you create a smooth zoom on hover?
- [ ] 320. How do you create a shake animation?

---

### Filters & Effects

- [ ] 321. How do you add blur in Tailwind?
- [ ] 322. What does `blur`, `blur-sm`, `blur-lg`, `blur-xl` do?
- [ ] 323. How do you add brightness?
- [ ] 324. What does `brightness-50`, `brightness-100`, `brightness-150` do?
- [ ] 325. How do you add contrast?
- [ ] 326. What does `contrast-50`, `contrast-100`, `contrast-150` do?
- [ ] 327. How do you add grayscale?
- [ ] 328. What does `grayscale`, `grayscale-0` do?
- [ ] 329. How do you add hue rotation?
- [ ] 330. What does `hue-rotate-15`, `hue-rotate-90`, `hue-rotate-180` do?
- [ ] 331. How do you invert colors?
- [ ] 332. What does `invert`, `invert-0` do?
- [ ] 333. How do you add saturation?
- [ ] 334. What does `saturate-50`, `saturate-100`, `saturate-150` do?
- [ ] 335. How do you add sepia?
- [ ] 336. What does `sepia`, `sepia-0` do?
- [ ] 337. How do you add drop shadow?
- [ ] 338. What does `drop-shadow`, `drop-shadow-lg` do?
- [ ] 339. How do you add backdrop blur?
- [ ] 340. What does `backdrop-blur`, `backdrop-blur-sm` do?
- [ ] 341. What is the difference between `blur` and `backdrop-blur`?
- [ ] 342. How do you add backdrop brightness?
- [ ] 343. What does `backdrop-brightness-50` do?
- [ ] 344. How do you create a frosted glass effect?
- [ ] 345. How do you combine multiple filters?

---

### Opacity & Visibility

- [ ] 346. How do you set opacity in Tailwind?
- [ ] 347. What does `opacity-0`, `opacity-50`, `opacity-100` do?
- [ ] 348. How do you hide elements?
- [ ] 349. What does `hidden` do?
- [ ] 350. What does `invisible` do?
- [ ] 351. What is the difference between `hidden` and `invisible`?
- [ ] 352. What is the difference between `opacity-0` and `invisible`?
- [ ] 353. How do you set visibility?
- [ ] 354. What does `visible`, `invisible`, `collapse` do?
- [ ] 355. How do you create a fade-in effect using opacity?

---

### Tables

- [ ] 356. How do you style tables in Tailwind?
- [ ] 357. What does `table`, `table-row`, `table-cell` do?
- [ ] 358. What does `table-auto` do?
- [ ] 359. What does `table-fixed` do?
- [ ] 360. What is the difference between `table-auto` and `table-fixed`?
- [ ] 361. How do you add borders to tables?
- [ ] 362. What does `border-collapse`, `border-separate` do?
- [ ] 363. How do you add spacing between table cells?
- [ ] 364. What does `border-spacing-2` do?
- [ ] 365. How do you create striped tables?

---

### Forms & Inputs

- [ ] 366. How do you style form inputs in Tailwind?
- [ ] 367. What does `appearance-none` do?
- [ ] 368. Why would you use `appearance-none` on inputs?
- [ ] 369. How do you style checkboxes and radio buttons?
- [ ] 370. What does `accent-blue-500` do?
- [ ] 371. How do you style select dropdowns?
- [ ] 372. How do you style file inputs?
- [ ] 373. How do you create custom checkboxes using Tailwind?
- [ ] 374. How do you create custom radio buttons?
- [ ] 375. How do you style focus states on inputs?
- [ ] 376. What does `focus:ring-2 focus:ring-blue-500` do?
- [ ] 377. How do you create a search input with icon?
- [ ] 378. How do you create a password input with toggle visibility?
- [ ] 379. How do you style disabled inputs?
- [ ] 380. How do you create floating labels?

---

### Custom Utilities & Plugins

- [ ] 381. How do you add custom utilities in Tailwind?
- [ ] 382. What is the `@apply` directive?
- [ ] 383. When should you use `@apply`?
- [ ] 384. What are the criticisms of using `@apply`?
- [ ] 385. How do you create custom components using `@layer components`?
- [ ] 386. What is the difference between using `@apply` and inline Tailwind classes?
- [ ] 387. How do you add custom utilities using the `theme` function?
- [ ] 388. How do you extend Tailwind with plugins?
- [ ] 389. What are some popular Tailwind plugins?
- [ ] 390. What does the `@tailwindcss/forms` plugin do?
- [ ] 391. What does the `@tailwindcss/typography` plugin do?
- [ ] 392. What does the `@tailwindcss/aspect-ratio` plugin do?
- [ ] 393. What does the `@tailwindcss/line-clamp` plugin do?
- [ ] 394. How do you create a custom plugin?
- [ ] 395. How do you add custom variants?
- [ ] 396. What is the `addVariant` function in plugins?
- [ ] 397. How do you use arbitrary values in Tailwind?
- [ ] 398. What does `w-[137px]` do?
- [ ] 399. What does `bg-[#1da1f2]` do?
- [ ] 400. What does `text-[14px]` do?
- [ ] 401. When should you use arbitrary values vs extending the config?
- [ ] 402. How do you use arbitrary properties?
- [ ] 403. What does `[mask-type:luminance]` do?
- [ ] 404. How do you use arbitrary variants?
- [ ] 405. What does `[&:nth-child(3)]:bg-blue-500` do?

---

### Performance & Best Practices

- [ ] 406. How does Tailwind CSS affect bundle size?
- [ ] 407. What is tree-shaking in the context of Tailwind?
- [ ] 408. How do you optimize Tailwind for production?
- [ ] 409. What is the role of PurgeCSS/content configuration?
- [ ] 410. Should you use `@apply` extensively? Why or why not?
- [ ] 411. What are the best practices for organizing Tailwind classes?
- [ ] 412. How do you handle long class names?
- [ ] 413. What is the `clsx` or `classnames` library?
- [ ] 414. How do you conditionally apply Tailwind classes in React?
- [ ] 415. What is the `tailwind-merge` library?
- [ ] 416. Why would you need `tailwind-merge`?
- [ ] 417. How do you handle component variants in Tailwind?
- [ ] 418. What is the CVA (Class Variance Authority) library?
- [ ] 419. How do you create reusable components with Tailwind?
- [ ] 420. What is the "utility-first" vs "component-first" debate?

---

### Integration & Tooling

- [ ] 421. How do you use Tailwind with React?
- [ ] 422. How do you use Tailwind with Next.js?
- [ ] 423. How do you use Tailwind with Vue?
- [ ] 424. How do you use Tailwind with Angular?
- [ ] 425. How do you use Tailwind with Svelte?
- [ ] 426. What is the Tailwind CSS IntelliSense extension?
- [ ] 427. What features does the IntelliSense extension provide?
- [ ] 428. How do you configure IntelliSense for custom config?
- [ ] 429. What is the Prettier plugin for Tailwind?
- [ ] 430. What does the Prettier plugin do?
- [ ] 431. How do you set up ESLint for Tailwind?
- [ ] 432. What is the `eslint-plugin-tailwindcss`?
- [ ] 433. How do you use Tailwind with CSS preprocessors (Sass, Less)?
- [ ] 434. Can you use Tailwind with styled-components?
- [ ] 435. How do you use Tailwind with Emotion?

---

### Advanced Tailwind Concepts

- [ ] 436. What is the `theme()` function in CSS?
- [ ] 437. How do you access theme values in custom CSS?
- [ ] 438. What is the `screen()` function?
- [ ] 439. How do you use CSS variables with Tailwind?
- [ ] 440. How do you create a design system with Tailwind?
- [ ] 441. What is the `container` utility?
- [ ] 442. How do you configure the container?
- [ ] 443. What does `container mx-auto` do?
- [ ] 444. How do you create responsive containers?
- [ ] 445. What is the `prose` class from the typography plugin?
- [ ] 446. How do you customize the prose styles?
- [ ] 447. What are modifier classes in Tailwind?
- [ ] 448. How do you create multi-theme support?
- [ ] 449. How do you implement theme switching?
- [ ] 450. What is the `@config` directive?
- [ ] 451. How do you use multiple config files?
- [ ] 452. What is the `presets` option in Tailwind config?
- [ ] 453. How do you create a Tailwind preset?
- [ ] 454. What is the `corePlugins` option?
- [ ] 455. How do you disable specific core plugins?

---

### Real-World Scenarios & Code Examples

- [ ] 456. How do you create a card component with Tailwind?
- [ ] 457. How do you create a button with variants (primary, secondary, outline)?
- [ ] 458. How do you create a navbar with responsive menu?
- [ ] 459. How do you create a hero section with background image?
- [ ] 460. How do you create a footer with multiple columns?
- [ ] 461. How do you create a modal/dialog?
- [ ] 462. How do you create a dropdown menu?
- [ ] 463. How do you create tabs?
- [ ] 464. How do you create an accordion?
- [ ] 465. How do you create a tooltip?
- [ ] 466. How do you create a badge/chip?
- [ ] 467. How do you create an avatar component?
- [ ] 468. How do you create a progress bar?
- [ ] 469. How do you create a skeleton loader?
- [ ] 470. How do you create a toast notification?
- [ ] 471. How do you create a breadcrumb?
- [ ] 472. How do you create pagination?
- [ ] 473. How do you create a sidebar layout?
- [ ] 474. How do you create a dashboard layout?
- [ ] 475. How do you create a pricing table?
- [ ] 476. How do you create a testimonial card?
- [ ] 477. How do you create a feature grid?
- [ ] 478. How do you create a contact form?
- [ ] 479. How do you create a login form?
- [ ] 480. How do you create a search bar?

---

### Debugging & Common Issues

- [ ] 481. Why are my Tailwind classes not working?
- [ ] 482. How do you debug Tailwind CSS issues?
- [ ] 483. What does "class not found" mean in Tailwind?
- [ ] 484. Why is my custom color not working?
- [ ] 485. How do you check if Tailwind is properly configured?
- [ ] 486. What is the `@tailwind` directive error?
- [ ] 487. Why is my production build missing styles?
- [ ] 488. How do you fix content/purge configuration issues?
- [ ] 489. Why are my arbitrary values not working?
- [ ] 490. How do you handle specificity issues with Tailwind?
- [ ] 491. Why is `!important` sometimes needed?
- [ ] 492. How do you use the `!` prefix for important?
- [ ] 493. What does `!bg-red-500` do?
- [ ] 494. How do you override Tailwind styles?
- [ ] 495. What are the common mistakes when using Tailwind?
- [ ] 496. How do you handle dynamic class names?
- [ ] 497. Why shouldn't you use string concatenation for classes?
498. 
```jsx
// ❌ Wrong
const textColor = `text-${color}-500`;

// ✅ Correct
const textColor = color === 'red' ? 'text-red-500' : 'text-blue-500';
```
Explain why the first approach doesn't work.

- [ ] 499. How do you use Tailwind with third-party components?
- [ ] 500. How do you migrate from Bootstrap to Tailwind?

---

### Practical Coding Challenges

- [ ] 501. Create a responsive grid layout with 1 column on mobile, 2 on tablet, 3 on desktop.
- [ ] 502. Create a centered container with max-width and padding.
- [ ] 503. Create a flex layout with items evenly spaced.
- [ ] 504. Create a sticky header that stays at the top.
- [ ] 505. Create a full-height hero section.
- [ ] 506. Create a card with hover effect (scale and shadow).
- [ ] 507. Create a gradient button with hover state.
- [ ] 508. Create a responsive navigation that collapses on mobile.
- [ ] 509. Create a two-column layout with sidebar.
- [ ] 510. Create a grid of images with equal heights.
- [ ] 511. Create a loading spinner using Tailwind animations.
- [ ] 512. Create a custom checkbox with checkmark icon.
- [ ] 513. Create a toggle switch.
- [ ] 514. Create a range slider styled with Tailwind.
- [ ] 515. Create a file upload dropzone.
- [ ] 516. Create a tag input component.
- [ ] 517. Create a star rating component.
- [ ] 518. Create a timeline component.
- [ ] 519. Create a calendar grid.
- [ ] 520. Create a responsive table that scrolls on mobile.
- [ ] 521. Create a split-screen layout (50/50).
- [ ] 522. Create a masonry grid layout.
- [ ] 523. Create a sticky footer.
- [ ] 524. Create a parallax scrolling effect.
- [ ] 525. Create a smooth scroll to section.
- [ ] 526. Create a back-to-top button.
- [ ] 527. Create a hamburger menu icon with animation.
- [ ] 528. Create a notification badge on an icon.
- [ ] 529. Create a profile card with avatar and info.
- [ ] 530. Create a pricing card with highlighted plan.
- [ ] 531. Create a testimonial slider.
- [ ] 532. Create a FAQ section with expandable items.
- [ ] 533. Create a stats counter section.
- [ ] 534. Create a team member grid.
- [ ] 535. Create a blog post card.
- [ ] 536. Create a comment section layout.
- [ ] 537. Create a chat message bubble.
- [ ] 538. Create a kanban board column.
- [ ] 539. Create a calendar event card.
- [ ] 540. Create a product card for e-commerce.
- [ ] 541. Create a shopping cart item.
- [ ] 542. Create a checkout form layout.
- [ ] 543. Create a dashboard stat card.
- [ ] 544. Create a notification list item.
- [ ] 545. Create a user profile header.
- [ ] 546. Create a settings page layout.
- [ ] 547. Create a login/signup split screen.
- [ ] 548. Create an email template layout.
- [ ] 549. Create a landing page hero with CTA.
- [ ] 550. Create a footer with newsletter signup.

---

### Comparison & Migration

- [ ] 551. What are the key differences between Tailwind v2 and v3?
- [ ] 552. What is the JIT engine and when was it introduced?
- [ ] 553. What new features were added in Tailwind v3?
- [ ] 554. What was removed in Tailwind v3?
- [ ] 555. How do you migrate from Tailwind v2 to v3?
- [ ] 556. What is the difference between Tailwind and inline styles?
- [ ] 557. When would you choose Tailwind over CSS Modules?
- [ ] 558. When would you choose Tailwind over styled-components?
- [ ] 559. How does Tailwind compare to Chakra UI?
- [ ] 560. How does Tailwind compare to Material-UI?
- [ ] 561. What is the learning curve of Tailwind?
- [ ] 562. Is Tailwind suitable for large-scale applications?
- [ ] 563. How do you maintain consistency in a team using Tailwind?
- [ ] 564. What are the accessibility considerations with Tailwind?
- [ ] 565. How do you ensure semantic HTML while using Tailwind?

---

### Advanced Patterns & Techniques

- [ ] 566. How do you create a utility-first component library?
- [ ] 567. How do you handle theming in a multi-tenant application?
- [ ] 568. How do you implement RTL (Right-to-Left) support?
- [ ] 569. How do you create responsive typography?
- [ ] 570. What is the `fluid` typography approach?
- [ ] 571. How do you implement container queries?
- [ ] 572. How do you create a print stylesheet with Tailwind?
- [ ] 573. How do you optimize for Core Web Vitals?
- [ ] 574. How do you handle CSS specificity wars?
- [ ] 575. How do you create a scalable design system?
- [ ] 576. How do you document Tailwind components?
- [ ] 577. How do you test components styled with Tailwind?
- [ ] 578. How do you handle browser compatibility?
- [ ] 579. What is the `@supports` directive with Tailwind?
- [ ] 580. How do you create fallbacks for unsupported features?

---

### Ecosystem & Resources

- [ ] 581. What is Tailwind UI?
- [ ] 582. What is Headless UI?
- [ ] 583. How does Headless UI work with Tailwind?
- [ ] 584. What is Tailwind Play?
- [ ] 585. What are some popular Tailwind component libraries?
- [ ] 586. What is DaisyUI?
- [ ] 587. What is Flowbite?
- [ ] 588. What is Preline UI?
- [ ] 589. What is Meraki UI?
- [ ] 590. What is Tailwind Elements?
- [ ] 591. What is the Tailwind CSS Discord community?
- [ ] 592. Where can you find Tailwind templates?
- [ ] 593. What are some good resources for learning Tailwind?
- [ ] 594. What is the official Tailwind documentation like?
- [ ] 595. Are there any Tailwind courses or tutorials?
- [ ] 596. What is the Tailwind Labs company?
- [ ] 597. Who created Tailwind CSS?
- [ ] 598. What is the future roadmap of Tailwind?
- [ ] 599. How often is Tailwind updated?
- [ ] 600. How do you stay updated with Tailwind changes?

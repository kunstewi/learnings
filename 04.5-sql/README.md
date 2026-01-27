# SQL Mastery: Basic to Advanced

This document contains a comprehensive collection of 200 SQL problems, ranging from theoretical concepts to practical implementation scenarios. It covers all features, best practices, and patterns often found in large-scale open-source codebases.

## Prerequisites
- A relational database of your choice (PostgreSQL, MySQL, SQLite, etc.)
- Basic understanding of what a database is.

---

## 1. Fundamentals & Basic Concepts (Theory)

1.  **Define Relational Database Management System (RDBMS).** How does it differ from a file-based system?
2.  **What is SQL?** Is it a procedural or declarative language? Explain why.
3.  **Explain the difference between DDL, DML, DCL, and TCL.** Give examples of commands for each.
4.  **What is a Primary Key?** What are its essential properties?
5.  **What is a Foreign Key?** How does it enforce referential integrity?
6.  **Explain the concept of a Candidate Key vs. a Super Key.**
7.  **What is NULL in SQL?** Is it the same as zero or an empty string?
8.  **What are Constraints?** List five common constraints used in SQL.
9.  **Describe the client-server architecture of a typical database system.**
10. **What is a Schema?** How does it relate to a database instance?
11. **Explain the order of execution for a SQL query.** (e.g., FROM -> WHERE -> GROUP BY...)
12. **What are the standard SQL data types?** (INT, VARCHAR, DATE, etc.)
13. **What is the difference between `CHAR` and `VARCHAR`?** When would you use one over the other?
14. **What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?**
15. **Explain the concept of Atomic types.** Why is it important for 1NF?
16. **What is a "Tuple" in relational database terminology?**
17. **What is an "Attribute" in relational database terminology?**
18. **Why are coding standards (like naming conventions) important in SQL schema design?**
19. **What is the purpose of the `information_schema` database?**
20. **TRUE or FALSE: SQL keywords are case-sensitive.**

## 2. Basic Queries & Selection (Practice)

*Assume a table `employees` with columns: `id`, `name`, `department`, `salary`, `hire_date`.*

21. Write a query to select all columns from the `employees` table.
22. Write a query to select only the `name` and `salary` columns.
23. Write a query to fetch unique `department` names (remove duplicates).
24. Select all employees named 'John Doe'.
25. Select all employees who earn more than 50,000.
26. Select all employees who work in existing departments (where department is not NULL).
27. Write a query to combined `name` and `department` into a single string column called `profile`.
28. Select a calculated column displaying annual salary (assuming `salary` is monthly) named `annual_income`.
29. Write a query that returns the current date and time.
30. Select employees using a literal string check (e.g., select 'Active' for all rows).

## 3. Filtering, Sorting, and Logic (Practice)

31. Find employees whose salary is between 40,000 and 60,000 using `BETWEEN`.
32. Find employees who work in 'HR', 'IT', or 'Finance' using `IN`.
33. Find employees whose names start with 'A' using `LIKE`.
34. Find employees whose names end with 'son'.
35. Find employees whose names contain 'an' anywhere.
36. Find employees where the second letter of their name is 'a'.
37. Select employees sort by `salary` in descending order.
38. Select employees sorted by `department` (asc) and then `salary` (desc).
39. Fetch the top 3 highest-paid employees.
40. Fetch the 3rd highest paid employee (using OFFSET/LIMIT).
41. Select employees where `department` is NOT 'Sales'.
42. Select employees hired after '2023-01-01' AND who earn less than 30,000.
43. Select employees who either work in 'IT' OR earn more than 100,000.
44. Find employees where `manager_id` is NULL (top-level bosses).
45. Sort employees by name length.
46. Select distinct combinations of `department` and `salary`.
47. Use the `CASE` statement to return 'High' if salary > 80000, else 'Low'.
48. Write a query using `NOT IN` to exclude employees from specific IDs (1, 2, 3).
49. Write a query to check for existence of any record where salary is 0.
50. (Theory) What is the performance implication of using `%` at the start of a `LIKE` pattern?

## 4. Aggregate Functions & Grouping (Practice)

51. Count the total number of employees in the table.
52. Calculate the sum of all salaries.
53. Calculate the average salary of all employees.
54. Find the minimum and maximum salary in the company.
55. Count usage of `COUNT(*)` vs `COUNT(column_name)`. What is the difference?
56. Group employees by `department` and count how many are in each.
57. Group by `department` and find the average salary per department.
58. Filter the above result to show only departments with an average salary > 60,000 (Using `HAVING`).
59. What is the difference between `WHERE` and `HAVING`?
60. Group by `department` and `job_title`, calculating the max salary for each combination.
61. Find the department with the highest number of employees.
62. Calculate the standard deviation of salaries (using standard SQL functions like `STDDEV`).
63. Find the sum of salaries for employees hired in 2023.
64. Concatenate all employee names in a department into a single string (GROUP_CONCAT or STRING_AGG).
65. Count the number of distinct salaries in the table.
66. (Theory) Can you nest aggregate functions? (e.g., `MAX(AVG(salary))`).
67. Write a query to find duplicates in the `name` column.
68. Calculate the total salary bill for the entire company.
69. Find the average salary, rounding the result to 2 decimal places.
70. Write a query using `COALESCE` to replace NULL department names with 'Unassigned' during aggregation.

## 5. Joins & Relational Logic (Practice)

*Assume two tables: `employees` (id, name, dept_id) and `departments` (id, name, location).*

71. (Theory) Explain the difference between INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN.
72. Write an INNER JOIN to list employee names and their department names.
73. Write a LEFT JOIN to list all employees and their department, even if they have no department assignment.
74. Write a RIGHT JOIN to list all departments and their employees, even if a department has no employees.
75. Write a FULL OUTER JOIN to show all employees and all departments, matching where possible.
76. Perform a Self-Join on `employees` to find pairs of employees who have the same manager.
77. Find employees who do not belong to any valid department (Dangling references).
78. Find departments that have no employees assigned.
79. Write a Cross Join (Cartesian Product) between employees and departments. When might this be useful?
80. Join three tables: `employees`, `projects`, and `employee_projects` (Many-to-Many relationship).
81. Write a query to find the department name of the employee 'Alice'.
82. List all department names and the count of employees in each (Using JOIN and GROUP BY).
83. Join tables using non-equi joins (e.g., join where salary is between a salary grade's min and max).
84. Use `USING` syntax instead of `ON` for a join.
85. Difference between a 'Natural Join' and a standard join.
86. How does SQL handle NULL values in join conditions?
87. Write a query to find employees who work in the same location as 'Alice' (Self join via department).
88. Update an employee's salary based on a multiplier found in the `departments` table (UPDATE with JOIN).
89. Delete employees who belong to a department that has been deleted (Simulate cascade manually).
90. (Theory) What is a recursive join?

## 6. Subqueries & Set Operations (Practice)

91. Find employees whose salary is higher than the average salary of the entire company.
92. Find employees whose salary is higher than the average salary *of their own department* (Correlated Subquery).
93. Find the department(s) with the highest total salary sum.
94. Use `EXISTS` to find departments that have at least one employee.
95. Use `NOT EXISTS` to find departments with zero employees.
96. Find the employee with the second highest salary using a subquery (no LIMIT/OFFSET).
97. List employees who have the same job title as 'John Doe' (Subquery).
98. Why limit subqueries to return a single column when used in a `WHERE IN` clause?
99. Write a query using `UNION` to combine results of two completely different tables (e.g., Customers and Suppliers) into a generic 'Contact' list.
100. What is the difference between `UNION` and `UNION ALL`?
101. Use `INTERSECT` to find names present in both `tableA` and `tableB`.
102. Use `EXCEPT` (or `MINUS`) to find rows in `tableA` not present in `tableB`.
103. Create a copy of the `employees` table using `CREATE TABLE ... AS SELECT`.
104. Insert data into a table from a subquery (`INSERT INTO ... SELECT`).
105. Use a subquery in the `FROM` clause (derived table) to calculate a temporary aggregate.
106. Use a subquery in the `SELECT` clause to act as a look-up for a specific value.
107. Find all employees who earn more than the *maximum* salary of the 'IT' department (`> ALL`).
108. Find all employees who earn more than *any* employee in the 'IT' department (`> ANY`).
109. What happens if a subquery returns NULL in a `NOT IN` clause?
110. Rewrite a `WHERE IN` subquery using `JOIN`.

## 7. Advanced SQL Features (Practice)

*Topics: Window Functions, CTEs*

111. (Theory) What is a Window Function and how does it differ from a regular Aggregate Function?
112. Assign a rank to each employee based on salary using `RANK()`.
113. Use `DENSE_RANK()` for the same data. How does the result differ from `RANK()`?
114. Use `ROW_NUMBER()` to identify duplicate rows.
115. Calculate the running total of salaries ordered by hire date.
116. Calculate the moving average of salaries over the last 3 hired employees.
117. Find the difference between an employee's salary and the previous employee's salary (using `LAG()`).
118. Compare an employee's salary to the next employee's salary (using `LEAD()`).
119. Divide employees into 4 quartiles based on their salary (`NTILE(4)`).
120. Calculate the percentage of total salary each employee earns within their department.
121. Write a Common Table Expression (CTE) to calculate total salary per department, then join it back to employees.
122. Write a Recursive CTE to generate a sequence of numbers from 1 to 10.
123. Write a Recursive CTE to traverse a hierarchical organizational chart (Manager -> Employees).
124. Use a CTE to simplify a complex nested subquery.
125. Can you use multiple CTEs in a single query? Write an example.
126. Write a query using `first_value()` window function.
127. Write a query using `last_value()` window function.
128. Explain the `PARTITION BY` clause in window functions.
129. Explain the `ORDER BY` clause inside a window function `OVER()`.
130. What is the default frame clause in window functions (Range/Rows)?

## 8. Data Manipulation & Transactions (Theory & Practice)

131. (Theory) What does ACID stand for? Explain each property.
132. Write a transaction block that transfers $100 from Account A to Account B.
133. What is a "Dirty Read"? Which isolation level prevents it?
134. What is a "Non-repeatable Read"?
135. What is a "Phantom Read"?
136. Explain the 4 standard SQL Isolation Levels.
137. How do you manually `COMMIT` or `ROLLBACK` a transaction?
138. What is a Savepoint?
139. Explain Optimistic vs. Pessimistic Locking.
140. What is a Deadlock? How can it be resolved?
141. Write an `INSERT` statement that adds multiple rows at once.
142. Write an `UPDATE` statement using a `JOIN` (syntax varies by DB).
143. Using `INSERT ... ON CONFLICT` (Upsert).
144. How detailed should your transaction logs be?
145. What is the difference between specific `LOCK TABLE` commands vs row-level locking?
146. Explain `SELECT ... FOR UPDATE`.
147. What happens to a running transaction if the database crashes?
148. How does MVCC (Multi-Version Concurrency Control) work generally?
149. (Theory) Why should transactions be kept as short as possible?
150. Practice creating a temporary table and inserting data into it.

## 9. Schema Design, Constraints & Normalization (Theory)

151. What is Normalization? Why do we do it?
152. Explain First Normal Form (1NF).
153. Explain Second Normal Form (2NF).
154. Explain Third Normal Form (3NF).
155. What is BCNF (Boyce-Codd Normal Form)?
156. When is Denormalization appropriate?
157. Create a table with a Composite Primary Key.
158. Add a `UNIQUE` constraint to an existing column.
159. Add a `CHECK` constraint to ensure `salary > 0`.
160. Add a `DEFAULT` value to a column.
161. Create a table with a JSON column (if supported).
162. Discuss the pros/cons of using UUIDs vs Integers as Primary Keys.
163. What acts as a Foreign Key in a Many-to-Many relationship table?
164. Explain the concept of "Soft Delete" vs "Hard Delete".
165. Implement a "Soft Delete" pattern (add `is_deleted` column and view).
166. What is a Surrogate Key?
167. Explain the Entity-Attribute-Value (EAV) model. Is it good or bad?
168. How do you store hierarchical data (Trees) in SQL? (Adjacency List, Nested Set, Path Enumeration).
169. What is a database schema migration?
170. Importance of `NOT NULL` constraints for performance and logic.

## 10. Performance, Indexing & Internals (Advanced)

171. What is a Database Index? How does it improve performance?
172. What is the downside of having too many indexes?
173. Explain B-Tree indexes.
174. Explain Hash indexes. When are they used?
175. What represents a "Clustered Index"?
176. Create an index on the `email` column of the users table.
177. Create a composite index on `(lastname, firstname)`. Explain the importance of column order.
178. What does `EXPLAIN` or `EXPLAIN ANALYZE` do?
179. Interpret a query plan: What is a "Full Table Scan"? Is it always bad?
180. What is an "Index Scan" vs "Index Seek"?
181. What is "Index Covering"?
182. Why avoid `SELECT *` in production code?
183. How does the wildcard `%` at the beginning of a LIKE search affect indexing?
184. What is Database Partitioning/Sharding?
185. What is a Materialized View? How does it differ from a standard View?
186. Write a command to create a View.
187. What are Stored Procedures? Pros and Cons?
188. What is a Trigger? Function? Write a trigger to update a 'last_updated' timestamp.
189. Advantages of Prepared Statements (Security & Performance).
190. What is SQL Injection? How to prevent it?

## 11. Open Source & Real-World Scenarios (Practice)

191. **Pagination:** Write an optimized query for pagination (Keyset pagination vs Offset pagination).
192. **Search:** Implement a basic full-text search using SQL (Match/Against or tsvector).
193. **Pivot:** Write a query to pivot rows that show monthly sales into columns (Jan, Feb, Mar...).
194. **History Tracking:** Design a schema to keep a history of changes for an 'orders' table (Audit Log).
195. **Polymorphic Association:** How to design a 'comments' table that links to either 'posts' or 'photos'.
196. **Queue System:** How would you use a database table as a simple job queue? (Locking mechanisms).
197. **Gap Analysis:** Find missing ID numbers in a sequence.
198. **Time Series:** Group data by 15-minute intervals.
199. **Upsert Logic:** Update an inventory count if the item exists, otherwise insert it.
200. **N+1 Problem:** Explain the N+1 problem in the context of ORMs and SQL Trace, and how to fix it using `IN` or `JOIN`.


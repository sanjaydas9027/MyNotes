Creation & Insertion
Creating a new table :

CREATE TABLE <table name> (
		<column name> <data type>,
		<column name> <data type>,
		.
		.
		.
		<column name> <data type>
);
Inserting values into a table :

INSERT INTO <table name> VALUES (<val1>,<val2>,....,<valn>);
Inserting values in some columns :

INSERT INTO <table name>(<column name>,<column name>)
VALUES (<val1>,<val2>);
Data type is important i.e for strings use quotes (ex : ‘python’ instead of python)

Create table from existing table :

CREATE TABLE <table name> AS(
	SELECT <column name>,<column name>
	FROM <table name>
);
Visualization
To get description of a table :

DESCRIBE <table name>
or (DESC command runs on only the software system// doesn’t run on editors)

DESC <table name>
Selection
To get all values :

SELECT * FROM <table name> ;
To get specific columns :

SELECT <column name>, <column name> FROM <table name> ;
This can also be achieved by :

SELECT ALL <column name> FROM <table name>
To get used to specify the number of records in return:

SELECT <column_name>
FROM <table name>
WHERE condition
LIMIT number;
To get all unique values from a column :

SELECT DISTINCT <column name> FROM <table name> ;
Where Conditionals
To select specific rows with a condition :

SELECT <column name>
FROM <table name>
WHERE <condition>
Example :
Fetching rows with score greater than 85.

SELECT marks
FROM student_marks
WHERE score > 85 ;
Relational Operators
=,>,<,>=,<=,<>
Example :
Fetching rows where city is not New York.

SELECT * FROM citydata
WHERE city <> 'New York' ;
Logical Operators
||, &&, !
|| -> Or
&& -> And
! -> Not
The default order is → 1)NOT, 2)AND and 3)OR use parenthesis to override.

Example :

Fetch students who failed in math and english.
SELECT studentname FROM studentdata
WHERE math = 'Fail' && english = 'Fail';
Fetch boys who failed in math and english.
SELECT studentname FROM studentdata
WHERE (math = 'Fail' && english = 'Fail') && gender = 'Male';
Iterating over a list
SELECT <column name>
FROM <table name>
WHERE <column name> <condition> IN (<val1>,<val2>,...<val3>)
Example :
Fetch names from student in class 8,9 & 10.

SELECT studentname
FROM studentdata
WHERE class IN (8,9,10);
Pattern Matching
Starting with 'x' :
SELECT <column name>
FROM <table name>
WHERE <column name> LIKE 'x%';
Ending with 'x' :
SELECT <column name>
FROM <table name>
WHERE <column name> LIKE '%x';
Can also use NOT LIKE instead of LIKE.

Examples :

Fetch names of students starting with ‘A’.
SELECT studentname
FROM studentdata
WHERE name LIKE "A%";
Fetch names which have 3 letters.
SELECT studentname
FROM studentdata
WHERE name like "___";
-> 3 underscores.

Manipulation
Delete all records :

DELETE FROM <table name>
Delete with a condition :

DELETE FROM <table name> WHERE <condition>
Example :

Delete ‘Yash’ student data.
DELETE FROM studentdata WHERE studentname= "Yash";
Update values in a column :

UPDATE <table name>
SET <column name> = <val1>, <column name> = <val2>
WHERE <condition>;
Example :

Update student grade if passed math (scored more than 80).
UPDATE studentdata
SET maths = "Pass"
WHERE maths > 80;
Add a new column by using ALTER :

ALTER TABLE <table name>
ADD <column name> <data type>;
Dropping a table :
Gets rid of the table.

DROP TABLE <table name>;
Truncating a table :
Gets rid of the data inside the table, preserving its structure.

TRUNCATE TABLE <table name>;
Constraints
UNIQUE, PRIMARY KEY, DEFAULT, CHECK, FOREIGN KEY, NOT NULL, CREATE INDEX
Unique → Repetition of values forbidden

Primary Key → same as unique, cannot take NULL value. Only 1 Primary key in a table

Default → sets a pre defined value if value not entered.

Check → Limits value.

Foreign Key → Is a unique/primary key in a different table, but referenced in another.

Not Null -> It ensures that a column does not have a null value.

Create Index → It is used to create and retrieve data from the database very quickly.

Group By Clause
Used with different functions like COUNT, AVG, etc..

SELECT <column name> FROM <table name>
WHERE <condition>
GROUP BY <column name>
Example :
Get count of all students in each stream

SELECT COUNT(fname)
FROM studentdata
GROUP BY stream;
Order By Clause
ASC → Ascending order (Default)

DESC → Descending order

SELECT <column name>, <column name>
FROM <table name>
ORDER BY <column name>, <column name> ASC <|DESC>;
Example :
Fetch all students and arrange them according to their age, in a descending order.

SELECT fname,lname
FROM studentdata
ORDER BY age DESC;
Can use both simultaneously like :

SELECT fname,lname
FROM studentdata
ORDER BY marks ASC, age DESC;
Can also order categorical columns in an alphabetical order.

Searching for NULL values
SELECT <column name>, <column name>
FROM <table name>
WHERE <column name> IS NULL;
Example :
Getting the first & last names where the age is a NA value.

SELECT fname, lname
FROM studentdata
WHERE age IS NULL;
Can also use the IS NOT NULL instead of IS NULL keyword, like this :

SELECT <column name>, <column name>
FROM <table name>
WHERE <column name> IS NOT NULL;
Joins in SQL
INNER JOIN

This query will return all of the records in the left table (table A) that have a matching record in the right table (table B)
Example :

SELECT [select_list]
FROM Table_A A
INNER JOIN Table_B B
ON A.Key = B.Key

-- shortcut for inner join using , operator
SELECT [select_list]
FROM Table_A A,Table_B B
ON A.Key = B.Key
-- , basically means cross product and if condition given as per condition
LEFT JOIN
This query will return all of the records in the left table (table A) regardless if any of those records have a match in the right table (table B). It will also return any matching records from the right table.

Example:

SELECT [select_list]
FROM Table_A A
LEFT JOIN Table_B B
ON A.Key = B.Key
RIGHT JOIN
This query will return all of the records in the right table (table B) regardless if any of those records have a match in the left table (table A). It will also return any matching records from the left table

Example

SELECT [select_list]
FROM Table_A A
RIGHT JOIN Table_B B
ON A.Key = B.Key
OUTER JOIN
This Join can also be referred to as a FULL OUTER JOIN or a FULL JOIN. This query will return all of the records from both tables, joining records from the left table (table A) that match records from the right table (table B)
Example:

SELECT [select_list]
FROM Table_A A
FULL OUTER JOIN Table_B B
ON A.Key = B.Key
LEFT OUTER JOIN
This query will return all of the records in the left table (table A) that do not match any records in the right table (table B).
Example:

SELECT [select_list]
FROM Table_A A
LEFT JOIN Table_B B
ON A.Key = B.Key
WHERE B.Key IS NULL
RIGHT OUTER JOIN
This query will return all of the records in the right table (table B) that do not match any records in the left table (table A).
Example:

SELECT [select_list]
FROM Table_A A
RIGHT JOIN Table_B B
ON A.Key = B.Key
WHERE A.Key IS NULL
Sql Data Control Language
DCL Commands are used to control access to the database and the data associated to it. And it is highly used inforcing Data Security.

We have commands for managing user like :

Create User
CREATE USER <Username> IDENTIFIED BY <password>
Delete User
 DROP USER <Username>
GRANT
GRANT SELECT / INSERT / DELETE / UPDATE / All privileges on <Table_Name> FROM <Username>/Public;
REVOKE
REVOKE SELECT / INSERT / DELETE / UPDATE / All privileges on <Table_Name> FROM <Username>/Public;
--create database
-- sqlite3 schoolmanagement.db
-- sqlite3 schoolmanagement.db < data/db.sql


--create table students
CREATE TABLE students(
id int primary key not null,
login_name char(50) not null,
number int not null,
password char(50) not null
);

--create table courses
CREATE TABLE courses(
id int primary key not null,
time date not null,
name char(50) not null,
teacher char(50) not null,
desp text
);

--create table teacher
CREATE TABLE teachers(
id int primary key not null,
login_name char(50) not null,
password char(50) not null
);

--display all the tables
-- .tables

--display the content of a table
-- .schema students

--add data to the table
INSERT INTO students(id,login_name,number,password) values(3,'yuxiaobao',103,'123456');
INSERT INTO students(id,login_name,number,password) values(1,'yubao',101,'123456');
INSERT INTO students(id,login_name,number,password) values(2,'lijing',102,'123456');
INSERT INTO courses(id,time,name,teacher,desp) values(1,'2016-10-10 08:30:00','English','zhanglaoshi','english is important');
INSERT INTO teachers(id,login_name,password) values(1,'prof_yubao','123456');
INSERT INTO teachers(id,login_name,password) values(2,'prof_lijing','123456');

--display all the data in a table
-- select * from students;

--rename a table
-- alter table students rename to tmp;

-- create a related table and set many to many table foregin key
CREATE TABLE sc(
student_id int,
course_id int,
primary key(student_id,course_id),
foreign key(student_id) references students(id),
foreign key(course_id) references courses(id)
);

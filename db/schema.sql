/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- create a database only if it doesn't exist
DROP DATABASE IF EXISTS anonymous_db;
CREATE DATABASE anonymous_db;
USE anonymous_db;

-- create a table to store items
-- unique id, name, age fields
CREATE TABLE anonymous_table(
  id int NOT NULL AUTO_INCREMENT,
  name varchar(100) NOT NULL,
  age smallint NOT NULL,
  PRIMARY KEY(id)
);

-- add a test item
INSERT INTO anonymous_table (name, age) VALUES('Michael Lee', 28);

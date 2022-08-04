create database Ecommerce;

use Ecommerce;
select * from Product;
create table Product
(
id INT primary key,
sku VARCHAR(255),
proname VARCHAR(255),
description VARCHAR(255),
unitprice DECIMAL(13,2),
imageurl VARCHAR(255),
unitsinstock INT,
datecreated DATE,
lastupdated DATE,
categoryid INT,
foreign key(categoryid) references category(categoryid)
);
ALTER TABLE Product MODIFY id int NOT NULL AUTO_INCREMENT;


insert into Product values(10001,"1234","Laptop","HP Laptop",100000,"www.laptopimg",10,"2022-10-11","2022-11-11",1001);

insert into category values(1001,"Electronics");

create table Category
(
categoryid INT primary key,
categoryname VARCHAR(255)
);
desc Category;
drop table category;
desc Category;
drop table product;

select * from Product;

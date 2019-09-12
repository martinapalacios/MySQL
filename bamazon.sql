DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(200) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("August Smart Lock", "Smart Home", 230, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pocket Knife", "Outdoors", 24, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Everlast Gloves", "Sports", 50, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lutron Caseta Wireless", "Smart Home", 55, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Selfie Stick", "Electronics", 8, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Polar Heart Rate", "Sports", 87, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fishing Hats", "Outdoors", 9, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Power Strip", "Electronics", 13, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Mat", "Sports", 14, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Exercise Mat", "Sports", 22, 300);
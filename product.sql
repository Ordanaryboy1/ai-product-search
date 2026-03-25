-- 1. Create Database
CREATE DATABASE IF NOT EXISTS productsearch;
USE productsearch;

-- 2. Tables

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  category_id INT,
  price INT,
  color VARCHAR(50),
  description TEXT,
  tags TEXT,
  FOREIGN KEY (categoryid) REFERENCES categories(id)
);

-- 3. Sample Data

INSERT INTO categories (name) VALUES 
('laptop'), 
('mobile'), 
('shoes');

INSERT INTO products (name, categoryid, price, color, description, tags) VALUES
('Dell Laptop', 1, 45000, 'black', 'Good battery laptop', 'battery,performance'),
('HP Laptop', 1, 55000, 'silver', 'High performance laptop', 'gaming'),
('Lenovo Laptop', 1, 30000, 'black', 'Budget laptop', 'cheap,battery'),
('iPhone 13', 2, 70000, 'black', 'Premium phone', 'camera'),
('Samsung Mobile', 2, 15000, 'blue', 'Good battery phone', 'battery,cheap'),
('Redmi Mobile', 2, 12000, 'red', 'Affordable phone', 'cheap'),
('Nike Shoes', 3, 3000, 'red', 'Running shoes', 'sports'),
('Adidas Shoes', 3, 4000, 'black', 'Stylish shoes', 'fashion'),
('Puma Shoes', 3, 2500, 'red', 'Lightweight shoes', 'sports,cheap'),
('Campus Shoes', 3, 1500, 'blue', 'Budget shoes', 'cheap');
CREATE DATABASE IF NOT EXISTS arkademy;

USE arkademy;

CREATE TABLE product (
    id TINYINT PRIMARY KEY,
    name VARCHAR(50),
    price INT,
    id_category TINYINT,
    id_cashier TINYINT
    );

INSERT INTO product VALUES
    (1, 'Latte', 10000, 2, 1),
    (2, 'Cake', 20000, 1, 2),
    (3, 'Brownies', 50000, 1, 3);

CREATE TABLE Category (
    id TINYINT PRIMARY KEY,
    name VARCHAR(20)
    );

INSERT INTO Category VALUES
    (1, 'Food'),
    (2, 'Drink');

CREATE TABLE Cashier (
    id TINYINT PRIMARY KEY,
    name VARCHAR(60)
    );

INSERT INTO Cashier VALUES
    (1, 'Pevita Pearce'),
    (2, 'Raisa Andriana'),
    (3, 'Soultan Muhammad Albar');

SELECT cashier.name AS cashier, product.name AS product, category.name AS category, product.price
FROM cashier JOIN product ON cashier.id = id_cashier JOIN category ON id_category = category.id;
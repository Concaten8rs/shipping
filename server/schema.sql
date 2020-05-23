DROP DATABASE IF EXISTS shipping;

CREATE DATABASE shipping;

\c shipping;

CREATE TABLE products (
  productId SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  price NUMERIC(7, 2) NOT NULL,
  image VARCHAR(100)
);

CREATE TABLE recommendations (
  recommendationId SERIAL PRIMARY KEY,
  productId INTEGER REFERENCES products(productId),
  recommendedId INTEGER REFERENCES products(productId)
);

CREATE TABLE zips (
  zip VARCHAR(5) PRIMARY KEY,
  productId INTEGER REFERENCES products(productId)
);

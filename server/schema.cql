DROP KEYSPACE IF EXISTS shipping;

CREATE KEYSPACE shipping;

USE shipping;

CREATE TABLE products (
  productId INT PRIMARY KEY,
  recommendations ARRAY,
  price DOUBLE,
  image TEXT
);

CREATE TABLE recommendations (
  productId INT,
  recommendationId INT,
  name TEXT,
  price DOUBLE,
  image TEXT,
  PRIMARY KEY (productId, recommendationId)
);

CREATE TABLE zips (
  productId INT,
  zip INT,
  PRIMARY KEY (productId, zip)
);

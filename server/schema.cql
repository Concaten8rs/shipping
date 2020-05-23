DROP KEYSPACE IF EXISTS shipping;

CREATE KEYSPACE shipping WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE shipping;

CREATE TABLE products (
  productId INT PRIMARY KEY,
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

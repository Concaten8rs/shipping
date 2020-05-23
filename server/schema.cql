DROP KEYSPACE IF EXISTS shipping;

CREATE KEYSPACE shipping;

replication factor on keyspace or data center?
specify replication strategy
counter?

USE shipping;

CREATE TABLE products (
  productId INT,
  recommendations ARRAY,
  name TEXT,
  price DOUBLE,
  image TEXT
);

CREATE TABLE zips (
  productId INT PK,
  zip INT PK
);

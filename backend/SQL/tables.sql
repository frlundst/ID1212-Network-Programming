--CREATE TABLE category (
--    id VARCHAR NOT NULL default uuid_generate_v1(),
--    name VARCHAR NOT NULL,
--    description VARCHAR,
--    PRIMARY KEY (id)
--);

--CREATE TABLE sub_category (
--    id VARCHAR NOT NULL default uuid_generate_v1(),
--    name VARCHAR NOT NULL,
--    description VARCHAR,
--    category_id VARCHAR NOT NULL,
--    PRIMARY KEY (id),
--    FOREIGN KEY (category_id) REFERENCES category(id)
--);

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE category (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    name VARCHAR NOT NULL,
    description VARCHAR,
    parent_id VARCHAR DEFAULT NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_parent_id FOREIGN KEY (parent_id) REFERENCES category(id)
);

CREATE TABLE product (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    name VARCHAR NOT NULL,
    description VARCHAR,
    price INT NOT NULL,
    old_price INT,
    number_available INT NOT NULL,
    category_id VARCHAR NOT NULL,
    image_pathname VARCHAR NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE customer (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE order (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    customer_id VARCHAR NOT NULL,
    date TIMESTAMP NOT NULL default now(),
    city VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    zip VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    payment_method VARCHAR NOT NULL,
    payed BOOLEAN NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

CREATE TABLE order_item (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    order_id VARCHAR NOT NULL,
    product_id VARCHAR NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES order(id),
    FOREIGN KEY (product_id) REFERENCES product(id)
);
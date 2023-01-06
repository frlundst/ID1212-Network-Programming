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
    KEY `parent_id_key` (parent_id),
    CONSTRAINT fk_parent_id FOREIGN KEY (parent_id) REFERENCES category(id)
);

CREATE TABLE product (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    name VARCHAR NOT NULL,
    description VARCHAR,
    price INT NOT NULL,
    number_available INT NOT NULL,
    category_id VARCHAR NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE user (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    address VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    PRIMARY KEY (id)
);
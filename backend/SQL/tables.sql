CREATE TABLE category (
    id VARCHAR NOT NULL default uuid_generate_v1(),
    name VARCHAR NOT NULL,
    PRIMARY KEY (id)
);
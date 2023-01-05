INSERT INTO category (name, description, parent_id) VALUES ('Gaming', 'Very good description', NULL);
INSERT INTO category (name, description, parent_id) VALUES ('TV', 'Very good description', NULL);
INSERT INTO category (name, description, parent_id) VALUES ('Computer accessories', 'Very good description', NULL);

INSERT INTO category (name, description, parent_id) VALUES ('Gaming headset', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('Gaming mouse', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('Gaming keyboard', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming'));

INSERT INTO product (name, description, price, number_available, category_id) VALUES ('Razer Kraken gaming headset', 'A very nice gaming headset from razer.', 979, 12, (SELECT id FROM category WHERE name = 'Gaming headset'));
INSERT INTO product (name, description, price, number_available, category_id) VALUES ('Corsair gaming headset', 'A very nice gaming headset from corsair.', 1079, 15, (SELECT id FROM category WHERE name = 'Gaming headset'));
INSERT INTO product (name, description, price, number_available, category_id) VALUES ('Razer Deathadder gaming mouse', 'A very nice gaming mouse from razer.', 499, 19, (SELECT id FROM category WHERE name = 'Gaming mouse'));
INSERT INTO product (name, description, price, number_available, category_id) VALUES ('Razer Blackwidow gaming keyboard', 'A very nice gaming keyboard from razer.', 1499, 5, (SELECT id FROM category WHERE name = 'Gaming keyboard'));
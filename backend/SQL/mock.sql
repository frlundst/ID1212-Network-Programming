INSERT INTO category (name, description, parent_id) VALUES ('Gaming', 'Very good description', NULL);
INSERT INTO category (name, description, parent_id) VALUES ('TV', 'Very good description', NULL);
INSERT INTO category (name, description, parent_id) VALUES ('Computer accessories', 'Very good description', NULL);

INSERT INTO category (name, description, parent_id) VALUES ('Gaming headset', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('Gaming mouse', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('Gaming keyboard', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming'));

INSERT INTO category (name, description, parent_id) VALUES ('Razer gaming headset', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming headset'));
INSERT INTO category (name, description, parent_id) VALUES ('Logitech gaming headset', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming headset'));
INSERT INTO category (name, description, parent_id) VALUES ('Steelseries gaming headset', 'Very good description', (SELECT id FROM category WHERE name = 'Gaming headset'));
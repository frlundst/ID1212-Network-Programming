INSERT INTO category (name, description, parent_id) VALUES ('Gaming', 'Here you will find a great selection of gaming accessories.', NULL);
INSERT INTO category (name, description, parent_id) VALUES ('TV', 'Here you will find a selection of TVs from some of the most popular manufacturer.', NULL);
INSERT INTO category (name, description, parent_id) VALUES ('Computer component', 'From building your first gaming computer to creating a web server, we have the parts for you.', NULL);

INSERT INTO category (name, description, parent_id) VALUES ('Gaming headset', 'Here are the most popular options with great sound for the gamer that values immersion.', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('Gaming mouse', 'Looking for a great computer mouse for gaming? Click here!', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('Gaming keyboard', 'looking for a good keyboard? Explore our options!', (SELECT id FROM category WHERE name = 'Gaming'));
INSERT INTO category (name, description, parent_id) VALUES ('OLED', 'See our range of OLED TVs from LG and Philips inside.', (SELECT id FROM category WHERE name = 'TV'));
INSERT INTO category (name, description, parent_id) VALUES ('QLED', 'We offer the most popular QLED TVs on the market.', (SELECT id FROM category WHERE name = 'TV'));
INSERT INTO category (name, description, parent_id) VALUES ('Graphic Card', 'Looking to upgrade your computer? Click here!', (SELECT id FROM category WHERE name = 'Computer component'));
INSERT INTO category (name, description, parent_id) VALUES ('Storage', 'Need a new harddrive for gaming, film or music?', (SELECT id FROM category WHERE name = 'Computer component'));
INSERT INTO category (name, description, parent_id) VALUES ('CPU', 'Freshening up your memory? Take a look at our selection!', (SELECT id FROM category WHERE name = 'Computer component'));


INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Razer Kraken gaming headset', 'With 16.8 million colors, a suite of effects, and glowing earcups in addition to kitty ear lighting, you can customize to your hearts content and land on a unique look for every occasion.', '/images/default3.png', 979, 0, 12, (SELECT id FROM category WHERE name = 'Gaming headset'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Corsair gaming headset', 'The Corsair HS70 Pro Wireless are gaming headphones with superior sound quality. The ear cups are adjustable and the cushions are made of comfortable memory foam, to keep you comfortable during long gaming sessions. With 7.1 Surround Sound and detachable microphone.', '/images/default4.png', 1079, 0, 15, (SELECT id FROM category WHERE name = 'Gaming headset'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Razer Deathadder gaming mouse', 'The Razer DeathAdder is one of the most famous and recognized gaming mice in the world. With over 9 million units sold worldwide and dozens of celebrated awards, its no surprise that the Razer DeathAdder has built a cult following since its inception.', '/images/default5.png', 499, 0, 19, (SELECT id FROM category WHERE name = 'Gaming mouse'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Razer Blackwidow gaming keyboard', 'The name that started it all is coming back to dominate. Feel the difference with the Razer BlackWidow V3 with a background as the first and most iconic mechanical gaming keyboard, equipped with new and improved features, including our world-renowned switches.', '/images/default6.png', 1499, 0, 5, (SELECT id FROM category WHERE name = 'Gaming keyboard'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'SteelSeries Rival 3 gaming mouse', 'Designed by PixArt and SteelSeries for precision performance with 1 to 1 tracking, allowing the precise movement of the mouse to be perfectly replica on the screen.', '/images/default7.png', 499, 0, 23, (SELECT id FROM category WHERE name = 'Gaming mouse'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Asus ROG Gladuis III Wireless', 'Classic asymmetrical wireless gaming mouse with tri-mode connectivity (2.4 GHz, Bluetooth, wired USB 2.0), specially tuned 26,000 dpi with 1% deviation, instant button actuation, exclusive Push-Fit Switch Socket II, laser-engraved ROG aesthetic, Bluetooth rapid pairing technology, ROG Omni Mouse Feet, ROG Paracord and Aura Sync RGB lighting', '/images/default8.png', 1149, 0, 17, (SELECT id FROM category WHERE name = 'Gaming mouse'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'SteelSeries Apex 7 TKL Red gaming keyboard', 'A very nice gaming keyboard from SteelSeries with an integrated command center that displays useful information for adjusting settings, changing profiles, and seeing on-the-fly updates. Avoid tabbing out of what youre doing, and instead let your keyboard show you the important details.', '/images/default9.png', 1799, 0, 2, (SELECT id FROM category WHERE name = 'Gaming keyboard'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'LG 2022 55"', '4K UHD (2160p) / HDR-support / Smart TV.', '/images/default10.png', 18979, 0, 3, (SELECT id FROM category WHERE name = 'OLED'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Philips 65" The One 4K UHD Ambilight', '4K UHD (2160p) / Ambilight / HDR-support / Smart.', '/images/default11.png', 25899, 0, 0, (SELECT id FROM category WHERE name = 'OLED'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'TCL 55" 55C735 QLED', '4K UHD (2160p) / HDR-support / Smart TV.', '/images/default12.png', 11979, 0, 10, (SELECT id FROM category WHERE name = 'QLED'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Samsung 65" Q60B 4K QLED TV', 'The Samsung 65" Q60B 4K QLED Smart TV delivers all content in sharp detail and rich, detailed colors that will be clear even during the brightest scenes.', '/images/default13.png', 12979, 0, 2, (SELECT id FROM category WHERE name = 'QLED'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Toshiba 50" 4K QLED Android™', 'The 50" QLED screen allows you to watch movies and stream series in up to 4K Ultra HD resolution. Enjoy the refined image that scales up each frame and reproduces dynamic and accurate colors.', '/images/default14.png', 8579, 0, 6, (SELECT id FROM category WHERE name = 'QLED'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'ASUS Dual GeForce RTX 3060 12GB OC V2', 'A very nice graphic card from ASUS.', '/images/default15.png', 4579, 0, 16, (SELECT id FROM category WHERE name = 'Graphic Card'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'MSI GeForce RTX 3060 GAMING Z TRIO 12G', 'A very nice graphic card from MSI.', '/images/default16.png', 5979, 0, 23, (SELECT id FROM category WHERE name = 'Graphic Card'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Kingston NV2 M.2 2TB', 'M.2 2280 / 2 TB / PCI Express 4.0 x4 (NVMe) / 3500 MBps.', '/images/default17.png', 1279, 0, 43, (SELECT id FROM category WHERE name = 'Storage'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Samsung SSD 870 EVO 2TB', '2.5" / 2 TB / Serial ATA-600 / 560 MBps.', '/images/default18.png', 2279, 0, 32, (SELECT id FROM category WHERE name = 'Storage'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'AMD Ryzen 7 5800X', 'To be able to use this CPU out of the box, it is required that you have a B550 or X570 motherboard and that this is equipped with the latest BIOS available.', '/images/default19.png', 5279, 0, 10, (SELECT id FROM category WHERE name = 'CPU'));
INSERT INTO product (id, name, description, image_pathname, price, old_price, number_available, category_id) VALUES (uuid_generate_v1(), 'Intel Core i5-13600K', 'Intel Thread Director optimizes which cores perform which tasks, so that optimal performance can be achieved in both single and multi-threaded use.', '/images/default20.png', 4279, 0, 4, (SELECT id FROM category WHERE name = 'CPU'));

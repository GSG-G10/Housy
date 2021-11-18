-- 
INSERT INTO agents (name,  email, password , phone)
 VALUES ('Kai', 'kallport0@patch.com', '$2b$10$hZZ2f3zk.pV/9ndMRn78ze47MAh8SN8uy01qeoK8P54tTe526Pqz6', '677-871-7450'),
 ('Trixie', 'tbeadon1@plala.or.jp', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '0599832685'),
('Allina', 'aburford2@tumblr.com', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '630-385-8312'),
('Fadel','fadel@gmail.com','$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2','0597854785'),
('Kelsey','kelsey@gmail.com','$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2','0597854755');


INSERT INTO admins (username, password ,  email) VALUES ('ameera', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'ameera2021abed@gmail.com'),
 ('haroon', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'hro19502001@gmail.com'),
 ('elham', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'elham2000fadel@gmail.com'),
('sallah', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'mohmsal96@gmail.com');

INSERT INTO estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) VALUES
 (1, 'Queen bed', 50000, 'A beautiful log house imported directly from Finland to be the perfect retreat from busy city life.', 'sale', 'whole house', 'Omare street', 'Gaza', 'Gaza', 2, 3, 4, 1200, true, 3.5,true),
  (1, 'Decorated house', 242.89, 'A unique private house with a high wooden ceiling, wide and lit spaces, a yard house surrounded by plants and fruit trees, seating and grass corners. In addition, the house contains games for children of various ages(box games, table tennis, etc.) The house is located in a carriage on a quiet street and within walking distance to a commercial center that Kemer kept open on Saturday as well as for recreational areas ("artists stables")', 'rent', 'apartment', '100 Butternut Hill', 'Bern', 'Switzerland', 1, 2, 2, 226, true, 5, true),
 (3, 'Amazing house in Galilee', 100000.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'sale', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (1, 'Amazing house in Gaza', 200.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'rent', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (2, 'Amazing house in Deir al balah', 50000.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'sale', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (4, 'Amazing house in Khan Yunus', 60000.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'sale', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (5, 'Amazing house in Hebron', 70000.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'sale', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (1, 'Amazing house in Gaza', 70000.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'sale', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (2, 'Amazing house in Rafah', 150.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'rent', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (3, 'House in Gaza', 400.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'rent', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
 (4, 'House for renting in Khan Yunis', 100.00, 'Big beautiful stonehouse with garden and balcony with breathtaking view. A large fireplace and cousy livingroom. A lot of plants and artistic decoration. Harashim lays on top of a mountain in Galilee. Great for relaxing vacation and sightseeing.', 'rent', 'villa', '0824 Mcguire Way', 'Kungshamn', 'Galilee', 1, 3, 3, 235, true, 5, true),
(2, 'Ecologic mud house facing Mt Tabor', 106.71, 'n the pastoral KIBUTZ Beit Keshet you will find our special ecologic mud house. The house is 130 sqm, with a large garden facing Mt Tabor. 5 min walk will take you to the forest, 25 min driving you will be in the sea of galilee.', 'rent', 'villa', '15918 Mcguire Point', 'Ranong', 'Thailand', 2, 4, 4, 244, true, 1, true),
 (2, 'in faucibus orci luctus', 116162.27, 'parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', 'rent', 'villa', '898 Dixon Crossing', 'Gelap', 'Indonesia', 3, 2, 4, 150, false, 3, false),
 (3, 'vestibulum ante ipsum primis', 194193.55, 'leo odio porttitor id consequat in consequat ut nulla sed', 'sale', 'whole house', '0891 7th Park', 'Álimos', 'Greece', 1, 3, 2, 174, false, 1, false);

INSERT INTO images ( estate_id, image) VALUES (1,'https://a0.muscache.com/im/pictures/65ad24f5-3c4f-4340-8e75-1c84278361f1.jpg'),
(1,'https://a0.muscache.com/im/pictures/9ccfb248-370e-49c8-833b-72a649908d5a.jpg'),
(1,'https://a0.muscache.com/im/pictures/039384b0-75de-4c34-aae2-6fd5c76a2b50.jpg'),
(1,'https://a0.muscache.com/im/pictures/c8e4ccb3-b13a-42a0-a1e3-8d48199b81a8.jpg'),
 (2,'https://a0.muscache.com/im/pictures/miso/Hosting-37479423/original/9106de21-4abc-4dc6-ae10-8e071dcb4977.jpeg'),
 (2,'https://a0.muscache.com/im/pictures/miso/Hosting-37479423/original/3072b6e9-3709-46a7-9bcf-3fee6c96b8bf.jpeg'),
 (2,'https://a0.muscache.com/im/pictures/8d432dcd-6023-4d94-804b-f38e76d8e9b8.jpg'),
 (2,'https://a0.muscache.com/im/pictures/878fdb40-1ded-4e5b-989f-20097ca59c89.jpg'),
 (3,'https://a0.muscache.com/im/pictures/d87542ce-1089-44b7-b3a0-2ef397825fac.jpg'),
 (3,'https://a0.muscache.com/im/pictures/2f64652d-7bce-48ef-96ac-61d74b3c70c4.jpg'),
 (3,'https://a0.muscache.com/im/pictures/8673fa65-04a7-4a29-acfe-d6806ef01605.jpg'),
 (3,'https://a0.muscache.com/im/pictures/5bea56a8-1028-410e-9891-4266b58d6dd4.jpg'),
 (2,'https://a0.muscache.com/im/pictures/79715735/f68f24e3_original.jpg'),
 (2,'https://a0.muscache.com/im/pictures/79716661/5ae7300a_original.jpg'),
 (2,'https://a0.muscache.com/im/pictures/79716124/5a836c95_original.jpg'),
 (2,'https://a0.muscache.com/im/pictures/71393509/07948f45_original.jpg');




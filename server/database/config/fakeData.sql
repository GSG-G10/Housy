-- 
INSERT INTO agents (name,  email, password , phone)
 VALUES ('Kai', 'kallport0@patch.com', '$2b$10$hZZ2f3zk.pV/9ndMRn78ze47MAh8SN8uy01qeoK8P54tTe526Pqz6', '677-871-7450'),
 ('Trixie', 'tbeadon1@plala.or.jp', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '0599832685'),
('Allina', 'aburford2@tumblr.com', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '630-385-8312');

INSERT INTO admins (username, password ,  email) VALUES ('ameera', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'ameera2021abed@gmail.com'),
 ('haroon', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'hro19502001@gmail.com'),
 ('elham', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'elham2000fadel@gmail.com'),
('sallah', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'mohmsal96@gmail.com');

INSERT INTO estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) VALUES (1, 'suscipit ligula in', 190483.22, 'tristique', 'Buy', 'House', '3152 Morningstar Park', 'Edinburgh of the Seven Seas', 'Saint Helena', 2, 1, 1, 194, false, 2, false),
  (2, 'ipsum primis in', 242471.89, 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante', 'Buy', 'House', '100 Butternut Hill', 'Bern', 'Switzerland', 1, 2, 2, 226, true, 5, true),
 (3, 'rhoncus sed vestibulum', 84726.00, 'massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in', 'Buy', 'House', '0824 Mcguire Way', 'Kungshamn', 'Sweden', 1, 3, 3, 235, true, 5, false),
(1, 'sociis natoque penatibus et', 106226.71, 'quis odio consequat', 'Buy', 'House', '15918 Mcguire Point', 'Ranong', 'Thailand', 2, 4, 4, 244, true, 1, false),
 (2, 'in faucibus orci luctus', 116162.27, 'parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', 'Buy', 'House', '898 Dixon Crossing', 'Gelap', 'Indonesia', 3, 2, 4, 150, false, 3, false),
 (3, 'vestibulum ante ipsum primis', 194193.55, 'leo odio porttitor id consequat in consequat ut nulla sed', 'Buy', 'House', '0891 7th Park', 'Álimos', 'Greece', 1, 3, 2, 174, false, 1, false);

INSERT INTO images ( estate_id, image) VALUES (1,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg'),
 (2,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/2.tobiarchitects.1526566679.5654.jpg'),
 (3,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/3.tobiarchitects.1526566679.5654.jpg'),
 (1,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/4.tobiarchitects.1526566679.5654.jpg'),
 (2,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/5.tobiarchitects.1526566679.5654.jpg'),
 (3,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/6.tobiarchitects.1526566679.5654.jpg');
 

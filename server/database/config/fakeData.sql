<<<<<<< HEAD
-- 
INSERT INTO agents (name,  email, password , phone)
 VALUES ('Kai', 'kallport0@patch.com', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '677-871-7450'),
 ('Trixie', 'tbeadon1@plala.or.jp', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '663-871-7450'),
('Allina', 'aburford2@tumblr.com', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', '630-385-8312');

INSERT INTO admins (username, password ,  email) VALUES ('ameera', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'ameera2021abed@gmail.com'),
 ('haroon', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'hro19502001@gmail.com'),
 ('elham', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'elham2000fadel@gmail.com'),
('sallah', '$2b$10$oNaAu46EHAyOCiufPgchaOQDq5opRxSFHB20m.e3wzDBlM5Yzztf2', 'mohmsal96@gmail.com');

INSERT INTO estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) VALUES (1, 'suscipit ligula in', '$190483.22', 'tristique', 'Buy', 'House', '3152 Morningstar Park', 'Edinburgh of the Seven Seas', 'Saint Helena', 2, 1, 1, 194, false, 2, false),
  (2, 'ipsum primis in', '$242471.89', 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante', 'Buy', 'House', '100 Butternut Hill', 'Bern', 'Switzerland', 1, 2, 2, 226, true, 5, true),
 (3, 'rhoncus sed vestibulum', '$84726.00', 'massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in', 'Buy', 'House', '0824 Mcguire Way', 'Kungshamn', 'Sweden', 1, 3, 3, 235, true, 5, false),
(4, 'sociis natoque penatibus et', '$106226.71', 'quis odio consequat', 'Buy', 'House', '15918 Mcguire Point', 'Ranong', 'Thailand', 2, 4, 4, 244, true, 1, false),
 (5, 'in faucibus orci luctus', '$116162.27', 'parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', 'Buy', 'House', '898 Dixon Crossing', 'Gelap', 'Indonesia', 3, 2, 4, 150, false, 3, false),
 (6, 'vestibulum ante ipsum primis', '$194193.55', 'leo odio porttitor id consequat in consequat ut nulla sed', 'Buy', 'House', '0891 7th Park', 'Álimos', 'Greece', 1, 3, 2, 174, false, 1, false);

INSERT INTO images ( estate_id, image) VALUES (1,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg'),
 (2,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/2.tobiarchitects.1526566679.5654.jpg'),
 (3,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/3.tobiarchitects.1526566679.5654.jpg'),
 (4,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/4.tobiarchitects.1526566679.5654.jpg'),
 (5,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/5.tobiarchitects.1526566679.5654.jpg'),
 (6,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/6.tobiarchitects.1526566679.5654.jpg');
 
=======
insert into admins (username, password ,  email) values ('ameera', 'F1A1CC71ED10594F97B1B6CF94A00727', 'ameera2021abed@gmail.com');
insert into admins (username, password ,  email) values ('haroon', 'F1A1CC71ED10594F97B1B6CF94A00727', 'hro19502001@gmail.com');
insert into admins (username, password ,  email) values ('elham', 'F1A1CC71ED10594F97B1B6CF94A00727', 'elham2000fadel@gmail.com');
insert into admins (username, password ,  email) values ('sallah', 'F1A1CC71ED10594F97B1B6CF94A00727', 'mohmsal96@gmail.com');
insert into agents (name,  email, password , phone, avater) values ('Kai', 'kallport0@patch.com', '6D29E04CD937DC37CB72E42736CA238C', '481-649-8020', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVnja3DFheGQjch5AL1n0Rk8nOFHm6Ny60w&usqp=CAU');
insert into agents (name,  email, password , phone, avater) values ('Trixie', 'tbeadon1@plala.or.jp', '6D29E04CD937DC37CB72E42736CA238C', '663-871-7450', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVnja3DFheGQjch5AL1n0Rk8nOFHm6Ny60w&usqp=CAU');
insert into agents (name,  email, password , phone, avater) values ('Allina', 'aburford2@tumblr.com', '6D29E04CD937DC37CB72E42736CA238C', '630-385-8312', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVnja3DFheGQjch5AL1n0Rk8nOFHm6Ny60w&usqp=CAU');
insert into agents (name,  email, password , phone, avater) values ('Maye', 'mstrass3@yellowpages.com', '6D29E04CD937DC37CB72E42736CA238C', '210-886-2847', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVnja3DFheGQjch5AL1n0Rk8nOFHm6Ny60w&usqp=CAU');
insert into agents (name,  email, password , phone, avater) values ('Lillian', 'abutrford2@tumblr.com', '6D29E04CD937DC37CB72E42736CA238C', '270-209-1221', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVnja3DFheGQjch5AL1n0Rk8nOFHm6Ny60w&usqp=CAU');
insert into agents (name,  email, password , phone, avater) values ('Emlyn', 'edrissell5@free.fr', '6D29E04CD937DC37CB72E42736CA238C', '426-753-9984', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVnja3DFheGQjch5AL1n0Rk8nOFHm6Ny60w&usqp=CAU');
insert into estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) values (1, 'suscipit ligula in', '190483.22', 'tristique', 'Buy', 'House', '3152 Morningstar Park', 'Edinburgh of the Seven Seas', 'Saint Helena', 2, 1, 1, 194, false, 2, false);
insert into estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) values (2, 'ipsum primis in', '242471.89', 'est quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante', 'Buy', 'House', '100 Butternut Hill', 'Bern', 'Switzerland', 1, 2, 2, 226, true, 5, true);
insert into estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) values (3, 'rhoncus sed vestibulum', '84726.00', 'massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in', 'Buy', 'House', '0824 Mcguire Way', 'Kungshamn', 'Sweden', 1, 3, 3, 235, true, 5, false);
insert into estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) values (4, 'sociis natoque penatibus et', '106226.71', 'quis odio consequat', 'Buy', 'House', '15918 Mcguire Point', 'Ranong', 'Thailand', 2, 4, 4, 244, true, 1, false);
insert into estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) values (5, 'in faucibus orci luctus', '116162.27', 'parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum', 'Buy', 'House', '898 Dixon Crossing', 'Gelap', 'Indonesia', 3, 2, 4, 150, false, 3, false);
insert into estates ( agent_id, title, price, description, type, category, street, city, region, bathrooms, bedrooms, rooms, space, approved, rate, available) values (6, 'vestibulum ante ipsum primis', '194193.55', 'leo odio porttitor id consequat in consequat ut nulla sed', 'Buy', 'House', '0891 7th Park', 'Álimos', 'Greece', 1, 3, 2, 174, false, 1, false);
insert into images ( estate_id, image) values (1,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
insert into images ( estate_id, image) values (1,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg');
insert into images ( estate_id, image) values (1,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpF_yr6jMER79FRSejAszXCsyd__87nEF6g&usqp=CAU');
insert into images ( estate_id, image) values (1,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');

insert into images ( estate_id, image) values (2,'https://cdn.vox-cdn.com/thumbor/6itLJS9BZ-B5gXPjM1AB_z-ZKVI=/0x0:3000x2000/1200x800/filters:focal(1260x760:1740x1240)/cdn.vox-cdn.com/uploads/chorus_image/image/65890203/iStock_1067331614.7.jpg');
insert into images ( estate_id, image) values (2,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg');
insert into images ( estate_id, image) values (2,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpF_yr6jMER79FRSejAszXCsyd__87nEF6g&usqp=CAU');
insert into images ( estate_id, image) values (2,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');

insert into images ( estate_id, image) values (3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4O9GCySQw_9C24XfInhq-lYgfnHlRSMB5g&usqp=CAU');
insert into images ( estate_id, image) values (3,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg');
insert into images ( estate_id, image) values (3,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpF_yr6jMER79FRSejAszXCsyd__87nEF6g&usqp=CAU');
insert into images ( estate_id, image) values (3,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
insert into images ( estate_id, image) values (4,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
insert into images ( estate_id, image) values (4,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg');
insert into images ( estate_id, image) values (4,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpF_yr6jMER79FRSejAszXCsyd__87nEF6g&usqp=CAU');
insert into images ( estate_id, image) values (4,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');

insert into images ( estate_id, image) values (5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsj7rODPg-8QIdi6VONhE84ZFng3D5WpNfbA&usqp=CAU');
insert into images ( estate_id, image) values (5,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg');
insert into images ( estate_id, image) values (5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpF_yr6jMER79FRSejAszXCsyd__87nEF6g&usqp=CAU');
insert into images ( estate_id, image) values (5,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
insert into images ( estate_id, image) values (6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBOKk95d1JPgPWHYPk_Z2NXd_ntTr-N0E0yQ&usqp=CAU');
insert into images ( estate_id, image) values (6,'https://archello.s3.eu-central-1.amazonaws.com/images/2018/05/17/1.tobiarchitects.1526566679.5654.jpg');
insert into images ( estate_id, image) values (6,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHpF_yr6jMER79FRSejAszXCsyd__87nEF6g&usqp=CAU');
insert into images ( estate_id, image) values (6,'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwaG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80');
>>>>>>> 1c56f7cf651c1916acd88ff05d55b958056b73aa

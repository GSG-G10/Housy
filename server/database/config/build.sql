BEGIN;
DROP TABLE IF EXISTS admins,estates,agents,images;
CREATE TABLE admins(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
CREATE TABLE agents(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL  UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL UNIQUE,
    avater TEXT
    
);
CREATE TABLE estates(
    id SERIAL PRIMARY KEY,
    agent_id INTEGER REFERENCES agents(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    description TEXT NOT NULL,
    type VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    region VARCHAR(255) NOT NULL,
    bathrooms INTEGER  DEFAULT 0,
    bedrooms INTEGER  DEFAULT 0,
    rooms INTEGER  DEFAULT 0,
    space DECIMAL NOT NULL , 
    approved BOOLEAN DEFAULT FALSE,
    rate DECIMAL DEFAULT 0,
    available BOOLEAN DEFAULT TRUE
);

CREATE TABLE images(
    id SERIAL PRIMARY KEY,
    estate_id INTEGER REFERENCES estates(id) ON DELETE CASCADE,
    image TEXT 
);
COMMIT;

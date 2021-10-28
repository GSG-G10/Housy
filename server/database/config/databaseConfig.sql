CREATE DATABASE housydev;
CREATE USER housyuser WITH superuser password '123456';
ALTER DATABASE housydev OWNER TO housyuser;
-- test db
CREATE DATABASE housytest;
CREATE USER housyuser2 WITH superuser password '123456';
ALTER DATABASE housytest OWNER TO housyuser2;
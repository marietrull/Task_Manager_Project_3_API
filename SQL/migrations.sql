DROP DATABASE IF EXISTS task_manager;

CREATE DATABASE task_manager;

\c task_manager

CREATE TABLE users (

	id SERIAL PRIMARY KEY,

	username VARCHAR(64) UNIQUE,

	password_digest VARCHAR(256)

);

CREATE TABLE assignments (

	id SERIAL PRIMARY KEY,

	user_id INT REFERENCES users(id),

	name VARCHAR(256),

	link VARCHAR(256),

	notes TEXT,

	complete BOOLEAN
);

INSERT INTO outcomes (name, link, notes, complete) VALUES ('One', 'One.link', 'One Notes', false);
INSERT INTO outcomes (name, link, notes, complete) VALUES ('Two', 'Two.link', 'Two Notes', false);
INSERT INTO outcomes (name, link, notes, complete) VALUES ('Three', 'Three.link', 'Three Notes', false);

CREATE TABLE outcomes (

	id SERIAL PRIMARY KEY,

	user_id INT REFERENCES users(id),

	name VARCHAR(256),

	link VARCHAR(256),

	notes TEXT,

	complete BOOLEAN
);
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



CREATE TABLE outcomes (

	id SERIAL PRIMARY KEY,

	user_id INT REFERENCES users(id),

	name VARCHAR(256),

	link VARCHAR(256),

	notes TEXT,

	complete BOOLEAN
);
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name,email) VALUES('Jose Arana', 'jose@gmail.com'), ('Alberto Ramos', 'alberto@gmail.com');

SELECT * FROM users;
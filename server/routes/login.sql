CREATE TABLE users (
    username VARCHAR(50) NOT NULL PRIMARY KEY UNIQUE,
    pword VARCHAR(50) NOT NULL UNIQUE
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
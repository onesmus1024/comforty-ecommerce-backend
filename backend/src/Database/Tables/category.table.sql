CREATE TABLE Categories (
    id INT PRIMARY KEY IDENTITY(1000,1),
    name VARCHAR(255) NOT NULL,
    UNIQUE (name),
    CHECK (name <> ''),
);
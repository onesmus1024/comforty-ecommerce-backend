CREATE TABLE Products (
    id INT PRIMARY KEY IDENTITY(1000,1),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    category_id INTEGER NOT NULL,
    product_image_url VARCHAR(255) NOT NULL,
    CHECK (name <> ''),
    CHECK (description <> ''),
    CHECK (price > 0),
    CHECK (created_at <= GETDATE()),
    CHECK (category_id > 0),
    CHECK (product_image_url <> ''),
    FOREIGN KEY (category_id) REFERENCES categories(id),
);
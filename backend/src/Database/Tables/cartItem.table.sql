CREATE TABLE Cart_items (
    id INT PRIMARY KEY IDENTITY(1000,1),
    user_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    CHECK (user_id > 0),
    CHECK (product_id > 0),
    CHECK (quantity > 0),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
);
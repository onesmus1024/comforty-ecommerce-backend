CREATE TABLE Order_items (
    id INT PRIMARY KEY IDENTITY(1000,1),
    order_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    CHECK (order_id > 0),
    CHECK (product_id > 0),
    CHECK (quantity > 0),
    FOREIGN KEY (order_id) REFERENCES orders(id),
    FOREIGN KEY (product_id) REFERENCES products(id),
);
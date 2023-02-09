CREATE TABLE Orders (
    id INT PRIMARY KEY IDENTITY(1000,1),
    user_id INTEGER NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    is_paid BIT NOT NULL DEFAULT 0,
    is_delivered BIT NOT NULL DEFAULT 0,
    amount DECIMAL(10,2) NOT NULL,
    CHECK (user_id > 0),
    CHECK (is_paid IN (0,1)),
    CHECK (is_delivered IN (0,1)),
    CHECK (amount > 0),
    CHECK (created_at <= GETDATE()),
    FOREIGN KEY (user_id) REFERENCES users(id),
);
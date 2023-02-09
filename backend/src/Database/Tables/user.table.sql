CREATE TABLE Users (
    id INT PRIMARY KEY IDENTITY(1000,1),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATE NOT NULL DEFAULT GETDATE(),
    is_admin BIT NOT NULL DEFAULT 0,
    is_active BIT NOT NULL DEFAULT 1,
    UNIQUE (email),
    CHECK (is_admin IN (0,1)),
    CHECK (is_active IN (0,1)),
    CHECK (email <> ''),
    CHECK (password <> ''),
    CHECK (created_at <= GETDATE()),
);
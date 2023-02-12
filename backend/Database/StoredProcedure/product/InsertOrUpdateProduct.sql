
USE [comfortyEcommerce]
GO

CREATE PROCEDURE InsertOrUpdateProduct
    @id VARCHAR(255),
    @name VARCHAR(255),
    @description VARCHAR(255),
    @price DECIMAL(10,2),
    @created_at DATE,
    @category_id VARCHAR(255),
    @product_image_url VARCHAR(255),
    @recently_added BIT,
    @featured BIT,
    @is_deleted BIT

AS
BEGIN
    IF @id IS NULL
    BEGIN
        INSERT INTO products (id, name, description, price, created_at, category_id, product_image_url, recently_added, featured, is_deleted)
        VALUES (NEWID(), @name, @description, @price, @created_at, @category_id, @product_image_url, @recently_added, @featured, @is_deleted)
    END
    ELSE
    BEGIN
        UPDATE products SET name = @name, description = @description, price = @price, created_at = @created_at, category_id = @category_id, product_image_url = @product_image_url, recently_added = @recently_added, featured = @featured, is_deleted = @is_deleted WHERE id = @id
    END
END


CREATE PROCEDURE CreateProduct
@name VARCHAR(255),
@description VARCHAR(255),
@price DECIMAL(10,2),
@product_image_url VARCHAR(255),
@category_id INT
AS
BEGIN
    INSERT INTO products (name, description, price, product_image_url, category_id)
    VALUES (@name, @description, @price, @product_image_url, @category_id)
END

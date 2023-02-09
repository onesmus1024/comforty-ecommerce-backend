CREATE PROCEDURE UpdateProduct
@id INT,
@name VARCHAR(255),
@description VARCHAR(255),
@price DECIMAL(10,2),
@product_image_url VARCHAR(255),
@category_id INT
AS
BEGIN
    UPDATE products
    SET name = @name, description = @description, price = @price, product_image_url = @product_image_url, category_id = @category_id
    WHERE id = @id
END
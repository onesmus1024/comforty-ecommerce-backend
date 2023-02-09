CREATE PROCEDURE GetProductsByCategory
@category_id INT
AS
BEGIN
    SELECT p.id, p.name, p.description, p.price, p.product_image_url
    FROM products p
    JOIN categories c ON c.id = p.category_id
    WHERE c.id = @category_id
END

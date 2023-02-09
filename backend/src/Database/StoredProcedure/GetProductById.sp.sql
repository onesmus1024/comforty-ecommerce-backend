CREATE PROCEDURE GetProductById
@id INT
AS
BEGIN
    SELECT * FROM products WHERE id = @id
END
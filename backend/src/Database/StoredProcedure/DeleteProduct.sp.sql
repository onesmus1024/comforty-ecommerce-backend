CREATE PROCEDURE DeleteProduct
@id INT
AS
BEGIN
    DELETE FROM products
    WHERE id = @id
END

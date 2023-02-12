USE [comfortyEcommerce]
GO
CREATE PROCEDURE DeleteOrder
@id INT
AS
BEGIN
    DELETE FROM orders
    WHERE id = @id
    SELECT * FROM orders WHERE id = @id
END
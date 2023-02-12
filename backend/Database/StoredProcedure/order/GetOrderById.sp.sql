USE [comfortyEcommerce]
GO
CREATE PROCEDURE GetOrderById
@id INT
AS
BEGIN
    SELECT * FROM orders WHERE id = @id
END

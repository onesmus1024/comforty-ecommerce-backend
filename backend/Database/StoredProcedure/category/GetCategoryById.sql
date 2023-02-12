
CREATE PROCEDURE GetCategoryById
    @id VARCHAR(255)
AS
BEGIN
    SELECT * FROM Categories WHERE id = @id
END
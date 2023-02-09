CREATE PROCEDURE UpdateUser
@id INT,
@email VARCHAR(255),
@password VARCHAR(255)
AS
BEGIN
    UPDATE users
    SET email = @email, password = @password
    WHERE id = @id
END
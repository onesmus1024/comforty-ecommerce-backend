CREATE PROCEDURE CreateUser
@email VARCHAR(255),
@password VARCHAR(255)
AS
BEGIN
    INSERT INTO users (email, password)
    VALUES (@email, @password)
END
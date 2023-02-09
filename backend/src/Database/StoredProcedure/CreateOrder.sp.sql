CREATE PROCEDURE CreateOrder
@user_id INT,
@amount DECIMAL(10,2)
AS
BEGIN
    INSERT INTO orders (user_id, amount)
    VALUES (@user_id, @amount)
END
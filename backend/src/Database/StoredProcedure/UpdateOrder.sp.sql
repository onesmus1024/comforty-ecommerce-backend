CREATE PROCEDURE UpdateOrder
@id INT,
@user_id INT,
@created_at DATE,
@is_paid BIT,
@is_delivered BIT,
@amount DECIMAL(10,2)
AS
BEGIN
    UPDATE orders
    SET user_id = @user_id, created_at = @created_at, is_paid = @is_paid, is_delivered = @is_delivered, amount = @amount
    WHERE id = @id
END


CREATE PROCEDURE GetOrdersByUserId
@user_id INT
AS
BEGIN
    SELECT * FROM orders WHERE user_id = @user_id
END

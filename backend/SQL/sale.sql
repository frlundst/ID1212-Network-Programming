UPDATE product SET old_price = price, price = price * 0.9 WHERE name = 'percent sale';
UPDATE product SET price = old_price, old_price = 0 WHERE name = '';
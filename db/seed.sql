USE dhaka_tesla_pool;

-- Clear old data if testing
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE pool_memberships;
TRUNCATE TABLE pools;
TRUNCATE TABLE ride_requests;
TRUNCATE TABLE vehicles;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

-- Seed the specific cast with emails
INSERT INTO users (id, firebase_uid, name, email, role) VALUES 
(1, NULL, 'Jashim', 'jashim@tesla.com', 'DRIVER'),
(2, NULL, 'Nusrat', 'nusrat@tesla.com', 'PASSENGER'),
(3, NULL, 'Rafiq', 'rafiq@tesla.com', 'PASSENGER'),
(4, NULL, 'Shirin', 'shirin@tesla.com', 'PASSENGER');

-- Seed Jashim's Bullet (3-seat capacity)
INSERT INTO vehicles (id, driver_id, model_name, max_seats, status) VALUES 
(1, 1, 'Bullet', 3, 'ONLINE');
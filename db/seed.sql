USE dhaka_tesla_pool;

-- Clear old data if testing
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE pool_memberships;
TRUNCATE TABLE pools;
TRUNCATE TABLE ride_requests;
TRUNCATE TABLE vehicles;
TRUNCATE TABLE users;
SET FOREIGN_KEY_CHECKS = 1;

-- Seed the specific cast
INSERT INTO users (id, name, role) VALUES 
(1, 'Jashim', 'DRIVER'),
(2, 'Nusrat', 'PASSENGER'),
(3, 'Rafiq', 'PASSENGER'),
(4, 'Shirin', 'PASSENGER');

-- Seed Jashim's Bullet (3-seat capacity)
INSERT INTO vehicles (id, driver_id, model_name, max_seats, status) VALUES 
(1, 1, 'Bullet', 3, 'ONLINE');
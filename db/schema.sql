-- Create the Database
CREATE DATABASE IF NOT EXISTS dhaka_tesla_pool;
USE dhaka_tesla_pool;

-- Users (both Passengers and Drivers)
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firebase_uid VARCHAR(128) UNIQUE,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    role ENUM('PASSENGER', 'DRIVER') NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Vehicles (Jashim's Bullet)
CREATE TABLE IF NOT EXISTS vehicles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT NOT NULL,
    model_name VARCHAR(50) NOT NULL,
    max_seats INT NOT NULL DEFAULT 3,
    status ENUM('OFFLINE', 'ONLINE', 'IN_TRIP') DEFAULT 'OFFLINE',
    FOREIGN KEY (driver_id) REFERENCES users(id)
);

-- Individual Ride Requests (Passenger intent)
CREATE TABLE IF NOT EXISTS ride_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    passenger_id INT NOT NULL,
    pickup_zone VARCHAR(100) NOT NULL,
    dropoff_zone VARCHAR(100) NOT NULL,
    seats_requested INT NOT NULL DEFAULT 1,
    base_fare DECIMAL(10, 2) NOT NULL,
    status ENUM('REQUESTED', 'MATCHED', 'DRIVER_ARRIVED', 'STARTED', 'COMPLETED', 'CANCELLED') DEFAULT 'REQUESTED',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (passenger_id) REFERENCES users(id)
);

-- Active Pools (The Shared Trip)
CREATE TABLE IF NOT EXISTS pools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    vehicle_id INT NOT NULL,
    status ENUM('FORMING', 'DISPATCHED', 'COMPLETED') DEFAULT 'FORMING',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(id)
);

-- Pool Memberships (Links Ride Requests to a Pool to split fares)
CREATE TABLE IF NOT EXISTS pool_memberships (
    pool_id INT NOT NULL,
    ride_request_id INT NOT NULL,
    discounted_fare DECIMAL(10, 2) NOT NULL,
    PRIMARY KEY (pool_id, ride_request_id),
    FOREIGN KEY (pool_id) REFERENCES pools(id),
    FOREIGN KEY (ride_request_id) REFERENCES ride_requests(id)
);
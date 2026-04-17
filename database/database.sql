-- SCANS table
-- tracks each time the network scanner runs
CREATE TABLE scans (
    id SERIAL PRIMARY KEY,
    scanned_at TIMESTAMP NOT NULL,
    subnet VARCHAR(20) NOT NULL,
    total_devices INT DEFAULT 0,
    total_events INT DEFAULT 0
);


-- DEVICES table
-- one row per unique device, identified by MAC address
CREATE TABLE devices (
    mac VARCHAR(20) PRIMARY KEY,
    ip VARCHAR(15),
    vendor VARCHAR(100),
    first_seen TIMESTAMP,
    last_seen TIMESTAMP,
    open_ports TEXT,
    is_known BOOLEAN DEFAULT FALSE,
    nickname VARCHAR(100)
);


-- EVENTS table
-- one row per security event, linked to a device and a scan
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    scan_id INT REFERENCES scans(id),
    mac VARCHAR(20) REFERENCES devices(mac),
    event_type VARCHAR(50),
    detail TEXT,
    severity VARCHAR(20),
    create_at TIMESTAMP
);


-- USERS table
-- app users with roles
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role VARCHAR(20) DEFAULT 'viewer',
    created_at TIMESTAMP DEFAULT NOW(),
    last_login TIMESTAMP
)


-- AUDIT_LOG table
-- tracks every action taken by every user
CREATE TABLE audit_log (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    event_id INT REFERENCES events(id),
    action VARCHAR(100),
    detail TEXT,
    created_at TIMESTAMP DEFAULT NOW()
)
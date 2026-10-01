import mysql from 'mysql2/promise';

// Check if we already have a connection pool in the global scope (prevents exhausting connections in dev)
let pool;

if (!global.pool) {
  global.pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
}

pool = global.pool;

export default pool;
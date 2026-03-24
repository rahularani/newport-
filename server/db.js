// Uses MySQL locally, PostgreSQL on production (Render)
const isProduction = process.env.NODE_ENV === "production";

let db;

if (isProduction) {
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
  // Wrap pg pool to match mysql2 promise interface
  db = {
    query: (sql, params) => pool.query(sql, params),
    isPostgres: true,
  };
} else {
  const mysql = require("mysql2/promise");
  const pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "portfolio",
    waitForConnections: true,
  });
  db = {
    query: (sql, params) => pool.query(sql, params),
    isPostgres: false,
  };
}

module.exports = db;

// Import pg library, which provides functions for interacting with databases
const { Pool } = require("pg");

// Configure the connection Pool
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "employees_db",
  password: "DaC05201022",
  port: 5432,
});

module.exports = pool;

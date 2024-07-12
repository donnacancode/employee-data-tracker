const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: employees_db,
  password: DaC05201022,
  port: 3001,
});

module.exports = pool;

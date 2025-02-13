const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "vbnmrno4",
    host: "localhost",
    database: "closet",
    port: 5432,
});

module.exports = pool;

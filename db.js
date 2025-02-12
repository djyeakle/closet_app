const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "vbnmrno4",
    host: "localhost",
    database: "closet",
    port: 9006,
});

module.exports = pool;

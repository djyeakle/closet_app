const Pool = require("pg").Pool;

const pool = new Pool({
    user: "djyeakle",
    password: "vbnmrno4",
    host: "localhost",
    database: "closet",
    port: 8008,
});

module.exports = pool;
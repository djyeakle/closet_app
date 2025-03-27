const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "vbnmrno4",
    //host: "localhost",
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    //database: "closet",
});

module.exports = pool;

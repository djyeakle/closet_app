const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "vbnmrno4",
    //host: "localhost",
    host: "dpg-cupqojpopnds73efuuso-a",
    database: "closet_app",
    user: "djyeakle",
    password: "Sr4H9G5xicbGx8Qz6kLTokJEFFszGSkx",
    port: 5432,
    //database: "closet",
});

module.exports = pool;
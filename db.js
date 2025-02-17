const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "vbnmrno4",
    //host: "localhost",
    host: "dpg-cupqojpopnds73efuus0-a",
    database: "closet_app",
    user: "djyeakle",
    password: "Sr4H9G5xicbGx8Qz6kLTokJEFFszGSkx",
    //database: "closet",
    port: 5432,
});

module.exports = pool;

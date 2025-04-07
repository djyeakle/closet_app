const Pool = require("pg").Pool;

const pool = new Pool({
    //user: "postgres",
    //password: "vbnmrno4",
    //host: "localhost",
    host: "dpg-cupqojpopnds73efuus0-a.ohio-postgres.render.com",
    database: "closet_app",
    user: "djyeakle",
    password: "Sr4H9G5xicbGx8Qz6kLTokJEFFszGSkx",
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
    //database: "closet",
});

module.exports = pool;
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "djyeakle",
    password: "oYhDL14BSUjVCEcGnhfvfJ1xbqvg2C6A",
    host: "dpg-cuhbg1a3esus73ch0jcg-a",
    database: "closet",
    port: 5432,
});

module.exports = pool;

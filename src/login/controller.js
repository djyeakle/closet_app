const pool = require('../../db');
const queries = require('./queries');

const getLogin = (req, res) => {
    pool.query(queries.getLogin,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getLogin,
};

pool.connect((error, client, release) => {
    if (error) {
        console.error("Database connection error:", error);
        return;
    }
    console.log("Connected to the database");
    release();
});
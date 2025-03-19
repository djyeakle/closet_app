const pool = require('../../db');
const queries = require('./queries');

const getClothes = (req, res) => {
    pool.query(queries.getClothes,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

const addNewClothes = (req, res) => {
    const {itemid,type,color,size,season,rating} = req.body;

    pool.query(queries.addNewClothes, [itemid,type,color,size,season,rating], (error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getClothes,
    addNewClothes,
};

pool.connect((error, client, release) => {
    if (error) {
        console.error("Database connection error:", error);
        return;
    }
    console.log("Connected to the database");
    release();
});
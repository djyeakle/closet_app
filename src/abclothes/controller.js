const pool = require('../../db');
const queries = require('./queries');

const getAbClothes = (req, res) => {
    pool.query(queries.getAbClothes,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

const addNewAbClothes = (req, res) => {
    const {itemid,type,color,size,season,rating} = req.body;

    pool.query(queries.addNewAbClothes, [itemid,type,color,size,season,rating], (error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getAbClothes,
    addNewAbClothes,
};

pool.connect((error, client, release) => {
    if (error) {
        console.error("Database connection error:", error);
        return;
    }
    console.log("Connected to the database");
    release();
});
const pool = require('../../db');
const queries = require('./queries');

const getLainClothes = (req, res) => {
    pool.query(queries.getLainClothes,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

const addNewLainClothes = (req, res) => {
    const {itemid,type,color,size,season,rating} = req.body;

    pool.query(queries.addNewLainClothes, [itemid,type,color,size,season,rating], (error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getLainClothes,
    addNewLainClothes,
};

pool.connect((error, client, release) => {
    if (error) {
        console.error("Database connection error:", error);
        return;
    }
    console.log("Connected to the database");
    release();
});
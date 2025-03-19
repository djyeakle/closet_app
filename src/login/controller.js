const pool = require('../../db');
const queries = require('./queries');

const getLogin = (req, res) => {
    pool.query(queries.getLogin,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

const getLoginById = (req, res) => {
    const accountid = parseInt(req.params.id);
    if(isNaN(accountid)) {
        return res.status(400).json({error: "Invalid Value Format"});
    }
    console.log("Received AccountID");
    pool.query(queries.getLoginById, [accountid], (error, results) => {
        if(error){
            console.error("Database Error", error);
            return res.status(500).json({error: "Account Not Found"})
        }
        res.status(200).json(results.rows);
    });
}

//post
const addNewLogin = (req, res) => {
    const {username,password} = req.body;

    pool.query(queries.addNewLogin, [username,password], (error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

//put
const updateLogin = (req, res) => {
    const accountid = parseInt(req.params.accountID);
    const {username,password} = req.body;

    //pool.query(queries.updateLogin, [accountid], [username,password], (error, results) => {
      pool.query(queries.updateLogin,[username,password,accountid], (error, results) => {

        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getLogin,
    getLoginById,
    addNewLogin,
    updateLogin,
    getClothes,
};

pool.connect((error, client, release) => {
    if (error) {
        console.error("Database connection error:", error);
        return;
    }
    console.log("Connected to the database");
    release();
});

const getClothes = (req, res) => {
    pool.query(queries.getClothes,(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
    });
};

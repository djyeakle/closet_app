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

const addNewLogin = (req, res) => {
    const {username,password} = req.body;

    pool.query(queries.addNewLogin, [username,password],(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
        res.status(201).send("Successfully added a new account");
    });
};

const updateLogin = (req, res) => {
    const {username,password} = req.body;

    pool.query(queries.updateLogin, [username,password],(error, results) => {
        if(error)throw error;
        res.status(200).json(results.rows);
        res.status(201).send("Successfully updated an account");
    });
};

module.exports = {
    getLogin,
    getLoginById,
    addNewLogin,
    updateLogin,
};

pool.connect((error, client, release) => {
    if (error) {
        console.error("Database connection error:", error);
        return;
    }
    console.log("Connected to the database");
    release();
});
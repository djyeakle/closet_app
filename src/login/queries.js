const getLogin = "SELECT * FROM login";
const getLoginById = 'select * from login where "accountID" = $1';
const addNewLogin = "INSERT INTO login(username,password) VALUES($1,$2)";
const updateLogin = "UPDATE login SET username = $1, password = $2 WHERE accountID = $3"

module.exports = {
    getLogin,
    getLoginById,
    addNewLogin,
    updateLogin,
};
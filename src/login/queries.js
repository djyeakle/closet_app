const getLogin = "select * from login";
const getLoginById = 'select * from login where "accountID" = $1';
const addNewLogin = "insert into login(username, password) values($1, $2)";
const updateLogin = 'update login set username = $1, password = $2 where "accountID" = $3';
const getClothes = "select * from clothes";

module.exports = {
    getLogin,
    getLoginById,
    addNewLogin,
    updateLogin,
    getClothes,
};
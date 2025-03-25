const getClothes = "select * from clothes";
const addNewClothes = "insert into clothes(itemid, type, color, size, season, rating) values($1, $2, $3, $4, $5, $6)";

module.exports = {
    getClothes,
    addNewClothes,
};
const getAbClothes = "select * from abclothes";
const addNewAbClothes = "insert into abclothes(itemid, type, color, size, season, rating) values($1, $2, $3, $4, $5, $6)";

module.exports = {
    getAbClothes,
    addNewAbClothes,
};
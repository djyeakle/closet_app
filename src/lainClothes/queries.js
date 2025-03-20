const getLainClothes = "select * from lainclothes";
const addNewLainClothes = "insert into lainclothes(itemid, type, color, size, season, rating) values($1, $2, $3, $4, $5, $6)";

module.exports = {
    getLainClothes,
    addNewLainClothes,
};
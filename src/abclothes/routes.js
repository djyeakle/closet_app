const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getAbClothes);
router.post('/', controller.addNewAbClothes);

module.exports = router;
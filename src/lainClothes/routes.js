const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getLainClothes);
router.post('/', controller.addNewLainClothes);

module.exports = router;
const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getClothes);
router.post('/', controller.addNewClothes);

module.exports = router;
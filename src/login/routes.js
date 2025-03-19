const { Router } = require('express');
const controller = require('./controller');

const router = Router();
router.get('/', controller.getLogin);
router.get('/:id', controller.getLoginById);
router.get('/', controller.getClothes);
router.post('/', controller.addNewLogin);
router.put('/:id', controller.updateLogin);

module.exports = router;
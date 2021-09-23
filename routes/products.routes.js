const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/products.controller');

router.get('/employees', ProductController.getAll);
router.get('/employees/random', ProductController.getRandom);
router.get('/employees/:id', ProductController.getById);
router.post('/employees', ProductController.postAll);
router.put('/employees/:id', ProductController.putById);
router.delete('/employees/:id', ProductController.deleteById);

module.exports = router;

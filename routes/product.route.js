const { Router } = require('express')
const {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require('../controllers/product.controller')
const router = Router()

router.get('/', getProducts)
router.post('/', addProduct)
router.put('/', updateProduct)
router.delete('/', deleteProduct)

module.exports = router

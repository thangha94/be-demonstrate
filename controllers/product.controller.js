const { productList, Product } = require('../db-handler/product-db')

const addProduct = (req, res) => {
  try {
    const product = new Product(req.body)
    productList.addProduct(product)
    res.json(productList.products)
  } catch (error) {
    res.send(error)
  }
}

const getProducts = (req, res) => {
  res.json(productList.products)
}

const updateProduct = (req, res) => {
  try {
    const product = new Product(req.body)
    productList.updateProduct(product)
    res.json(productList.products)
  } catch (error) {
    res.send(error)
  }
}

const deleteProduct = (req, res) => {
  try {
    productList.deleteProduct(req.body.id)
    res.json(productList.products)
  } catch (error) {
    res.send(error)
  }
}

module.exports = {
  addProduct,
  getProducts,
  updateProduct,
  deleteProduct,
}

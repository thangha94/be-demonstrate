class ProductList {
  products

  constructor() {
    this.products = []
  }

  addProduct(product) {
    this.products.push(product)
  }

  deleteProduct(id) {
    this.products = this.products.filter((product) => product.id !== id)
  }

  updateProduct(newProduct) {
    let fixingProduct = this.products.findIndex(
      (product) => product.id === newProduct.id
    )
    this.products.splice(fixingProduct, 1, newProduct)
  }
}

class Product {
  constructor({
    name,
    price,
    hotSale,
    category,
    rating,
    image,
    color,
    qty,
    id = new Date().getTime(),
  }) {
    this.validate(name, price, qty)
    this.id = id
    this.name = name
    this.price = price
    this.hotSale = hotSale
    this.category = category
    this.rating = rating
    this.color = color
    this.qty = qty
    this.image = image
  }

  validate = (name, price, qty) => {
    if (!name || !price || !qty) {
      throw 'Invalid Product!'
    }
  }
}

const productList = new ProductList()

module.exports = {
  productList,
  Product,
}

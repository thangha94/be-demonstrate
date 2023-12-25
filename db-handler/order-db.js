class OrderList {
  orders

  constructor() {
    this.orders = []
  }

  addOrder(order) {
    this.orders.push(order)
  }
}

const orderList = new OrderList()

module.exports = orderList

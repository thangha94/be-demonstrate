const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { createServer } = require('http')

const productRoute = require('./routes/product.route')

const app = express()

app.use(bodyParser.json())
app.use(
  cors({
    origin: 'http://localhost:5173', // Open port for FE
  })
)

app.use('/product', productRoute)
// app.use('order')

const server = createServer(app)
server.listen(8080, () => {
  console.log('Presso App is running on ', 8080)
})

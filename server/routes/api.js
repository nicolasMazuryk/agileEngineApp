const Router = require('express').Router
const products = require('../controllers/product')
const api = new Router()

api.route('/products')
  .get(products.getProducts)
  .post(products.createProduct)

api.route('/products/:id')
  .delete(products.deleteProduct)

module.exports = api

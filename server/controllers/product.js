const Product = require('../models/product')

exports.getProducts = async function(req, res) {
  const products = await Product.find({})
  res.json({payload: products})
}

exports.createProduct = async function(req, res) {
  const newProduct = await Product.create(req.body)
  res.json({payload: newProduct})
}

exports.deleteProduct = async function(req, res) {
  const product = await Product.findOneAndRemove({_id: req.params.id})
  res.send({payload: product})
}


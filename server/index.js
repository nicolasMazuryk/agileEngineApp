const
  express = require('express'),
  mongoose = require('mongoose'),
  config = require('../config'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  api = require('./routes/api')

const {
  domain,
  port,
  db_domain,
  db_name,
  log
} = config[process.env.NODE_ENV]

mongoose.connect(`${db_domain}/${db_name}`, (err) => {
  if (err) {
    console.log(err)
  }
  mongoose.Promise = global.Promise
  console.log(`Connected to MongoDB on ${db_domain}/${db_name}`)
})

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
log && app.use(morgan('tiny'))
app.use('/api/v1', api)
app.use(express.static('public'))
app.use(errorHandler)
app.listen(port, domain, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Server started at ${domain}:${port}`)
})

function errorHandler(error, req, res, next) {
  if (error.status) {
    return res.status(error.status).json({error})
  }
}

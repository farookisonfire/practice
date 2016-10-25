const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')


module.exports = function createApp(db) {
  const app = express()

  app.use(bodyParser.json())
  // app.use(express.static('public'))
  app.use('/', router(db))

  return app
}

const express = require('express')
require('express-async-errors')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())

app.use(middleware.requestLogger)

app.get('/', async (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/1', async (request, response) => {
  response.send('<h1>Hello World!!!</h1>')
})

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app

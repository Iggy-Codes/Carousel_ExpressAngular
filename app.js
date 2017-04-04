const express = require('express')
const path = require('path')
const PORT = process.argv[2] || 3000

const app = express()

const routeImages = require('./server')

app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.static(path.join(__dirname, 'server/img')))
  .use('/images', routeImages)
  .listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))

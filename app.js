const express = require('express')
const path = require('path')
const PORT = process.argv[2] || 3000

const app = express()

const routeImages = require('./server')

app
  .use('/', express.static(path.join(__dirname, 'public'))) // I used '/' to avoid adding client-side routing as it's literally 1 page app
  .use('/images', routeImages)  // request endpoint
  .listen(PORT, () => console.log(`Listening on PORT ${PORT}...`))

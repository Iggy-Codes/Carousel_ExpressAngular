const express = require('express')
const Router = express.Router()
const fs = require('fs')

// Reading the json file asynchronously and send it back as json response
Router.get('/', (req, res) => {
  fs.readFile('server/data/db.json', 'utf8', (err, data) => {
    if (err) throw err
    res.status(200).json(JSON.parse(data))
    // .setHeader('Content-Type', 'application/json')
  })
})

module.exports = Router

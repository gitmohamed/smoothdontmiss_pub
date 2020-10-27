const express = require('express');
const path = require('path');
const compression = require('compression');
// const request = require('request');
// const tumblr = require('tumblr.js');

const app = express()
const port = process.env.PORT || 7777

app.use(compression())
app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/choose.html`))
}).listen(port, () => {
  console.log(`Listening on ${port}`)
})

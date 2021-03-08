const express = require('express');
const path = require('path');
const compression = require('compression');
const fs = require('fs')
// const request = require('request');
// const tumblr = require('tumblr.js');

const app = express()
const port = process.env.PORT || 7777

app.use(compression())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.static('./dist'))

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/choose.html`))
}).post('/newsletter', (req, res) => {
  fs.appendFile('emails.txt', req.query.email + "\n", function (err) {
    if (err) {
      // append failed
      res.send(err)
    } else {
      // done
      res.send("Email saved")
    }
  })
  console.log(req.query.email);
}).listen(port, () => {
  console.log(`Listening on ${port}`)
})

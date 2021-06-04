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
}).post('/rsvp', (req, res) => {
    // Email Address,First Name,Last Name,Address,Phone,What do you like to grow?,Tags,Birthday
    // m.white@student.hathaway.edu,Maya,White,(555) 555-5555
    // b.mwangi@hathaway.edu,Benjamin,Mwangi,(555) 222-3333
    // e.nemec@hathaway.edu,Elizabeth,Nemec,(555) 111-4444
  fs.appendFile('rsvp.csv', `${req.query.email},${req.query.first},${req.query.last},${req.query.number || "555-5555"},${req.query.guests || 0}\n`, function (err) {
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

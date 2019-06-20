'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const app = express.app();
app.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});
app.get('/another', (req, res) => res.json({ route: req.originalUrl }));
app.post('/', (req, res) => res.json({ postBody: req.body }));

app.get('/em', (req, res) => {
  res.send('hello world');
})

app.use(bodyParser.json());
app.use('/.netlify/functions/server', app);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

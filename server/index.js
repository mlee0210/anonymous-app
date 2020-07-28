const path = require('path');
const express = require('express');
const app = express();

// add logging middleware
app.use(function f1(req, res, next) {
  console.log(req.method, req.path);
  next();
});

// serve static assets
app.use(express.static(path.join(__dirname, '../client/dist')));

// parse the body on post req
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(3000, () => console.log('Web server listening on localhost:3000'));

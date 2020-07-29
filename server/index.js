const Member = require('../db/Member')

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

app.get('/members', (req, res) => {
  Member.getAll((err, members) => {
    if(err) {
      res.status(500).send(err);
	} else {
	  res.json(members);
	}
  });
});

app.post('/members', (req, res) => {
  const { name, age } = req.body;
  if (!age || typeof age !== 'number') {
    return res.status(400).send({ message: 'You didn\'t say how old you are!' });
  }
  Member.add(name, age, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.sendStatus(201);
  });
});

app.delete('/members', (req, res) => {
  const {name} = req.body;
  Member.remove(name, (err, result) => {
  	if(err) {
  	  return res.status(500).send(err);
  	}
  	res.sendStatus(201);
  });
});

app.listen(3000, () => console.log('Web server listening on localhost:3000'));

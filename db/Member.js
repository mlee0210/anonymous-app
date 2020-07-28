const connection = require('./index');

// write a function that returns all the members
const getAll = function (cb) {
  connection.query('SELECT * FROM anonymous_table', (err, data) => {
    if (err) {
      cb(err);
      return;
    }
    cb(null, data);
  });
};

// write a function that adds an item to the list
const add = function (name, age, cb) {
  const query = 'INSERT INTO anonymous_table(name, age) VALUES(?, ?)';
  connection.query(query, [name, age], cb);
};


module.exports = {
  getAll,
  add,
};

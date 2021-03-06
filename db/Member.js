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

// write a function that adds a member to the list
const add = function (name, age, cb) {
  const query = 'INSERT INTO anonymous_table(name, age) VALUES(?, ?)';
  connection.query(query, [name, age], cb);
};

const remove = function (name, age, cb) {
  const query = 'DELETE FROM anonymous_table WHERE name=? AND age=?';
  //need to pass arguments in an array
  connection.query(query, [name, age], cb);
}


module.exports = {
  getAll,
  add,
  remove,
};

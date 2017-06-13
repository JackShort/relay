var promise = require("bluebird");
var options = {
  //initialization options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/relay';
var db = pgp(connectionString);

function signUp(req, res, next) {
  res.render('index', {title: 'got users'});
}

module.exports = {
  signUp: signUp
};

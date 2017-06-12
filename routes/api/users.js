const promise = require("bluebird");
const options = {
  //initialization options
  promiseLib: promise
}

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/relay';
const db = pgp(connectionString);

function signUp(req, res, next) {
  res.render('index', {title: 'got users'});
}

module.exports = {
  signUp: signUp,
};

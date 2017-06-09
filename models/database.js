var promise = require("bluebird");
var options = {
  //initialization options
  promiseLib: promise
}

const pgp = require('pg-promise')(options);
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/relay';
const db = new pgp(connectionString);

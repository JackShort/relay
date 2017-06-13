var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var promise = require("bluebird");
var options = {
    //initialization options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/relay';
var db = pgp(connectionString);

passport.use(new LocalStrategy(
    function(username, password, done) {
        
    }
));

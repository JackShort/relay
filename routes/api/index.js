var express = require('express');
var router = express.Router();

var db = require('./users.js');

router.get('/', function(req, res, next){
  res.render('index', {title: 'API'});
});

router.get('/users/signUp', db.signUp);

module.exports = router;

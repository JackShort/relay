const express = require('express');
const router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/relay';

router.get('/', function(req, res, next){
  res.render('index', {title: 'API'});
});

module.exports = router;

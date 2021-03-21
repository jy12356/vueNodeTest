var express = require('express');
var path = require('path');
var router = express.Router();
const db = require('../db'); // db 모듈 추가


/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'))
});

module.exports = router;
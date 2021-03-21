var express = require('express');
var router = express.Router();

const connection = require('../db');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var sql = 'SELECT * FROM users';
    connection.query(sql, params, function(error, rows, fields) {
        if (!error) {
            for (var i = 0; i < rows.length; i++) {
                console.log(rows[i]);
            }
        } else {
            console.log('query error : ' + error);
        }
    });
});

module.exports = router;
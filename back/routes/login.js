const express = require('express');
const router = express.Router();

const connection = require('../db');

const User = require('../routes/users');
const crypto = require('crypto'); //Node.js 에서 제공하는 암호화 모듈
//const properties = require('../properties/key.js');
// mapping 
// Login
router.get('/', function(req, res, next) {});

// Sign Up
// Post로만 받는다

router.post('/signUp', function(req, res, next) {
    const params = req.body.user;
    const query = `INSERT INTO users (id, name, password) VALUES
    ('${params.id}', '${params.name}', '${params.password}');`;

    console.log('[POST] meetingrooms query: ', query);

    connection.query(query, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }

        console.log('[POST] meetingrooms result: ', result);

        if (Number.isNaN(result.insertId) || result.insertId < 0) {
            res.status(500).send('Item create failed.');
        }

        res.send({
            id: result.insertId,
        });
    });
});
// router.post('/signUp', function(req, res, next) {
//     const user = new User();
//     alert("aaaa");
//     console.log(req.body.user.id);
//     // setting values
//     user.id = req.body.user.id;
//     user.password = req.body.user.password;
//     user.name = req.body.user.name;

//     // encryption 
//     let cipher = crypto.createCipher('aes192', 'key');
//     cipher.update(user.password, 'utf8', 'base64');
//     let cipheredOutput = cipher.final('base64');
//     user.password = cipheredOutput;
//     /*  
//       //혹시 모를 복호화를 통해 남겨놓음
//       //decryption
//       let decipher = crypto.createDecipher('aes192', 'key');
//       decipher.update(cipheredOutput, 'base64', 'utf8');
//       let decipheredOutput = decipher.final('utf8');
//     */


//     user.save(function(err) {
//         if (err) {
//             console.error(err);
//             res.json({ result: 0 });
//             return;
//         }
//         res.json({ result: 1 });
//     });
// });



module.exports = router;
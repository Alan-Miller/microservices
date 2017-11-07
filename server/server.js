const express = require('express')
    , bodyParser = require('body-parser')
    , seneca = require('seneca')()
    , app = express();

app.use(bodyParser.json());

seneca.use('./process.js');

seneca.act({ role: 'process', cmd: 'sum', numbers: [1, 2, 3, 4] }, function (err, result) {
    console.log('result', result);
});

app.listen(3000, _ => { console.log(`Listening on 3000.`); });
// const express = require('express')
    // , bodyParser = require('body-parser')
    // , app = express();

// app.use(bodyParser.json());

const seneca = require('seneca')();

seneca.use('./process.js');

seneca.act({ role: 'process', cmd: 'sum', numbers: [1, 2, 3, 4] }, (err, result) => {
    console.log('result', result);
});

// app.listen(3000, () => { console.log(`Listening on 3000.`); });
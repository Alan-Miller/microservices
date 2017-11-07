const express = require('express')
    , bodyParser = require('body-parser')
    , seneca = require('seneca')
    , app = express();

app.use(bodyParser.json());

app.listen(3000, _ => { console.log(`Listening on 3000.`); });
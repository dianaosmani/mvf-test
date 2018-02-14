var express = require('express');
var data = require('./accounts.json');
var accounts = data.accounts;

var app = express();

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})
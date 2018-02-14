var express = require('express');
var data = require('./accounts.json');
var accounts = data.accounts;

var app = express();

app.get('/balance/:id', function(req, res){
    var accountId = req.params.id;

    var foundAccount = accounts.find(function(acc) {
        return acc.id === accountId;
    });

    if(foundAccount) {
        res.send({balance : foundAccount.balance});
    }else{
        res.send('account not found');
    }
})

app.get('/account/:id', function(req, res){
    var accountId = req.params.id;

    var foundAccount = accounts.find(function(acc) {
        return acc.id === accountId;
    });

    if(foundAccount) {
        res.send(foundAccount);
    }else{
        res.send('account not found');
    }
})


app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})
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

app.get('/search-account/:text', function(req, res){
    var searchText = req.params.text;

    var foundAccounts = accounts.filter(function(acc) {
        return (
        acc.firstname.includes(searchText) ||
        acc.lastname.includes(searchText) ||
        acc.email.includes(searchText))
    });

    if(foundAccounts) {
        res.send(foundAccounts);
    }else{
        res.send('account not found');
    }
})

app.listen(3000, function(){
    console.log('Example app listening on port 3000!')
})
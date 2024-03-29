var express = require('express');
var app     = express();
var cors    = require('cors');
var dal     = require('./dal.js');

//used to serve static files from public directory
app.use(express.static('public'));
app.use(cors());

//Paths

//create user account 
app.get('/account/create/:name/:email/:password', function(req,res){
    //else create user
    dal.create(req.params.name,req.params.email,req.params.password).
    then((user)=>{
        console.log(user);
        res.send(user);
    });
});

//login user
//app.get('/account/login/:email/:password', function(req,res){
//    res.send({
//        email: req.params.string,
//        password: req.params.password
//    });
//});

//all accounts
app.get('/account/all', function(req,res){

    dal.all().
        then((docs)=>{
            console.log(docs);
            res.send(docs);
        });
});

var port = 3000;
app.listen(port);
console.log('running on port'+ port);


//query why node index.js is not working or even node mongo_test.js is not workin
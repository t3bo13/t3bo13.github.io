const { promiseHooks } = require('v8');

const MongoClient = require('mongodb').MongoClient;
const url         = 'mongodb://localhost:27017';
let db            = null;

//connect to mongo
MongoClient.connect(url,{useUnifiedTopology: true},function(err,client){
    console.log("connected succesfully to db server");

    //connect to myproject database 
    db =client.db('myproject');
});

//create user account
function create(name,email,password){
    return new promiseHooks((resolve,reject)=>{
        if(!db){
            reject('Database not initialized');
            return;
        }
        const collection =db.collection('users');
        const doc = {name, email, password, balance:0};
        collection.insertOne(doc,{w:1}, function(err,result){
            err? reject (err):resolve (doc);
        });
    })
}
// all users
function all() {
    return new Promise((resolve, reject) => {
        if (!db) {
            reject('Database not initialized');
            return;
        }
        const collection = db.collection('users');
        collection.find({}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
    });
}

module.exports = {create, all};
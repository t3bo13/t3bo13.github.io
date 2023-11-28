const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected successfully to MongoDB');

  //database name
  const dbName = 'myproject';
  const db = client.db(dbName);

  //new user 
  var name = 'user' + Math.floor(Math.random() * 10000);
  var email = name + '@pmulesotho';

  //insert into customer table 
  var collection = db.collection('customer');
  var doc = {name,email};
  collection.insertOne (doc,{w:1}, function(err,result){
    console.log('Document insert');

    //clean up
    client.close();
  });
});

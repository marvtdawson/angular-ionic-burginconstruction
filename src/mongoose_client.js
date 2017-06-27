/**
 * Created by katan-hgmhub on 6/27/17.
 */
var mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost/burginc');
console.log('You are connected');
mongoose.createConnection('open', function(){
  console.log('You have a good URI');
  //console.log(mongooose.connection.collection);
  mongoose.createConnection.db.collectionNames(function(err, names){
    console.log('Some additional info' + names);
    mongoose.disconnect();
  });
});


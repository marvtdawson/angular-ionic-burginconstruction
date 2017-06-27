/**
 * Created by katan-hgmhub on 6/27/17.
 */

// Set up
var express  = require('express');
var app      = express();                        // create our app w/ express
var mongoose = require('mongoose');              // mongoose for mongodb
var morgan = require('morgan');                  // log requests to the console (express4)
var bodyParser = require('body-parser');         // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var cors = require('cors');

// Configuration
mongoose.createConnection('mongodb://localhost/burginc');

app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(cors());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Models
var Quotes = mongoose.model('Quotes', {
  title: String,
  description: String,
  quote: Number
});

// Routes

// Get quotes
app.get('/api/quotes', function(req, res) {

  console.log("fetching quotes");

  // use mongoose to get all quotes in the database
  Quotes.find(function(err, quotes) {

    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    if (err)
      res.send(err)

    res.json(quotes); // return all reviews in JSON format
  });
});

// create review and send back all reviews after creation
app.post('/api/quotes', function(req, res) {

  console.log("creating quote");

  // create a review, information comes from request from Ionic
  Quotes.create({
    title : req.body.title,
    description : req.body.description,
    quote: req.body.quote,
    done : false
  }, function(err, quotes) {
    if (err)
      res.send(err);

    // get and return all the quotes after you create another
    Quotes.find(function(err, quotes) {
      if (err)
        res.send(err)
      res.json(quotes);
    });
  });

});

// delete a quotes
app.delete('/api/quotes/:quotes_id', function(req, res) {
 Quotes.remove({
    _id : req.params.quotes_id
  }, function(err, quotes) {

  });
});


// listen (start app with node server.js) ======================================
app.listen(8080);
console.log("App listening on port 8080");

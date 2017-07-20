// require the express module
const express = require('express');
// assign and invoke express to app
const app = express();
// require path module to set folder paths
const path = require('path');
// require mongoose to connet with MongoDB
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// const bodyParser = require('body-parser');
const bodyParser = require('body-parser');

// create our connection to our db
mongoose.connect('mongodb://localhost/wolfpack');

// creating schema for wolves
const WolfSchema = new mongoose.Schema({
  name: { type: String, required: true},
  age: Number,
  gender: String,
  alpha: Boolean,
}, {
  timestamps: true
});
// setting our model and assigning to Wolf
const Wolf = mongoose.model('Wolf', WolfSchema);

// let our app know to use body-parser for post data
app.use(bodyParser.urlencoded({extended: true}));
// let our app know where our static files are located
app.use(express.static(path.resolve('static')));
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
  console.log('Going to home page for all wolves');
  Wolf.find({}, function (error, wolves) {
    if (error) {
      console.log(error);
    }
    else {
      response.render('index', {wolves});
    }
  })
});

app.get('/wolves/new', function(request, response) {
  console.log('Add a new wolf');
  response.render('add_wolf');
});

app.get('/wolves/:id', function (request, response) {
  console.log(`looking at wolf with id: ${request.params.id}`);
  Wolf.findOne({_id: request.params.id}, function (errors, wolf) {
    if (errors) {
      console.log(errors);
    }
    else {
      console.log(`${wolf}`);
      response.render('wolf', {wolf});
    }
  })
});

app.get('/wolves/edit/:id', function (request, response) {
  console.log(`editing wolf: ${request.params.id}`);
  Wolf.findOne({_id: request.params.id}, function (error, wolf) {
    if (error) {
      console.log(error);
    }
    else {
      console.log(wolf);
      response.render('edit_wolf', {wolf});
    }
  })
});

app.post('/add', function(request, response) {
  console.log('Attempting to add new wolf to DB');
  const wolf = new Wolf(request.body);
  wolf.save(function (errors) {
    if (errors) {
      console.log(errors);
    }
    else {
      console.log('successfully added wolf');
      response.redirect('/');
    }
  })
});

app.post('/wolves/edit/:id', function (request, response) {
  console.log(`Editing wolf ${request.params.id}`);
  Wolf.update({_id: request.body._id}, {$set:request.body}, function(error){
    if (error) {
      console.log(error);
    }
    else {
      response.redirect(`/wolves/${request.params.id}`);
    }
  })
});

app.post('/wolves/destroy/:id', function (request, response) {
  console.log(`Deleting wolf ${request.params.id}`);
  Wolf.remove({_id: request.params.id}, function(error){
    // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
    if (error) {
      console.log(error);
    }
    else {
      response.redirect('/');
    }
  })
});

app.listen(8000, ()=>console.log('listening on port 8000'));

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const server = app.listen(8000, function (){
  console.log('listening on port 8000');
});
const io = require('socket.io').listen(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quotingDojo');

var UserSchema = new mongoose.Schema({
 name: String,
 quote: String
})
mongoose.model('User', UserSchema);
const User = mongoose.model('User');

io.sockets.on('connection', function (socket){
  console.log('We are connected to server!');
})

app.get('/', function (req, res){
  console.log(req);
  res.render('index');
})
app.get('/quotes', function (req, res){
  User.find({}, function(err, users) {
    if (err) {
      console.log(err);
    }
    else {
      const results = users;
      res.render('quotes', {results});
    }
  })
})
app.post('/users', function(req, res) {
  // console.log("POST DATA", req.body);
  if (req.body.skip == 'Skip to quotes!') {
    console.log('Going straight to quotes');
    res.redirect('/quotes');
  }
  else {
    const user = new User({name: req.body.name, quote: req.body.quote});
    // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    user.save(function(err) {
     // if there is an error console.log that something went wrong!
      if(err) {
        console.log('something went wrong');
      }
      else { // else console.log that we did well and then redirect to the root route
        console.log('successfully added a user!');
        res.redirect('/quotes');
      }
    })
  }
})

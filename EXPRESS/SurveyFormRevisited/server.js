console.log("This file is " + __filename);
console.log("It's located in " + __dirname);
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

const server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
const io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  socket.on("posting_form", function (data){
    console.log('Someone clicked a button!');
    var response = {};
    // parsing our form data received from client and placing in new object
    for (var i = 0; i < data.length; i++) {
      response.name = data[0].value;
      response.location = data[1].value;
      response.language = data[2].value;
      response.comment = data[3].value;
    }
    // we will send back two events and one will carry our new object
    socket.emit('updated_message', {response});
    socket.emit('random_number');
  })
  //all the socket code goes in here!
})

app.get('/', function(req, res) {
  res.render('index')
});

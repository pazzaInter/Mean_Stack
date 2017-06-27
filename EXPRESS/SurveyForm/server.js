var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index')
});
app.post('/result', function (req, res){
    var user_data = req.body
    //code to add user to db goes here!
    // redirect the user back to the root route.
    res.render('result', {user_data} )
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})

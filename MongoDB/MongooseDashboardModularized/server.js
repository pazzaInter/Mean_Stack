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
// let our app know to use body-parser for post data
app.use(bodyParser.urlencoded({extended: true}));
// let our app know where our static files are located
app.use(express.static(path.resolve('client/static')));
app.set('views', path.resolve('client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.listen(8000, ()=>console.log('listening on port 8000'));

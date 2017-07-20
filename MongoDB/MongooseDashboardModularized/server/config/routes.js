const wolves = require('../controllers/wolves.js')

module.exports = function (app) {

  app.get('/', function (request, response) {
    console.log('Going to home page for all wolves');
    wolves.show(request, response);
  });

  app.get('/wolves/new', function(request, response) {
    console.log('Add a new wolf');
    response.render('add_wolf');
  });

  app.get('/wolves/:id', function (request, response) {
    console.log(`looking at wolf with id: ${request.params.id}`);
    wolves.showOne(request, response);
  });

  app.get('/wolves/edit/:id', function (request, response) {
    console.log(`editing wolf: ${request.params.id}`);
    wolves.edit(request, response);
  });

  app.post('/add', function(request, response) {
    console.log('Attempting to add new wolf to DB');
    wolves.create(request, response);
  });

  app.post('/wolves/edit/:id', function (request, response) {
    console.log(`Editing wolf ${request.params.id}`);
    wolves.update(request, response);
  });

  app.post('/wolves/destroy/:id', function (request, response) {
    console.log(`Deleting wolf ${request.params.id}`);
    wolves.remove(request, response);
  });
}

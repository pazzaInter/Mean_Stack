const mongoose = require('mongoose');
const Wolf = mongoose.model('Wolf');

module.exports = {
  show: function (request, response) {
    Wolf.find({}, function (error, wolves) {
      if (error) {
        console.log(error);
      }
      else {
        response.render('index', {wolves});
      }
    })
  },
  showOne: function (request, response) {
    Wolf.findOne({_id: request.params.id}, function (errors, wolf) {
      if (errors) {
        console.log(errors);
      }
      else {
        console.log(wolf);
        response.render('wolf', {wolf});
      }
    })
  },
  edit: function (request, response) {
    Wolf.findOne({_id: request.params.id}, function (error, wolf) {
      if (error) {
        console.log(error);
      }
      else {
        console.log(wolf);
        response.render('edit_wolf', {wolf});
      }
    })
  },
  create: function (request, response) {
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
  },
  update: function (request, response) {
    Wolf.update({_id: request.body._id}, {$set:request.body}, function(error){
      if (error) {
        console.log(error);
      }
      else {
        response.redirect(`/wolves/${request.params.id}`);
      }
    })
  },
  remove: function (request, response) {
    Wolf.remove({_id: request.params.id}, function(error){
      // This code will run when the DB has attempted to remove all matching records to {_id: 'insert record unique id here'}
      if (error) {
        console.log(error);
      }
      else {
        response.redirect('/');
      }
    })
  }
}

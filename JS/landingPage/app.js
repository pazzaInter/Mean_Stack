// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
  // see what URL the clients are requesting:
  console.log('client request URL: ', request.url);
  // this is how we do routing:
  if(request.url === '/') {
    fs.readFile('index.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  else if(request.url === '/ninjas') {
    fs.readFile('ninjas.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  else if(request.url === '/dojos/new') {
    fs.readFile('dojos.html', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  // following will retrieve css
  else if(request.url === '/css/pure-min.css') {
    fs.readFile('css/pure-min.css', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  else if(request.url === '/css/grids-responsive-min.css') {
    fs.readFile('css/grids-responsive-min.css', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  else if(request.url === '/css/mystyles.css') {
    fs.readFile('css/mystyles.css', 'utf8', function (errors, contents){
      response.writeHead(200, {'Content-Type': 'text/css'});  // send data about response
      response.write(contents);  //  send response body
      response.end(); // finished!
    });
  }
  // request didn't match anything:
  else {
    response.writeHead(404);
    response.end('File not found!!!');
  }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");

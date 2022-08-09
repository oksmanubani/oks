//const http = require ("http");
//const { connect } = require("http2");
//const httpserver = http.createServer();
//httpserver.on("connection", connection=> {
  //  constantSo
//})
//httpserver.listen(8080, ()=>console.log("Listening on port 8080"))






let http = require('http');

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();

}).listen(8888);
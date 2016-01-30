/*
basic server
*/
var connect = require("connect");
var serve_static = require("serve-static");

//define port to listen on
const PORT=8080; 

//run server
connect().use(serve_static(__dirname)).listen(PORT);

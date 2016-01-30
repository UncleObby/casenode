/*
user.js
CaseNode user node.js express router for route /user
VERSION: 0.1
Revision history:
v 0.1 - 12 Jan 2016 incept
*/

var express=require("express");
var router=express.Router();

//middleware to log date
router.use(function(req, res, next){
	//log the request with the date (from contructor function)
	console.log(req.originalUrl + " " + new Date().toLocaleDateString());
	next();
});
// define the default route
router.get('/', function(req, res) {
  res.send('Please log in.');
});

// define the help route
router.get('/*', function(req, res) {
  res.send("user " + req.pathname);
});

//export the router for the main app to use
module.exports=router;

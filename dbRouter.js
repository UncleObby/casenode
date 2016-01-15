/*
dbRouter.js
CaseNode user node.js express router for route /db
This is the main handler for database interactions
VERSION: 0.1
Revision history:
v 0.1 - 12 Jan 2016 incept
*/
var express=require("express"); //Express app base
var bodyParser=require("body-parser"); //middleware for parsing POST requests
var router=express.Router(); //this router (/db)
var OrientDB=require("orientjs"); //Orient DB API

//middleware to log date
router.use(function(req, res, next){
	//log the request with the date (from contructor function)
	console.log("Router /user " + req.originalUrl + " " + new Date().toLocaleDateString());
	next();
});

//middleware to parse POST requests
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// default GET route = bad request
router.get("/", function(req, res) {
	res.status(400).send("This is the database service - you shouldn't be here!");
});

//
router.post("/", function(req, res) {
	//where is this coming from? 
	res.write(JSON.stringify(req.body));
	res.end();
});

//connection to database
function DBConn(){
	var dbO = OrientDB({host: "localhost",port: 2424,username: "root",password: "r00tbiskit"});
	var db = dbO.use( { name: 'cn1' , username: 'admin' , password: 'admin' } );
	return db;
}

//addPerson
router.post("/addPerson", function(req,res){
	//validate input
	
	//connect to the database
	var db=DBConn();
	//add the person
	db.insert().into('person').set(req.body).one()
		.then( function(result){ //ok
			res.end(JSON.stringify(result))
		}, function(err){ //err
			res.end("didn't work" + JSON.stringify(err));
		}
	);
	// CLOSE THE CONNECTION AT THE END
	db.close();
});

//updatePerson
router.post("/updatePerson", function(req,res){
	//validate input
	var RID = req.body.RID;
	//connect to the database
	var db=DBConn();
	//add the person
	db.update('person').set(req.body).where({'@rid':RID}).one()
		.then( function(result){ //ok
			res.end(JSON.stringify(result))
		}, function(err){ //err
			res.end("didn't work" + JSON.stringify(err));
		}
	);
	// CLOSE THE CONNECTION AT THE END
	db.close();
});


//testing function
router.post("/test", function(req,res){
	//connect to the database
/*	var dbO = OrientDB({
		host: "localhost",
		port: 2424,
		username: "root",
		password: "r00tbiskit"
	});
	var db = dbO.use( { name: 'cn1' , username: 'admin' , password: 'admin' } );
	res.write('Using database: ' + db.name);
	*///select something
	var db=DBConn();
	db.select().from('OUser').one().then( function(result){
		res.end(JSON.stringify(result))
	}, function(err){
		res.end("didn't work" + JSON.stringify(err));
	}
	);
	// CLOSE THE CONNECTION AT THE END
	db.close();
	//res.end(" ... closed.");
});

//export the module for the main app to use
module.exports=router;
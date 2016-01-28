/*
backend.js
default backend provider for CaseNode UI
communicates to RESTful web service - assumed to be the default node.js / OrientDB one
***MUST BE LOADED AFTER angular.js module called 'uiApp' has been defined. 
(c)2016 O Low
version: 0.1
revision:
v0.1 - 2016/01/28 - incept, code split off from ui1.js
*/

uiApp.provider("backend",function(){
	//set the service URL (can be changed from module config)
	this.serviceURL="http://localhost:8080";
	//methods exposed via $get for angular framework to pick up
	this.$get = function($http,$q){
		return {
			log: function(){
				console.log("backend. ");
			},
			
			//database test function
			test: function(data){
				$http.post("http://localhost:8080/db/test",data)
					.then( function(response){ //success callback
						console.log("DB request OK: " + JSON.stringify(response.data) );
					}, function(response){ //error callback
						console.log("broken" + JSON.stringify(response.data) );
					}
				);
			},
			
			//function to store a document
			//pass the document object to store, plus any objects you want it to be linked to
			// the objects it links to should already be stored
			storeDocument: function(docObj, linksObj){
				//set up the structure expected at the other end
				var data = {docObj: docObj, linksObj: linksObj};
				$http.post("http://localhost:8080/db/storeDocument",data)
				.then( function(response){ //success callback
					//store the recordID returned
					docObj['@rid']=response.data["@rid"];
					console.log("DB request OK: " + JSON.stringify(response.data) );
				}, function(response){
					//error callback
					console.log("broken: " + JSON.stringify(response.data));
				});
			}
		}
	}
});

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
			storePerson: function(personObj, bForceInsertIdentical){
				var data={person: personObj};
				//if the person had a record ID, then update, else add
				if (personObj['@rid'] &&(!(bForceInsertIdentical===true))) {
					data['@rid']=personObj['@rid'];
					$http.post("http://localhost:8080/db/updatePerson",data)
						.then( function(response){ //success callback
							console.log("DB request OK: " + JSON.stringify(response.data) );
						}, function(response){ //error callback
							console.log("broken" + JSON.stringify(response.data) );
						}
					);
				} else { //no record ID, so add
					$http.post("http://localhost:8080/db/addPerson",data)
						.then( function(response){ //success callback
							//store the recordID
							personObj['@rid']=response.data["@rid"];
							console.log("DB request OK: " + JSON.stringify(response.data) );
						}, function(response){ //error callback
							console.log("broken" + JSON.stringify(response.data) );
						}
					);
				}
				console.log("storePerson: ");
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
			},
			//storeMatter
			storeMatter: function(caseDetailsObj, personObj){
				var data = {
					'caseDetails': caseDetailsObj
				}
				//send the case to the database service
				$http.post("http://localhost:8080/db/storeMatter",data)
					.then( function(response){ //success callback
						//store the recordID returned
						caseDetailsObj['@rid']=response.data["@rid"];
						console.log("DB request OK: " + JSON.stringify(response.data) );
					}, function(response){
						//error callback
						console.log("broken: " + JSON.stringify(response.data));
					});
				console.log("storeMatter: ");
			},
			
			//function to store a new enquiry
			storeEnquiry: function(enqObj){
				//set up structure required at other end.
				var data={
					enqObj: enqObj
				}
				//send it
				$http.post("http://localhost:8080/db/storeMatter",data)
					.then( function(response){ //success callback
						//store the recordID returned
						enqObj['@rid']=response.data["@rid"];
						console.log("DB request OK: " + JSON.stringify(response.data) );
					}, function(response){
						//error callback
						console.log("broken: " + JSON.stringify(response.data));
					});
				console.log("storeEnquiry: ");	
			},
			
			//get matters
			fetchMatters: function(obj){
				//set up data structure
				// ** at the moment, it's ignored
				var data = {name:"Bob"};
				//send it
				$http.post("http://localhost:8080/db/fetchMattersByResponsible", data)
					.then( function(response){ //success callback
						//stuff the JSON into the object
						obj=response.data;
						console.log("DB request OK: " + JSON.stringify(obj) );
					}, function(response){
						//error callback
						console.log("broken: " + JSON.stringify(response.data));
					});
				console.log("fetchMatters: ");	
			}
		}
	}
});



/*
What do we want to do?

User interface:
*Save an enquiry, automatically or finally

Store person (get personID OR existing)
Store caseDetails
Store attendance note
link attendance note to case
link person to case as client


*take instructions on a case
update caseDetails to be a client matter
store instructions document
link document to case

*edit a person record

store updated details


*Edit and save the details of a case


*Drag a document onto a case
add the document
link it to the case


*Create an info linked to source document. 

*get a set of caseFields
select from case where this fee earner
select from document where isFiledIn  any of these cases
select from person where isClient in any of these cases

case.documents.push(each document)


*/








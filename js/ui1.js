/* ui1.js
CaseNode User Interface ui1 main script
Copyright(2)2015 O J Low
Revision: 0.2
Revision history:
v0.1 - 2015-11-27 Incept
v0.2 - 2016-01-10 database storage


REQUIRES 
angular.js
angular-sanitize.js
jquery.js
jquery-ui.js
*/

//developer's personal object
var ob = {};

//define our Edge type
function Edge(eOut, eIn){
	this.eIn=eIn;
	this.eOut=eOut;
}

//some color data:
var uiColor = {green:"#E9FFEE",red:"#FFEEE9"};
//some test data:
var testData = [];
testData["myO"]={name:"Nemo"};
testData["feeEarners"]=[
	{
		initials: "AC1",
		name: "Andrew Crisp"
	},
	{
		initials: "IM",
		name: "Ian Mason"
	},
	{
		initials: "OJL",
		name: "Oliver Low"
	}
];
testData["caseFields"]=[
	{
		type: "client",
		clients: [
			{
				"@rid":"#13:12",
				firstname: "John",
				lastname: "Smith",
				title:"Mr"
			}
		],
		name: "John Smith",
		title: "Application to set aside CCJ v HSBC",
		caseStatusColor: uiColor["green"],
		caseFeeEstimate: 750,
		caseBilled: 520,
		caseWIPValue: 120,
		caseExpecting: "waiting for o/s",
		contacts: [
			{	
				party: "Client",
				name: "John Smith",
				mobile: "07700 900105",
				landline: "0115 496 0200",
				email: "johnsmith@example.com",
				addressHTML: "12, Barrel Yard<br>Brewery Lane<br>Tadcaster<br>TD1 1BR"
			},
			{	
				party: "Other Side",
				name: "Cohen Bros. Solicitors",
				landline: "0115 496 0201",	
				email: "cohenbros@example.com",
				addressHTML: "1 Tower Walk<br />Leeds<br />LS1 1SL",
				addressDX: "DX 12345 LEEDS 99"
			},
			{	
				party: "Other Side",
				name: "Lisa Starbuck",
				position: "Litigation Paralegal",
				landline: "0115 496 0214",
				email: "lisa.cohenbros@example.com"
			}
		],
		info: [
			{key: "Claim Number", value: "A0BC1234"},
			{key: "Court", value: "County Court Business Centre"},
			{key: "Part 13.2 ?", value: "yes"},
			{key: "Part 13.3 ?", value: "yes"},
			{key: "What?", value: ""}
		]
	},
	{
		type: "client",
		clients: [
			{
				"@rid": "#13:13",
				firstname: "Roger (007)",
				lastname: "Moore"
			}
		],
		name: "Rpoger Moore",
		matterID: "MOO12-1",
		title: "Claim against MI6",
		caseStatusColor: uiColor["red"],
		caseFeeEstimate: 750,
		caseBilled: 0,
		caseWIPValue: 220,
		caseExpecting: "HEARING 01 Jan 2016",
		contacts: [
			{	
				party: "Client",
				mobile: "0770 09 007 01",
				landline: "0115 4960 007",
				email: "rogermoore@example.com",
				addressHTML: "85 Albert Emkabnkment<br>London</br>SE1 7TP"
			}
		],	
		info: [
			{key: "Claim Number", value: "0001-205ET"},
			{key: "ACAS EC certificate", value: "A205-15-221"},
			{key: "Court", value: "Leicester ET"}
		],
		documents: [
			{
				title: "Note of enquiry",
				filepath: "",
				date: "23/07/2015"
			},
			{
				title: "Claim form",
				filepath: "",
				date: "29/07/2015"
			},
			{
				title: "Email from client",
				filepath: "",
				date: "28/07/2015"
			}
		]
	},
	{
		type: "client",
		name: "Charles Wesley",
		clients: {
			name: "Charles Wesley"
		},
		matterID: "WES5-1",
		title: "Settlement Agreement",
		caseStatusColor: uiColor["green"],
		caseFeeEstimate: 500,
		caseFeeType: "agreed fee",
		caseBilled: 0,
		caseWIPValue: 220,
		caseExpecting: "Revised draft agreement from client",
		contacts: [
			{
				party: "Client",
				landline: "0115 4960 711",
				email: "chuck@example.com",
				addressHTML: "Ye Olde Methodist Chappel<br>Chapel Lane</br>Grimscote<br>NN12 12NN"
			}
		],	
		info: [
			{key: "Employer", value:"The Rt Revd the Bishop of Southwark"}
		],
		documents: [
			{
				title: "Note of enquiry",
				filepath: "",
				date: "23/11/2015"
			},
			{
				title: "Call from client",
				filepath: "",
				date: "29/11/2015"
			},
			{
				title: "Draft settlement agreement",
				filepath: "",
				date: "28/11/2015"
			}
		]
	},
	{
		type: "client",
		name: "Michael Burke",
		clients: {
			name: "Michael Burke"
		},
		category: "Wills and Probate",
		caseFeeEstimate: 350,
		caseBilled: 0,
		caseWIPValue: 100,
		contacts: [
			{	
				party: "Client",
				name: "Michael Burke",
				mobile: "07700 900125",
				landline: "0115 496 0230",
				email: "MBurke@example.com",
				addressHTML: "New Horizons, Bessies Lane, Reading RG99 9QP"
			}
		],
		info: [
			{key: "Storage", value: "MB"}
		],
		documents: [
			{
				title: "Draft will v3",
				filepath: "",
				date: "04/08/2015"
			},
			{
				title: "Draft Will v2",
				filepath: "",
				date: "04/08/2015"
			},
			{
				title: "Letter to client with draft",
				doctype: ".doc",
				filepath: "",
				date: "03/08/2015"
				
			},
			{
				title: "Client care letter",
				doctype: ".doc",
				filepath: "",
				date: "03/08/2015"
				
			},
			{
				title: "Email from client",
				doctype: ".msg",
				filepath: "",
				date: "03/08/2015"
				
			},
			{
				title: "Email from client",
				doctype: ".eml",
				filepath: "",
				date: "29/07/2015"
				
			},
			{
				title: "Client registration form",
				doctype: ".doc",
				filepath: "",
				date: "25/07/2015"
				
			},
			{
				title: "Advice and estimate",
				doctype: ".eml",
				filepath: "",
				date: "23/07/2015"
				
			},
			{
				title: "Note of enquiry",
				doctype: "attendancenote",
				date: "23/07/2015",
				filepath: "",
				content: {
					HTML: "<H2>Note of enquiry</h2><p>test</p>"
				}
			}
		]
	},
	{
		type: "enquiry",
		name: "Stargazers Unlimited Limited",
		clients: {
			name: "targazers Unlimited Limited"
		},
		category: "Commercial",
		contacts: [
			{
				party: "Client",
				name: "Patrick Moore",
				mobile: "0770 090 0718",
				email: "partickmoore@example.com",
				addressHTML: "The Royal Observatory<br />Greenwich<br />London"
			}
		],	
		documents: [
			{
				title: "Note of enquiry",
				filepath: "",
				date: "23/07/2015"
			},
			{
				title: "Email from client",
				filepath: "",
				date: "28/07/2015"
			}
		]
	},
	{
		type: "enquiry",
		name: "John Boon",
		clients: {
			name: "John Boon"
		},
		category: "Settlement Agreement",
		timestamp: 1450458146,
		caseFeeEstimate: 500,
		caseFeeType: "agreed fee",
		contacts: [
			{
				party:"Client",
				name: "John Boon",
				landline: "0115 4960 781",
				email: "boonj@example.com",
				addressHTML: "DUck Ranch, Plumstead<br />Southend-on-Sea<br />CA4 2BP"
			}	
		],
		info: [
			{key: "Employer", value:"The Rt Revd the Bishop of Southwark"}
		],
		documents: [
			{
				title: "Note of enquiry",
				filepath: "",
				date: "23/11/2015"
			},
			{
				title: "Call from client",
				filepath: "",
				date: "29/11/2015"
			},
			{
				title: "Draft settlement agreement",
				filepath: "",
				date: "28/11/2015"
			}
		]
	}
];

//documents
testData['documents'] = [];
testData['documents'][0]=	{
		doctype: '.msg',
		title: "Email to other side re consent",
		filepath: "",
		date: "04/08/2015"
	}
testData['documents'][1]=	{
		title: "Draft Consent Order",
		filepath: "",
		date: "04/08/2015"
	}
testData['documents'][2]=	{
		title: "Letter to o-s serving N244",
		doctype: ".doc",
		filepath: "",
		date: "03/08/2015"
		
	}
testData['documents'][3]=	{
		title: "Letter to court filing N244",
		doctype: ".doc",
		filepath: "",
		date: "03/08/2015"
		
	}
testData['documents'][4]={
		title: "Application Notice",
		doctype: ".doc",
		targetURL: "file:///C:/Users/Oliver.Low/Documents/dev/testdata/N244 set aside.doc",
		date: "03/08/2015"
		
	}
testData['documents'][5]={
		title: "Draft Defence",
		doctype: ".pdf",
		targetURL: "file:///C:/Users/Oliver.Low/Documents/dev/testdata/Draft Defence.pdf",
		date: "02/08/2015"
		
	}
testData['documents'][6]={
		title: "Email from client",
		doctype: ".eml",
		filepath: "",
		date: "29/07/2015"
		
	}
testData['documents'][7]={
		title: "Credit report for client (Experian)",
		doctype: ".pdf",
		filepath: "testdata/N244 set aside.doc",
		date: "29/07/2015"
		
	}
testData['documents'][8]={
		title: "Client email to confirm evidence",
		doctype: ".eml",
		filepath: "",
		date: "29/07/2015"
	}
testData['documents'][9]={
		title: "Your evidence",
		doctype: ".eml",
		filepath: "",
		date: "28/07/2015"
	}
testData['documents'][10]={
		title: "Client Care Letter",
		doctype: ".doc",
		filepath: "",
		date: "26/07/2015"		
	}
testData['documents'][11]={
		title: "Chronology",
		doctype: ".doc",
		filepath: "",
		date: "26/07/2015"
		
	}
testData['documents'][12]={
		title: "Client registration form",
		doctype: ".doc",
		filepath: "",
		date: "25/07/2015"
		
	}
testData['documents'][13]={
		title: "Advice and estimate",
		doctype: ".eml",
		filepath: "",
		date: "23/07/2015"
		
	}
testData['documents'][14]={
		title: "Note of enquiry",
		doctype: "attendancenote",
		date: "23/07/2015",
		filepath: "",
		content: {
			HTML: "<H2>Note of enquiry</h2><p>test</p>"
		}
	}

//attach the documents to ecah case
for (var i=0; i<15; i++){
	//add a new edge to the collection of document egdes on the case
	var e = new Edge(testData['documents'][i],testData['caseFields'][0]); //using the 'new' keyword to highlight that we're creating a new one and will be reusing e
	(testData['caseFields'][0].documents || (testData['caseFields'][0].documents = []) ).push(e); //create array if required
	//testData['caseFields'][0].documents.push(testData['documents'][i]);
}

//for (var i=0; i < 1; i++) testData["caseFields"].push(testData["caseFields"][0]); //tried up to 10,000


//templates
testData["templates"]=[
	{
		category: "Standard Letters",
		templates: [
			{name: "Client Care Letter", id:"ClientCareLetter"},
			{name: "Attaché", id:"Attaché"},
			{name: "Bill Reminder", id:"BillReminder"}
		]
	},
	{
		category: "Court Forms",
		templates: [
			{name: "N1 Claim Form", id:"N1ClaimForm"},
			{name: "N244 Application Notice", id:"N244ApplicationNotice"},
			{name: "N434 Notice of Change of Solicitor", id:"N434NoticeOfChangeOfSolicitor"}
		]
	}
];
testData["costs"]=[
	{
		jcodePhase: "JC",
		jcodeTask: "10",
		billingItem: "Attendance on client - Email",
		description: "EMail clarifying points of evidence",
		units: 2,
		rate: 240
	},
	{
		jcodePhase: "JC",
		jcodeTask: "10",
		billingItem: "Attendance on client - Email",
		description: "EMail clarifying points of evidence",
		units: 2,
		rate: 240
	},
	{
		jcodePhase: "JC",
		jcodeTask: "10",
		billingItem: "Attendance on client - Email",
		description: "EMail clarifying points of evidence",
		units: 2,
		rate: 240
	}

];

//initialise JQuery UI objects
$(document).ready(function(){
	//make the icons draggable
	$("#btnPhone").draggable({revert: true, helper: "clone"});
	$("#btnEmail").draggable({revert: true, helper: "clone"});
	$("#btnDoc").draggable({revert: true, helper: "clone"});
	$("#btnDate").draggable({revert: true, helper: "clone"});
	//make the current case box a drop target for those buttons
    $( "#divCurrentCase" ).droppable({
		accept: "#btnPhone, #btnEmail, #btnDoc, #btnDate",
		hoverClass: "ui-state-hover",
		drop: function( event, ui ) {
			console.log(ui.draggable[0].id); // this refers to the id of the dragged element
		}
	});
	//make the doc templates draggable (are they all there yet?)
	$(".doc-template").draggable({revert: true, helper: "clone"});
	//make the templates accordion (NOT WORKING)
	//$("#divTemplates").accordion({collapsible: true, heightStyle: "content"});
	//make the date picker work
	$("#datePicker").datepicker({changeMonth: true, changeYear: true});
});

//create angular app, indlucing the sanitize code to allow HTML binding
var uiApp=angular.module("uiApp",['ngSanitize']);

//create a controller for fee-earner select boxes
uiApp.controller("feeEarners", ['$scope', function($scope) {
	$scope.list = testData["feeEarners"];
}]);

//create main case list controller
uiApp.controller("caseList", ['$scope', '$http', function($scope, $http){
	//assign developer's personal object to this
	ob=this; //refers to this controller $scope.caseList
	obs=$scope; 
	//get some data........
	this.list = JSON.parse(window.localStorage.getItem("caseFields")) || testData["caseFields"];
	//create the "name" field from the clients names
	for (var i=0; i<this.list.length; i++) {
		for (var j=0; j<this.list[i].clients.length; j++) {
			this.list[i].name = [this.list[i].clients[j].title, this.list[i].clients[j].firstname, this.list[i].clients[j].lastname].join(" ");
		}
	};
	this.templates = JSON.parse(window.localStorage.getItem("templates")) || testData["templates"];
	$scope.myO = JSON.parse(window.localStorage.getItem("myO")) || testData["myO"];

	//initialise local variables
	//make a reference to teh current case for updating the UI
	this.current=this.list[0]; //assign the currCase to the default (will eb changed later)
	//set the initial active tabs
	this.activeTab = {left:"Cases", middle: "File", right: "Enquiry"};
	//initialise enquiry form
	this.enquiry = {timestamp:0};
	
	//instantiate fuzzy match function
	this.conflict = new Fuse(testData["caseFields"], {keys: ["name"], threshold: 0.35}); //0.35 by trial and error
	this.conflictNameCheck = function(){ //triggered by ng-change on enuiry form fields
		console.log("Conflict check...");
		//search on the name fields, avoiding passing undefined values (for some reason, results.concat( (2nd search) ) wasn't working)
		//var results1 = this.conflict.search(this.enquiry.firstname + " " + this.enquiry.lastname ) ;
		//var results2 = this.conflict.search(this.enquiry.companyname + " ");
		//display any results in the conflict box
		//this.enquiry.conflicts=results1.concat(results2);
		this.enquiry.conflicts = this.conflict.search(this.enquiry.caseFields['name']);
////////why when we clear fields is the conflict showing overmatched?
	}
	
	//click handler from list, change the current case
	this.choose = function(pCase){
		console.log("user chose " + pCase["name"]);
		this.current=pCase;
	}
	//tab change - invoked from ng-click on tabs
	this.setTab = function(sTabName,sTabGroup){ 
		console.log("user selected tab: " + sTabGroup + "->" + sTabName);
		this.activeTab[sTabGroup] = sTabName;
	}
	//auto-save enquiry (called by ng-change on enquiry inputs)
	var t =[]; //timer handle
	this.autoSaveEnquiry = function(){
		console.log("setTimeout " + this.enquiry.timestamp.toString());
		clearTimeout(t["autoSaveEnquiry"]); // we don't want to set multiple timeouts
		t["autoSaveEnquiry"] = setTimeout( function(that){ //will pass current this (caseList instance) as 'that' as setTimeout executes in window context
			console.log("timeout");
			//if the enquiry does not have a time stamp then it's new, and needs to be created
			if ( ! that.enquiry.timestamp){
				var d = new Date(); //this should be GC'd straight away
				that.enquiry.timestamp=d.getTime();
				//create the data node in the CaseList, and link enquiry to it
				that.saveEnquiry();
			} else {
				console.log("not new: " + that.enquiry.timestamp.toString());
			}
		} , 2000, this)//3rd + params passed to function at call time (not work on old IE)
	}
	//save enquiry
	this.saveEnquiry = function(){
		//see if the enquiry is already included in caseFields. If it is, do nothing as the angular bindings will update it. 
		//if the caseFields is undefined or has no 'type', then this is new, so create a new case variable for it
		if ( ! this.enquiry.caseFields["type"] ) {
			var d =new Date(); 
			console.log(this.list.length);
			//push the enquiry onto the casefield
			this.list.push(this.enquiry.caseFields);
			//set-up some default data - this is how we link the new enquiry form to the case data
			//angular will create objects as required by the UI, but we can't assume any in particular exist
			this.enquiry.caseFields["type"] = "enquiry";
			this.enquiry.caseFields["contacts"] = [{party:"Client"}];
			this.enquiry.caseFields["documents"] = [{title:"Note of enquiry", doctype:".txt", date:new Date().toLocaleDateString(), content:""}]
			$scope.$apply(); //required to trigger angular digest because this function will be called by window.setTimeout
			//this.enquiry.caseFields = this.list[this.list.push({type: "enquiry", timestamp: d.getTime()})];
			console.log("created caseFields for client " + this.enquiry.caseFields['name']);
		}
		
	}
	//new enquiry
	this.newEnquiry = function(){
		//clear out the contents of enquiry
		this.enquiry={timestamp:0};
		
	}
	//doc preview function
	this.docPreview = function(doc){
		console.log(doc.title + " url=" + doc.targetURL);
		//open a new window to show the document
		window.open(doc.targetURL,"PreviewWindow");
	}
	//database functions

	//storeCase - adds or updates a case. For adding, must specify a person to be the client
	function storeCase(caseObj, personObj){
		var data = {
			person: {"@rid": personObj["@rid"]},
			'case': caseObj
		}
		//send the case to the database router
		$http.post("http://localhost:8080/db/storeCase",data)
			.then( function(response){ //success callback
				//store the recordID returned
				caseObj['@rid']=response.data["@rid"];
				console.log("DB request OK: " + JSON.stringify(response.data) );
			}, function(response){
				//error callback
				console.log("broken");
			});
		console.log("storeCase: ");
		
	}

	//DBaddDoc - adds or a doc to a case or updates an existing one. Must speciry the Record ID of the case to add a doc
	function storeDocument(docObj, caseRID){
		
	}

	//DBaddPerson - async adds a person the the database. Second argument is to force the addition of a person with an identical name
	this.storePerson = function(personObj, bForceInsertIdentical){
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
	}
	
	this.dbtest=function(data){
			$http.post("http://localhost:8080/db/test",data)
				.then( function(response){ //success callback
					console.log("DB request OK: " + JSON.stringify(response.data) );
				}, function(response){ //error callback
					console.log("broken" + JSON.stringify(response.data) );
				}
			);
		
	}
	
	//fetch case
	//fetch the documents
	
	//TESTING save data function
	$scope.savemyO = function(){
		//serialise and write to locaStorage
		//window.localStorage.setItem("myO", JSON.stringify($scope.myO));
		//send it to the database router 
		var request={
			method: "POST",
			url: "http://localhost:8080/db/test",
			data: $scope.myO
		}
		$http(request).then( function(response){
				//success callback
				console.log("DB request OK: " + JSON.stringify(response.data) );
			}, function(){
				//error callback
				console.log("broken");
			});
		console.log("saved myO");
		
	}
	
	console.log("started controller caseList");
}]);




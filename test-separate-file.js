/////////////////
// test-separate-file
//
// a test of trying to use a separate file
//

console.log("seperate file executed. app=" + app);
function aha(){
	console.log("Aha! ");
}

//try making a module.factory function : an angular.js module called app must have already been defined by the time this script is loaded
app.factory('notifyUser',['$window', function(appWindow){
	var msgTitle="Message via notifyUser";
	var defaultBehaviour = true;
	return function(msg){
		appWindow.alert(msg);
		console.log("user was notified");
	}
}]);
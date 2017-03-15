//require path
var path = require("path");

//export the app.get and app.post to access it in server.js
module.exports = function(app){
	//route to the home page
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});

	//use app.get to route to the survey page
	app.get("/survey", function(req, res){
		res.sendFile(path.jpin(__dirname, "/../public/survey.html"));
	});
};
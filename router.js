
var express = require('express');
var app = express();
var requestPromise = require('request');
var router = express.Router();
var path = require('path');

app.use( express.static( __dirname + ""));

router.get("/", function (request, response) {
   response.sendFile( path.join( __dirname, "", 'index.html' ));
});

router.get('/validation',function(req,response){
var options = {
	uri:"https://play.dhis2.org/demo/api/dataSets",
	method: "GET",
	json: true,
	auth:{
		user: 'admin',
    pass: 'district',
    sendImmediately: true
	}
};

requestPromise(options, function(err, req, res){
	response.json(res)});
});


router.get('/orgUnit',function(req,response){
var options = {
	uri:"https://play.dhis2.org/demo/api/dataSets",
	method: "GET",
	json: true,
	auth:{
		user: 'admin',
    pass: 'district',
    sendImmediately: true
	}
};

requestPromise(options, function(err, req, res){
	response.json(res)});
});


router.get('/dataElements',function(req,response){
var options = {
	uri:"https://play.dhis2.org/demo/api/maps",
	method: "GET",
	json: true,
	auth:{
		user: 'admin',
    pass: 'district',
    sendImmediately: true
	}
};

requestPromise(options, function(err, req, res){
	response.json(res)});
});

app.use('/', router);
   
app.listen(3000, function(){
  console.log('start server at port 3000')});


/////////////////////////////////////////////////////////////////////////////////


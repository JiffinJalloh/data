
var express = require('express');
var app = express();
var requestPromise = require('request');
var router = express.Router();
var path = require('path');

app.use( express.static( __dirname + ""));

router.get("/", (request, response)=>{
   response.sendFile( path.join( __dirname, "", 'index.html' ));
});

router.get('/validation',(req,response)=>{
var options = {
	uri:"https://play.dhis2.org/demo/api/validationRules",
	method: "GET",
	json: true,
	auth:{
		user: 'admin',
    pass: 'district',
    sendImmediately: true
	}
};

requestPromise(options, (err, req, res)=>{
	response.json(res)});
});


router.get('/orgUnit',(req,response)=>{
var options = {
	uri:"https://play.dhis2.org/demo/api/organisationUnits",
	method: "GET",
	json: true,
	auth:{
		user: 'admin',
    pass: 'district',
    sendImmediately: true
	}
};

requestPromise(options, (err, req, res)=>{
	response.json(res)});
});


router.get('/dataElements',(req,response)=>{
var options = {
	uri:"https://play.dhis2.org/demo/api/dataElements",
	method: "GET",
	json: true,
	auth:{
		user: 'admin',
    pass: 'district',
    sendImmediately: true
	}
};

requestPromise(options, (err, req, res)=>{
	response.json(res)});
});

app.use('/', router);
   
app.listen(3000, ()=>{
  console.log('start server at port 3000')});


/////////////////////////////////////////////////////////////////////////////////


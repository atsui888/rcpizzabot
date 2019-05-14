var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var path = require('path')

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.json());

app.get("/",function(req,res) {
    res.send('<h1>This is my web app');
});

// create a route
// http://127.0.0.1:60000
app.get("/", function(req,res) {  // GET route, not a POST route
    res.send('<h1>This is my first web app');
})

// http://127.0.0.1:60000/testing
app.get("/testing", function(req,res) {
    res.send('<h1>This is my the testing route');
})

// anything after the : is a variable
// http://127.0.0.1:60000/temp/100   // 100 is converted to farenheight
app.get("/temp/:celsius", function(req,res){
    // read the parameter 'celsius'
    var celsius = req.params.celsius;
    var fahr = (celsius * 9/5) + 32;
    res.send("<h3>celsius =" + celsius + " to fahrenheith is --> " + fahr);
}) 

// incoming url using the ? get syntax
// http://127.0.0.1:60000/temp2?celsius=99&name=fred
app.get("/temp2", function(req,res){
    var celsius = req.query.celsius;
    var name = req.query.name;
    var fahr = (celsius * 9/5) + 32;
    res.send("<h3>celsius =" + celsius + " to fahrenheith is --> " + fahr+"<br>name is "+name);
}) 

// demonstrates if-else statements
// http://127.0.0.1:60000/grade/100
app.get("/grade/:grade", function(req,res){
    var grade = req.params.grade;
    var result = "";
    if(grade >=80) {
        result = "A";
    } else if(grade>=70) {
        result="B";
    } else if(grade>=60) {
        result="C";
    } else {
        result="F";
    }

    res.send("<h3>Your grade is " + grade +" which is a "+result+" !");
})

// demonstrates a post request

app.post("/post", function(req,res){
    console.log("post route was triggered");
    var fname = req.body.fname;
    var lname = req.body.lname;
    res.send('POST request to the homepage' +
    '<br>firstname: ' + fname + '<br>lastname: '+ lname);
})


app.get('/test.html', function(req, res) {
    console.log('directory: ' + __dirname);
    console.log(path.join(__dirname + '/test.html'));
    res.sendFile(path.join(__dirname + '/test.html'));    
})

// json route
app.post('/json', function(request, response) {
    console.log('json resonpse demo');
    var obj = {fulfillmentText:"Chatbot response"};
    response.send(JSON.stringify(obj)); // this cmd turns the json into string
})


// ccreate the server based on a port
var listener = app.listen(process.env.PORT, process.env.IP, function() {
    console.log('server has started');
})

// http://127.0.0.1:60000
// http://127.0.0.1:60000/testing
// http://127.0.0.1:60000/temp/100   // 100 is converted to farenheight
// http://127.0.0.1:60000/temp2?celsius=99&name=fred
// http://127.0.0.1:60000/grade/100
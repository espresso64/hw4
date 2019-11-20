const express = require ("express");
const app = express();
app.engine('html', require('ejs').renderFile);
app.use(express.static("public"));





//server listener

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Running Express Server..."); 
});




//Variables
var fakeData = require("faker")
var fakeName = fakeData.name.findName()



//routes
app.get("/", function (req,res){
    res.render("index.ejs", {fakeName});
});

app.get("/cplusharp", function(req,res){
    res.render("cplusharp.html");
});

app.get("/lua", function(req,res){
    res.render("lua.html");
});

app.get("/python", function(req,res){
    res.render("python.html");
});




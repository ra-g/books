var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/search", function(req, res){
   res.render("search");
});

module.exports = app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The BookSearch Server has started!");
});
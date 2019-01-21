var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/search", function(req, res){
   res.render("search");
});

app.get("/books", function(req, res){
    var query = req.query.search;
    var url = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
           var parsedBooks = JSON.parse(body);
           console.log("Searching for: " + query);
           res.render("books", {parsedBooks: parsedBooks});
       } 
    });
});

module.exports = app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The BookSearch Server has started!");
});
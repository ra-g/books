var express = require("express");
var app = express();
var request = require("request");
var port = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.get("/", function(req,res){
   res.render("landing");
});

app.get("/search", function(req, res){
   res.render("search");
});

app.get("/books", function(req, res){
    var query = req.query.search; 
    console.log("Searching for: " + query);
    var url = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    request(url, function(error, response, body){
       if(!error && response.statusCode == 200){
           var parsedBooks = JSON.parse(body);
           if(parsedBooks["totalItems"] > 0) {
               var preparedBooks = [];
               parsedBooks["items"].forEach(function(book) { 
                   var temp = {};
                   temp["title"] = book["volumeInfo"]["title"];
                   temp["authors"] =  book["volumeInfo"]["authors"];
                   temp["publisher"] =  book["volumeInfo"]["publisher"];
                   temp["link"] = book["volumeInfo"]["infoLink"];
                   if (book["volumeInfo"].hasOwnProperty("imageLinks")) {
                       temp["image"] = book["volumeInfo"]["imageLinks"]["thumbnail"];
                   }
                   preparedBooks.push(temp);
               })
               res.render("books", {preparedBooks: preparedBooks});
           }
           else {
               res.render("notfound");
           }
       }
       else {
           console.log("error " + response.statusCode)
           console.log(body)
           res.redirect("search")
       }
    });
});

module.exports = app.listen(port, function(){
    console.log("The BookSearch Server is running on port " + port);
});
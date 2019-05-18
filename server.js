var fs = require("fs");
var express = require("express");
var formidable = require("express-formidable");
var app = express();

app.use(formidable());
app.use(express.static("public"));

// fs.writeFile("location-of-your-file-goes-here", yourData, function(error) {
//   // do something
// });

fs.readFile(__dirname + "/data/posts.json", function(error, file) {
   var parsedFile = JSON.parse(file);
   console.log("parsedFile->", parsedFile);
});

// app.get("/chocolate", function(req, res) {
//   res.send("Mm chocolate :O");
// });
app.post("/create-post", function(req, res) {
//   console.log("req.body", req.body);
  console.log("req.fields", req.fields);
//   res.send("POST request to the homepage");
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

const fs = require("fs");
const express = require("express");
const formidable = require("express-formidable");
const app = express();

app.use(formidable());
app.use(express.static("public"));



function savepost(post) {

    fs.readFile(__dirname + "/data/posts.json", function(error, file) {
    const parsedFile = JSON.parse(file);
    const timestamp = Date.now();
    parsedFile[timestamp] = post
    fs.writeFile(
        __dirname + "/data/posts.json",JSON.stringify(parsedFile,null,4), err => {
        console.log(err || "json updated");
        }
    );
    });
}

function getpost(data, callback) {
    
    fs.readFile(__dirname + "/data/posts.json", function(error, file) {
    const parsedFile = JSON.parse(file);
    callback(error, parsedFile);
    });
}

app.post("/create-post", function(req, res) {
    savepost(req.fields.blogpost)
    res.send(req.fields);
});

app.get("/get-posts", function(req, res) {
    getpost(res.fields, function(error, file) {
    res.send(file);
  });
});

app.listen(3000, function() {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});

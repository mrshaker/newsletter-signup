require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/signup.html");
});


app.post("/", function(req, res) {

  // geting sign up data from html form
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  // making member with mailchimp rules for JSON
  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };

  // convert data to JSON structure
  const jsonData = JSON.stringify(data);

  // necessary settings for https.request
  const url = process.env.URL; // endpoint, path, id
  const option = {
    method: "POST",
    auth: process.env.API_KEY // api authintication
  }

  // post request with https.request for mailchimp
  const request = https.request(url, option, function(response) {

    if(response.statusCode === 200){
      res.sendFile(__dirname + "/public/success.html");
    } else {
      res.sendFile(__dirname + "/public/failure.html");
    }

    response.on("data", function(data) {
      console.log(JSON.parse(data));// recived clear data from mailcimp
    });



  });

  request.write(jsonData); // writing new member data in mailchimp
  request.end(); // end of writing sign.

});


app.post("/failure", function(req, res){
  res.redirect("/");
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started successfully.");
});

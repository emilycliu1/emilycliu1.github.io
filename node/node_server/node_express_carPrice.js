var express = require("express");
var app = express();

var carPrice;
<<<<<<< HEAD
=======
var carColor;
>>>>>>> 5c971d9c10381ba82022510e83c59437c43d89cf

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "OPTIONS,HEAD,GET,PUT");
  next();
});

<<<<<<< HEAD
=======


>>>>>>> 5c971d9c10381ba82022510e83c59437c43d89cf
app.get("/", function (req, res) {
  res.send("Hello World!");
});

<<<<<<< HEAD
app.get("/set_price", function(req, res){
    console.log(req.query.price);
    carPrice = req.query.price;
});

app.get("/retrieve_price", function(req, res){
    res.send("The car price is: " + carPrice);
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
=======

app.get("/set_car", function(req, res){
    console.log(req.query.price); // puts it in the terminal upon submitting
    console.log(req.query.color);

    carPrice = req.query.price;
    carColor = req.query.color;
});

app.get("/retrieve_car", function(req, res){

	res.send("The car costs $" +carPrice+ " and the color is " +carColor);
	console.log("the description has been sent!")
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!"); // upon refresh, lets you know things are working in the terminal
>>>>>>> 5c971d9c10381ba82022510e83c59437c43d89cf
});
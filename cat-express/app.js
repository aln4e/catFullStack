var express = require('express');

var bodyParser = require('body-parser')
var app = express();
var Cat = require('./models').Cat

app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/create_cat', function (request, response) {
  let catParams = request.body
  console.log(catParams)
  //catParams are the inputs from the user when they submit
  Cat.create(catParams).then(function(cat){
    response.json({status:'success', Cat:cat})
  }).catch(function(error){
    response.status(400)
    response.json({status:'error', error:error})
  })
 });

app.get('/', function (request, response) {
 response.send('Hello World!');
});

app.listen(4000, function () {
 console.log('Example app listening on port 4000!');
});

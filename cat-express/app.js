var express = require('express');

var bodyParser = require('body-parser')
var app = express();
var Cat = require('./models').Cat
var cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/create_cat', function (request, response) {
  let catParams = request.body.cat
  console.log(catParams)
  //catParams are the inputs from the user when they submit
  Cat.create(catParams).then(function(cat){
    response.status(200)
    response.json({status:'success', cat:cat})
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

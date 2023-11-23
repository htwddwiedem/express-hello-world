var express = require('express');
var app = express();

app.get('/', function (req, res) {   // Routing to  / 
   res.send('Hello World from root at group G00 '); })

app.get('/data', function (req, res) {   // Routing to  /data 
   res.send('Hello World from data'); })
   
app.get('/info', function (req, res) {   // Routing to  /data 
   res.send('Hello from Group  G00 !'); })
   
      
   //   usw.    …    
app.use(function(request, response) {  // Fehlerbehandlung 
response.status(404).send("Seite nicht gefunden!");
}); 
var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
})

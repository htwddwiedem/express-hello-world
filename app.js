var express = require('express');
var app = express();
console.log("Compiling ..."); 
app.get('/', function (req, res) {   // Routing to  / 
   res.send('Hello World from root '); })

app.get('/data', function (req, res) {   // Routing to  /data 
   res.send('Hello World from data'); })
   
app.get('/form', function (req, res) {   // Routing to  /data 
   res.send('Hello from Group  G00 !'); })

app.get('/calculate', function (req, res) {   // Routing to  /data 
      // res.send();
      var menge1 = req.query.menge1;  var menge1float = parseFloat(menge1); 
      var menge2 = req.query.menge2;  var menge2float = parseFloat(menge2); 
      var response = 'Post received:<br>' ; 
      response += " Menge1 =  " +  menge1 + " menge1.float = " + menge1float  ;  console.log("Menge1 : " + response ); 
      response += " Menge2 =  " +  menge2 + " menge2.float = " + menge2float  ;  console.log("Menge2 : " + response ); 
      var summe = menge1float + menge2float; 
      response += " Summe = " + summe; 
      res.send( response   );
      // res.send('from form ... ');
   })

   var bodyParser = require('body-parser');
   // Create application/x-www-form-urlencoded parser
   var urlencodedParser = bodyParser.urlencoded({ extended: false })
   app.post('/calculate_post',  urlencodedParser, function (req, res) {   // Routing to  /data 
      // res.send();
      var menge1 = req.body.menge1;  var menge1float = parseFloat(menge1); 
      var menge2 = req.body.menge2;  var menge2float = parseFloat(menge2); 
      var response = 'Post received:<br>' ; 
      response += " Menge1 =  " +  menge1 + " menge1.float = " + menge1float  ;  console.log("Menge1 : " + response ); 
      response += " Menge2 =  " +  menge2 + " menge2.float = " + menge2float  ;  console.log("Menge2 : " + response ); 
      var summe = menge1float + menge2float; 
      response += " Summe = " + summe; 
      res.send( response   );
      // res.send('from form ... ');
   })


   

app.use(express.static('files'));  // serve  static files from dir „files“ to root
app.use('/public',express.static('public'));  // serve files from dir „public“ to /public
app.use('/forms',express.static('forms'));  // serve files from dir „public“ to /public
   
console.log("ready  - now starting server ...");    
   //   usw.    �    
// app.use(function(request, response) {  // Fehlerbehandlung 
// response.status(404).send("Seite nicht gefunden!");
// }); 
var server = app.listen(3001, function () {
   var host = server.address().address
   var port = server.address().port
      console.log("Example app listening at http://%s:%s", host, port)
})

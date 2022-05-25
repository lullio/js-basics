let http = require('http');

let ourApp = http.createServer(function(req, res){

   console.log(req.url); // no console do terminal, ñ do navegador
   // ao digitar localhost:3000/home dps /about
   
   res.end("hi"); // resposta que queremos passar
});
ourApp.listen(3000);

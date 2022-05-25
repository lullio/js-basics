let express = require('express');

let ourApp = express();

ourApp.get('/', function(req, res){
   res.send(`
      <h1>Welcome to Home Page</h1>
      <p>What's the color of sky?</p>
      <form action="/answer" method="POST">
         <input name="colorSky" type="text">
         <button>ENVIAR</button>
      </form>
   `);
});

ourApp.post("/answer", function(req, res){
   req.body.col
});

ourApp.listen(3000);
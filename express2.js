let express = require('express')

let ourApp = express();

ourApp.get("/", function(req, res){
   res.send(`
      <h2>HI</h2>
      <p>what's the color of sky?</p>
      <form action="/answer" method="POST">
         <input name="skyColor" type="text">
         <button>ENVIAR</button>
      </form>
   `);
});

ourApp.post()
ourApp.listen(3000);
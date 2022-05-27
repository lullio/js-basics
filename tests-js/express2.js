let express = require('express')

let ourApp = express();
ourApp.use(express.urlencoded({extended: false}))

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

ourApp.post("/answer", function(req, res){
   if(req.body.skyColor.toUpperCase == "BLUE"){
      res.send(`
         <p>correct answer</p>
         <a href="/">home page</a>
      `);
   }else{
      res.send(`
         <p>incorrect</p>
         <a href="/">home page</a>
      `);
   }
});
ourApp.listen(3000);
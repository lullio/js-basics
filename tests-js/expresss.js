let express = require('express');


let myApp = express();
myApp.use(express.urlencoded({extended: false}))

myApp.get("/", function(req, res){
   res.send(`
         <h1 class="header1">teste do express</h1>
         <h2 class="header2">teste do express</h2>
         <h3 class="header3">teste do express</h3>
         <strong>Qual a cor do céu amigo?</strong>
         <form action="/answer" method="post">
            <label for="corCéu">Cor do céu</label>
            <input type="text" name="corDoCeu" autocomplete="off" autosuggestion="off">
            <button type="submit">ENVIAR</button>
         </form>
   `);

});

myApp.post("/answer", function(req, res){
   if(req.body.corDoCeu.toLowerCase() == "azul" || req.body.corDoCeu.toLowerCase() == "ázul"){
      res.send("<p>CORRETO</p>")
   }else{
      res.send("<p>LOL, ERROU</p>")
   }
})


myApp.listen(3000);

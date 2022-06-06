let http = require('http');

let ourApp = http.createServer(function(req, res){

    // console.log(req.url); 
   /* 
    no console do terminal, ñ do navegador 
     ao digitar localhost:3000/home dps /about aparece no terminal
   */

   if(req.url == "/"){ // home page
      res.end("home page");
   }else if(req.url == "/about"){
      res.end("about us page"); // resposta que queremos passar
   }else{
      res.end("error 404");
   }
});
ourApp.listen(5000);


let str = "Oi felipe. vc ta bem. ok. aass..sas.";
let arr1 = str.split('.');
console.log(arr1.filter(texto => texto !== '').map(text => text.trim()).map(text => text).map(text => text + " ").join("\n"));


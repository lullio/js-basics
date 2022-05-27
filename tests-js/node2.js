let http = require('http');

let ourApp = http.createServer(function(req, res){
   let url = req.url;
   if(url == "/"){
      res.end("home page welcome")
   }else if (url == "/about"){
      res.end("about us page welcome");
   }else{
      res.end("error page not found");
   }
});

ourApp.listen(3000);
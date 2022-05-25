let express = require("express"); // vai olhar na pasta node_modules e procurar express

// cria um express server websever
let ourApp = express();
// Por padrão o express ñ adicionar o user input no body object do req object, para o código (req.body.skyColor) funcionar, precisa do código abaixo
ourApp.use(express.urlencoded({extended: false}))

// o que fazer se tiver um GET REQUEST para home page
ourApp.get('/', function (req, res){// 1º url 2º funcao q vai rodar sempre pra essa url
   res.send(`
      <form action="/answer" method="POST"> <!-- redireciona para /answer-->
         <p>What Color is the sky on a clear and sunny day?</p>
         <input name="skyColor" autocomplete="off" type="text">
         <button>Submit Answer</button>
      </form>
   `);
}) 

// TESTE PARA ENTENDER GET E POST REQUEST
// SE VC PREENCHER O FORMULÁRIO E ENVIAR VAI CAIR NO POST, SE VC FOR PRA PÁG INICIAL localhost:3000 e depois colocar /answer na url cai NO GET
// se receber um post request para página answer
ourApp.post('/answer', function(req, res){
   // res.send('thank you for submitting the form.');
   if(req.body.skyColor.toUpperCase() == "BLUE"){
      res.send(`
         <p>congrats, correct answer</p>
         <a href="/">back to home page</a>
      `)
   }else{
      res.send(`
         <p>incorret answer</p>
         <a href="/">back to home page</a>
      `)
   }
});

ourApp.get('/answer', function(req, res){
   res.send('heyyy get request');
});

ourApp.listen(3000) // listen incoming request

/* 
GET = enviar uma requisição get
qdo acessa google.com seu browser enviou uma requisição get para os servidores google, ao clicar urls vc faz um get request
GET INFORMATION

POST = Postar informação, post data
*/
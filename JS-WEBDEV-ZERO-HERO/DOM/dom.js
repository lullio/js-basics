//DOM SELECTORS


//SELECIONAR ELEMENTOS DO HTML


//getElementsByTagName
console.log(document.getElementsByTagName("h1")[0]); // 


//getElementByClassName
console.log(document.getElementsByClassName("second")[0]);//

//getElementsById
console.log(document.getElementById("first"));


//Melhores
//querySelector -> seleciona o primeiro elemento que encontra

console.log(document.querySelector("h1"));
console.log(document.querySelector("li"));

//caso queira selecionar todos, querySelectorAll
console.log(document.querySelectorAll("li, h1"));//pode selecionar vários elementos juntos

//pegar um atributo
//primeiro precisa selecionar o elemento, depois pegar o atributo
var li = document.querySelector("li");
console.log(li.getAttribute("random"));
li.setAttribute("random", 30);//mudando o valor do atributo
console.log(li); //agora está com o novo valor 30


///////////////////////// MUDANDO O ESTILO 
document.querySelector("h1").style.background="yellow"; // não recomendado, quiser estilo, fazer no css

//colocando uma classe nova no h1
var h1 = document.querySelector("h1");
h1.className = "coolTitle";

console.log(li.classList); // lista as classes do li
li.classList.add("bob");// colocando uma classe no primeiro li
//classList.toogle("bob") -> volta ao que tava antes
//classList.remove("bob") -> remove 

//troca o h1 por !!! negrito
document.querySelector("h1").innerHTML ="<strong>!!!";

document.querySelectorAll("li")[1].parentElement; //retorna o ul, seu parente de cima
document.querySelectorAll("li")[1].parentElement.parentElement; // retorna o body
document.querySelectorAll("li").children; // exibe os filhos, de baixo



/////////////////////////////////////////////////// EVENTS
var button = document.getElementsByTagName("button")[0];
// mouseenter , mouseleave, click -> todos eventos
button.addEventListener("click", function(){
	console.log("CLICK");
})


var botao = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");


//adicionando itens a uma lista
button.addEventListener("click", function(){

	if(input.value.length > 0){
				var li = document.createElement("li"); //criando um elemento li
				li.appendChild(document.createTextNode(input.value)); //adicionado texto para o li, pega o que escreveu no input
				ul.appendChild(li); //colocando o li na ul
				input.value="";
	}
})

//em vez de clicar, agora eh pra pegar keypress, oq apertou no teclado
input.addEventListener("keypress", function(event){

	if(input.value.length > 0 && event.keyCode == 13){
				var li = document.createElement("li"); //criando um elemento li
				li.appendChild(document.createTextNode(input.value)); //adicionado texto para o li, pega o que escreveu no input
				ul.appendChild(li); //colocando o li na ul
				input.value="";
	}
})
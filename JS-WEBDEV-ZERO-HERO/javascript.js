// function declaration
function newFunction(){

}
// function expression
var newFunction = function(){

};

//expression = algo que produz um valor
1+3;
var a = 2;
return true;

//calling or invoking a function
alert();
newFunction(param1, param2);

//assign a variable
var a = true;

//fuction vs method
function thisIsAfunction(){

}

var obj = {
	thisIsAmethod: function(){

	}
}
thisIsAfunction() // como acessa uma função
obj.thisIsAmethod() // acessa com um ponto, objeto, método
/////////////////////////////////////////////////////////////




var tarefas = [
	"clean room",
	"brush teeth"
	"exercise"
];
//loop
var = qtdTarefa = tarefa.length;
//adicionar ! no final de cada tarefa
for(var i=0; i< qtdTarefa; i++){

	console.log(i); //exibe 0,1,2
	console.log(tarefa[i]); // exibe os textos da var tarefa
	tarefas[i] = tarefas[i] + "!";

	tarefas.pop(); //remove o ultimo item, mas sobra dois, porque ta dentro do array. vai contando
	//entao coloquei o contador numa variavel antes do loop
}


for(var i =0; i < qtdTarefa; i++){
	console.log(tarefas[i]);
}
//forEach - mais usado - no for tem que tarefa[i] para exibir o texto, forEach resolve isso
tarefa.forEach(function(tarefa, i){
	console.log(tarefa, i);
})



////////////////////////////////////////////////////////////////////////////////////////////////////
var name = prompt("Whats your name?");
if (name === "Billy"){
	alert("Hi bILYY");
}else if(name !== "Sam"){
	alert("you are not Sam");
}else{
	alert("lol, idk u");
}

// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

var age = prompt("What is your age?");

if (Number(age) < 18) {
	alert("Sorry, you are too yound to drive this car. Powering off");
} else if (Number(age) > 18) {
	alert("Powering On. Enjoy the ride!");
} else if (Number(age) === 18) {
	alert("Congratulations on your first year of driving. Enjoy the ride!");
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
checkDriverAge(92);
it returns "Powering On. Enjoy the ride!"

/*
Primeira função é com nome
A segunda é sem nome, então é uma função anonima, pois a funcao nao tem nome, ela eh passada a uma variavel

*/
            
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({html: true});   
});

$(function(){   
    $('.bob').popover({html:true});        
    $('.bob').tooltip();
});

// function declaration
function sayHello(){
	console.log("Hello");
}
sayHello();


// colocando na variavel, a function nao tem nome (Anonymus Function) você não consegue acessar a function
var sayBye = function() {
	console.log("Bye");
}
sayBye();
//////////////////////////////////



////////////////////////////////////////////
function sing(){
	console.log("AAHH");
	console.log("sahusahsa");
}
sing();
// se voce quiser mudar o som, tem que mudar direto no log ou criar uma nova
function sing2(){
	console.log("laa de daa");
	console.log("shasahsa");
}
//do not repeat your self

//função que recebe um som, assim voce pode chamar a funcao e criar seu som, na de baixo nao, vc tem q editar dentro da funcao se quiser trocar o som
function sing(song){
	console.log(song);// this.song?

}
sing("saosaoksa");
sing("sfdfsadfsd");


/////////////////////////////////////////////
// se voce nao colocar "return" ele diz que é undefiend, nao foi definido.
function multiply (a, b){
	
	if(a >10 || b> 10){ // && , !==, ===, >=, <=
		return console.log("muito difícil");
	}else{
		return a*b;
	}

	return a*b;
}
multiply(5,10);

/////////////////////////////////////////

//LISTAS

var list = ["tiger", "cat", "dog", "bird", "bear"];
//acessar o array
list[1];
console.log(list[1]);

var numbers = [1,2,3,4];

var booleans =[true, false, true];
//lista de funções pode também
var funcionList = [function apple(){
	console.log("apple");
}]

//lista mixada também
var list = ["tiger", 4, true]; //nao usado

//array dentro de array

var list = 
//array 1
[
//array2
["tigre", "gato", "cachorro"]

];
//pegar elemento do primeiro array 1, array2 primeiro elemento
console.log(list[0][0]); //tigre

//list.shif ->remove primeiro
//list.pop() -> remove ultimo
//list.push("something"); adiciona no ultimo
//list.concat(["bee", "deer"]); dá pra vc adicionar esse array para o array, ai ele junta os dois, mas adicionado assim, fica undefined, nao coloco em uma variavel
// using this array, 
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
array.shift();

//REMOVE BLUEBERRIES from the array
array.pop();

// 2. Sort the array in order. 
array.sort();

// 3. Put "Kiwi" at the end of the array.
array.push("Kiwi");

// 4. Remove "Apples" from the array.
array.splice(0, 1);

// 5. Sort the array in reverse order. 
array.reverse();

//juntar itens ou juntar um array num array
array.concat(["cachorro"]);


// using this array, 
 var array2 = 
 [
 "Banana", 
 ["Apples", 
 ["Oranges"], 
 "Blueberries"
 ]
 ];
// access "Oranges".
array2[1][1][0];



//// OBJETO
//objeto tem propriedaeds e valor, diferente do array.
var user = {

	name: "Jhon",
	age: 18,
	hobby: "Soccer",
	isMarried:false,
	spells : ["oi", "boo"],// pode colocar um array dentro do objeto
	shout: function(){ // pode ter uma funçao também
		console.log("AAAAH");
	}

};
// para acessar nome e funcao shout dps
console.log(user.name);
console.log(user.shout());

var list = [

	{
		username: "jon",
		password: "oi"
	},
	{
		username: "lira",
		password: "hi"
	}

];

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//mini facebook

//object
var database = [
	{
		username: "andrei",
		password: "123"
	}
	{
		username: "sally",
		password: "1243"
	}
	{
		username: "love",
		password: "5344"
	}
];

var newsFeed = [
	
	{
		username: "Bobby",
		timeline: "So tired from all"
	},
	{
		username: "Silly",
		timeline: "Heello "
	}
];
var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt ("What's your password?");



function isUserValid(username, password){

	for(var i=0; i<database.length; i++){
		if(database[i].username === username && database[i].password === password){
			return true;
		}
	}
	return false;

}


function signIn(username, password){

	//dessa maneira ele vai percorrer todos usuarios, ta errado
	/*for(var i=0; i<database.length; i++){
		if(database[i].username === username && database[i].password === password){
			console.log(newsFeed);
		}else{
			alert("Sorry, worng user or pass");
		}
	}

*/
	if(isUserValid(username, password)){
		console.log(newsFeed);
	}else{
		alert("Sorry, wrong user or pass");
	}

	
}
//chamando a funcao que recebe dois parametros, user and pass, esta passando dois argumentos pra receber,oq digitou no user e pass 
signIn(userNamePrompt, passwordPrompt);


//////////////////////////////////////////////////////////////////////////////////////

// advanced control flow
// condition
function isUserValid(bool){
	return bool;
}

// o ? significa que é true, o : significa que é falso, o que for é exibido
var answer = isUserValid(true) ? "You May Enter" : "Acess denied";
// o de cima é igual isso abaixo:
if(isUserValid(true)){
	return "You May Enter";
}else{
	return "Acess denied";
}

///////////////SWTICH
function moveCommand(direction){
	var whatHappens;

	switch(direction){
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "back":
			whatHappens ="you arrived home";
			break;
		case "right":
			whatHappens= "you run into a troll";
			break;
		default:
			whatHappens ="please enter a valid direction";
	}
	return whatHappens;
}



const database[
	
	{
		username: "andrei",
		password: "supersecret"
	}


];


const newsFeed[
{
	username:"Sally",
	timeline: "So tired"
}

];

// DIFERENCA ENTRE FOREACH E FOR

const todos = [
	"clean room",
	"brush teeth"
];
for (var i =0; i < todos.length; i++){
	console.log(todos[i], i);
}

todos.forEach(function(todo, i){
	console.log(todo, i);
})

function logTodos(todo, i){
	console.log(todo, i);
}
todos.forEach(logTodos)



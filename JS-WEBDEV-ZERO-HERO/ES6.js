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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
ECAMAScript === Javascript

ECMA 6

ES6 and ES5
*/
// babel deixa voce usar os novos codigos javascript, babeljs.io

// declaração de variavel no es6, eh assim que se faz agora
// let + const
// nao usar mais var, usar let, let é o novo var. 
// const é uma variavel que voce nao quer que mude

const player = 'bobby';
let experience = 100;
let wizardLevel = false;

if(experience >90){
	let wizardLevel = true;
	console.lo(wizardLevel); //exibido true; 
}
console.log(wizardLevel); //será exibido false, se fosse var seria exibido true. Let vai mudar se for dentro de uma function





const obj ={
	player: 'bobby',
	experience: 100,
	wizardLevel: false
}
obj.experience(50);
// você pode mudar as propriedades do objeto, não pode reasign a variavel

//você quer pegar os objetos, olha como se faz
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// olha como você pode fazer (destructuring)
const {player, experience} = obj;
let {wizardLevel } = obj;
//agora voce tem essas prop pra usar em qualquer lugar do programa
//exemplo: player = 'oi'



const name = 'john snow';
const obj = {
	//propriedades dinamicas
	//interessante para calcular algo pra propriedade, valor
	[name]: 'hello',
	['ray'+ 'smith']: 'hihi',
	[2+ 3]: 'hihi'
}

const a = 'oi';
const b = true;
const c = {};
// se propriedade e valor for igual
const ob = {
	a,b,c
}

//TEMPLATE STRINGS ////////////////////////////////////////////////

const nome ="Sally";
const idade = 34;
const animal ="dog";
let saudacao = 'bem vindo';

const saudacaoRuim = "Olá" + nome + "você é legal" + saudacao + "!" + "você tem "+ idade + "anos." + "Seu pet é" + animal;

const saudacaoMelhor = `Olá ${nome} você é legal ${saudacao}! você tem ${idade+10} anos, seu animal é ${animal}`;




// default arguments
function greet(name='semnome', age=30, pets='gato'){
	return `Oi, ${name} voce parece ter ${age-5}, que ${pets} voce tem`;
}
// se a pessoa tentar acessar essa funcao, sem passar parametros, ela vai conseguir, porque tem default arguments
greet(); //é exibido com o semnome, 30-5, gato
greet("john", 50, "cachorro"); //caso ela troque, vai ser trocado claro. passando parametros



//Symbol
let sym1 = Symbol();
let sym2 = Symbol('oi');
let sym3 = Symbol('oi');
//Symbol
sym2 === sym3; //é exibido false. Não vai ter conflito. É usado como identificador para objetos.  



/////////////////////////////////////////////////////////////////////

// ARROW FUNCTIONS
// PRA NAO TER QUE ESCREVE FUNCTION TODA HORA KK
function add (a, b){
	return a+b;
}
//arrow, mesma coisa de cima
const add =(a, b) => a+b;
//se volta so uma coisa, não precisa por return



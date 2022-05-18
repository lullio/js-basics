//ADVANCED FUNCIONS
// a palavra function nao existe mais, agora ela é =>

function first(){
	var oi = "hi";
	function second(){
		alert(oi)
	}
	return second;
}
// agora é assim

const first = () => {
	const oi = "hi";
	const second = () => {
		const name ="felipe"; //A primeira função (first) terá acesso ao name? N, n vai ter -- Children tem acesso ao parent scope mas parent scope nao tem acesso ao filohos children
		alert(oi);
	}
	return second;
}
const newFunc = first();
newFunc();

//Closures
//child scope has always acess to parent scope
// a function ran, the function executed. its never going to be execute again
//but its going remeber that there are references to those variables
/*
A FUNÇÃO first ñão tem acesso a função second
*/

//Curring
//Converter uma função que tem muitos argumentos para uma função que tem um de cada vez.
const multiply = (a, b) => a*b; //função que recebe dois parametros a e b, e multiplica eles
//vamos fazer o curring
const curriedMultiply = (a) => (b) => a*b;
curriedMultiply(3);// aqui voce esta dizendo que a é 3, quando executado ele vai retornar a função b, 
//para funcionar 
curriedMultiply(3)(4) // mostra 12



/* IMPORTANTE CONCEITOS

É UMA BOA PRÁTICA:

SIDE EFFECT - efeito fora -> se uma funcao faz algo que afeta outside, fora da funcao, exemplo:
var a =1;
function b() { a=2 }; // não é boa prática - AVOID SIDE EFFECTS
// BOA PRÁTICA, SEMPRE RETORNAR ALGO (RETURN)
Por que Isso?
Isso evita problemas, avoiding side effect e always return, -----deterministic 
sempre retornar o mesmo valor na fuñção - deterministic

isso vai evitar erro

*/


/*O QUE É UM PARAMETRO E ARGUMENTOS?*/
function multiply (a,b){
	return a*b;
}
//call the function
alert(multiply(4,5));
//PARAMETRO É o a e b, argumentos são o 4 e 5
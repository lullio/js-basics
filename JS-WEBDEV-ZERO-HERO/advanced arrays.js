


//array dentro de array
const lista = [//primeiro array

	["tiger", "cat", "bear", "bird"] // segundo array

];//fim do primeiro array

//acessar conteúdo de array do array
console.log(lista[0[2]]); //exibe bear




const array = [1,2,3,4];
const nomes = ["felipe", "thiago", "liliane", "edu", "raquel", "analu"];

//FOREACH FAZ UM MONTE DE AÇÕES BASEADO NO ARRAY
//SE VOCE QUISER RETORNAR UM ARRAY, TERÁ QUE CRIAR UM NOVO ARRAY E USAR PUSH E TAL;;
//PENSAR NA BOA PRÁTICA, SIDE EFFECTS, NAO AFETAR LA FORA
const double = [];
const new Array = array.forEach((num) => {

	double.push(num *2);
	// voce recebe o dobro dos valores

})


// map, filter, reduce
//------------------------------------------MAP
//USANDO MAP NAO TEM SIDE EFFECTS
const mapArray = array.map((num) => { //map cria um novo array, transforma o array no que voce fizer dentro
	return num*2;
	//ele faz o loop, multiplicando por 2 os numeros e poe na variavel mapArray, o que o forEach nao faz, preciso criar um novo array
//COM MAP SEMPRE TER UM RETORNO, ELE ESPERA O RETORNO DE UM ELEMENTO
// AO CONTRARIO DO FOREACH ONDE VOCE PODE FAZER VARIAS COISAS ALI DENTRO DO FOREACH
});
console.log('map', mapArray);


//-------------------------------------FILTER
//filter this array, one by one, return is one grather then 5? e ai retorn pro filterArray
const filterArray array.filter(num => {
	return num > 5; //retorna os valores maiores que 5 do array, retorna nada entaokk vazio
})
//como só tem uma linha de codigo, pode simplificar , filterArray e fiterArray2 sao a mesma coisa
const filterArray2 = array.filter(num => num >5);
console.log('filter', filterArray2);

//--------------------------------------------------REDUCE
//num é o 1,2,3,4
//accumulator é algo que pode colocar a informação que acontece dentro da função
const reduceArray = array.reduce((accumulator, num) =>{
	//vai acumulando, somando, o valor 1,2,3,4, vai somando cada vez com o valor do accumulator
	return accumulator  + num;//
//valor do acumulator, poe depois da funcao, valor padrao dele é definido 0
}, 0)

let x = 2;
let y = "2";
let age = 54;
let nome = "Felipe";

console.log("2");

let paises = [
   "Brazil",
   "EUA",
   "Mexico",
   "Paraguai",
   "Uruguai",
   "Chile",
   "Venezuela",
   "Canada",
   "Italia",
   "Espanha",
   "Argentina",
   "Portugal",
   "Suécia"
];

let estados =
[
   "São Paulo",
   "Rio de Janeiro",
   "Espiríto Santo",
   "Goias",
   "Rio Grande do Sul",
   "Santa Catarina",
   "Bahia",
   "Roraima",
   "Amazonas",
   "Ok",
   "Teste"
];


///////////////// CONSOLE.LOG()
let cat = {
   age: 15,
   name: "Fluffy",
   color: ["black", "white", "yellow"],
   favoriteFood: {
      fdsafsd: "Banana",
      drink: "Soda",
      ração: "Whiskas"
   },
   meow(){ 
      console.log("meeeeeeeeeeeeeeowwwww");
   }
}


console.log("FavoriteFood > Food: " + cat.favoriteFood.drink);
console.log("FavoriteFood > Food: " + cat.favoriteFood.ração);
console.log("FavoriteFood > Food: " + cat.favoriteFood.fdsafsd);

console.log("Age:  "+ age);
///////////////////////////////////////////////////////




///////////////////////////////////////////////////////

/* let myPets = [{name: "Fluffy", age: 45, foods: {favoriteFood: "beens", leastFavoriteFood: "mouse"}}, {name: "Thor", age: 22, latir(){alert("AU AU");}}];


console.log("Array de objetos: " + myPets[0].foods.leastFavoriteFood);
console.log("Array de objetos: " + myPets[1].latir());

console.log("Type of cat: " + typeof(myPets)); */

///////////////////////////////////////////////////////
/////////////////////////////////STRING
const str = "Meu nome é Felipe, nome, nome, nome - Lorem gpsi";

console.log("MÉTODOS STRINGSS - LENGTH: " + str.length);
console.log("MÉTODOS STRINGSS - SEARCH: " + str.search("nome"));
console.log("MÉTODOS STRINGSS - INDEXOF: ");
console.log("MÉTODOS STRINGSS - SLICE: " + str.slice(3, 6));
console.log("MÉTODOS STRINGSS- REPLACE: " + str.substring(3,6));

const newStr = str.replace(/nome/gi, "Ok");
console.log(newStr);

document.write("STRING SLICE:  " + str.slice(2, 6)  + "<br><br><br><br>");
document.write("STRING SLICE:  " + str.replace(/felipe/gi, "Gustavo")  + "<br><br><br><br>");
document.write("<br>" + str.search(/felipe/gi) + "<br>");




///////////////////////////////////////////////////////
//////// Array
console.log("----------------------------ARRAY-----------------------------");

let arr = ["1", "2", "brasil", "gato", "cachorro  "];
arr.push("rj");
let nota = 70;

let resultado = (nota > 90) ? "Passed":"Reprovado";
console.log("resultado");

function greeting(){
  // const name = window.prompt("What's your Name?");
   const greeting = "Hello my Dear Friend " + name;
   if(name == "Felipe"){
      alert(greeting);
   }
}
greeting();


// REMOVER ÚLTIMO ITEM DO ARRAY
console.log(estados.pop());
// REMOVER PRIMEIRO ITEM DO ARRAY
console.log(estados.shift());

// ADICIONAR ITEM NA PRIMEIRA POSIÇÃO ARRAY
console.log(estados.unshift("sp", "rj"));
// ADICIONAR ITEM NA ÚLTIA POSIÇÃO ARRAY
console.log(estados.push("rj", "sp"));

estados.forEach(function arrEstados(valor, indice, arr){
   document.write("Índice " + indice + " Valor: " + valor + "</br>");
   // document.write(arrEst) // exibe o array separado por vírgula
});

// CONVERTER ARRAY TO STRING
   console.log("ARRAY TO STRING - TODOS ELEMENTOS DO ARRAY NUMA STRING");

   let strEstados = estados.join(", ");
   console.log(strEstados);
   console.log(typeof strEstados);
   

   // CONVERTER STRING TO ARRAY
   const str1 = "lorem hipds fs fs fsd fs sd, fsd sdfsfd, fds";
   const arr1 = str1.split(" ");
   document.write(typeof arr1 + " : " + arr1);

   estados.push("São Paulo");
   estados.unshift("Sp");

   // pesquisando se tem itens no array
   console.log(estados.includes("Sp")); // true
   console.log(estados.lastIndexOf("São Paulo")); // retorna indice

   // cortar array do indice 0 até indice 3
   console.log(estados.slice(0, 3));

   // remover itens do array, substituir ou adicionar itens em certa  POSIÇÃO
         // apenas remover o terceiro item do array
         estados.splice(2, 1);
         // adicionar itens em certa POSIÇÃO
         let meses = ["jan", "fev", "maio", "junho"];
         meses.splice(2, 0, "Março", "Abril");
         document.write("<br>" + meses);
         //trocar o Março, Abril por marc, abrl
         meses.splice(2, 2, "marc", "abrl");
         document.write("<br>" + meses);
         // trocar valor do item de outra forma
         meses[2] = "Março";


// ORDENAÇÃO DE ARRAY
let numeros = [8,7,6,5,4,9,33,44,5,1,0,5,43,3,2];
let fruits3 = ["banana",  "abacate", "morango", "maça", "manga"];
console.log("SORT NUMEROS Ñ FUNCIONA CORRETAMENTE : "+  numeros.sort());
console.log("SORT FRUITS: " + fruits3.sort());

console.log("SORT NUMEROS ASCENDING: " + numeros.sort(function (a,b){return a-b;}));
let lowest = numeros[0];

console.log("SORT NUMBERS DESCENDING: " + numeros.sort(function (a,b){return b-a}));
let highest = numeros[0];

console.log("HIGHEST: " + highest);
console.log("LOWEST: " + lowest);


// ORDENAR ARRAY DE OBJETOS
let students = [{name: "John", age: 23}, {name: "Maria", age: 12}, {name: "Julia", age:5}];
students.sort(function(a,b){
   return a.age - b.age;
});
document.write("<br>");
for(let i = 0; i < students.length; i++){
   document.write("<p> Nome: " + students[i].name + "<br> Idade: " + students[i].age + "</p>");
}

// CRIAR NOVO ARRAY COM FILTER E MAP
let numeros1 = [8,7,6,5,4,9,33,44,5,1,0,5,43,3,2];
let numerosVezesDois = numeros1.map(function(value){
   return value * 2;
});
document.write("Array Números Vezes Dois: " + numerosVezesDois);

let xx = numeros1.filter(function(value){
   return value % 2 == 0; // divisivel por 2
});
document.write("filter: " + xx);


// HIGH-ORDER function
// FUNÇÃO QUE RETORNA OUTRA FUNÇÃO OU QUE RECEBE UMA FUNÇÃO COMO PARAMETRO

// em vez de criar várias funções abaixo, podemos criar uma função só e associar variavéis a função
function  doubleMe1(x){
   return x*2;
}
function  tripleMe2(x){
   return x*3;
}
function  quadrupleMe3(x){
   return x*4;
}
document.write("<br>"+ doubleMe1(5));

// SOLUÇÃO
function createMultiplier(multiplier){
   return function(x){
      return x*multiplier;
   };
}
let doubleMe = createMultiplier(2), tripleMe = createMultiplier(3), quadrupleMe = createMultiplier(4); // associando variável a função, a variável agora é = a função createMultiplier
document.write("<br>" + doubleMe(100)); // chamando a variável que na vdd é a função e essa função recebe um parametro x.

//////////////////////////////////////////////////// MAP E FILTER 
//// MUTATING AND RETURNING

// push retorna um novo array e número(qtd de itens no array)
let pets = [
   {name: "Thor", species: "dog", age: 15},
   {name: "Theo", species: "dog", age: 2},
   {name: "Tobias", species: "dog", age: 4},
   {name: "BicaMt", species: "bird", age:3},
   {name: "Fluffly", species: "cat", age: 3},
   {name: "Miauw", species: "cat", age: 10}
];
console.log(pets.push({name:"Xita", species: "bird", age: 7})); // retorna um número(qtd de itens no array)

// RETORNAR SOMENTE OS NOMES DOS PETS
console.log(pets.map(petsNamesOnly));

function petsNamesOnly(arrPets){
   return arrPets.name;
}

// RETORNAR OS QUE SÃO DOGS = COMPARISION FILTER
petsDogs = pets.filter(dogsOnly);
function dogsOnly(value){
   return value.species == "dog";
}
console.log(petsDogs);


// RETORNAR SOMENTE OS NOMES DOS QUE SÃO ESPÉCIE DOGS
// Pode juntar filter e map
let dogsNames = pets.filter(dogsOnly).map(petsNamesOnly);
console.log(dogsNames);

// RETORNAR SOMENTE OS NOMES DOS DOGS QUE SÃO MENORES QUE 5 ANOS
function babieDogs(value){
   return value.age <=5
}
babieDogsNames = pets.filter(dogsOnly).filter(babieDogs).map(petsNamesOnly); // 2 filters e um map
console.log(babieDogsNames);


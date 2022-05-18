//padStart()
//.padEnd()

const turtle ='Turtle'.padStart(10);//adiciona 10 espacos na frente de turtle
console.log(turtle);

const noFim = 'Tutle'.padEnd(5); // adiciona 5 espçaos no final


// com a virgula no final agora funciona, nao vai dar erro
const fun = (a,b,c,d,)=> {
	console.log(a);
}
fun(1,2,3,4,);


Object.values
Object.entries
Object.keys

let obj = {
	username0: 'Felipe',
	username1: 'Lol',
	username2: 'Mr.Grinch'
}
Object.keys(obj).forEach((key, index) => {
	console.log(key, obj[key]);
})

//pode usar foreach, map reduce, filter
Object.values(obj).forEach(value =>{
	console.log(value);
})

Object.entries(obj).map(value =>{
	return value [1] + value [0].replace('username' ''); //criando uma nova string com felipe 0
})

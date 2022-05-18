// REFERENCE TYPE, CONTEXT, INSTANTIATION


//--------------------REFERENCE TYPE




 //CONTEXT vs SCOPE

 // scope é o que ta dentro de {}
 //fora é root scope
function b(){
	let a =4;//scope
}
//this -> ao qual objeto esta querendo demonstrar
function a(){
	console.log(this);
}

//instantiation, criando multiplas copias de um objeto

class Player{
	// com o construtor, a gente pode acessar o name e type
	constructor(name, type){
		this.name = name;
		this.type = type;
	}

	introduce(){
		console.log(`Hi Iam ${this.name}, I'm a ${this.type}`)
	}
}
//Quando voce cria uma classe, o primeiro que vai ser executado é o construtor, o construtor vai criar as propriedades
//agora voce pode criar qualquer coisa pro player
//


class Wizard extends Player{

	constructor(name, type){
		super(name, type); //pega o construtor do player, e executa para o this
		super.name;
		super.type;
	}
	play(){
		console.log(`WEEE i'm a ${this.type}`);
	}
}
//instanciando objetos
const wizard1 = new Wizard('Shelly', 'Healer');
const wizard 2 = new Wizar ('Shawn', 'Dark Magic')
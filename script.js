// TESTE 1 DO BOTÃO
document.getElementById("btn1").onclick = function (){
	alert("I'm a dialog box");
}

function function1(){
	alert("I'm the second dialog box!");
}

function changeThisColor(element){
	var currentColor = element.style.backgroundColor;
  if(currentColor == "red"){
  	element.style.backgroundColor = "green";
  }else{
  	element.style.backgroundColor = "red";
  }
}


function changeContent(){
	document.getElementById("demo2").innerHTML = "hello"
}

document.getElementById("btn2").addEventListener("click", function (){
   document.getElementById("demo2").innerHTML = "tessss";
});

document.getElementById("img").src="tab"

//
function func(){
	if(document.getElementById("demo2").style.display == "none"){
  	document.getElementById("demo2").style.display = "block";
    document.getElementById("hideP").innerHTML = "Esconder a tag P abaixo;"
  }else{
  	document.getElementById("demo2").style.display = "none";
    document.getElementById("hideP").innerHTML = "Mostrar a tag P que está escondida abaixo;"
  }
	
}

console.log("xx");
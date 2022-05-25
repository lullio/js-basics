let input = document.getElementById("input");
let form = document.getElementById("form");
let listItens = document.getElementById("listItens");
let botao = document.getElementById("btn");

form.addEventListener("submit", (event) => {
   event.preventDefault(); //previnir redirecionar pág ao enviar formulário

   criarItem(input.value); // call the fucntion
});

function criarItem(valor){
   listItens.insertAdjacentHTML("beforeend", `<li>${valor} <button id="btn" onclick="removerItem(this)">Remover</button></li>`);
   input.value = ""; // zerar input após envio
   input.focus(); // dar foco no input dnv
}

function removerItem(qualBotaoVaiRemover){
   qualBotaoVaiRemover.parentElement.remove();
}


// ñ tem nd haver
var output = [], n, padded;
for (n=0; n<=9999; n++) {
    padded = ('000'+n).slice(-4); // Prefix three zeros, and get the last 4 chars
    output.push(padded);
}
console.log(output); // ["0000", "0001", ..., "9999"]
console.log(typeof n);
console.log(typeof padded);
console.log(typeof output);
input = document.getElementById("input");
lista = document.getElementById("lista");
form = document.getElementById("form");
itemLista = document.getElementById("itemLista");


// monitorar o envio do formulário - qdo for clicado pra enviar
form.addEventListener("submit", (event) => {
   event.preventDefault(); // previni de redirecionar página

   // pegar valor do input
   let tarefa = input.value;
   
   if (tarefa == ""){
      alert("valor nãõ pode ser nulo");
   }else{
      createItem(tarefa);
   }
});

let createItem = (tarefa) => {
   lista.insertAdjacentHTML("beforeend", "<li> " + tarefa + "<button onclick='removerItem(this)'>REMOVER</button> </li>");
   input.value = ""; 
   input.focus();
}

let removerItem = (qualBotaoRemover) => {
   // lista.children[0].remove();
   qualBotaoRemover.parentElement.remove();
}



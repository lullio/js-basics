let txt = "Programming courses always starts with a hello world example."
let regex1 = new RegExp("hello");
let regex2 = /hello/;

// TEST = RETORNA TRUE SE ENCONTRAR MATCH
console.log(regex1.test(txt));
console.log(regex2.test("hello"));

// EXEC RETORNA ARRAY DO MATCHES COM PROPRIEDADES, INDEX, GROUP, LENGTH, ETC
console.log(regex2.exec(txt));


let arr = regex2.exec(txt);
console.log(arr[0]); // acessar somente o texto do match

console.log(txt.match("course"));
console.log("----------------------------------------------------------------------------");
let regex3 = /s\s/ig;

console.log(txt.match(regex3));
console.log(regex3.exec(txt));

let str = "This45consists65of75numbers85and95letters"
console.log(str.match(/\w{4,}?/g).length)

console.log(str.match(/$/g));
console.log("testeee")
//comentário de uma linha 
/*cometario 
de varias 
linhas*/
var nome = "yasmin"; //escopo global 
let  idade = 19; //escopo de bloco 

//primitivos 
let Nome = "Gustavo"; // string
let Idade = 25; // number
let ativo = true; // boolean
let vazio = null; // null
let indefinido; // undefined

console.log (Nome)
let iidade = 18;
if (iidade < 18) {
console.log("Menor de idade");
} else if (iidade === 18) {
console.log("Tem 18 anos");
} else {
console.log("Maior de idade");
}

//switch case 
let dia = 3; 
switch (dia) { 
case 1: 
console.log("Domingo"); 
break; 
case 2: 
console.log("Segunda-feira"); 
break; 
case 3: 
console.log("Terça-feira"); 
break; 
default: 
console.log("Dia inválido"); 
} 

//objetos
let pessoa = {
    nome:  "yasmin",
    idade: 20,
    curso: "ADS"

}
console.log(pessoa.nome)

//function 
function soma(num1, num2) {
    const result = num1 + num2
    console.log(result)
    
}
soma(3,5)
soma(10,10)

//modulos
import {calculadoraIMC}from "./calculoimc"
const res = calculoimc.calculadoraIMC(80, 70 )

console.log(res)

/*Métodos de Arrays 
Crie um script que receba um array de strings e faça as seguintes operações: 
1. Converta todas as strings para maiúsculas. 
2. Filtre as strings que começam com a letra 'A'. 
3. Crie um novo array com o comprimento de cada string. 
Utilize o array ["Maçã", "Banana", "Abacaxi", "Laranja"] para os testes. 
*/

let frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];
let maiusculas = frutas.map(fruta => fruta.toUpperCase());
let frutasComA = frutas.filter(fruta => fruta.includes("a"));console.log(frutasComA)
let comprimentoFrutas = frutas.map(fruta => fruta.length);

// Exibir os resultados
console.log(maiusculas);
console.log(frutasComA);
console.log( comprimentoFrutas);

/*/Manipulação de Strings 
Crie um script que receba uma string e faça as seguintes operações: 
1. Converta a string para maiúsculas. 
2. Converta a string para minúsculas. 
3. Inverta a string. 
4. Substitua todas as ocorrências de uma letra específica por outra. 
*/

let name = "Yasmin";
let nameMinusculo = name.toLowerCase()
let nameMaicusculo= name.toUpperCase()
let nameInvertido= name.split('').reverse().join('') //para inverter o nome 
let nameSubistituido = name.replace("a", "v")
console.log(nameMinusculo)
console.log(nameMaicusculo)
console.log(nameInvertido)
console.log(nameSubistituido)

/*Crie um script que receba um array de números e faça as seguintes operações: 
1. Adicione um número ao final do array. 
2. Remova o primeiro número do array. 
3. Encontre o maior número do array. 
4. Encontre o menor número do array. 
Utilize o array [10, 20, 30, 40, 50] para os testes. */

let array =[10,20,30,40,50]
array.push(60);
array.shift();
let maiornumero= Math.max(...array)
let menornumero= Math.min(...array)
console.log(array) 
console.log(maiornumero)
console.log(menornumero)


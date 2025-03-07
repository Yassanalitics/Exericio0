/*Crie um script que tenha uma função que receba um número e retorne: 
1. O dobro do número. 
2. O triplo do número. 
3. O quadrado do número.
Utilize o número 5 para os testes.*/


function functionNum(num){
return {
    dobro: num * 2,
    triplo: num *3,
    quadrado: num * num 
}
}
let num = 5;
let resultados = functionNum(num);
console.log(resultados.dobro);
console.log(resultados.triplo);
console.log(resultados.quadrado);


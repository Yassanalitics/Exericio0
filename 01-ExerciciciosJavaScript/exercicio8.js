/*Crie um script que receba um objeto representando uma pessoa e faça as seguintes operações: 
1. Adicione uma nova propriedade ao objeto. 
2. Remova uma propriedade do objeto. 
3. Liste todas as propriedades do objeto. 
Utilize o objeto { nome: "Carlos", idade: 28, cidade: "São Paulo" } para os testes. */

let pessoa ={
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo",
}
pessoa.altura=1.89;
delete pessoa.idade;
let propriedades = Object.keys(pessoa);

console.log( pessoa);
console.log( propriedades);


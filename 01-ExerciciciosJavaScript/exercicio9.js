/*Crie um script que receba um objeto representando um livro e faça as seguintes operações: 
1. Desestruture o título e o autor do objeto. 
2. Crie uma função que receba o objeto e retorne uma string com o título e o autor. 
Utilize o objeto { titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 } para os testes*/

let livro = {
    titulo: "O senhor dos Aneis",
    autor: "J.R Tolkien",
    ano: 1954,
}

let {titulo, autor } = livro;
console.log(titulo);
console.log(autor);

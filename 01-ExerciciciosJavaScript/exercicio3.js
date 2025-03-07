/*Exercício 3: Estruturas de Controle 
Crie um script que receba uma idade e verifique se a pessoa é: 
1. Menor de idade. 
2. Maior de idade. 
3. Idosa (idade >= 65). 
Utilize a idade 70 para os testes. */

let idade = 70;
if(idade < 18){
    console.log("menor de idade")
 }
 else if(idade >= 65 ){
    console.log("essa pessoa é idosa!")
 }
 
 else if(idade >=18 && idade < 65   ){ //parametro
    console.log("essa pessoa é maior de idade!")
 }

 
/* Trabalhando as funções com módulo */

// Definindo os módulos importados em variáveis
var somaFunc = require("./node_modules/soma")
var subFunc = require("./node_modules/sub")
var multiFunc = require("./node_modules/multi")
var divFunc = require("./node_modules/div")

// Usando os módulos importados pela variável em que foram atribuídas
console.log(somaFunc(1,2));
console.log(subFunc(1,2));
console.log(multiFunc(1,2));
console.log(divFunc(1,2));

/* Todas as funções em um único arquivo */
 
//function soma(a, b){
//     return a+b
// }

// function sub(a, b){
//     return a-b
// }

// function multi(a, b){
//     return a*b
// }

// function div(a, b){
//     return a/b
// }

// console.log(soma(2,4));
// console.log(sub(2,4));
// console.log(multi(2,4));
// console.log(div(2,4));
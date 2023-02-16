// Atribuindo o módulo HTTP do node para uma variável
var http = require('http');

// Usando uma função no módulo HTTP para criar uma servidor na porta 8081
http.createServer(function (req, res) {
    //Enviando uma resposta para o usuário
    res.end("Ola")
}).listen(8081);

console.log("Servidor funcionando")
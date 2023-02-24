// Usando o terminal, utilize o comando 'npm install nodemon -g' dentro da sua aplicação
// Após a instalação, inicie a sua aplicação utilizando o comando 'nodemon app.js'
// Agora toda vez que você alterar algo na aplicação, o nodemon automaticamente irá reiniciar seu servidor

// Módulo express que retorna a função de criação do express. 
var express = require('express')

// app está recebendo a função do express inteiramente.
const app = express()

// Definindo a porta em que a aplicação funcionará.
const port = 8081

// Definindo a rota principal da aplicação e retornando uma mensagem para o cliente que acessar a mesma.
app.get('/CtrlStore', (req, res) => res.send('Bem-vindo a CtrlStore!'))

// Definindo rota dinâmica que recebe e mostra parâmetros
app.get('/CtrlStore/:controller/:id', (req, res) =>
    // Envia o parâmetro requisitado
    res.send("Controller: " + req.params.controller + "<br> Id: " + req.params.id),
);

app.listen(port, () => console.log(`Aplicação rodando na rota localhost:${port}/CtrlStore!`))


// Módulo express que retorna a função de criação do express. 
var express = require('express')

// app está recebendo a função do express inteiramente.
const app = express()

// Definindo a porta em que a aplicação funcionará.
const port = 8081

// Definindo a rota principal da aplicação e retornando uma mensagem para o cliente que acessar a mesma.
app.get('/CtrlStore', (req, res) => res.send('Bem-vindo ao App!'))

// Definindo rota dinâmica que recebe e mostra parâmetros
app.get('/CtrlStore/:controller/:id', (req, res) =>
    // Envia o parâmetro requisitado
    res.send("Controller: " + req.params.controller + "<br> Id: " + req.params.id),
);

app.listen(port, () => console.log(`Aplicação rodando na rota localhost:${port}/CtrlStore!`))
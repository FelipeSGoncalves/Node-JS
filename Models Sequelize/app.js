// Módulo express que retorna a função de criação do express. 
var express = require('express')

// app está recebendo a função do express inteiramente.
const app = express()

// Definindo a porta em que a aplicação funcionará.
const port = 8081

// Definindo a rota principal da aplicação e retornando um arquivo HTML para o cliente.
// __dirname recebe o caminho inteiro até a aplicação
app.get('/CtrlStore', (req, res) => res.sendFile(__dirname + '/Views/home.html'))

// Definindo rota dinâmica que recebe e mostra parâmetros
app.get('/CtrlStore/:controller/:id', (req, res) =>
    // Envia o parâmetro requisitado
    res.send("Controller: " + req.params.controller + "<br> Id: " + req.params.id),
);

app.listen(port, () => console.log(`Aplicação rodando na rota localhost:${port}/CtrlStore!`))

// Para instalar o Sequelize, módulo que nos permite abstrair toda a manipulação de bancos de dados SQL, é necessário usar o npm no cdm

// Utilizando o comando 'npm install --save sequelize' é instalado o Sequelize

// Depois de instalar o Sequelize, utilize o comando 'npm install --save mysql2'

// Pronto!
const Sequelize = require("sequelize");

// Definindo os parâmetros da conexão
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

// Realizando a conexão com o BD
sequelize.authenticate().then(function () {
    console.log("BD conectado com sucesso")
}).catch(function (erro) {
    console.log("Falha ao conectar com o BD: " + erro)
})


// Módulo Sequelize. 
const Sequelize = require("sequelize");

// Definindo os parâmetros da conexão.
const sequelize = new Sequelize('test', 'root', 'root', {
    host: "localhost",
    dialect: 'mysql'
})

// Criando a tabela Postagem com um Módulo Sequelize
const Postagem = sequelize.define('postagens', {
    // Definindo uma linha da tabela e o seu tipo STRING.
    titulo: {
        type: Sequelize.STRING
    },
    // Definindo uma linha da tabela e o seu tipo TEXT.
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Realizando a criação da tabela.
Postagem.sync({force: true})

// Realizando a conexão com o BD.
sequelize.authenticate().then(function () {
    console.log("BD conectado com sucesso")
}).catch(function (erro) {
    console.log("Falha ao conectar com o BD: " + erro)
})
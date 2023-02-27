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
    // OBS: o Sequelize já cria o campo ID, data de criação e data de edição do registro.
})

const Usuario = sequelize.define('usuarios', { 
    nomeCompleto: {
        type: Sequelize.STRING
    },

    idade:{
        type: Sequelize.INTEGER
    },

    email: {
        type: Sequelize.STRING
    },

    senha: {
        type: Sequelize.STRING
    }
})


// OBS: Ao criar a tabela, comente ou exclua a linha, pois sempre que rodar a aplicação a tabela será recriada do zero.
// Realizando a criação da tabela usuarios.
/** Usuario.sync({force: true}) */

// Realizando a criação da tabela postagens.
/** Postagem.sync({ force: true }) */

Usuario.create({
    nomeCompleto: "Felipe da Silva Gonçalves",
    idade: 18,
    email: "felipe.goncalves.foz@Hotmail.com",
    senha: 123456789
})

// Realizando a conexão com o BD.
sequelize.authenticate().then(function () {
    console.log("BD conectado com sucesso")
}).catch(function (erro) {
    console.log("Falha ao conectar com o BD: " + erro)
})
// Após instalar o MongoDB, crie e inicie um servidor.
const mongoose = require("mongoose")

// Configurando o Mongoose
mongoose.Promise = global.Promise;
// Estabelecendo conexão com o MongoDB
// OBS: Caso o Banco de dados não exista ainda, no caso o banco de dados "teste", ele irá automaticamente criar ele.
mongoose.connect('mongodb://localhost/teste',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).
    then(function () { console.log('Sucesso na conexão!') }).
    catch(function () { console.log('Falhou na conexão!') });


// Criando Model Usuario
const UsuarioSchema = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true,
    }
})

// Criando nova collection Usuario no MongoDB
mongoose.model('Usuario', UsuarioSchema)


const novoUsuario = mongoose.model('Usuario')  

// Criando um novo usuário
new novoUsuario({
    nome: "Felipe",
    sobrenome: "Silva Gonçalves",
    email: "felipe.goncalves.foz@Hotmail.com",
    senha: "1234567890", 
    idade: 18
}).save().then(() => {
    console.log("Usuario criado com sucesso!")
}).catch((Erro) => {
    console.log(Erro + ": Erro ao registrar o usuário")
})
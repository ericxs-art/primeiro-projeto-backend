//importa o módulo de path pra saber as pastas as pastas e arquivos
const path = require("path")
//importando tudo que tem no model
const userModel = require("../models/userModel")

module.exports = {
    // mostra a visualização do formulário de login
    formLogin: (req, res) => {
        res.render("login")
    },
    loginUsuario: (req, res) => {
const { usuario, senha } = req.body
const logado = userModel.login(usuario,senha)

if(!logado){
return res.status(401).json({mensagem: "Usuário ou senha inválidos"})
    }
    else{
        res.json({mensagem: "Login realizado com sucesso!"})
    }
}
}
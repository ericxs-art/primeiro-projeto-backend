//Importanção do express
const express = require("express")

//criando uma variavel para gerenciar as rotas do usuario
const roteador = express.Router()

const userController = require("../controllers/userController")
//login
//Rota pra solicitar a pagina de login
roteador.get("/login", userController.formLogin)
//Rota pra enviar os dados do formulario
roteador.post("/login", userController.loginUsuario)

//criando a exportação do arquivo
module.exports = roteador
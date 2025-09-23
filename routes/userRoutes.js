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

//CRUD 

//C = CRIAR NOVO USUARIO
//rota para solicitar a pagina de cadastro
roteador.get("/cadastrar", userController.formCadastro)
//rota para enviar os dados do cadastro
roteador.post("/cadastrar", userController.salvarUsuario)

//R = LER USUARIOS  
//retorna as informações de todos os usuarios
roteador.get("/", userController.listarUsuarios)

roteador.get("/:id", userController.buscarUsuarios)

//U = ATUALIZAR USUARIO
roteador.put("/:id", userController.atualizarUsuario)

//D = DELETAR USUARIO
roteador.delete("/:id", userController.deletarUsuario)  
//criando a exportação do arquivo
module.exports = roteador
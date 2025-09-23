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
        const logado = userModel.login(usuario, senha)

        if (!logado) {
            return res.status(401).json({ mensagem: "Usuário ou senha inválidos" })
        }
        else {
            res.json({ mensagem: "Login realizado com sucesso!" })
        }
    },

    //CRUD
    // Responde a requisição monstrando a visualização da tela de cadastro
    formCadastro: (req, res) => {
        res.render("cadastrar")
    },
    salvarUsuario: (req, res) => {
        const { usuario, email, senha } = req.body
        userModel.salvar({ usuario, email, senha })
        res.render("cadastroConfirmado")
    },


    //função para listar todos os usuarios
    listarUsuarios: (req, res) => {
        const usuarios = userModel.listarTodos()
        res.json(usuarios)
    },
    // função para atualizar informações
    atualizarUsuario: (req, res) => { 
        const id = req.params.id;

        const { usuario, email, senha} = req.body; 

        const usuarioAtualizado = userModel.atualizar(id, { usuario, email, senha});

        if (!usuarioAtualizado){
            return res.status(404).json({mensagem : "Usuario não encontrada"});
        }
        res.json({ mensagem : "Usuario foi atualizado"})
    },
    
    deletarUsuario: (req, res) => { 
        const id = req.params.id;

        const deletado = userModel.deletar(id);

        if(!deletado){
            return res.status(404).json({mensagem : "Usuario não encontrado"});        
        }
       return res.status(404).json({ mensagem: "Usuário deletado" })
    },

    //função para buscar um usuario pelo id
    buscarUsuarios: (req, res) => {
        //busca o id vindo da url como parametro
        const id = req.params.id
        //Guarda o usuario encontrado
        const usuario = userModel.buscarPorId(id)

        //se não achar, devolve a mensagem de erro
        if (!usuario) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" })
        }
        //se achar, devolve as informações via json
        res.json(usuario)
    }
}

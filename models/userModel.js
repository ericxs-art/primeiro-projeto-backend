const db = require("../data/db.json")

let listasUsuarios = db.usuarios

module.exports = {

    login: (usuario, senha) => {
        let logado = listasUsuarios.find(
            (user) => user.usuario === usuario && user.senha === senha)

        return logado
    },
    // CRUD
    //função para salvar o novo usuario
    salvar: ({ usuario, email, senha }) => {
        const novoUsuario = {
            id: listaUsuarios.length + 1,
            usuario,
            email,
            senha
        }
        listaUsuarios.push(novoUsuario)
        console.log("Novo usuário cadastrado com sucesso!", novoUsuario);
        return novoUsuario
    },
    //buscar todos os usuarios
    listarTodos: () => {
        return listasUsuarios
    },
    //buscar usuario especifico pelo id
    buscarPorId: (id) => {
        return listasUsuarios.find((user) => user.id == id || null)
    },
    atualizar : () => {
const index = listasUsuarios.findIndex((user) => user.id == id)
if (index === -1) return null

listasUsuarios[index] = {
    ... listasUsuarios[index],
    listaUsuarios: usuario  || listasUsuarios[index].usuario,
     listaUsuarios: email || listasUsuarios[index].email,
      listaUsuarios: senha  || listasUsuarios[index].senha,

};
return listasUsuarios[index];
    },
    deletar : (id) => {
        const index = listasUsuarios.findIndex((user) => user.id == id)
        if (index === -1) return false;
        listasUsuarios.splice(index,1);
return true;
    },
}
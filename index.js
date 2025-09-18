//precisa instalar o express
const express = require('express')

//iniciando o express
const app = express()

//definindo a porta
const port = 5000

//juntando o path  com as outras pastas
const path = require('path')
const caminho = path.join(__dirname, "views")

//importações
// importa as rotas do usuario
const userRoutes = require("./routes/userRoutes")

//cria uma rota principal para as sub rotas de usuario
app.use("/usuarios", userRoutes)



//definindo o ejs como view engine
app.set('view engine', 'ejs')

// definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"))

app.get("/home",(req,res) => {
    res.status(200)
    res.render("index")
})
// como colocar arquivos na buscar 
// get = barra de busca
app.use((req,res) => {
    res.status(404).render("404")
})



//primeira rota req = requisição e res = resposta
//segunda rota requisição e resposta
app.get("/",(req,res) => {
res.status(200).send("olá, parabéns conseguiu")
})





// //rota sobre ERRO 404
// app.use((req,res) => {
// res.status(404)
// res.sendFile(`${caminho}/404.html`)
// })

//iniciando o servidor
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})




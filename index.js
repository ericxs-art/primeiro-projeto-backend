//precisa instalar o express
const express = require('express')

//iniciando o express
const app = express()

//definindo a porta
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "views")

app.get("/home",(req,res) => {
    res.status(200)
    res.sendFile(`${caminho}/index.html`)
})


//primeira rota req = requisição e res = resposta
app.get("/",(req,res) => {
res.status(200).send("Olá, seu pokemom é o Greninja")
})

//segunda rota requisição e resposta
// app.get("/",(req,res) => {
// res.status(200).send("olá, parabéns conseguiu")
// })


app.use((req,res) => {
res.status(404)
res.sendFile(`${caminho}/404.html`)
})

//iniciando o servidor
app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`)
})




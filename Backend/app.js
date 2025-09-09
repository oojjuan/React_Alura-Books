const express = require('express')
const cors = require('cors')
const rotaLivro = require('./routes/livro')
const rotaFavoritos = require("./routes/favoritos")

//* Aplica os métodos express para a const app
const app = express()

//! MIDDLEWARES >> antes de enviar a requisição, utiliza algum método, como o '.json()', que habilita a leitura de JSON, e "'/livros', rotalivro", que monta uma rota específica para o Router 'rotaLivro'
app.use(express.json())
app.use(cors({origin: "*"}))
app.use('/favoritos', rotaFavoritos)
app.use('/livros', rotaLivro)

//* Define a porta do usuário
const port = 8000

//* Escuta a porta definida e retorna um callback
//* Rota inicial: localhost:8000
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})
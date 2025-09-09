//! CONTROLLERS >> Processam a requisição enviada pelo Router, chamam os serviços se necessário e preparam a resposta

const { getTodosFavoritos, inserirFavorito, deletarFavorito } = require("../services/favoritos")

//EX: Requisição GET para '/favoritos'
function getFavoritos (req, res) {
    try {
        const livros = getTodosFavoritos()
        res.send(livros)
    } catch (error) {
        res.send(`Ocorreu um erro!\n${error}`)
    }
}

//EX: Requisição POST para '/favoritos'
function postFavorito(req, res) {
    try {
        const id = req.params.id
        inserirFavorito(id)
        res.status(201)
        res.send("Livro favoritado com sucesso!")
    } catch (error) {
        res.send(`Ops! Algo deu errado \n${error}`)
    }
}

//EX: Requisição DELETE para '/favoritos/:id'
function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletarFavorito(id)
            res.send("Favorito removido com sucesso!")
        } else {
            res.status(422)
            res.send("ID Inválido!")
        }
        
    } catch (error) {
        res.send(`Ops! Algo deu errado \n${error}`)
    }
}


module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
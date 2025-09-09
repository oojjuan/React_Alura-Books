//! ROUTES >> Recebe a requisição e a encaminham para o controlador

const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require("../controllers/livro")

//* Aplica os padroes do express Router para a const router
const router = Router()

//<> GETs
//* Define uma rota do tipo GET, que executa um callback quando alguém entrar nela. 
router.get('/', getLivros)

//* Define uma rota para livros específicos
router.get('/:id', getLivro)

//<> POSTs
router.post('/', postLivro)

//<> PATCHes
//! PATCH >> Ao invés de alterar TODOS os dados, igual o PUT, altera apenas os desejáveis
router.patch('/:id', patchLivro)

//<> DELETEs
router.delete('/:id', deleteLivro)

//* Exporta o router para outros arquivos que forem utiliza-lo
module.exports = router
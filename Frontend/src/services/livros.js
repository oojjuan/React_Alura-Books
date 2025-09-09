import axios from "axios";

//! Serve para criar uma instância Axios, permitindo a interação do Front com a API de 'Livros', onde recebe como parâmetro a URL base para todas as requisições feitas por essa instância
const livrosAPI = axios.create({baseURL: 'http://localhost:8000/livros'});

async function getLivros() {
    //* Busca todos os livros da API
    const response = await livrosAPI.get('/')

    //* '.data' >> Local onde a requisição fica armazenada na const 'res'
    return response.data
}


export {
    getLivros
}


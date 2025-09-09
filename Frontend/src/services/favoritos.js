import axios from "axios";

//! Serve para criar uma instância Axios, permitindo a interação do Front com a API de 'favoritos', onde recebe como parâmetro a URL base para todas as requisições feitas por essa instância
const favoritosAPI = axios.create({baseURL: 'http://localhost:8000/favoritos'});

async function getFavoritos() {
    //* Busca todos os favoritos da API
    const response = await favoritosAPI.get('/')

    //* '.data' >> Local onde a requisição fica armazenada na const 'res'
    return response.data
}

async function postFavorito(id) {
    await favoritosAPI.post(`/${id}`)
}

async function deleteFavorito(id) {
    await favoritosAPI.delete(`/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}
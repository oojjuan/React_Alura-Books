//<> Imports

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Favoritos from './routes/Favoritos'
import Header from './components/Header/header'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

//<> Global Style

const GlobalStyle = createGlobalStyle
`
  * {
      list-style-type: none;
  }

  body {
      margin: 0;
  }

  //* Classe para remoção dos estilos do component "Link" do react-router-dom
  .text-link {
    color: inherit;
    text-decoration: inherit;  
  }
`

//<> Redirect '/' to '/categorias'

function RedirecionarParaCategorias() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate("/categorias", { replace: true });
  }, [navigate]);

  return null;
}

//<> Root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header/>
      <Routes exact path="/">
        ( //* Envia para a rota padrão )
        <Route path='/' element={<RedirecionarParaCategorias/>}/>
        
        ( //* Rota padrão )
        <Route path='/categorias' element={<Home />} />

        ( //* Rota '/favoritos' )
        <Route path='/favoritos' element={<Favoritos />} />
        
        <Route path='/estante' element={<h1>Página não feita!</h1>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
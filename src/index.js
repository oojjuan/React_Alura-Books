//<> Imports

import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './routes/Home';
import Favoritos from './routes/Favoritos'
import Header from './components/Header/header'
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

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

//<> Root

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header/>
      <Routes>
        ( //* Rota padrão )
        <Route path='/' element={<Home />} />

        ( //* Rota '/favoritos' )
        <Route path='/favoritos' element={<Favoritos />} />
        
        <Route path='/estante' element={<p>bao</p>} />

        <Route path='/favoritos' element={<p>xuxu beleza</p>} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
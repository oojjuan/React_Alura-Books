//<> Imports

import Pesquisa from '../components/Pesquisa/pesquisa';
import styled from 'styled-components';

//<> Styled components

const AppContainer = styled.div
`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, #002F52 35%, #326589);
  margin: 0;
`

//<> Default function

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
      
    </AppContainer>
  );
}

export default Favoritos;
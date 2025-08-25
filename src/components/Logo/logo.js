//<> Imports

import logo from '../../imgs/logo.svg'
import styled from 'styled-components';

//<> Styled components

const LogoContainer = styled.div
`
    display: flex;
    font-size: 1.8rem;
    gap: 10px;
`

//<> Default functions

function Logo() {
    return (
        <LogoContainer>
            <img src={logo} alt='Logo do Alura Books'/>
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    );
}

export default Logo
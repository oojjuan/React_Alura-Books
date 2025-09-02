//<> Imports

import Logo from '../Logo/logo.js'
import OpcoesHeader from '../OpcoesHeader/opcoesHeader.js';
import IconesHeader from '../IconesHeader/iconesHeader.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

//<> Styled components

const HeaderContainer = styled.header
`
    background-color: #FFF;
    display: flex;
    justify-content: space-evenly;
    
`

//<> Default function

function Header() {
    return (
        <HeaderContainer>
            <Link className='text-link' to='/'>
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header
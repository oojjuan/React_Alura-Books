//<> Imports

import styled from "styled-components";

//<> Default const

const Input = styled.input
`
    background: transparent;
    border: 1px solid #FFF;
    border-radius: 50px;
    padding: 20px 140px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;
    
    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`

export default Input;
import React from "react";
import styled from "styled-components";

function Header(){
    return(
        <HeaderDiv>
            <HeaderText>BIO BID</HeaderText>
        </HeaderDiv>
    );
}
export default Header;

const HeaderDiv =styled.div
`
display:flex;
padding: 2%;
background: #21242C;
height: 5%;
width: 100%;
color: white;
`;

const HeaderText = styled.div
`
font-family: Lato;
font-style: normal;
font-weight: bold;
font-size: 22px;
line-height: 26px;
`
import React from "react";
import styled from "styled-components";
import { SocialIcon } from 'react-social-icons';


const FooterDivStyled = styled.footer`
    height:10vh;
    width: 100%;
    background-color:#1F2935;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
    

`

export default function Footer(props) {

        return(
            <FooterDivStyled>
                <SocialIcon url="http://facebook.com"/>
                <SocialIcon url="http://instagram.com"/>
                <SocialIcon url="http://linkedin.com"/>                
                
            </FooterDivStyled>
        )


}
import React from "react";
import styled from "styled-components";

const HeaderDivStyled = styled.div`
    height:20vh;
    width: 100%;
    background-color: #1F2935;
    margin-bottom: 5%;

    nav{
        height: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    a{
        margin: 1%;
        margin-top: 7%;
        text-decoration:none;
        color:whitesmoke;
        font-size:2rem;

    }
    

`


export default function Header(props){

    return(
        <HeaderDivStyled>
            <nav>
                <a href="https://apod.nasa.gov/apod/astropix.html">Home</a>
                <a href="#">Not Home</a>
                <a href="#">Away</a>
            </nav>

        </HeaderDivStyled>
    )
}
import React from "react";
import styled from "styled-components";

const MainPhotoOfTheDayStyled = styled.div`

    height: 60vh;
    width: auto;

    img{
        height:50vh;
        width:auto;
    }
    h1{
        color:black;
        font-size:2rem;        
    }
`


export default function MainPhoto(props){
    const{photo} = props

    return(
        <MainPhotoOfTheDayStyled>
            <img src={`${photo.url}`} alt="daily dose of space" />
            <h1>Today's Date is {photo.date}</h1>
        </MainPhotoOfTheDayStyled>
    )
}



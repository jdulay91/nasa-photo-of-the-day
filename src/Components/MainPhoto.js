import React, { useState , useEffect } from "react";
import axios from 'axios';

export default function MainPhoto(props){
    const{photo} = props

    return(
        <div>
            <img src={`${photo.url}`} />
            <h1>Today's Date is {photo.date}</h1>
        </div>
    )
}
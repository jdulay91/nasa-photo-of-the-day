import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios';
import MainPhoto from "./Components/MainPhoto";

const apiKey = 'mxyPfekt60mxRZvnHkacOaRwifTRSEtIbjeNIWkJ';
const apodUrl = 'https://api.nasa.gov/planetary/apod?'
const marsUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&'

function App() {
  const [photoOfTheDay,setPhotoOfTheDay] = useState('')
  const [marsPhoto,setMarsPhoto] =useState([])

  useEffect(()=>{
    axios
    .get(`${apodUrl}api_key=${apiKey}`)
    .then(res=>{
      setPhotoOfTheDay(res.data)         
    })
    .catch(err=>{
      console.log('The error is ',err)
    })
},[])

  return (
    <div className="App">
      <MainPhoto photo={photoOfTheDay}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;

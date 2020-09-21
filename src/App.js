import React, { useState , useEffect } from "react";
import "./App.css";
import axios from 'axios';
import MainPhoto from "./Components/MainPhoto";
import Header from "./Components/Header";
import Footer from "./Components/Footer"

const apiKey = 'mxyPfekt60mxRZvnHkacOaRwifTRSEtIbjeNIWkJ';
const apodUrl = 'https://api.nasa.gov/planetary/apod?'

function App() {
  const [photoOfTheDay,setPhotoOfTheDay] = useState('') 

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
      <Header/>
      <MainPhoto photo={photoOfTheDay}/>
      <p>
         <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <Footer/>
    </div>
  );
}

export default App;

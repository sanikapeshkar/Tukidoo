import React from 'react'
import Header from "../Header/header"
import Navbar from "../Navbar/navbar"
import Camera from '../Camera/camera'
import YouTubeVideo from "../Video/video"
function Main() {
  const videoId = 'https://www.youtube.com/watch?v=-r4SwgNruic';
  return (
    <div>
        <Header/>
        <Navbar/>
        <div style={{display:'flex'}}>
         <Camera/>
         <YouTubeVideo videoId={videoId} />
        </div>
    </div>
  )
}

export default Main
import React from 'react'
import "./header.scss"
function header() {
  return (
    <div className='header'>
        <div id="icon">
        <img src="" alt="arrow"></img>
        </div>
        <div> <h2>Basic Mathematics 101</h2></div>
       
        <div id="icon-2">
            <img src="" alt="call icon">
            </img>
          Call teacher
        </div>
        <div id="icon-2">
            <img src="" alt="support">
            </img>
           Support
        </div>
    </div>
  )
}

export default header
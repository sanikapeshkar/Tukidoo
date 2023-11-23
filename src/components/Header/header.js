import React from 'react'
import "./header.scss"
function header() {
  return (
    <div className='header'>
        <img id="icon" src="" alt="arrow"></img>
        <h2>Basic Mathematics 101</h2>
        <div>
            <img src="" alt="call icon">
            </img>
            <h4>Call teacher</h4>
        </div>
        <div>
            <img src="" alt="support">
            </img>
            <h4>Support</h4>
        </div>
    </div>
  )
}

export default header
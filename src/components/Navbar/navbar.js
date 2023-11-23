import React from 'react'
import { HEADER } from '../constant'
import "./navbar.scss"
function Navbar() {
  return (
    <div className='navbar'>
        {HEADER.map((key,i)=>(
            <div className='icons'>
          
            <img src="./images/logo1.png" alt="img here"  height={50}></img>
            {key.text}
            </div>
 
        ))}
    </div>
  )
}

export default Navbar
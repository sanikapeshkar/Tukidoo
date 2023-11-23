import React from 'react'
import { SIDE } from '../constant'
import "./sidebar.scss"
function Sidebar() {
  return (
    <div className='sidebar'>
        {SIDE.map((key,i)=>(
            <div className='icons'>
          
            <img src="./images/logo1.png" alt="img here"  height={50}></img>
            </div>
 
        ))}
    </div>
  )
}

export default Sidebar
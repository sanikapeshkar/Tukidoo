import React from 'react'
import { SIDE } from '../constant'
import "./sidebar.scss"
function Sidebar() {
  return (
    <div className='sidebar'>
      <img src="" alt="logo"></img>
        {SIDE.map((key,i)=>(
            <div className='icons'>
          
            {key.img}
            </div>
 
        ))}

        <img src="" alt="profile"></img>
    </div>
  )
}

export default Sidebar
import React from 'react'
import { SIDE } from '../constant'
import "./sidebar.scss"
function Sidebar() {
  return (
    <div className='sidebar'>
      <img src="./images/profile.jpg" alt="logo"></img>
        {SIDE.map((key,i)=>(
            <div className='icons'>
            {key.img}
            </div>
 
        ))}

        <img src="./images/profile.jpg" alt="profile" id="profile"></img>
    </div>
  )
}

export default Sidebar
import React from "react";
import { HEADER } from "../constant";
import "./navbar.scss";
function Navbar() {
  return (
    <div className="navbar">
      {HEADER.map((key, i) => (
        <div className={`icons ${i === 2 ? 'bgicon' : ''}`} >
          <div id="icon-ech">{key.img} </div>
         <h3>{key.text}</h3> 
        </div>
      ))}
    </div>
  );
}

export default Navbar;

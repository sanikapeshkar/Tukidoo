import React from "react";
import "./header.scss";
import { MdArrowBackIos } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import { FcOnlineSupport } from "react-icons/fc";
function header() {
  return (
    <div className="header">
      <div id="icon">
        <MdArrowBackIos  size={30} color="grey" style={{padding:11}}/>
      </div>
      <div>
 
        <h2>Basic Mathematics 101</h2>
      </div>

      <div id="icon-2">
        <PiPhoneCallFill size={30} style={{color:"blue",padding:10,marginTop:10}}/>
        <h6>Call teacher</h6>
      </div>
      <div id="icon-2">
        <FcOnlineSupport size={30} style={{padding:10,marginTop:10}}/>
        <h6>Support</h6>
      </div>
    </div>
  );
}

export default header;

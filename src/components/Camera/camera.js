import React from "react";
import { GoDeviceCameraVideo } from "react-icons/go";
import { IoMic } from "react-icons/io5";
import { FaShareSquare } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import { RiShareBoxLine } from "react-icons/ri";
import "./camera.scss";

function Camera() {
  return (
    <div className="videoo">
      <div className="video">
        <div className="image1">
          {/* <img src="./images/studeny.jpg" alt="student here"></img> */}
          <div id="text1">Ridha</div>
        </div>

        <div className="image">
          {/* <img src="./images/teacher.jpg" alt="student here"></img> */}
          <div id="text">Ms Kaur</div>
        </div>
      </div>
      <div className="icons">
        <div className="icon-each">
          <GoDeviceCameraVideo size={30} style={{ padding: 10 }} />
          <h6>Camera</h6>
        </div>
        <div className="icon-each">
          <IoMic size={30} style={{ padding: 10 }} />
          <h6>Mic</h6>
        </div>
        <div className="icon-each">
          <FaShareSquare size={30} style={{ padding: 10 }} />
          <h6>Share</h6>
        </div>
        <div className="icon-each">
          <IoIosChatbubbles size={30} style={{ padding: 10 }} />
          <h6>Chat</h6>
        </div>
        <div className="icon-each" style={{ backgroundColor: "lightgreen" }}>
          <RiShareBoxLine size={30} style={{ padding: 10 }} />
          <h6>Leave</h6>
        </div>
      </div>
    </div>
  );
}

export default Camera;

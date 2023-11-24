import { GoBell } from "react-icons/go";
import { IoStopwatchOutline, IoPeople, IoDocument } from "react-icons/io5";
import { FaCalendarAlt, FaChalkboard, FaVideo } from "react-icons/fa";
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaRegEye } from "react-icons/fa6";
import { IoIosStats } from "react-icons/io";
import { SiGoogleclassroom } from "react-icons/si";
import { RiSlideshow2Line } from "react-icons/ri";
import { GrDocumentImage } from "react-icons/gr";

export const SIDE = [
  {
    img: <HiBars3BottomLeft  size={30}  />,
    hovertxt: "3 bars",
  },
  {
    img: <GoBell  size={30} />,
    hovertxt: "notifications",
  },
  {
    img: <IoStopwatchOutline  size={30} />,
    hovertxt: "time",
  },
  {
    img: <FaCalendarAlt  size={30} />,
    hovertxt: "calender",
  },
  {
    img: <FaRegEye  size={30} />,
    hovertxt: "eye",
  },
  {
    img: <IoPeople  size={30} />,
    hovertxt: "people",
  },
  {
    img: <IoIosStats  size={30} />,
    hovertxt: "dashboard",
  },
];

export const HEADER = [
  {
    img: <SiGoogleclassroom  size={20}/>,
    text: "Classroom",
  },
  {
    img: <FaChalkboard size={20}/>,
    text: "WhiteBoard",
  },
  {
    img: <FaVideo size={20}/>,

    text: "Videos",
  },
  {
    img: <RiSlideshow2Line size={20}/>,

    text: "Slideshow",
  },
  {
    img: <IoDocument size={20}/>,
    text: "Documents",
  },
  {
    img: <GrDocumentImage size={20}/>,
    text: "Doc.cam",
  },
];

import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { FaDev, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import Logo from "../images/Logo.png";
import "../Css/NavBar.css";
import { useStateValue } from "../Components/StateProvider";


function NavBar() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="NavBar">
      <div>
        <a href="#" className="firstPart_NavBar">
          <img src={Logo} alt="" />
          <h2>Gamer Zone</h2>
        </a>
      </div>
      <div className="SocialIcon_NavBar">
       <Avatar className="NavBar_Avtar" src={user.photoURL}/>
       <span className="NavBar_Name">{user.displayName}</span>
      </div>
        {/* <a
          href="#"
          className="socialIcons"
        >
          <FaFacebook className=" icon" />
        </a>
        <a
          href="#"
          className="socialIcons"
        >
          <FaInstagram className=" icon" />
        </a>
        <a href="#" className="socialIcons">
          <FaDev className=" icon" />
        </a>
        <a href="#" className="socialIcons">
          <FaGithub className="icon" />
        </a> */}
      
    </div>
  );
}

export default NavBar;

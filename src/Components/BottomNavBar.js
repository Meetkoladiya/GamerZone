import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { RiBaseStationLine } from "react-icons/ri";
import { GiPistolGun, GiCardAceClubs } from "react-icons/gi";
import "../Css/BottomNavBar.css";

function BottomNavBar() {
  return (
    <div className="BotNavBar">
      <NavLink className="social_BotNavBar  " to="/">
        <BsFillPeopleFill className="active navigation_BotNavBar" />
      </NavLink>
      <NavLink className="shooter_BotNavBar " to="/Shooter">
        <GiPistolGun className="navigation_BotNavBar" />
      </NavLink>
      <NavLink className="card_BotNavBar" to="/CardsGame">
        <GiCardAceClubs className="navigation_BotNavBar" />
      </NavLink>
      <NavLink className="online_BotNavBar" to="/MultiOnline">
        <RiBaseStationLine className="navigation_BotNavBar" />
      </NavLink>
    </div>
  );
}

export default BottomNavBar;

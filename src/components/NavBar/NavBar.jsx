import React from "react";
import { Link, NavLink } from "react-router-dom";

import { NavUl, NavLi, HeaderContainer, HomeImg } from "./styles/styles";
import PokeBallIcon from "../../images/poke_ball_icon.svg";

const NavBar = () => {
  window.onscroll = function () {
    scrollFunction();
  };
  const scrollFunction = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("nav-bar").style.transform = "translateY(-100px)";
    } else {
      document.getElementById("nav-bar").style.transform = "translateY(0px)";
    }
  };
  return (
    <HeaderContainer id="nav-bar">
      <NavUl>
        <NavLi>
          <Link to="/">
            <HomeImg src={PokeBallIcon} alt="Home" />
          </Link>
        </NavLi>
        <NavLi>
          <NavLink exact to="/all-pokemon" activeClassName="active-page">
            {"All Pokemon"}
          </NavLink>
        </NavLi>
      </NavUl>
    </HeaderContainer>
  );
};

export default NavBar;

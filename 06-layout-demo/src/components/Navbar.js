import React from "react";

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import mq from "./MediaQuery";

const NavbarContainer = styled.nav`
  /* background-color: #0066ff55; */
  overflow: hidden;
  background-color: #ffe3e3;
  position: sticky;
  top: 0;

  div {
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;

    a {
      display: block;
      color: black;
      text-align: center;
      padding: 14px 20px;
      text-decoration: none;
      font-size: 16px;

      ${mq.maxWidth("sm")`
        font-size: 14px;
      `}

      &:hover {
        background-color: #ddd;
        color: white;
      }

      &.active {
        background-color: #ddd;
        color: white;
      }

      &.right {
        ${mq.maxWidth("sm")`
          margin-left: auto;
        `}
      }
    }
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <div>
        {/* 링크 안에 display:block 국룰 */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/link1">Link1</NavLink>
        <NavLink to="/link2">Link2</NavLink>
        <NavLink to="/link3" className="right">
          Link3
        </NavLink>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

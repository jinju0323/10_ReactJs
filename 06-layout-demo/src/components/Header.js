import React from "react";

import styled from "styled-components";
import mq from "./MediaQuery";

const HeaderContainer = styled.div`
  /* background-color: #ffff55; */
  .jumbotron {
    background-color: #789dbc;
    color: #fff;
    padding: 80px;
    text-align: center;

    h1 {
      font-size: 46px;
      font-weight: 700;
      margin-bottom: 15px;
    }

    p {
      font-size: 20px;
    }

    ${mq.maxWidth("sm")`
      padding: 40px;

      h1 {
        font-size: 32px;
        margin-bottom: 7px;
      }

      p {
        font-size: 12px;
      }
    `}
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="jumbotron">
        <h1>My Website</h1>
        <p>React.js Layout Template</p>
      </div>
    </HeaderContainer>
  );
};

export default Header;

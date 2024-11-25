import React, { memo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";

// 화면 구성 컴포넌트
import FoodList from "./FoodList";
import AboutMe from "./AboutMe";

const MainContainer = styled.div`
  /* background-color: #f6eacb; */

  // 상단에 영역 가려지는 만큼 여백 확보
  padding-top: 57px;

  /** 컨텐츠 영역 넓이 제한 및 중앙 배치 */
  max-width: 1200px;
  margin: auto;

  .divider {
    margin: 60px 0;
    width: auto;
    border-top: 1px solid #dddddd;
    border-bottom: 0;
  }
`;

const Main = memo(() => {
  return (
    <MainContainer>
      <FoodList />

      <hr className="divider" />

      <AboutMe />
    </MainContainer>
  );
});

export default Main;

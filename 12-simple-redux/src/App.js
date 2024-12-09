/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */
/** 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조한다.) */
import React, { memo } from "react";
/** 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";
/** SEO 설정 */
import Meta from "./components/Meta";
/** 전역 SCSS 적용을 위한 reset.css와 StyledComponent */
import { Reset } from "styled-reset";
import GlobalStyles from "./components/GlobalStyles";

/** 하위 페이지를 담당하는 컴포넌트(직접제작)들 참조 */
import Counter from "./pages/counter";
import Grade from "./pages/grade";
import TrafficAcc from "./pages/traffic_acc";

const App = memo(() => {
  return (
    <>
      <Meta />
      {/* <Reset /> */}
      <GlobalStyles />
      <h1>12-simple-redux</h1>
      <hr />

      {/* ---- 링크 구성 부분 --- */}
      <nav>
        <MenuLink to="/counter">Counter</MenuLink>
        <MenuLink to="/grade">Grade</MenuLink>
        <MenuLink to="/traffic_acc">TrafficAcc</MenuLink>
      </nav>

      {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/grade" element={<Grade />} />
        <Route path="/traffic_acc" element={<TrafficAcc />} />
      </Routes>
    </>
  );
});

export default App;

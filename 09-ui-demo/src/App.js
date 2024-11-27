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
import ImageEx from "./pages/image_ex";
import StyleEx from "./pages/style_ex";
import TabEx from "./pages/tab_ex";
import SubmenuEx from "./pages/submenu_ex";
import CollapseEx from "./pages/collapse_ex";
import CreateElementEx from "./pages/create_element_ex";

const App = memo(() => {
  return (
    <>
      <Meta />
      {/* <Reset /> */}
      <GlobalStyles />
      <h1>09-ui-demo</h1>
      <hr />

      {/* ---- 링크 구성 부분 --- */}
      <nav>
        <MenuLink to="/image_ex">ImageEx</MenuLink>
        <MenuLink to="/style_ex">StyleEx</MenuLink>
        <MenuLink to="/tab_ex">TabEx</MenuLink>
        <MenuLink to="/submenu_ex">SubmenuEx</MenuLink>
        <MenuLink to="/collapse_ex">CollapseEx</MenuLink>
        <MenuLink to="/create_element_ex">CreateElementEx</MenuLink>
      </nav>

      {/* ---- 페이지 역할을 할 컴포넌트를 명시하기 --- */}
      <Routes>
        <Route path="/image_ex" element={<ImageEx />} />
        <Route path="/style_ex" element={<StyleEx />} />
        <Route path="/tab_ex" element={<TabEx />} />
        <Route path="/submenu_ex" element={<SubmenuEx />} />
        <Route path="/collapse_ex" element={<CollapseEx />} />
        <Route path="/create_element_ex" element={<CreateElementEx />} />
      </Routes>
    </>
  );
});

export default App;

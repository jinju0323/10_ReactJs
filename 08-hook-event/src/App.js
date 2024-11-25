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
import MyState from "./pages/my_state";
import DateRange1 from "./pages/date_range1";
import MyReducer from "./pages/my_reducer";
import DateRange2 from "./pages/date_range2";
import MyEffect from "./pages/my_effect";
import MyRef from "./pages/my_ref";
import MyCallback from "./pages/my_callback";
import MyMemo from "./pages/my_memo";
import MyWidth from "./pages/my_width";

const App = memo(() => {
  return (
    <div>
      <Meta />
      {/* <Reset /> */}
      <h1>08-hook-event</h1>
      <hr />

      {/* 링크 구성 부분 */}
      <nav>
        {/* 1) useState 관련 예제 */}
        <MenuLink to="/my_state">MyState</MenuLink>
        <MenuLink to="/date_range1">DateRange1</MenuLink>

        {/* 2) useEffect 관련 예제 */}
        <MenuLink to="/my_effect">MyEffect</MenuLink>

        {/* 3) useMemo 관련 예제 */}
        <MenuLink to="/my_memo">MyMemo</MenuLink>

        {/* 4) useReducer 관련 예제 */}
        <MenuLink to="/my_reducer">MyReducer</MenuLink>
        <MenuLink to="/date_range2">DateRange2</MenuLink>

        {/* 5) useRef 관련 예제 */}
        <MenuLink to="/my_ref">MyRef</MenuLink>

        {/* 6) useCallback 관련 예제 */}
        <MenuLink to="/my_callback">MyCallback</MenuLink>

        {/* 7) 커스텀 훅 관련 예제 */}
        <MenuLink to="/my_width">MyWidth</MenuLink>
      </nav>

      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        {/* 1) useState 관련 예제 */}
        <Route path="/my_state" element={<MyState />} />
        <Route path="/date_range1" element={<DateRange1 />} />

        {/* 2) useEffect 관련 예제 */}
        <Route path="/my_effect" element={<MyEffect />} />

        {/* 3) useMemo 관련 예제 */}
        <Route path="/my_memo" element={<MyMemo />} />

        {/* 4) useReducer 관련 예제 */}
        <Route path="/my_reducer" element={<MyReducer />} />
        <Route path="/date_range2" element={<DateRange2 />} />

        {/* 5) useRef 관련 예제 */}
        <Route path="/my_ref" element={<MyRef />} />

        {/* 6) useCallback 관련 예제 */}
        <Route path="/my_callback" element={<MyCallback />} />

        {/* 7) 커스텀 훅 관련 예제 */}
        <Route path="/my_width" element={<MyWidth />} />
      </Routes>
    </div>
  );
});

export default App;

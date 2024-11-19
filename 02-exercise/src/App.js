import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Weather from "./weather";

// App 컴포넌트 정의
const App = () => {
  return (
    <div>
      {/* 제목 표시 */}
      <h1>주간날씨</h1>
      <hr />
      {/* 링크 구성 부분 */}
      <Link to="/weather/mon">월</Link>&nbsp;|&nbsp;
      <Link to="/weather/tue">화</Link>&nbsp;|&nbsp;
      <Link to="/weather/wed">수</Link>&nbsp;|&nbsp;
      <Link to="/weather/thu">목</Link>&nbsp;|&nbsp;
      <Link to="/weather/fri">금</Link>&nbsp;|&nbsp;
      <Link to="/weather/sat">토</Link>&nbsp;|&nbsp;
      <Link to="/weather/sun">일</Link>
      <hr />
      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        {/* URL 경로에 따라 Weather 컴포넌트 렌더링 */}
        <Route path="/weather/:day" element={<Weather />} />
      </Routes>
    </div>
  );
};

export default App;

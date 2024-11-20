import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";

import MyProps from "./pages/my_props";
import MyPropTpyes from "./pages/my_prop_types";
import MyChildren from "./pages/my_children";
import GradeTable from "./pages/grade_table";

const App = () => {
  return (
    // 의미 없는 div 대신 React.Fragment 사용
    <>
      {/* Route 처리를 수행하는 페이지에서 이 컴포넌트 사용시,
          이 내용이 모든 페이지에 공통 적용된다. */}
      <Meta />
      <h1>04-props</h1>
      {/* 링크 구성 부분 */}
      <nav>
        <Link to="/myprops">MyProps</Link>&nbsp;|&nbsp;
        <Link to="/myproptypes">MyPropsTypes</Link>&nbsp;|&nbsp;
        <Link to="/mychildren">MyChildren</Link>&nbsp;|&nbsp;
        <Link to="/gradetable">GradeTable(demo)</Link>
      </nav>
      <hr />

      {/* Route 처리할 컴포넌트 정의 */}
      <Routes>
        <Route path="/myprops" element={<MyProps />} />
        <Route path="/myproptypes" element={<MyPropTpyes />} />
        <Route path="/mychildren" element={<MyChildren />} />
        <Route path="/gradetable" element={<GradeTable />} />
      </Routes>
    </>
  );
};
export default App;

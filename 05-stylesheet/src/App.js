import React from "react";

import { Link, Routes, Route } from "react-router-dom";

import Meta from "./components/Meta";

import InlineCss from "./pages/inline_css";
import CssClass from "./pages/css_class";
import CssModule from "./pages/css_module";
import StyledComponent from "./pages/styled_component";
import Responsive from "./pages/responsive";
import News from "./pages/news";

const App = () => {
  return (
    <>
      <Meta />
      <h1>05-stylesheet</h1>
      {/* 링크 구성 부분 */}
      <nav>
        <Link to="/inline_css">InlineCss</Link>&nbsp;|&nbsp;
        <Link to="/css_class">CssClass</Link>&nbsp;|&nbsp;
        <Link to="/css_module">CssModule</Link>&nbsp;|&nbsp;
        <Link to="/styled_component">StyledComponent</Link>&nbsp;|&nbsp;
        <Link to="/responsive">Responsive</Link>&nbsp;|&nbsp;
        <Link to="/news">News(Demo)</Link>
      </nav>
      <hr />
      {/* Route 처리할 컴포넌트 정의 */}
      <Routes>
        <Route path="/inline_css" element={<InlineCss />} />
        <Route path="/css_class" element={<CssClass />} />
        <Route path="/css_module" element={<CssModule />} />
        <Route path="/styled_component" element={<StyledComponent />} />
        <Route path="/responsive" element={<Responsive />} />
        <Route path="/news/*" element={<News />} />
      </Routes>
    </>
  );
};
export default App;

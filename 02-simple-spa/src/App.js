/**
 * 리액트의 전체 페이지를 구성하는 컴포넌트
 */

/** 1) 리액트 기본 패키지 참조 (모든 파일에서 무조건 참조) */
import React from "react";

/** 2) 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Link, Routes, Route } from "react-router-dom";

/** 3) 하위 페이지를 담당하는 컴포넌트(직접제작)들 참조 */
// import할때 폴더 경로까지만 지정할 경우 index.js가 자동으로 식별된다.
import Home from "./pages/home";
import About from "./pages/about";
import Main from "./pages/main";
import DepartmentGet from "./pages/department_get";
import DepartmentPath from "./pages/department_path";
import Error404 from "./pages/error404";

const App = () => {
  return (
    <div>
      <h1>02-simple-spa</h1>
      <hr />
      {/* 링크 구성 부분 */}
      <nav>
        {/* 4-1) 기본 라우팅 구성 */}
        <Link to="/">[Home]</Link>
        <Link to="/about">[About]</Link>
        {/* 5-1) 서브라우팅 사용 */}
        <Link to="/main">[Main]</Link>
        {/* 6-1) HTTP GET 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_get?id=101&msg=hello">[컴퓨터공학과]</Link>
        <Link to="/department_get?id=102&msg=world">[멀티미디어학과]</Link>
        {/* 7-1) PATH 파라미터를 포함하는 링크 구성 */}
        <Link to="/department_path/201/hello">[전자공학과]</Link>
        <Link to="/department_path/202/world">[기계공학과]</Link>
      </nav>

      <a href="/about">일반링크</a>

      {/* 페이지 역할을 할 컴포넌트를 명시하기 */}
      <Routes>
        {/* 4-2) 첫 페이지로 사용되는 컴포넌트의 경우 exact={true}를 명시해야 한다. */}
        {/* 첫 페이지로 사용되는 컴포넌트를 path에 "/"를 권장 */}
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        {/* 5-2) 서브라우팅 사용 */}
        <Route path="/main/*" element={<Main />} />
        {/* 6-2) GET 파라미터 사용 */}
        <Route path="/department_get" element={<DepartmentGet />} />
        {/* 7-2) PATH 파라미터는 URL 형식에 변수의 위치와 이름을 정해줘야 한다. */}
        <Route path="/department_path/:id/:msg" element={<DepartmentPath />} />
        {/* 8-2) 지정되지 않은 모든 요청에 대한 반응. 단 Routes블록의 맨 마지막에 배치해야함 */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
};

export default App;

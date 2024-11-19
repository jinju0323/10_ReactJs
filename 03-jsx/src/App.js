import React from "react";

/** 2) 링크와 페이지 구성에 필요한 컴포넌트 참조 */
import { Link, Routes, Route } from "react-router-dom";

/** 3) 하위 페이지를 담당하는 컴포넌트(직접제작)들 참조 */
import Expr from "./pages/expr";
import If1 from "./pages/if1";
import If2 from "./pages/if2";
import If3 from "./pages/if3";
import If4 from "./pages/if4";
import Loop1 from "./pages/loop1";
import Loop2 from "./pages/loop2";
import Loop3 from "./pages/loop3";

const App = () => {
  return (
    <div>
      <h1>03-jsx</h1>

      {/* Link 구성 */}
      <nav>
        {/* 4-1) 기본 표현식 */}
        <Link to="/expr">[Expr]</Link>
        {/* 4-2) 조건문 */}
        <Link to="/if1">[If1]</Link>
        <Link to="/if2">[If2]</Link>
        <Link to="/if3">[If3]</Link>
        <Link to="/if4">[If4]</Link>
        {/* 4-3) 반복문 */}
        <Link to="/loop1">[Loop1]</Link>
        <Link to="/loop2">[Loop2]</Link>
        <Link to="/loop3">[Loop3]</Link>
      </nav>
      <hr />

      {/* 각 예제 페이지 Route 적용 */}
      <Routes>
        {/* 4-1) 기본 표현식 */}
        <Route path="/expr" element={<Expr />} />
        {/* 4-2) 조건문 */}
        <Route path="/if1" element={<If1 />} />
        <Route path="/if2" element={<If2 />} />
        <Route path="/if3" element={<If3 />} />
        <Route path="/if4" element={<If4 />} />
        {/* 4-3) 반복문 */}
        <Route path="/loop1" element={<Loop1 />} />
        <Route path="/loop2" element={<Loop2 />} />
        <Route path="/loop3" element={<Loop3 />} />
      </Routes>
    </div>
  );
};
export default App;

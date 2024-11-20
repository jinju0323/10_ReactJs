import React from "react";

import Meta from "../../components/Meta";
import MyChildrenSub from "./MyChildrenSub";

const MyChildren = () => {
  return (
    <div>
      {/* Route 처리를 적용 받는 페이지에서 이 컴포넌트를 중복 사용시 App.js 에서의 설정을 덮어쓰게 된다. */}
      <Meta title="My Children.js" description="여기는 My Children.js 파일입니다." />

      <h1>My Children</h1>

      <MyChildrenSub width={400} height={100}>
        Hello World
      </MyChildrenSub>
      <MyChildrenSub width={300} height={80}>
        안녕 리액트
      </MyChildrenSub>
      <MyChildrenSub width={200} height={50} />
    </div>
  );
};

export default MyChildren;

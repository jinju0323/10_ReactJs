/**
 * 직접 Hook 함수 정의하기
 * -> React 스타일의 모듈화
 */
import React, { memo } from "react";

import { useMyWidth } from "../../hooks/myhooks";

const MyWidth = memo(() => {
  // useMyWidth 훅을 호출하여 현재 브라우저의 너비를 가져옴
  const myWidth = useMyWidth();
  return (
    <div>
      <h2>MyWidth</h2>
      {/* 현재 브라우저의 너비를 화면에 출력 */}
      <h2>windowWidth: {myWidth}</h2>
    </div>
  );
});

export default MyWidth;

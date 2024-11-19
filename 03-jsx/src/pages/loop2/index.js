/**
 * jsx 반복 처리 (2) - map() 함수를 사용한 배열 원소 탐색
 */
import React from "react";

const Loop2 = () => {
  // 화면에 표시할 데이터
  const myArray = ["hello", "world"];

  // 화면에 표시할 반복 컴포넌트
  const myArrayItem = myArray.map((v, i) => {
    return <li key={i}>{v}</li>;
  });

  return (
    <div>
      <h2>Loop2</h2>
      <ul>{myArrayItem}</ul>
    </div>
  );
};

export default Loop2;

/**
 * jsx 조건분기 (3) - 조건식과 `||` 연산자 사용
 *
 * {조건 || (조건이 거짓인 경우 출력할 내용)}
 *
 * 조건이 참인 경우 표시되는 내용 없음
 */
import React from "react";

const If3 = () => {
  const articleList = false;

  return (
    <div>
      <h1>If3</h1>
      {articleList || <p>조회된 게시글이 없습니다.</p>}
    </div>
  );
};

export default If3;

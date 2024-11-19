/**
 * jsx 조건분기 (4) - 삼항 연산자를 사용한 조건 분기
 *
 * {조건 ? (조건이 참인 경우 출력할 내용) : (조건이 거짓인 경우 출력할 내용)}
 *
 * 조건이 거짓인 경우를 사용하지 않고자 한다면 null을 사용
 *
 * ex) { point === 80 ? (...) : (null) }
 */

import React from "react";

const If4 = () => {
  const isLogin = false;

  return (
    <div>
      <h1>If4</h1>

      {isLogin === true ? <button type="button">로그아웃</button> : <button type="button">로그인</button>}
    </div>
  );
};

export default If4;

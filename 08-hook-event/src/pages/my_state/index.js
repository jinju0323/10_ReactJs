import React, { memo, useState } from "react";

import styled from "styled-components";

const MyStateContainer = styled.div``;

const MyState = memo(() => {
  /**
   * state(상태)값 정의
   * - 이 페이지 안에서 유효한 전역변수 같은 개념
   * - 화면에 출력할 용도의 변수라고 이해하면 된다
   * - const [변수대입, 변수에 대한 setter함수] = useState(초기값);
   * - state값은 대입연산자를 사용하여 직접 변경할 수 없고 반드시 setter함수를 통해서만 변경 가능하다
   */
  const [myName, setMyName] = useState("");
  const [myPoint, setMyPoint] = useState(50);

  /** 이벤트 핸들러로 사용될 함수는 컴포넌트 함수 안에서 정의된다. */
  const onMyNameChange = (e) => {
    // 바닐라 JS 방식의 입력값 출력
    // --> 출력할 대상을 의미하는 객체를 직접 제어해야 한다.
    // document.querySelector("#output").innerHTML = e.currentTarget.value;

    // 리액트는 상태변수의 값을 변경하기 위해 Setter함수를 사용해야 한다.
    // -> 상태변수에 대한 직접 대입은 에러
    // MyName = e.currentTarget.value; // 에러
    // Setter 함수를 통해 변경된 상태 변수는 모든 출력 위치에 자동으로 반영된다.
    setMyName(e.currentTarget.value);
  };

  return (
    <MyStateContainer>
      <h2>MyState</h2>

      <div>
        <label htmlFor="myNameInput">이름: </label>
        {/* 1) 상태변수 myName이 value속성에 연결된 입력 요소 */}
        {/* 2) 이벤트 연결은 `on + 이벤트이름` (대소문자 주의), 반드시 함수와 연결해야 한다. */}
        {/* 3) value속성은 반드시 상태변수만 연결 가능하고, value 속성을 사용할 경우
                onChane 이벤트를 통해 상태변수에 입력값을 갱신해 줘야한다. */}
        {/* 4) 기존 HTML에서의 value 속성은 defaultValue 속성을 사용한다. (기본값 설정) */}
        <input type="text" id="myNameInput" value={myName} onChange={onMyNameChange} />
      </div>

      <div>
        <label htmlFor="myPointInput">점수: </label>
        <input
          id="myPointInput"
          type="range"
          min="0"
          max="100"
          value={myPoint}
          step="1"
          // 이벤트 핸들러를 익명 화상표 함수 형식으로 정의한 경우
          onChange={(e) => setMyPoint(e.currentTarget.value)}
        />
      </div>

      <h2>
        {myName}님의 점수는 {myPoint}점입니다.
      </h2>
    </MyStateContainer>
  );
});

export default MyState;

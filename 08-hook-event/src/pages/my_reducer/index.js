/**
 * useReducer
 *
 * useState 보다 더 다양한 컴포넌트 상황에 따라 상태값을 다른 값으로 없데이트 하고자 하는 경우 사용
 * useState의 대체 함수로 이해
 *
 * state값이 다수 하위값을 포함하거나 이를 활요하는 처리가 복잡한 경우에
 * useState보다 useReducer를 사용하는 것이 더 효율적이다.
 */
import React, { memo, useReducer } from "react";

import styled from "styled-components";

const MyReducerContainer = styled.div``;

/**
 * useReducer에 의해 호출될때 사용자 정의 함수
 * --> action값이 00일때 state값을 ~~~해라
 * ---> action값의 DateType은 개발자가 결정할 수 있다. (int, string, boolean, json ...)
 * ---> state값의 DateType은 개발자가 결정할 수 있다. (int, string, boolean, json ...)
 * @param {int} state - 상태값 (useState의 state값과 동일)
 * @param {string} action - 어떤 동작인지에 대한 구분
 * @returns
 */
function setCounterValue(state, action) {
  console.log("[%o] %o", state, action);

  // action값의 상태에 따른 state값의 가공 처리를 분기
  switch (action) {
    case "HELLO":
      return state + 1;
    case "WORLD":
      return state - 1;
    default:
      return 0;
  }
}

const MyReducer = memo(() => {
  /**
   * 상태값(myCounter)와 상태값 갱신함수(setMyCounter)를 정의
   * -> setMyCounterValue: setMyCounter()가 호출됨에 따라 간접적으로 호출될 함수
   * -> 0: myCounter의 초기값
   *
   * setMyCounter()함수에게 action값이('HELLO', 'WORLD', '') 전달되면
   * React 내부적으로 setCounterValue()함수가 호출되어
   * 상태값으로 지정된 myCounter와 "HELLO" 또는 "WORLD" 가 파라미터로 전달된다.
   */
  const [myCounter, setMyCounter] = useReducer(setCounterValue, 0);

  return (
    <MyReducerContainer>
      <h2>MyReducer</h2>
      <p>현재 카운트 값: {myCounter}</p>
      <button type="button" onClick={(e) => setMyCounter("HELLO")}>
        UP
      </button>
      <button type="button" onClick={(e) => setMyCounter("WORLD")}>
        DOWN
      </button>
      <button type="button" onClick={(e) => setMyCounter("")}>
        RESET
      </button>
    </MyReducerContainer>
  );
});

export default MyReducer;

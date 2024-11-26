/**
 * useCallback
 *
 * 렌더링 성능 최적화에 사용됨
 * 이벤트 헨들러 함수를 필요한 경우에만 생성할 수 있다.
 */
import React, { memo, useState, useCallback } from "react";
import styled from "styled-components";

const MyCallbackContainer = styled.div``;

const MyCallback = memo(() => {
  // useState 훅을 사용하여 상태 변수 myText와 상태를 업데이트하는 함수 setMyText를 선언
  const [myText, setMyText] = useState("Hello React");

  // 컴포넌트가 렌더링될 때마다 콘솔에 메시지를 출력
  console.log("MyCallback 함수 실행됨!!!!!!");

  // useCallback 훅을 사용하여 onInputChange 함수를 메모이제이션
  // 이 함수는 input 요소의 값이 변경될 때 호출되어 myText 상태를 업데이트함
  const onInputChange = useCallback((e) => {
    setMyText(e.currentTarget.value);
  }, []);

  // 컴포넌트의 JSX 반환
  return (
    <MyCallbackContainer>
      <h2>MyCallback</h2>
      {/* myText 상태를 화면에 출력 */}
      <h2>{myText}</h2>
      {/* input 요소, 사용자가 입력한 값이 변경될 때 onInputChange 함수가 호출됨 */}
      <input type="text" placeholder="input ..." onChange={onInputChange} />
    </MyCallbackContainer>
  );
});

export default MyCallback;

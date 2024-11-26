/**
 * useMemo
 *
 * 함수형 컴포넌트 내에서의 연산 최적화
 *
 * useMemo는 특정 상태변수가 변경되었을 때 그 변경된 값을 가지고 처리할 후속 작업을 구현한다.
 * 변경여부를 감지하기 위한 상태변수 useMemo()의 두 번째 파라미터 배열에 명시한다.
 *  useMemo의 콜백함수에서 리턴하는 값은 useMemo() 자체의 리턴값이 된다.
 */
import React, { memo, useState, useEffect, useMemo } from "react";

import styled from "styled-components";

const MyMemoContainer = styled.div``;

/**
 * 상태변수 myNumber가 변경됨에 따라 영향을 받는 새로운 상태변수 만들기
 */
const MyMemo = memo(() => {
  // 사용자의 입력을 저장할 상태변수
  const [myNumber, setNumber] = useState(0);

  // 입력값에 따라 상태변수를 갱신할 이벤트 헨들러
  const onMyNumberChange = (e) => {
    // 입력 필드의 현재 값을 가져옵니다.
    const inputValue = e.currentTarget.value;

    // 입력된 값이 숫자인지 확인합니다.
    // 숫자가 아니면 0으로 설정합니다.
    const inputNumber = isNaN(inputValue) ? 0 : parseInt(inputValue);

    // 상태 변수 myNumber를 업데이트합니다.
    setNumber(inputNumber);
  };

  /**
  // // [CASE 1]
  // // 새로운 상태값
  // const [myResult, setMyResult] = useState(0);

  // // myNumber가 변경될 때 실행되는 hook
  // useEffect(() => {
  //   console.log("myNumber가 변경됨");
  //   setMyResult(myNumber * 234);
  // }, [myNumber]);
/*/
  // [CASE 2]
  // useMemo를 이용한 최적화
  // 위의 코드를 간결하게 처리한 형태
  // --> useMemo는 특정 상태값이 변경되었을 때 그 상태값에 영향을 받는 새로운 상태값을 생성한다.
  const myResult = useMemo(() => {
    return myNumber * 234;
  }, [myNumber]);
  /**/

  return (
    <MyMemoContainer>
      <h2>MyMemo</h2>
      <input type="number" value={myNumber} onChange={onMyNumberChange} /> x 234 = {myResult}
      {/* 사용자가 입력한 값의 x 234를 한 값이 출력됨 */}
      {/* <p>
        {myNumber} x 234 = {myNumber * 234}
      </p> */}
    </MyMemoContainer>
  );
});

export default MyMemo;

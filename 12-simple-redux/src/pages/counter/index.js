import React, { memo } from "react";

import styled from "styled-components";

// Slice에 정의된 액션함수들 참조
import { plus, minus } from "../../slices/CounterSlice";

// 상태값을 로드하기 위한 hook과 acion함수를 dispatch하기 위한 hook 참조
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = styled.div`
  .conter-box {
    display: inline-flex;
    border: 3px solid #06f;
    padding: 10px;

    button {
      padding: 10px;
      font-size: 24px;
      background-color: #06f;
      color: #fff;
      border: none;
      flex: 0 0 50px;
    }

    .number {
      color: #06f;
      margin: 0 20px;
      font-size: 48px;
      text-align: center;
      width: 150px;
    }
  }
`;

const Counter = memo(() => {
  // hook을 통해 slice가 관리하는 상태값 가져오기
  const { number, color } = useSelector((state) => state.CounterSlice);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  return (
    <CounterContainer>
      <h2>Counter</h2>

      <div className="conter-box">
        <button onClick={(e) => dispatch(plus(5))}>+5</button>
        <h2 className="number">{number}</h2>
        <button onClick={(e) => dispatch(minus(3))}>-3</button>
      </div>
    </CounterContainer>
  );
});

export default Counter;

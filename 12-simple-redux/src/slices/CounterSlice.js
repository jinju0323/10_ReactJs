import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice 객체 생성
 * -> Slice: 리듀서와 액션함수를 내장하는 객체
 * -> 리듀서: 상태를 변경하는 함수
 * -> 액션함수: 상태값을 변경하는 명령어
 * -> 일반 컴포넌트에서 액션함수를 호출하면 액션함수가 리듀서를 호출하여 상태값을 변경
 */

const CounterSlice = createSlice({
  // 1) Slice 객체의 이름 --> slice객체명과 동일하게 설정
  name: "CounterSlice",

  // 2) 이 모듈이 관리하고자하는 상태값들을 명시 --> 이 안의 변수들은 자유롭게 나열
  initialState: {
    number: 0,
    color: "#000",
  },

  // 3) 상태값을 갱신하기 위한 함수들을 구현한다.
  // -> 파라미터는 state, action으로 고정되어 있다.
  // -> state: 현재 상태값을 가리킨다.
  // -> 컴포넌트에서 이 함수들을 호출할 때 전달되는 파라미터는 `action.payload`로 전달된다.
  // -> initialState와 동일한 구조로 JSON을 리턴해야한다.
  reducers: {
    plus: (state, action) => {
      const numberValue = state.number + action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "#2F77EB";
      } else if (numberValue < 0) {
        colorValue = "#F60";
      }

      return {
        number: numberValue,
        color: colorValue,
      };
    },

    minus: (state, action) => {
      const numberValue = state.number - action.payload;
      let colorValue = "#000";

      if (numberValue > 0) {
        colorValue = "2F77EB";
      } else if (numberValue < 0) {
        colorValue = "#F60";
      }

      return {
        number: numberValue,
        color: colorValue,
      };
    },
  },
});

// 액션함수들 내보내기
export const { plus, minus } = CounterSlice.actions;

// 리듀서 객체 내보내기
export default CounterSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosHelper from "../helpers/AxiosHelper";

// 연동할 백엔드 주소 (에러테스트용)
//const API_URL = '/grade1234';
// 연동할 벡앤드 주소 (정상)
const API_URL = "/grade";

/** Ajax 처리를 위한 함수를 정의 */
export const getList = createAsyncThunk("GradeSlice/getList", async (payload, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axiosHelper.get(API_URL);
  } catch (err) {
    // err 객체는 AxiosHelper에서 throw하는 에러 객체
    result = rejectWithValue(err);
  }

  return result;
});

/** Slice 객체 생성 */
const GradeSlice = createSlice({
  // 1) Slice 객체의 이름 --> slice객체명과 동일하게 설정
  name: "GradeSlice",

  // 2) 이 모듈을 관리하고자하는 상태값들을 명시
  // -> Ajax 처리시 백엔드로부터 전달되는 데이터와 로딩 상태를 저장하기 위한 용도
  initialState: {
    status: 200,
    message: "OK",
    item: null,
    timestamp: null,
    loading: false,
  },

  // 3) 일반 상태값을 갱신하기 위한 함수들을 구현한다. (여기서는 사용 안함)
  reducers: {},

  // 4) 비동기 상태값을 갱신하기 위한 함수들을 구혀한다. (주로 Ajax 처리)
  extraReducers: (builder) => {
    // 백엔드와 연동 직전에 호출된다. --> 로딩중임을 표시
    // meta: { arg, requestId, requestStatus }
    // -> arg: 컴포넌트에서 액션함수를 호출할 때 전달한 파라미터(payload)
    // payload: 백엔드에서 받은 파라미터
    builder.addCase(getList.pending, (state, { meta, payload }) => {
      return { ...state, loading: true };
    });

    // 백엔드와 연동 성공시 호출된다.
    builder.addCase(getList.fulfilled, (state, { meta, payload }) => {
      return {
        status: payload.status,
        message: payload.message,
        item: payload.item,
        timestamp: payload.timestamp,
        loading: false,
      };
    });

    // 백엔드와 연동 실패시 호출된다.
    builder.addCase(getList.rejected, (state, { meta, payload }) => {
      return {
        ...state,
        loading: false,
        status: payload.status || 0,
        message: payload.message || "Unknown Error",
      };
    });
  },
});

// 리듀서 객체 내보내기
export default GradeSlice.reducer;

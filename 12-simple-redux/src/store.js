import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./slices/CounterSlice";
import GradeSlice from "./slices/GradeSlice";
import TrafficAccSlice from "./slices/TrafficAccSlice";

const store = configureStore({
  // 리듀서 설정 --> Slice 객체들을 나열하여 설정
  // Slice ==> 백엔드와 통신하는 비동기 처리를 수행하는 객체
  //           백엔드 URL 1개당 파일 하나씩 생성
  reducer: {
    CounterSlice,
    GradeSlice,
    TrafficAccSlice,
  },
  // 직렬화 가능한 값을 체크하는 미들웨어를 사용하지 않는다. --> for Ajax
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

import React, { useState, useEffect } from "react";

/**
 * 사용자 정의 함수
 * useState 와 useEffect 를 하나의 함수로 묶는 용도로 정의함
 */

const useMyWidth = () => {
  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = useState(window.innerWidth);

  // 사용자 정의 함수 : 브라우저 창 크기 변경 시 호출되는 함수
  // HTML DOM에 연결되는 이벤트가 아니므로 useCallback을 사용할 수 없음
  const onMyResize = () => setMyWidth(window.innerWidth);

  // 페이지 로드시에 이벤트 정의, 페이지 종료시에 이벤트 해제
  useEffect(() => {
    // 브라우저 창 크기 변경 시 onMyResize 함수 호출
    window.addEventListener("resize", onMyResize);
    // 컴포넌트 언마운트 시 이벤트 해제
    return () => window.removeEventListener("resize", onMyResize);
  }, []);

  return myWidth;
};

// 현재 브라우저의 넓이를 반환
export { useMyWidth };

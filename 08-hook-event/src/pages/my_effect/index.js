/**
 * useEffect
 *
 * useEffect는 기본적으로 렌더링 직후마다 실행되며,
 * 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라진다.
 *
 * 렌더링 => 컴포넌트가 화면에 그려지는 것
 *
 * 클래스형 컴포넌트의 componmentDidMount와 componmentDidUpdate를 합친 형태
 */

import React, { memo, useState, useEffect } from "react";

import styled from "styled-components";

import sample from "../../assets/img/sample.jpg";

const MyEffectContainer = styled.div``;

const MyEffect = memo(() => {
  // 예제 확인을 위한 상태값 --> 0~200 사이의 값을 갖는 이미지 밝기
  const [myBrightness, setMyBrightness] = useState(100);

  // 브라우저의 넓이를 의미하는 상태값
  const [myWidth, setMyWidth] = useState(window.innerWidth);

  // 브라우저의 넓이를 상태값에 적용하기 위한 이벤트 핸들러
  const onMyResize = (e) => {
    console.log(`창사이즈 변경됨 >> ${window.innerWidth}`);
    setMyWidth(window.innerWidth);
  };

  // 이벤트 정의를 이 위치에서 수행할 경우 같은 처리를 화면 렌더링시마다 중복으로 수행하게 된다.(not good)
  // window.addEventListener("resize", onMyResize);

  /**
   * CASE 1 ==> 콜백 함수만 파라미터로 전달
   * 이 컴포넌트가 화면에 막 등장할 때와 state값, props값이 변경될 때마다 매번 실행된
   * 지나치게 자주 사용되므로 사용하지 않음
   */
  useEffect(() => {
    // chrome 브라우저 로그 출력 수준에서 "상세" 항복 체크 필요
    console.debug("[CASE 1] %s ::: 화면에 컴포넌트가 처음 로드되거나 state, props 중 하나라도 변경될 경우 호출됨", new Date());
  });

  /**
   * CASE 2 ==> 모너터링 할 상태변수를 두 번째 파라미터로 전달되는 배열에 명시
   * 이 컴포넌트가 화면에 막 등장할 때와 특정 state, props값이 변경될 때만 실행됨
   * 특정 상태값이 변경된 후의 후속 처리를 해야할 경우 구현함
   *
   * ex) 백엔드로부터 Ajax로 전송받은 결과값이 저장될 변수를 useState로 정의할 경우
   *     백엔드로부터 통신이 완료된 직후에 대한 후속 처리르 구현할 수 있다.
   */
  useEffect(() => {
    console.warn("[CASE 2] %s ::: myBrightness 변경됨", new Date());
  }, [myBrightness]);

  /**
   * CASE 3,4 ==> 두 번째 파라미터로 빈 배열을 설정함
   * 이 컴포넌트가 화면에 막 등장함과 동시에 1회 실행됨
   * 유일하게 1회만 자동으로 실행시킬 수 있는 방법이므로 매우 자주 실행됨.
   *
   * 페이지가 열리면서 자동으로 처리되어야 하는 기능 구현에 사용됨
   * ex) GET 방식의 Ajax 호출, window 객체에 대한 이벤트 정의
   *
   * 특히 React의 작동 원리상 컴포넌트는 상태값이 변경될 때 마다 매번 렌더링을 갱신하므로
   * 1회만 실행되어야 하는 로직 구현에 필수 적용
   */
  useEffect(() => {
    console.error("[CASE 3] %s ::: 화면에 컴포넌트가 처음 로드되었을 때 처리되어야 할 기능", new Date());

    // window 객체등과 같이 DOM이외의 객체에게 이벤트를 적용할 경우 useEffect를 활용해서
    // 컴포넌트가 로드될 때 단 1회만 처리하도록 해야 한다.
    window.addEventListener("resize", onMyResize);

    /** [CASE 4] 컴포넌트가 화면에서 사라질 때 호출되는 부분 */
    // 클로저 형태로 정의 (함수를 반환하는 함수)
    return () => {
      console.error("[CASE 4] %s ::: 화면에서 컴포넌트가 사라질 때 처리되어야 할 기능", new Date());

      // 이 화면에서 빠져나갈 때 등록된 이벤트를 제거함
      window.removeEventListener("resize", onMyResize);
    };
  }, []);
  return (
    <MyEffectContainer>
      <h2>MyEffect</h2>

      <img
        alt="Hello React"
        src={sample}
        width={myWidth * 0.3}
        style={{
          filter: "brightness(" + myBrightness + "%)",
        }}
      />

      <div>
        <input type="range" min={0} max={200} step={1} value={myBrightness} onChange={(e) => setMyBrightness(e.currentTarget.value)} />
      </div>
    </MyEffectContainer>
  );
});

export default MyEffect;

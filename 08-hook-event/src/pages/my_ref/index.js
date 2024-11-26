/**
 * useRef
 *
 * VanillaJS에서는 DOM 요소를 선택할 때 document.getElementById()나 document.querySelector()를 사용했지만,
 * React에서는 useRef()를 사용하여 DOM 요소를 선택
 */
import React, { memo, useRef } from "react";

import styled from "styled-components";

import MyBox from "./MyBox";

const MyRefContainer = styled.div``;

const MyRef = memo(() => {
  // HTML 태그를 React안에서 참조할 수 있는 참조변수를 생성
  const myDname = useRef();
  const myLoc = useRef();
  const myReusult = useRef();

  // 자식 컴포넌트에 설정하기 위한 참조변수를 생성
  const myBoxRef = useRef();

  return (
    <MyRefContainer>
      <h2>MyRef</h2>

      {/* 미리 준비한 컴포넌트 참조변수와 HTML 태그를 연결 */}
      <div>
        <label htmlFor="dname">학과명 : </label>
        <input type="text" id="dname" ref={myDname} />
      </div>

      <div>
        <label htmlFor="loc">학과위치 : </label>
        <input type="text" id="loc" ref={myLoc} />
      </div>

      <p>
        입력값 확인 : <span ref={myReusult}></span>
      </p>

      <button
        onClick={(e) => {
          /**
           * 기존의 JavaScript 방식
           * React의 SPA 작동 원리 특성상 사이트 전체에서 id값이 고유해야 한다.
           * 이 방식은 사용하기 매우 어렵다.
           * const dname = document.querySelector("#dname").value;
           * const loc = document.querySelector("#loc").value;
           * document.querySelector("#result").innerHTML = dname + ", " + loc;
           */

          /**
           * 컴포넌트 참조 변수를 사용해서 다른 HTML 태그에 접근 가능
           * --> "참조변수.current" 해당 HTML을 의미하는 JavaScript DOM 객체
           * --> myDname.current와 document.querySelector("#dname")은 동일한 DOM 객체
           */
          console.log(myDname);
          console.log(myLoc);
          console.log(myReusult);

          const dname = myDname.current.value;
          const loc = myLoc.current.value;
          myReusult.current.innerHTML = dname + ", " + loc; // 참조된 DOM 요소의 HTML 콘텐츠 변경
        }}>
        클릭
      </button>

      <hr />

      <h3>컴포넌트에 ref 적용하기</h3>

      {/* MyBox 컴포넌트에 ref 속성을 통해 myBoxRef를 연결 */}
      <MyBox a={100} b={200} ref={myBoxRef} />

      <button
        type="button"
        onClick={() => {
          // MyBox 를 통해 myBoxRef를 주입받은 DOM에 접근하여 제어함
          myBoxRef.current.style.backgroundColor = "#f00"; // 참조된 DOM 요소의 스타일 변경
        }}>
        Red
      </button>

      <button
        type="button"
        onClick={() => {
          // MyBox 를 통해 myBoxRef를 주입받은 DOM에 접근하여 제어함
          myBoxRef.current.style.backgroundColor = "#00f"; // 참조된 DOM 요소의 스타일 변경
        }}>
        Blue
      </button>
    </MyRefContainer>
  );
});

export default MyRef;

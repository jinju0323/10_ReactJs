import React, { forwardRef } from "react";

import styled from "styled-components";

const MyBoxContainer = styled.div`
  border: 3px solid #0066ff;
  text-align: center;
  width: 300px;
`;

/**
 * 부모로부터 전달받은 ref 참조변수를 받기 위해 "React.forwardRef" hook에 대한 콜백으로 컴포넌트를 구현
 * 이렇게 구현된 컴포넌트는 props와 부모로부터 전달받은 ref 참조변수를 파라미터로 주입받는다.
 */
// React의 forwardRef를 사용하여 부모 컴포넌트로부터 전달받은 ref를 자식 컴포넌트에 전달
const MyBox = forwardRef(({ a, b }, ref) => {
  return (
    // 부모로부터 전달받은 참조변수(ref)를 h2 요소에 연결
    <MyBoxContainer>
      <h2 ref={ref}>MyBox</h2>
      <p>
        {/* props로 전달받은 a와 b 값을 출력 */}
        a={a}, b={b}
      </p>
    </MyBoxContainer>
  );
});

// MyBox 컴포넌트를 기본 내보내기로 설정하여 다른 파일에서 import할 수 있게 함
export default MyBox;

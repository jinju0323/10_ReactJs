import React from "react";

import Meta from "../../components/Meta";

/**
 * 3-1) /src 폴더 하위의 임의의 경로에 존재하는 이미지 파일을 참조
 * 현재 소스 파일을 기준으로 하는 상대경로로 지정
 * 실행시에는 react에 의해 다른 경로로 복사된다.
 */
import sample from "../../assets/img/sample.png";

const InlineCss = () => {
  /**
   * 1-1) CSS로 사용될 JSON 객체 정의
   * CSS 속성이름은 바닐라스크립트의 프로퍼티 이름으로 지정해야 함
   */
  const myStyle = {
    backgroundColor: "lightblue",
    fontSize: "20px",
    color: "#333",
    fontWeight: "bold",
    padding: "10px",
    marginBoottom: "10px",
  };

  return (
    <div>
      <Meta title="InlineCss" description="inline-css" />
      <h2>InlineCss</h2>

      <h3>변수로 정의된 CSS 참조하기</h3>
      {/* 1-2) JSON객체를 style 속성에 적용 */}
      <div style={myStyle}>Inline CSS (1)</div>

      <h3>직접 CSS 코딩하기</h3>
      {/* 2) CSS 직접 코딩 */}
      <div style={{ backgroundColor: "lightgreen", fontSize: "20px", color: "#333", fontWeight: "bold", padding: "10px", marginBoottom: "10px" }}>
        Inline CSS (2)
      </div>

      <h3>이미지 참조하기</h3>
      {/* 3-2) 이미지 참조 */}
      <img src={sample} width="240" height="240" alt="sample" />

      {/* 3-3) public 폴더에 있는 파일들은 단순 절대 경로로 참조 가능함
               public 폴더 하위에 임의의 폴더 생성 가능 */}
      <img src="/logo192.png" width="240" height="240" alt="sample" />
    </div>
  );
};

export default InlineCss;

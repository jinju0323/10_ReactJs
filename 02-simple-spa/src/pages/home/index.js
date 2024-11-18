import React from "react";

// import할때 폴더 경로까지만 지정할 경우 index.js가 자동으로 식별된다.
// 함수 이름은 개발자 자율이지만 여기서는 index 파일의 경우 폴더 이름을 함수 이름으로 지정
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <h2>여기는 Home입니다.</h2>
    </div>
  );
};

export default Home;

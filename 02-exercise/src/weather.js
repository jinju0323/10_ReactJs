import React from "react";
import { useParams } from "react-router-dom";

const Weather = () => {
  // URL 파라미터에서 'day' 값을 가져옴
  const params = useParams();
  const day = params.day; // URL 파라미터 이름이 'day'라고 가정

  // 요일별 날씨 데이터
  const weatherData = {
    mon: ["맑음", "맑음"],
    tue: ["비", "맑음"],
    wed: ["맑음", "흐림"],
    thu: ["맑음", "흐림"],
    fri: ["흐림", "흐림"],
    sat: ["비", "맑음"],
    sun: ["맑음", "맑음"],
  };

  // URL 파라미터로 받은 요일에 해당하는 날씨 데이터를 가져옴
  const weather = weatherData[day];

  return (
    <div>
      <h2>오전</h2>
      {/* 오전 날씨 표시 */}
      <p>{weather[0]}</p>
      <h2>오후</h2>
      {/* 오후 날씨 표시 */}
      <p>{weather[1]}</p>
    </div>
  );
};

export default Weather;

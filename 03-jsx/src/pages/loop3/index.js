/**
 * jsx 반복 처리 (3) - map() 함수를 사용한 배열 원소 탐색 축양형
 */
import React from "react";

const Loop3 = () => {
  // 화면에 표시할 데이터
  const seasons = ["봄", "여름", "가을", "겨울"];

  return (
    <div>
      <h2>Loop3</h2>
      <table border={1}>
        <tbody>
          <tr>
            {/* {seasons.map((v, i) => {
              return <td key={i}>{v}</td>
            })} */}
            {seasons.map((v, i) => (
              <td key={i}>{v}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Loop3;

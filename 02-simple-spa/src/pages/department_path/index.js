/**
 * PATH 파라미터를 전달받는 페이지
 */
import React from "react";

// PATH 파라미터 추출 기능을 갖는 useParams() 함수를 react-router-dom 패키지로부터 참조함
import { useParams } from "react-router-dom";

const DepartmentPath = () => {
  // useParams 훅을 사용하여 URL 경로에서 파라미터를 추출함
  const params = useParams();

  // 추출된 파라미터 값을 콘솔에 출력하여 확인
  console.group("useParams()의 리턴값 확인");
  console.debug(params);
  console.groupEnd();

  // 추출된 파라미터의 값과 타입을 콘솔에 출력하여 확인
  console.debug("요청된 학과번호 값=%s (%s)", params.id, typeof params.id);
  console.debug("요청된 메시지 내용=%s (%s)", params.msg, typeof params.msg);
  console.groupEnd();

  // 한페이지에서 GET 파라미터에 따라 다르게 표현할 데이터 준비
  // 실전에서는 이 값에 해당하는 JSON을 백엔드로부터 받아와야한다. ==> Ajax
  const departmentList = {
    item: [
      { id: 201, dname: "전자공학과", loc: "3호관" },
      { id: 202, dname: "기계공학관", loc: "4호관" },
    ],
  };

  // 추출된 학과번호에 해당하는 학과 정보를 찾음
  const departmentItem = departmentList.item.find((v, i) => v.id === parseInt(params.id));

  // 조회 결과가 없는 경우
  if (!departmentItem) {
    return <h3>조회된 학과가 없습니다.</h3>;
  }

  // 조회 결과가 있는 경우 해당 학과 정보를 화면에 출력
  return (
    <div>
      <h1>DepartmentPath</h1>
      <h2>{departmentItem.dname}</h2>
      <ul>
        <li>학과번호: {departmentItem.id}</li>
        <li>학과위치: {departmentItem.loc}</li>
      </ul>
    </div>
  );
};

export default DepartmentPath;

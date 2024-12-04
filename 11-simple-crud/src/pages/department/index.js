import React, { memo, useState, useCallback, useEffect } from "react";

import styled from "styled-components";

import axiosHelper from "../../helpers/AxiosHelper";
import utilHelper from "../../helpers/UtilHelper";

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";

// useNavigate : 페이지 이동을 위한 Hook
// useLocation : 현재 페이지의 URL 정보를 가져오는 Hook : QueryString을 가져오기 위해 사용
import { useNavigate, useLocation } from "react-router-dom";

const DepartmentContainer = styled.div`
  .form-container {
    padding: 10px 0;
    margin: 0;

    select {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Department = memo(() => {
  // 화면에 표시할 상태값(Ajax 연동 결과로 받아올 json) --> 초기값을 빈 배열로 정의
  // Ajax 처리는 비동기이므로 데이터를 받아오는 처리의 완료 여부와 상관없이 화면 출력이 먼저 수행
  // 그러므로 Ajax의 결과를 상태값에 저장하여 데이터를 받아온 후 화면이 자동 갱신되도록 처리
  const [department, setDepartment] = useState([]);

  // 현재 Ajax 데이터를 로딩중인지를 의미하는 상태값
  const [loading, setLoading] = useState(false);

  // 페이지 강제 이동을 위한 객체 생성
  const navigate = useNavigate();

  /** 검색 기능 type (1) */
  // 검색어를 저장하기 위한 상태변수
  // const [keyword, setKeyword] = useState("");

  /** 검색 기능 type (2) */
  // QueryString에 포함된 keyword 값을 취득
  const { search } = useLocation();
  const { keyword } = utilHelper.getQuery(search);

  /** 페이지가 처음 열렸을 떄 실행할 hook */
  // hook에 전달되는 콜백 함수에 직접적으로 async를 적용할 수 없다.
  useEffect(() => {
    (async () => {
      // Ajax 로딩 시작을 알림 --> 함수형 업데이트
      setLoading(true);

      // Ajax의 결과를 저장할 변수 준비
      let date = null;

      // 검색어가 존재하는 경우
      const args = {};
      if (keyword) {
        args["dname_like"] = keyword;
      }

      try {
        // React Router에 정의되지 않고, public 폴더에도 맵핑되는 경로가 없을 경우
        // package.json에 설정된 proxy 경로를 기준으로 Ajax 요청을 보낸다.
        // 즉 --> http://localhost:8080/department
        date = await axiosHelper.get("/department", args);
        console.log(date);
      } catch (e) {
        console.error(e);
        alert(e.message);
      } finally {
        // Ajax 로딩 종료를 알림
        setLoading(false);
      }

      // Ajax의 요청 결과를 상태값에 저장
      // id 값을 기준으로 정렬
      setDepartment(date.item.sort((a, b) => a.id - b.id));
    })();
  }, [keyword]);

  /** 검색폼에서의 전송(submit) 이벤트 */
  const onSearchSubmit = useCallback((e) => {
    e.preventDefault();

    // 이벤트가 발생한 폼 자신
    const form = e.currentTarget;

    // 폼안의 input 태그에 name속성으로 접근하여 입력값 취득
    const keyword = form.keyword.value;
    console.log(`검색어 : ${keyword}`);

    // setKeyword(keyword);

    // 검색어를 QueryString으로 지정하여 페이지를 이동한다.
    // 실제로는 페이지 이동이 아니라 URL 변조만 이루어 진다.
    // 하지만 웹 브라우저는 주소가 변경되었으므로 이동으로 인식한다.
    // --> 페이지 이동으로 인식되면 리액트는 화면상의 모든 컴포넌트를 다시 랜더링한다.
    // --> 즉, URL이 변경되면 화면에 표시되는 컴포넌트가 처음부터 재실행된다는 의미다.
    navigate(`/department?keyword=${keyword}`);
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>

      <Spinner loading={loading} />

      {/* 검색폼 */}
      <form className="form-container" onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" defaultValue={keyword} />
        <button type="submit">검색</button>
      </form>

      <Table>
        <thead>
          <tr>
            <th>학과번호</th>
            <th>학과명</th>
            <th>학과위치</th>
            <th>수정</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {department.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                {keyword ? (
                  <td dangerouslySetInnerHTML={{ __html: v.dname.replaceAll(keyword, `<mark>${keyword}</mark>`) }}></td>
                ) : (
                  <td>{v.dname}</td>
                )}
                <td>{v.loc}</td>
                <td>수정</td>
                <td>삭제</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </DepartmentContainer>
  );
});

export default Department;

import React, { memo, useState, useCallback, useEffect } from "react";

import styled from "styled-components";

// Ajax 처리를 위한 AxiosHelper 참조
import axiosHelper from "../../helpers/AxiosHelper";

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
  const [department, setDepartment] = useState([]);

  const [loading, setLoading] = useState(false);

  /** 검색 기능 type (1) */
  // 검색어를 저장하기 위한 상태변수
  const [keyword, setKeyword] = useState("");

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
        date = await axiosHelper.get("/department", args);
        console.log(date);
      } catch (e) {
        console.error(e);
        alert(e.message);
      } finally {
        setLoading(false);
      }

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

    setKeyword(keyword);
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>

      <Spinner loading={loading} />

      {/* 검색폼 */}
      <form className="form-container" onSubmit={onSearchSubmit}>
        <input type="text" name="keyword" />
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

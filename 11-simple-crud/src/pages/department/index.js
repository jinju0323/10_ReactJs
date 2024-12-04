import React, { memo, useState, useCallback, useEffect } from "react";

import styled from "styled-components";

// Ajax 처리를 위한 AxiosHelper 참조
import axiosHelper from "../../helpers/AxiosHelper";

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";

const DepartmentContainer = styled.div``;

const Department = memo(() => {
  const [department, setDepartment] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);

      let date = null;

      try {
        date = await axiosHelper.get("/department");
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
  }, []);

  return (
    <DepartmentContainer>
      <h2>Department</h2>

      <Spinner loading={loading} />

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
                <td>{v.dname}</td>
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

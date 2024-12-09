import React, { memo, useEffect } from "react";

import styled from "styled-components";

import Spinner from "../../components/Spinner";

// 상태값을 로드하기 위한 hook과 action함수를 dispatch하기 위한 hook 참조
import { useSelector, useDispatch } from "react-redux";

import { getList } from "../../slices/TrafficAccSlice";

import Table from "../../components/Table";

const TrafficAccContainer = styled.div`
  .error-info {
    border: 2px solid #f06;
    padding: 10px 30px;
    background-color: #fee;

    h1 {
      color: #f06;
      margin-top: 0;
      margin-bottom: 10px;
    }

    p {
      color: #f06;
      margin: 0;
      margin-bottom: 10px;
    }
  }
`;

const TrafficAcc = memo(() => {
  const { loading, status, message, item } = useSelector((state) => state.TrafficAccSlice);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <TrafficAccContainer>
      <h2>TrafficAcc</h2>
      <Spinner loading={loading} />

      {status !== 200 && (
        <div className="error-info">
          <h1>{status}Error</h1>
          <p>{message}</p>
        </div>
      )}

      {item && (
        <Table>
          <thead>
            <tr>
              <th>번호</th>
              <th>년도</th>
              <th>월</th>
              <th>교통사고</th>
              <th>사망자 수</th>
              <th>부상자 수</th>
            </tr>
          </thead>
          <tbody>
            {item.map((v, i) => {
              return (
                <tr key={i}>
                  <td>{v.id}</td>
                  <td>{v.year}</td>
                  <td>{v.month}</td>
                  <td>{v.accident.toLocaleString()}</td>
                  <td>{v.death.toLocaleString()}</td>
                  <td>{v.injury.toLocaleString()}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </TrafficAccContainer>
  );
});

export default TrafficAcc;

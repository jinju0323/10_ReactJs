import React, { memo } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector } from "react-redux";

const Graph3Container = styled.div`
  background-color: #90ee9030;
  flex: 1 0 50%;

  .container {
    background-color: #90ee9030;
    margin: 10px;
    height: 50px;
  }
`;

const Graph3 = memo(() => {
  /** 기본 데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  return (
    <Graph3Container>
      <div className="container"></div>
      {/*{item && <p>{JSON.stringify(item).substring(0, 50)}</p>}*/}
    </Graph3Container>
  );
});

export default Graph3;

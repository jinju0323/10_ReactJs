import React, { memo, useEffect, useState } from "react";
import styled from "styled-components";

/** 컴포넌트 참조 */
import Spinner from "../../components/Spinner";
import mq from "../../components/MediaQuery";

/** 리덕스 관련 */
import { useDispatch, useSelector } from "react-redux";
import { getList } from "../../slices/BestProductsSlice";

/** 개별 그래프 가져오기 */
import BestProdMGraph from "./BestProdMGraph";
import BestProdWGraph from "./BestProdWGraph";

const BestProdDashBoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  padding: 20px;
  width: 50%;
  margin: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);

  .prod-info {
    width: 100%;
    text-align: center;

    .title {
      font-size: 25px;
      font-weight: bold;
      margin-bottom: 20px;
      color: #333;
    }

    .graph-select {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      justify-content: end;
      margin-right: 30px;
      color: #333;
      font-weight: 700;
    }
  }

  ${mq.maxWidth("md")`
        width: 100%;
    `}
`;

const BestProdDashBoard = memo(() => {
  /** 기본데이터 처리 */
  const { loading, monthly, weekly } = useSelector((state) => state.BestProductsSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  /** 그래프 선택 */
  const [selectedGraph, setSelectedGraph] = useState("monthly");

  const handleGraphChange = (e) => {
    setSelectedGraph(e.target.value);
  };

  return (
    <BestProdDashBoardContainer>
      <Spinner loading={loading} />
      {/* /* 인기상품 그래프 */}
      <div className="prod-info">
        <span className="title">📌 인기상품 그래프</span>
        {/* 드롭다운 형식으로 선택 */}
        <div className="graph-select">
          기간 설정 :&nbsp;
          <select value={selectedGraph} onChange={handleGraphChange}>
            <option value="monthly">월 Top10</option>
            <option value="weekly">주 TOP5</option>
          </select>
        </div>

        {/* 선택된 그래프를 조건부로 렌더링 */}
        {selectedGraph === "monthly" && <BestProdMGraph />}
        {selectedGraph === "weekly" && <BestProdWGraph />}
      </div>
    </BestProdDashBoardContainer>
  );
});

export default BestProdDashBoard;

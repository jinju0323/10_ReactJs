import React, { memo, useEffect, useState } from "react";
import mq from "../../components/MediaQuery";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";

/** 개별 그래프 가져오기 */
import { getList } from "../../slices/SalesSlice";
import SalesWeekGraph from "./SalesWeekGraph";
import SalesMonthGraph from "./SalesMonthGraph";

const SalesDashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: rgba(255, 99, 132, 0.1);
  border-radius: 10px;
  padding: 20px;
  width: 50%;

  .sales-info {
    width: 100%;
  }

  ${mq.maxWidth("md")`
        width: 100%;
    `}
`;

const SalesDashboard = memo(() => {
  /** 기본 데이터 처리 */
  const { weekly, monthly } = useSelector((state) => state.SalesSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  /** 그래프 선택 */
  const [selectedGraph, setSelectedGraph] = useState("week");

  return (
    <SalesDashboardContainer>
      {/* JSON데이터 확인 (임시) */}
      {/* {weekly && <p>{JSON.stringify(weekly)}</p>} */}

      {/* 총 매출 그래프 */}
      <div className="sales-info">
        <h3>총 매출 그래프</h3>
        {/* 라디오 버튼을 사용하여 그래프 선택 */}
        <div>
          기간 설정 :&nbsp;
          <label>
            <input type="radio" value="week" checked={selectedGraph === "week"} onChange={() => setSelectedGraph("week")} />
            1주일 간의 일별&nbsp;
          </label>
          <label>
            <input type="radio" value="month" checked={selectedGraph === "month"} onChange={() => setSelectedGraph("month")} />
            1개월 간의 주별
          </label>
        </div>

        {/* 선택된 그래프를 조건부로 렌더링 */}
        {selectedGraph === "week" && <SalesWeekGraph />}
        {selectedGraph === "month" && <SalesMonthGraph />}

        {/* 주간 그래프 */}
        {/* <SalesWeekGraph /> */}
        {/* 월간 그래프 */}
        {/* <SalesMonthGraph /> */}
      </div>
    </SalesDashboardContainer>
  );
});

export default SalesDashboard;

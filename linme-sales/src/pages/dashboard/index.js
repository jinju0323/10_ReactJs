import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";

/** 개별 그래프 가져오기 */
import { getList } from "../../slices/SalesSlice";
import SalesDashboard from "./SalesDashboard";

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Dashboard = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getList());
  }, []);

  return (
    <DashboardContainer>
      {/* 총 매출 그래프 (1개월 간의 주별/1주일 간의 일별) */}
      <SalesDashboard />
    </DashboardContainer>
  );
});

export default Dashboard;

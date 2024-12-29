import React, { memo, useEffect, useState } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";

/** 개별 그래프 가져오기 */
import SalesDashboard from "./SalesDashboard";
import BestProdDashBoard from "./BestProdDashBoard";

const DashboardContainer = styled.div`
  display: flex;
`;

const Dashboard = memo(() => {
  return (
    <DashboardContainer>
      {/* 1. 총 매출 그래프 (1개월 간의 주별/1주일 간의 일별) */}
      <SalesDashboard />

      {/* 2. 신규 회원 추이 (1개월 간의 주별/1주일 간의 일별) */}

      {/* 3. 인기 상품 순위 차트 (1개월 간의 주별/1주일 간의 일별) */}
      <BestProdDashBoard />

      {/* 4. 카테고리별 판매 비중 (1개월 간의 주별/1주일 간의 일별) */}
    </DashboardContainer>
  );
});

export default Dashboard;

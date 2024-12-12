import React, { memo, useMemo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";

// 리덕스 관련
import { useSelector } from "react-redux";

// chart.js 관련
import {
  // 공통항목
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,

  // 막대 그래프
  BarElement,
  plugins,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// chart.js 에서 import한 Chaet 클래스에 나머지 import 요소들을 등록한다
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

const Graph3Container = styled.div`
  width: 50%;

  ${mq.maxWidth("md")`
    width: 100%;
  `}

  .container {
    /* background-color: #1492ff77; */
    margin: 10px;
    height: 300px;
  }
`;

const Graph3 = memo(() => {
  // 기본 데이터 처리
  const { item } = useSelector((state) => state.TitanicSlice);

  // 성별 탑승객 현황
  const sex = useMemo(() => {
    if (!item) {
      return [0, 0];
    }

    const maleData = item.reduce(
      (acc, cur) => {
        acc[cur.sex == "male" ? 0 : 1]++;
        return acc;
      },
      [0, 0]
    );

    console.group("Graph3");
    console.log(maleData);
    console.groupEnd();

    return maleData;
  }, [item]);

  return (
    <Graph3Container>
      <div className="container">
        {sex && (
          <Bar
            data={{
              labels: ["male", "female"], // x 축
              datasets: [
                {
                  label: "명",
                  data: sex,
                  backgroundColor: ["#03a9fc66", "#fc033d66"],
                  borderColor: ["#03a9fc", "#fc033d"],
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              Responsive: true,
              maintainAspectRatio: false,
              indexAxis: "y",
              plugins: {
                legend: {
                  position: "bottom",
                },
                title: {
                  display: true,
                  text: "성별 탑승객 집계",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}></Bar>
        )}
      </div>
    </Graph3Container>
  );
});

export default Graph3;

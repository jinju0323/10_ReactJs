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

const Graph4Container = styled.div`
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

const Graph4 = memo(() => {
  // 기본 데이터 처리
  const { item } = useSelector((state) => state.TitanicSlice);

  // 성별 생존 여부
  const { survived, dead } = useMemo(() => {
    if (!item) {
      return { survived: [0, 0], dead: [0, 0] };
    }

    const maleData = item.reduce(
      (acc, cur) => {
        const idx = cur.sex == "male" ? 0 : 1;
        const key = cur.survived ? "survived" : "dead";
        acc[key][idx]++;
        return acc;
      },
      { survived: [0, 0], dead: [0, 0] }
    );

    console.group("Graph4");
    console.log(maleData);
    console.groupEnd();

    return maleData;
  }, [item]);

  return (
    <Graph4Container>
      <div className="container">
        {survived && dead && (
          <Bar
            data={{
              labels: ["male", "female"],
              datasets: [
                {
                  label: "생존",
                  data: survived,
                  backgroundColor: "#03a9fc66",
                  borderColor: "#03a9fc",
                  borderWidth: 1,
                },
                {
                  label: "사망",
                  data: dead,
                  backgroundColor: "#fc033d66",
                  borderColor: "#fc033d",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              indexAxis: "y",
              plugins: {
                legend: {
                  position: "bottom",
                },
                title: {
                  display: true,
                  text: "성별 생존여부 집계",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}></Bar>
        )}
      </div>
    </Graph4Container>
  );
});

export default Graph4;

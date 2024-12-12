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

const Graph2Container = styled.div`
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

const Graph2 = memo(() => {
  /** 기본 데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  /** 연령별 탑승객 현황 */
  const { keys, survived, dead } = useMemo(() => {
    if (!item) {
      return { key: [], survived: [], dead: [] };
    }

    console.group("Graph2");

    const ageData = item.reduce((acc, cur) => {
      const ageLevel = `${parseInt(cur.age / 10) * 10}대`;

      if (acc[ageLevel] == undefined) {
        acc[ageLevel] = { survived: 0, dead: 0 };
      }

      if (cur.survived) {
        acc[ageLevel].survived++;
      } else {
        acc[ageLevel].dead++;
      }

      return acc;
    }, {});

    console.log(ageData);

    const keys = Object.keys(ageData).sort();
    console.log(keys);

    const survived = keys.map((v, i) => ageData[v].survived);
    console.log(survived);

    const dead = keys.map((v, i) => ageData[v].dead);
    console.log(dead);

    const result = { keys, survived, dead };
    console.log(result);

    return result;
  }, [item]);

  return (
    <Graph2Container>
      <div className="container">
        {keys && survived && dead && (
          <Bar
            data={{
              labels: keys,
              datasets: [
                {
                  label: "생존",
                  data: survived,
                  backgroundColor: "rgba(53, 162, 235, 0.2)",
                  borderColor: "rgba(53, 162, 235, 1)",
                  borderWidth: 1,
                },
                {
                  label: "사망", // x축
                  data: dead,
                  backgroundColor: "rgba(255, 99, 132, 0.2)",
                  borderColor: "rgba(255, 99, 132, 1)",
                  borderWidth: 1,
                },
              ],
            }}
            options={{
              Responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "bottom",
                },
                title: {
                  display: true,
                  text: "연령별 생존여부 집계",
                  font: {
                    size: 18,
                    color: "#000",
                  },
                },
              },
            }}></Bar>
        )}
      </div>
    </Graph2Container>
  );
});

export default Graph2;

/**
 * Chartjs 2
 * - Chartjs 2는 기본 Javascript에서 그래프를 표시해 주는 기능을 하는 라이브러리
 * - ReactChartjs 2라는 Wrapper 라이브러리를 통해 React에서 사용 가능
 *
 * https://react-chartjs-2.js.org/
 *
 * yarn add chart.js react-chartjs-2
 */
import React, { memo, useMemo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";

/** 리덕스 관련 */
import { useSelector } from "react-redux";

/** chart.js 관련 */
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

// Chart.js 에서 import한 Chart클래스에서 나머지 import 요소들을 등록한다.
Chart.register(CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);

const Graph1Container = styled.div`
  /* background-color: #f001; */
  width: 50%;

  .container {
    /* background-color: #f001; */
    margin: 10px;
    height: 300px;
  }

  ${mq.maxWidth("md")`
      width: 100%;
  `}
`;

const Graph1 = memo(() => {
  /** 기본 데이터 처리 */
  const { item } = useSelector((state) => state.TitanicSlice);

  /** 연령별 탑승객 현황 */
  const { keys, values } = useMemo(() => {
    if (!item) {
      return { keys: null, values: null };
    }

    console.group("Graph1");

    const ageData = item.reduce((acc, cur) => {
      const ageLevel = `${parseInt(cur.age / 10) * 10}대`;

      if (acc[ageLevel] == undefined) {
        acc[ageLevel] = 1;
      } else {
        acc[ageLevel]++;
      }

      return acc;
    }, {});

    console.log(ageData);

    const keys = Object.keys(ageData).sort();
    console.log(keys);

    const values = keys.map((v) => ageData[v]);
    console.log(values);

    const result = { keys, values };
    console.log(result);

    console.groupEnd();

    return result;
  }, [item]);

  return (
    <Graph1Container>
      <div className="container">
        {/*{keys && JSON.stringify(keys)}
        <br />
        {values && JSON.stringify(values)}*/}
        <Bar
          data={{
            labels: keys,
            datasets: [
              {
                label: "명",
                data: values,
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgba(255, 99, 132, 1)",
                borderWidth: 1,
              },
            ],
          }}
          options={{
            // 반응형 기능 사용
            responsive: true,
            // 세로 높이를 스스로 설정 (false인 경우 부모에 맞춤)
            maintainAspectRatio: false,
            plugins: {
              // 범주의 위치
              legend: {
                position: "bottom",
              },
              title: {
                display: true,
                text: "연령별 탑승객 집계",
                font: {
                  size: 18,
                  color: "#000",
                },
              },
            },
          }}
        />
      </div>
    </Graph1Container>
  );
});

export default Graph1;

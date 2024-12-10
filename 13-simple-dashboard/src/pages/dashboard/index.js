import React, { memo, useEffect, useMemo } from "react";

import styled from "styled-components";

/** 리덕스 관련 */
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../slices/TitanicSlice";

/** 컴포넌트 관련 */
import Spinner from "../../components/Spinner";
// https://www.npmjs.com/package/react-countup
import CountUp from "react-countup";

const DashboardContainer = styled.div`
  .counter-box {
    display: flex;
    justify-content: space-between;

    .my-counter {
      margin: 0 10px;
      width: 25%;
      height: 140px;
      background-color: #06f6;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      h2 {
        font-size: 20px;
        font-weight: 600;
        margin: 0;
        font-weight: normal;
        color: #fff;
        margin-bottom: 10px;
      }

      .my-counter-number {
        font-size: 45px;
        font-weight: 700;
        margin: 0;
        color: #fff;

        &.per:after {
          content: "%";
        }
      }
    }
  }
`;

const Dashboard = memo(() => {
  /** 기본 데이터 처리 */
  const { loading, status, message, item } = useSelector((state) => state.TitanicSlice);

  // dispatch 함수 생성
  const dispatch = useDispatch();

  // 컴포넌트가 마운트되면 데이터 조회를 위한 액션함수를 디스패치 함
  useEffect(() => {
    dispatch(getList());
  }, []);

  /** 백엔드로부터 데이터를 받아온 후 필요한 집계 데이터 생성 */
  const [totalPassenger, totalSurvived, totalDead, survivalRate] = useMemo(() => {
    if (!item) {
      return [0, 0, 0, 0];
    }

    // 전체 탑승객 수 측정 (전체 길이 계산)
    const totalPassenger = item.length;

    // 전체 생존자 vs 사망자 수 측정 (json 데이터에서 survived가 true면 생존)
    // filter 함수를 사용하여 생존자와 사망자를 구분한다.
    const totalSurvived = item.filter((v, i) => v.survived).length;

    // 전체 사망자 수
    const totalDead = totalPassenger - totalSurvived;

    // 생존율 계산
    const survivalRate = (totalSurvived / totalPassenger) * 100;

    return [totalPassenger, totalSurvived, totalDead, survivalRate];
  }, [item]);

  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <Spinner loading={loading} />

      {status !== 200 && (
        <div className="error-info">
          <h1>{status}Error</h1>
          <p>{message}</p>
        </div>
      )}

      <div className="counter-box">
        <div className="my-counter">
          <h2>전체 탑승객 수</h2>
          <CountUp
            start={1} // 시작값
            end={totalPassenger} // 종료값
            duration={5} // 3초동안 애니메이션 가동(기본값=2초)
            enableScrollSpy // 스크롤 감지
            scrollSpyDelay={1000} // 1초 후에 스크롤 감지
            className="my-counter-number"
          />
        </div>
        <div className="my-counter">
          <h2>생존자 수</h2>
          <CountUp
            start={1} // 시작값
            end={totalSurvived} // 종료값
            duration={5} // 3초동안 애니메이션 가동(기본값=2초)
            enableScrollSpy // 스크롤 감지
            scrollSpyDelay={1000} // 1초 후에 스크롤 감지
            className="my-counter-number"
          />
        </div>
        <div className="my-counter">
          <h2>사망자 수</h2>
          <CountUp
            start={1} // 시작값
            end={totalDead} // 종료값
            duration={5} // 3초동안 애니메이션 가동(기본값=2초)
            enableScrollSpy // 스크롤 감지
            scrollSpyDelay={1000} // 1초 후에 스크롤 감지
            className="my-counter-number"
          />
        </div>
        <div className="my-counter">
          <h2>생존율</h2>
          <CountUp
            start={1} // 시작값
            end={survivalRate} // 종료값
            duration={5} // 3초동안 애니메이션 가동(기본값=2초)
            enableScrollSpy // 스크롤 감지
            scrollSpyDelay={1000} // 1초 후에 스크롤 감지
            className="my-counter-number per"
          />
        </div>
      </div>

      {/* JSON데이터 확인 (임시) */}
      {/* {item && <p>{JSON.stringify(item)}</p>} */}
    </DashboardContainer>
  );
});

export default Dashboard;

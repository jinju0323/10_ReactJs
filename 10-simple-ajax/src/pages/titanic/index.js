import React, { memo, useState, useEffect, useCallback } from "react";

import styled from "styled-components";

// Ajax 처리를 위한 AxiosHelper 참조
import axiosHelper from "../../helpers/AxiosHelper";

import Table from "../../components/Table";
import Spinner from "../../components/Spinner";
import { SexLabel, EmbarkedLabel, SurvivedLabel } from "./Labels";

const TitanicContainer = styled.div`
  /* new 1) 드롭다운 박스를 가로로 나열하기 위한 스타일 */
  .dropdown-container {
    padding: 10px 0;
    margin: 0;

    select {
      margin-right: 15px;
      font-size: 16px;
      padding: 5px 10px;
    }
  }
`;

const Titanic = memo(() => {
  // Ajax 결과를 저장할 변수
  // Ajax 결과는 배열로 저장 (item이 배열 구조)
  const [titanicData, setTitanicData] = useState([]);

  // 로딩 상태를 처리할 상태 변수
  const [loading, setLoading] = useState(false);

  /** new 3) 드롭다운의 선택을 저장하기 위한 상태변수 */
  const [sex, setSex] = useState("");
  const [embarked, setEmbarked] = useState("");
  const [survived, setSurvived] = useState("");

  // 컴포넌트 렌더링과 동시에 실행되기 위한 Hook
  useEffect(() => {
    console.log(`성별 ${sex}, 탑승지 ${embarked}, 생존여부 ${survived}`);

    //상태변수의 값이 존재할 경우에만 JSON에 추가 (JSON 서버 특성상 값이 없으면 반환되는 데이터가 없다.)
    const args = {};

    if (sex) {
      args["sex"] = sex;
    }

    if (embarked) {
      args["embarked"] = embarked;
    }

    if (survived) {
      args["survived"] = survived == "true";
    }

    console.group("백엔드에 전달할 파라미터");
    console.log(args);
    console.groupEnd();

    // Ajax 처리를 위한 비동기 구조
    // 함수를 정의하면서 즉시실행 함수
    (async () => {
      // Ajax 처리
      let data = null;

      // 로딩 상태를 true로 변경
      setLoading(true);

      try {
        // 인위적으로 지연 시간을 추가
        // await new Promise((resolve) => setTimeout(resolve, 2000));

        data = await axiosHelper.get("/titanic", args);
        console.log(data);
      } catch (e) {
        alert(e.message);
        return;
      }

      // Ajax 결과를 상태변수에 적용
      setTitanicData(data.item);

      // 로딩 상태를 false로 변경
      setLoading(false);
    })();
  }, [sex, embarked, survived]);

  /** new 4) 드롭다운 박스 선택값을 변경 이벤트 처리 */
  // 성별 선택에 대한 이벤트 --> 설명을 위해 자세히 코딩함
  const onSexSelectChange = useCallback((e) => {
    e.preventDefault();

    // 드롭다운의 입력값 취득(JS 순정 코드)
    // const current = e.currentTarget;
    // const choiceIndex = current.selectedIndex;
    // const choice = current[choiceIndex].value;
    // console.log(`선택된 값: ${choice}`);

    // React는 배열 없이 직접 접근도 가능
    const choice = e.currentTarget.value;
    console.log(`선택된 값: ${choice}`);

    // 선택된 값을 상태변수에 저장
    setSex(e.currentTarget.value);
  }, []);

  // 탑승지와 생존여부 선택에 대한 이벤트 처리 --> 간략한 표현법 사용
  const onEmbarkedSelectChange = useCallback((e) => {
    setEmbarked(e.currentTarget.value);
  }, []);
  const onSurvivedSelectChange = useCallback((e) => {
    setSurvived(e.currentTarget.value);
  }, []);

  return (
    <TitanicContainer>
      <h2>Titanic</h2>

      {/* 로딩바 */}
      <Spinner loading={loading} />

      {/* new 2) 검색 조건 드롭다운 박스 */}
      <div className="dropdown-container">
        <select name="sex" onChange={onSexSelectChange}>
          <option value="">-- 성별 선택 --</option>
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>

        <select name="embarked" onChange={onEmbarkedSelectChange}>
          <option value="">-- 탑승지 선택 --</option>
          <option value="C">셰르브루</option>
          <option value="Q">퀸즈타운</option>
          <option value="S">사우스햄튼</option>
        </select>

        <select name="survived" onChange={onSurvivedSelectChange}>
          <option value="">-- 생존여부 선택 --</option>
          <option value="true">생존</option>
          <option value="false">사망</option>
        </select>
      </div>

      <Table>
        <thead>
          <tr>
            <th>승객번호</th>
            <th>승객이름</th>
            <th>성별</th>
            <th>나이</th>
            <th>동승자 수</th>
            <th>객실 등급</th>
            <th>방 호수</th>
            <th>티켓번호</th>
            <th>요금</th>
            <th>탑승지</th>
            <th>생존여부</th>
          </tr>
        </thead>
        <tbody>
          {titanicData.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>
                  <SexLabel sex={v.sex} />
                </td>
                <td>{v.age}</td>
                <td>{v.sibsp + v.parch}</td>
                <td>{v.pclass}등급</td>
                <td>{v.cabin}</td>
                <td>{v.ticket}</td>
                <td>{v.fare}</td>
                <td>
                  <EmbarkedLabel embarked={v.embarked} />
                </td>
                <td>
                  <SurvivedLabel survived={v.survived} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TitanicContainer>
  );
});

export default Titanic;

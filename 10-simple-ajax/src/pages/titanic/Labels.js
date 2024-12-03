import styled from "styled-components";

/** 성별을 표시하기 위한 텍스트 라벨 */
const SexLabel = styled.span`
  &::before {
    color: ${({ sex }) => (sex === "male" ? "blue" : "red")};
    content: "${({ sex }) => (sex === "male" ? "남성" : "여자")}";
    font-weight: 600;
  }
`;

/** 탑승지를 표시하기 위한 텍스트 라벨 */
const EmbarkedLabel = styled.span`
  &::before {
    color: ${({ embarked }) => (embarked === "C" ? "#f60" : embarked === "Q" ? "#00f" : "#990")};
    content: "${({ embarked }) => (embarked === "C" ? "셰르부르" : embarked === "Q" ? "퀸즈타운" : "사우스햄튼")}";
    font-weight: 600;
  }
`;

/** 생존 여부를 표시하기 위한 텍스트 라벨 */
const SurvivedLabel = styled.span`
  &::before {
    background-color: ${({ survived }) => (survived == true ? "#090" : "#e00")};
    content: "${({ survived }) => (survived == true ? "생존" : "사망")}";
    color: #fff;
    font-weight: 600;
  }
`;

export { SexLabel, EmbarkedLabel, SurvivedLabel };

import React, { memo, useCallback } from "react";

import styled from "styled-components";

import { collapseContent } from "../../dataset";

const CollapseExContainer = styled.div`
  .collapse-title {
    background-color: #f1f1f1;
    color: black;
    cursor: pointer;
    padding: 22px;
    box-sizing: border-box;
    margin: 0;
    font-size: 16px;

    &:hover {
      background-color: #ddd;
    }

    /** 현재 열러 있는 항목을 표시하기 위한 클래스 */
    &.active {
      background-color: #ddd;
    }
  }

  .collapse-content {
    background-color: #f1f1f1;
    font-size: 20px;

    p {
      padding: 20px 40px;
      margin: 0;
      height: auto;
    }

    height: 0;
    overflow: hidden;
    transition: height 0.2s ease-out;
  }
`;

const CollapseEx = memo(() => {
  const onCollapseTitleClick = useCallback((e) => {
    // 클릭 된 자기 자신
    const current = e.currentTarget;
    // 스스로에게 active 클래스에 대한 적용 여부 변경
    current.classList.toggle("active");

    // 제어할 대상을 탐색
    const content = current.parentElement.querySelector(".collapse-content");

    // 스스로가 active 클래스가 적용된 상태라면?
    if (current.classList.contains("active")) {
      // 높이를 자식 요소의 높이로 변경
      content.style.height = `${content.scrollHeight}px`;
    } else {
      // 높이를 0으로 변경
      content.style.height = "0";
    }
  });
  return (
    <CollapseExContainer>
      <h2>CollapseEx</h2>

      {collapseContent.map(({ title, content }, i) => {
        return (
          <div key={i}>
            <h1 className="collapse-title" onClick={onCollapseTitleClick}>
              {title}
            </h1>
            <h1 className="collapse-content">{content}</h1>
          </div>
        );
      })}
    </CollapseExContainer>
  );
});

export default CollapseEx;

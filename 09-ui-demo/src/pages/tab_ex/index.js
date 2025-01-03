/**
 * useMemo를 사용
 */
import React, { memo, useCallback, useState, useMemo } from "react";

import styled from "styled-components";

// CSS 클래스 조건부로 적용할 수 있는 패키지
import classnames from "classnames";

import { tabContent } from "../../dataset";

const TabExContainer = styled.div`
  .tab-button-group {
    border: 1px solid #ccc;
    background-color: #f1f1f1;
    display: flex;

    a {
      padding: 10px 20px;
      display: block;
      text-align: center;
      text-decoration: none;
      color: black;

      &:hover {
        background-color: #ddd;
      }

      &.active {
        background-color: white;
      }
    }
  }

  .tab-page {
    border: 1px solid #ccc;
    padding: 20px;
  }
`;

const TabEx = memo(() => {
  /** 현재 표시되고 있는 탭의 인덱스 번호 */
  const [tabIndex, setTabIndex] = useState(0);

  /** 버튼에 대한 이벤트 처리 함수 */
  const onTabButtonClick = useCallback((e) => {
    e.preventDefault();

    // 클릭 된 링크의 data-index 속성값을 상태변수에 반영
    const index = e.currentTarget.dataset.index;
    console.log("before --> ", index);
    setTabIndex(index);
    console.log("after --> ", index);
  }, []);

  const { subject, content } = useMemo(() => {
    return tabContent[tabIndex];
  }, [tabIndex]);

  return (
    <TabExContainer>
      <h2>TabEx</h2>
      {/* Tab버튼 그룹 */}
      <div className="tab-button-group">
        {tabContent.map((v, i) => {
          // 조건부 class이름 만들기
          const mycls = classnames({
            "tab-button": true,
            active: tabIndex == i,
          });

          return (
            <a key={i} href={`#${v.id}`} data-index={i} className={mycls} onClick={onTabButtonClick}>
              {v.subject}
            </a>
          );
        })}
      </div>

      {/* Tab 페이지 그룹 */}
      <div className="tab-page">
        <h3>{subject}</h3>
        <p>{content}</p>
      </div>
    </TabExContainer>
  );
});

export default TabEx;

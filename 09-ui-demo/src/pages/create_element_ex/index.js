import React, { memo, useCallback, useRef } from "react";

import styled from "styled-components";

const CreateElementExContainer = styled.div`
  input,
  button {
    margin-right: 10px;
  }

  .list {
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      padding: 5px 10px;
      cursor: pointer;
      border-bottom: 1px dotted #ccc;

      &:first-child {
        border-top: 1px dotted #ccc;
      }

      &.blue {
        background-color: #e3f2fd;
      }

      &.orange {
        background-color: #ffe0b2;
      }

      &.pink {
        background-color: #f8bbd0;
      }
    }
  }
`;

const CreateElementEx = memo(() => {
  // 텍스트 입력을 위한 <input>태그에 연결할 참조 변수
  const comment = useRef();

  // 목록을 출력할 <ul>태그의 styledComponent에 연결할 참조 변수
  const list = useRef();

  const getItem = useCallback((className) => {
    // JS에게 <li>태그를 코딩시킴
    const li = document.createElement("li");
    // CSS 클래스 추가시 add() 함수에게 갯수 제한 없이 콤마로 구분하여 여러개 지정 가능
    // .item은 디자인 적용을 위함이 아니라 복수의 클래스를 적용할 수 있는 것을 확인하기 위함
    li.classList.add("item", className);
    // 사용자가 입력한 내용을 <li>태그에 표시
    li.innerHTML = comment.current.value;

    // <li>에 클릭 이벤트 적용
    li.addEventListener("click", (e) => {
      // 클릭된 자기 자신을 삭제
      e.currentTarget.remove();
    });

    return li;
  }, []);

  // appendChild 기능을 위한 버튼의 이벤트 리스너
  const onAppendChildClick = useCallback((e) => {
    const li = getItem("blue");

    // <ul>태그에 JS가 코딩한 <li>를 자식 요소로 추가 -> 기존 항목을 유지하고 맨 뒤에 추가
    list.current.appendChild(li);
  }, []);

  // insertBefore1 기능을 위한 버튼의 이벤트 리스너
  const onInsertBefore1Click = useCallback((e) => {
    const li = getItem("orange");
    // <ul>태그에 JS가 코딩한 <li>를 자식요소로 추가 -> 기존 항목을 유지하고 맨 뒤에 추가
    list.current.insertBefore(getItem("orange"), null);
  }, []);

  // insertBefore2 기능을 위한 버튼의 이벤트 리스너
  const onInsertBefore2Click = useCallback((e) => {
    const li = getItem("pink");
    // <ul>태그에 JS가 코딩한 <li>를 자식요소로 추가 -> 기존 항목을 유지하고 맨 앞에 추가
    list.current.insertBefore(getItem("pink"), list.current.querySelector("li:first-child"));
  }, []);

  return (
    <CreateElementExContainer>
      <h2>CreateElementEx</h2>

      <input type="text" ref={comment} />
      <button type="button" onClick={onAppendChildClick}>
        appendChild
      </button>
      <button type="button" onClick={onInsertBefore1Click}>
        onInsertBefore1
      </button>
      <button type="button" onClick={onInsertBefore2Click}>
        onInsertBefore2
      </button>
      <hr />

      <ul className="list" ref={list} />
    </CreateElementExContainer>
  );
});

export default CreateElementEx;

import React from "react";

import styled from "styled-components";

const FakeImgContainer = styled.div`
  background-color: #f7f7f7;
  width: auto;
  padding: 20px;
  margin: 10px auto;
  height: ${(props) => `${props.height}px`};
`;

const FakeImg = ({ height, children }) => {
  return <FakeImgContainer height={height}>{children}</FakeImgContainer>;
};

export default FakeImg;

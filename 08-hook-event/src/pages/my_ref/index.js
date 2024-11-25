import React, { memo } from "react";

import styled from "styled-components";

const MyRefContainer = styled.div``;

const MyRef = memo(() => {
  return (
    <MyRefContainer>
      <h2>MyRef</h2>
    </MyRefContainer>
  );
});

export default MyRef;

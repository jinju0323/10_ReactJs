import React, { memo } from "react";

import styled from "styled-components";

const MyCallbackContainer = styled.div``;

const MyCallback = memo(() => {
  return (
    <MyCallbackContainer>
      <h2>MyCallback</h2>
    </MyCallbackContainer>
  );
});

export default MyCallback;

import React, { memo } from "react";

import styled from "styled-components";

const MyEffectContainer = styled.div``;

const MyEffect = memo(() => {
  return (
    <MyEffectContainer>
      <h2>MyEffect</h2>
    </MyEffectContainer>
  );
});

export default MyEffect;

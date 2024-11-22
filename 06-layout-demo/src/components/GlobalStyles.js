import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *:not(.fa) {
        font-family: "Noto Sans KR", "NaumGothic", "Malgun Gothic";
    }
    
    * {
        box-sizing: border-box;
    }

    // 이번 예제에서는 사용하지 않는다.
    /* body {
        padding: 30px 50px;
        margin: 0;
    } */
`;

export default GlobalStyles;

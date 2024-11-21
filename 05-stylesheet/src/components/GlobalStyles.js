import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* 전역 스타일 적용 */
    * {
        font-family: "Noto Sans KR", sans-serif;
    }
    
    body {
        margin: 0;
        padding: 10px 20px;
        
    }
    `;

export default GlobalStyles;

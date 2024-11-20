import React from "react";
// SEO 처리 기능 패키지
import { Helmet, HelmetProvider } from "react-helmet-async";
// 미리보기 이미지 샘플
import sample from "./assets/img/sample.jpg";

const Meta =
  () =>
  ({
    title = "React App",
    description = "React.js 예제입니다",
    author = "진주",
    subject = "React.js",
    copyRight = "jinju",
    keywords = "React, React.js, props, children, proptypes, react-router-dom",
    url = window.location.href,
    image = sample,
    icon = "null",
    shortcutIcon = "null",
    appleTouchIcon = "null",
  }) => {
    return (
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
          {/* SEO 태그 */}
          <meta name="description" content="사이트 설명(최대 160자 추천)" />
          <meta name="keywords" content="사이트 키워드" />
          <meta name="author" content="사이트 저자" />
          <meta name="subject" content="사이트 목적(주제)" />
          <meta name="copyright" content="사이트 저작권(소유권)" />
          <meta name="content-language" content="ko" />
          <meta property="og:url" content="사이트 주소(URL)" />
          <meta property="og:title" content="사이트 제목" />
          <meta property="og:type" content="website" />
          <meta property="og:description" content="사이트 설명(최대 160자 추천)" />
          <meta property="og:image" content="사이트 대표 이미지 URL" />
          <link rel="icon" href="데스크탑 favicon" type="image/png" />
          <link rel="shortcut icon" href="안드로이드용 favicon" type="image/png" />
          <link rel="apple-touch-icon" href="아이폰용 favicon" type="image/png" />
          {/* 구글 웹폰트 적용 */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"></link>
        </Helmet>
      </HelmetProvider>
    );
  };

export default Meta;

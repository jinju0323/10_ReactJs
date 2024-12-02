import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

import axios from "axios";
import axiosHelper from "../../helpers/AxiosHelper";

// 이전 수업에서 구현한 방식
// import NewsData from "../../data/NewsData";

const News = () => {
  // 이번 수업에서 구현할 방식
  const [newsData, setNewsData] = useState([]);

  /** 페이지가 처음 열렸을 때 실행할 hook */
  // hook에 전달되는 콜백함수에 직접적으로 async를 사용할 수 없기 때문에
  // 별도의 함수를 만들어서 사용한다.
  useEffect(() => {
    (async () => {
      // ajax 결과를 저장할 변수
      let data = null;

      try {
        data = await axiosHelper.get("/news");
      } catch (e) {
        alert(e.message);
        return;
      }

      console.log(data.item);

      // Ajax의 결과에서 화면에 출력할 내용을 상태변수에 적용 --> 화면에 자동 갱신됨
      setNewsData(data.item);
    })();
  }, []);

  return (
    <div>
      <h1>News</h1>

      <nav>
        <Link to="/news/card">카드형</Link>&nbsp;|&nbsp;
        <Link to="/news/list">리스트형</Link>
      </nav>

      <Routes>
        {/* Routes에 연결된 컴포넌트 props 전달 */}
        <Route path="card" element={<NewsCard news={newsData} />} />
        <Route path="list" element={<NewsList news={newsData} />} />
      </Routes>
    </div>
  );
};

export default News;

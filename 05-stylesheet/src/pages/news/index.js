import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";

import NewsData from "../../data/NewsData";

const News = () => {
  return (
    <div>
      <h1>News</h1>

      <nav>
        <Link to="news_card">카드형</Link>&nbsp;|&nbsp;
        <Link to="news_list">리스트형</Link>
      </nav>

      <Routes>
        {/* Routes에 연결된 컴포넌트 props 전달 */}
        <Route path="/news_card" element={<NewsCard news={NewsData} />} />
        <Route path="/news_list" element={<NewsList news={NewsData} />} />
      </Routes>
    </div>
  );
};

export default News;

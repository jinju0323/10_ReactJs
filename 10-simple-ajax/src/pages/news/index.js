import React, { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import NewsCard from "./NewsCard";
import NewsList from "./NewsList";
import axios from "axios";
import axiosHelper from "../../helpers/AxiosHelper";

// import NewsData from "../../data/NewsData";}

const News = () => {
  const [newsData, setNewsData] = useState([]);

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

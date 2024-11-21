import React from "react";

import styled from "styled-components";

const NewsListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .news-item {
    border-top: 1px solid #eee;

    .list-item-link {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      padding: 5px 10px;
      text-decoration: none;
      color: #000;
      transition: all 0.1s;

      &:hover {
        background-color: #eeeeee55;
      }

      .thumbnail {
        width: 150px;
        height: 100px;
        display: block;
        object-fit: cover;
      }

      .content {
        flex: 0 1 auto;
        padding: 5px 0 5px 20px;
        background-color: #ff01;

        h3 {
          background-color: #f0f1;
          box-sizing: border-box;
          font-size: 18px;
          font-weight: bold;
          margin: 0;
          margin-bottom: 10px;

          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }

        p {
          background-color: #0601;
          font-size: 14px;
          margin: 0;
          margin-bottom: 8px;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        ul {
          background-color: #0061;
          list-style: none;
          padding: 0;
          margin: 0;

          li {
            display: inline-block;
            font-size: 12px;

            &:first-child:after {
              content: "|";
              display: inline-block;
              color: #555;
              padding: 0 5px;
            }
          }
        }
      }
    }
  }
`;

const NewsList = ({ news }) => {
  console.group("NewsList");
  console.log(news);
  console.groupEnd();

  return (
    <NewsListContainer>
      {news.map((v, i) => {
        const { url, image, title, description, author, datetime } = v;

        return (
          <li className="news-item" key={i}>
            <a className="list-item-link" href={url} target="_blank" rel="noreferrer">
              <img className="thumbnail" src={image} alt={title} />
              <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <ul>
                  <li>{author}</li>
                  <li>{new Date(datetime).toLocaleString()}</li>
                </ul>
              </div>
            </a>
          </li>
        );
      })}
    </NewsListContainer>
  );
};

export default NewsList;

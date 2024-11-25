import React, { memo } from "react";

import styled from "styled-components";
import mq from "../../components/MediaQuery";
import dataset from "../../dataset";

const FoodListContainer = styled.div`
  /* background-color: #f6eacb55; */

  /** 갤러리 */
  .food-gallery {
    display: flex;
    flex-wrap: wrap;

    .food-item {
      flex: none;
      width: 25%;
      padding: 20px 10px;

      ${mq.maxWidth("md")`
        width: 50%;
        `}

      ${mq.maxWidth("sm")`
        width: 100%;
        `}

        a {
        display: block;

        .img-wrapper {
          width: 100%;
          height: 360px;
          // 이미지가 이 박스를 벗어날 경우 잘라냄
          overflow: hidden;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease-in-out;
          }
        }

        &:hover img {
          transform: scale(1.1, 1.1);
        }

        .food-content {
          padding: 15px 10px;
          text-align: center;

          h2 {
            font-size: 22px;
            margin-bottom: 12px;
            line-height: 130%;
          }

          p {
            font-size: 16px;
            font-weight: 300;
            line-height: 120%;
          }
        }
      }
    }
  }
`;

const FoodList = memo(() => {
  // 필요한 정보만 분리
  const { foodList } = dataset;

  console.group("foodList 컨포넌트");
  console.log(foodList);
  console.groupEnd();

  return (
    <FoodListContainer>
      <ul className="food-gallery">
        {foodList.map((v, i) => {
          return (
            <li className="food-item" key={v.id}>
              <a href="#">
                <div className="img-wrapper">
                  <img src={v.img} alt={v.title} />
                </div>
                <div className="food-content">
                  <h2>{v.title}</h2>
                  <p>{v.content}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </FoodListContainer>
  );
});

export default FoodList;

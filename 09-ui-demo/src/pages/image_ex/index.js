import React, { memo, useState, useCallback } from "react";

import styled from "styled-components";

import img01 from "../../assets/img/img01.jpg";
import img02 from "../../assets/img/img02.jpg";
import img03 from "../../assets/img/img03.jpg";
import img04 from "../../assets/img/img04.jpg";
import img05 from "../../assets/img/img05.jpg";

const ImageExContainer = styled.div`
  .list {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 640px;
    margin: auto;
    display: flex;

    li {
      width: 20%;

      a {
        display: block; // 부모를 가득 채우기
        margin: 10px;

        img {
          width: 100%; // 결국 20%의 너비
        }
      }
    }
  }

  .viewer {
    width: 640px;
    margin: auto;
    padding: 0 10px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
`;

// 썸네일로 표시할 이미지와 제목에 대한 JSON 배열
const imgList = [
  { img: img01, alt: "테스트 이미지 1" },
  { img: img02, alt: "테스트 이미지 2" },
  { img: img03, alt: "테스트 이미지 3" },
  { img: img04, alt: "테스트 이미지 4" },
  { img: img05, alt: "테스트 이미지 5" },
];

const ImageEx = memo(() => {
  // 현재 표시중인 이미지의 인덱스 번호를 의미하는 상태값
  const [currentIndex, setCurrentIndex] = useState(0);

  // 썸네일 이미지의 링크를 클릭했을 경우 동작할 이벤트 리스너
  const onThumbnailClick = useCallback((e) => {
    // 클릭된 링크의 주소값 -> #0, #1, #2, #3, #4
    const href = e.currentTarget.getAttribute("href");
    // 이미지를 클릭하면 해당 이미지의 인덱스 번호를 추출하기
    console.log(href);

    // 추출한 href로부터 #을 제외한 숫자만 추출하기
    //const idx = parseInt(href.replace("#", ""));
    const idx = parseInt(href.substring(1));
    console.log(idx);
    console.log(imgList[idx].img);

    /** 기존의 Javascript 방식 --> 직접 결과를 화면에 반영해야 한다. */
    // document.querySelector(".viewer > img").setAttribute("src", imgList[idx].img);

    /** React 방식 */
    // 상태값을 수정하면 해당 상태값이 관여하는 화면은 모두 자동 갱신된다.
    // list이미지를 클릭하면 해당 이미지가 화면에 표시된다.
    setCurrentIndex(idx);
  }, []);

  return (
    <ImageExContainer>
      <h2>ImageEx</h2>

      {/* 썸네일 리스트 표시하기 */}
      <ul className="list">
        {imgList.map((v, i) => {
          return (
            <li key={i}>
              <a href={`#${i}`} onClick={onThumbnailClick}>
                <img src={v.img} alt={v.alt} />
              </a>
            </li>
          );
        })}
      </ul>

      <div className="viewer">
        <img src={imgList[currentIndex].img} alt={imgList[currentIndex].alt} />
      </div>
    </ImageExContainer>
  );
});

export default ImageEx;

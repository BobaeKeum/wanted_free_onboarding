import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const slideRef = useRef();

  const [currentSlide, setCurrentSlide] = useState(1);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  /**
   * 슬라이드 이동 시키는 함수
   */
  const handleSlide = (direction) => {
    switch (direction) {
      case "right":
        setCurrentSlide((prev) => (prev === 6 ? 1 : prev + 1));
        break;

      case "left":
        setCurrentSlide((prev) => (prev === 1 ? 6 : prev - 1));
        break;

      default:
        throw new Error(`${direction} is invalid parameter`);
    }
  };

  useEffect(() => {
    // 자동 슬라이드
    let timer;
    if (currentSlide === 1) {
      timer = setInterval(() => {
        handleSlide("right");
      }, 0);
    } else {
      timer = setInterval(() => {
        handleSlide("right");
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  useEffect(() => {
    // 슬라이드 사이즈 관련
    window.addEventListener("resize", () => setWindowSize(window.innerWidth));

    return () =>
      window.removeEventListener("resize", () =>
        setWindowSize(window.innerWidth)
      );
  }, [windowSize]);

  console.log(slideRef.current?.offsetWidth);
  return (
    <Container>
      <CarouselWrapper
        currentSlide={currentSlide}
        length={CAROUSEL.length}
        size={slideRef.current?.offsetWidth}
        windowSize={windowSize}
      >
        {CAROUSEL.map((item, idx) => (
          <CarouselItem
            banner={item}
            key={item.id}
            currentSlide={currentSlide}
            ref={slideRef}
          />
        ))}
      </CarouselWrapper>
      <Button direction="right" onClick={() => handleSlide("right")}>
        {">"}
      </Button>
      <Button direction="left" onClick={() => handleSlide("left")}>
        {"<"}
      </Button>
    </Container>
  );
};

export default Carousel;

const Container = styled.div`
  position: relative;
  margin: 15px auto 0;
  overflow: hidden;
`;

const CarouselWrapper = styled.div`
  display: flex;
  width: 630%;
  transform: translate(
    -${({ currentSlide, size, windowSize, length }) => currentSlide * size - (windowSize - size - 40) / 2}px
  );
  transition: transform 1s;
`;

const Button = styled.button`
  position: absolute;
  top: 120px;
  ${({ direction }) => (direction === "right" ? "right:24px" : "left:24px")};
  height: 60px;
  padding: 10px;
  border-radius: 15px;
  background-color: #fff;
  font-size: 24px;
  opacity: 0.5;
  cursor: pointer;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const CAROUSEL = [
  {
    id: 0,
    imageUrl: "/assets/images/원티드1.jpg",
    title: "2022년 달라지는 노동법령",
    subTitle: "노무관리 쟁점 한 눈에 파악하기",
  },
  {
    id: 1,
    imageUrl: "/assets/images/원티드2.jpg",
    title: "개발자 되고 싶은 분들?!",
    subTitle: "프론트 무료 교육과정 참여하기",
  },
  {
    id: 2,
    imageUrl: "/assets/images/원티드3.jpg",
    title: "마케팅 주니어를 찾습니다.",
    subTitle: "1월 17일(월) 설명회 신청하기",
  },
  {
    id: 3,
    imageUrl: "/assets/images/원티드1.jpg",
    title: "2022년 달라지는 노동법령",
    subTitle: "노무관리 쟁점 한 눈에 파악하기",
  },
  {
    id: 4,
    imageUrl: "/assets/images/원티드2.jpg",
    title: "개발자 되고 싶은 분들?!",
    subTitle: "프론트 무료 교육과정 참여하기",
  },
  {
    id: 5,
    imageUrl: "/assets/images/원티드3.jpg",
    title: "마케팅 주니어를 찾습니다.",
    subTitle: "1월 17일(월) 설명회 신청하기",
  },
  {
    id: 6,
    imageUrl: "/assets/images/원티드1.jpg",
    title: "2022년 달라지는 노동법령",
    subTitle: "노무관리 쟁점 한 눈에 파악하기",
  },
  {
    id: 7,
    imageUrl: "/assets/images/원티드2.jpg",
    title: "개발자 되고 싶은 분들?!",
    subTitle: "프론트 무료 교육과정 참여하기",
  },
  {
    id: 8,
    imageUrl: "/assets/images/원티드3.jpg",
    title: "마케팅 주니어를 찾습니다.",
    subTitle: "1월 17일(월) 설명회 신청하기",
  },
];

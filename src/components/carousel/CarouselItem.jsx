import React from "react";
import styled from "styled-components";
import { ArrowIcon } from "../../resource/icons";

const CarouselItem = React.forwardRef(
  ({ banner: { title, subTitle, imageUrl, id }, currentSlide }, ref) => {
    return (
      <ItemWrapper ref={ref}>
        <Dim isCurrent={currentSlide === id} />
        <Image src={imageUrl}></Image>
        <TextBox isCurrent={currentSlide === id}>
          <div>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </div>
          <GoToDetailBtn>
            <span>바로가기</span>
            <ArrowIcon />
          </GoToDetailBtn>
        </TextBox>
      </ItemWrapper>
    );
  }
);

export default CarouselItem;

const ItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1060px;
  margin: 0 5px;
`;

const Dim = styled.div`
  position: absolute;
  display: ${({ isCurrent }) => (isCurrent ? "none" : "block")};
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;

  @media (max-width: 1200px) {
    top: 0;
    height: 180px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;

  @media (min-width: 1200px) {
    height: 300px;
  }
`;

const TextBox = styled.div`
  text-align: center;

  @media (min-width: 1200px) {
    display: ${({ isCurrent }) => (isCurrent ? "block" : "none")};
    position: absolute;
    bottom: 28px;
    left: 34px;
    width: 330px;
    border-radius: 4px;
    background-color: #fff;
    text-align: start;

    > div {
      padding: 20px;
      border-bottom: 1px solid #eaeaea;
    }
  }
`;

const Title = styled.h2`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 1200px) {
    margin: 0;
    font-size: 20px;
  }
`;

const SubTitle = styled.h3`
  margin-top: 6px;
  color: #666;
  font-size: 13px;

  @media (min-width: 1200px) {
    padding-bottom: 20px;
    font-size: 14px;
  }
`;

const GoToDetailBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 0 auto;
  padding: 6px 8px;
  background: transparent;
  color: #3366ff;
  font-size: 14px;

  svg {
    fill: #3366ff;
    width: 14px;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
    padding-left: 20px;
  }
`;

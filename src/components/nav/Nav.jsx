import React from "react";
import styled from "styled-components";
import { DotIcon, NotiIcon, SearchIcon } from "../../resource/icons";

const Nav = () => {
  return (
    <Container>
      <MainNav>
        <MainNavTop>
          <MainNavTopBox>
            <MainNavTopButton>
              <img
                src="https://static.wanted.co.kr/images/icon-menu.png"
                alt="hamberger"
              />
            </MainNavTopButton>
            <MainNavTopLogo>wanted</MainNavTopLogo>
          </MainNavTopBox>
        </MainNavTop>
        <MenuWrapper>
          <MenuBox>
            {MENUS.map((item, idx) => (
              <MenuName key={item} idx={idx}>
                {item}
              </MenuName>
            ))}
          </MenuBox>
          <AsideLogosBox>
            <AsideLogosUl>
              <AsideLogosLi>
                <SearchIcon />
              </AsideLogosLi>
              <AsideLogosLi>
                <NotiIcon />
              </AsideLogosLi>
              <AsideLogosLi>
                <DotIcon />
              </AsideLogosLi>
            </AsideLogosUl>
          </AsideLogosBox>
          <ServiceBtn>기업서비스</ServiceBtn>
        </MenuWrapper>
      </MainNav>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 1060px;
  margin: 0 auto;
  border-bottom: 1px solid #eaeaea;
`;
const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 990px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;
// 햄버거 버튼이랑 로고
const MainNavTop = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 20px;

  @media (min-width: 768px) {
    padding: 15px 0;
  }
`;
const MainNavTopBox = styled.div`
  display: flex;
  align-items: center;
`;
const MainNavTopButton = styled.button`
  width: 17px;
  margin-right: 15px;
  background: transparent;
  border: none;

  img {
    width: 100%;
  }
`;

const MainNavTopLogo = styled.a`
  display: block;
  font-size: 24px;
  font-weight: 700;
`;

// 메뉴들

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MenuBox = styled.ul`
  display: flex;
`;

const MenuName = styled.li`
  display: ${({ idx }) => (idx < 3 ? "block" : "none")};
  padding: 11px 10px 19px;
  text-align: center;

  &:first-child {
    padding: 11px 10px 19px 20px;
    border-bottom: 2px solid #258bf7;
  }

  @media (min-width: 768px) {
    display: ${({ idx }) => (idx > 0 ? "block" : "none")};
    font-size: 13px;
  }

  @media (min-width: 990px) {
    padding: 15px;
  }
`;

// 오른쪽
const AsideLogosBox = styled.aside`
  display: flex;
  align-items: center;
  padding: 9px 0;

  @media (min-width: 990px) {
    margin-left: 60px;

    &::after {
      content: "|";
      margin-right: 10px;
      color: #e1e2e3;
    }
  }
`;
const AsideLogosUl = styled.ul`
  display: flex;
  align-items: center;
  margin-top: -5px;

  @media (min-width: 990px) {
    justify-content: space-between;
    margin: 0;
  }
`;
const AsideLogosLi = styled.li`
  padding: 5px;

  &:last-child {
    margin-right: 10px;
    padding: 0 5px 0 10px;
  }
`;

const ServiceBtn = styled.button`
  display: none;
  height: 30px;
  padding: 0 10px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  color: #666;
  font-size: 13px;

  @media (min-width: 990px) {
    display: block;
  }
`;
export default Nav;

const MENUS = [
  "홈",
  "채용",
  "이벤트",
  "직군별 연봉",
  "이력서",
  "커뮤니티",
  "프리랜선",
  "AI 합격예측",
];

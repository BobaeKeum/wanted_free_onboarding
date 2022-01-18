import React from "react";
import styled from "styled-components";
import Carousel from "../../components/carousel/Carousel";
import Nav from "../../components/nav/Nav";

const Main = () => {
  return (
    <Container>
      <Nav />
      <Carousel />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
`;

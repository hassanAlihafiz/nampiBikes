import React from "react";
import styled from "styled-components";
import { Carousel } from "antd";
import Cycles1 from "../../assests/cycles.jpeg";
import Cycles2 from "../../assests/cycles2.jpeg";

function HomeCarousel() {
  return (
    <Wrapper className="carousel-main">
      <CarouselWrapper autoplay>
        <img src={Cycles1} alt="" />
        <img src={Cycles2} alt="" />
      </CarouselWrapper>
      <div className="carosel-text">
        Nampi Bikes <br /> Welcome You
      </div>
    </Wrapper>
  );
}

export default HomeCarousel;

const Wrapper = styled.div`
  position: relative;
  .carosel-text {
    position: absolute;
    top: 0;
    font-size: 72px;
    line-height: 70px;
    font-weight: bold;
    color: #4793a3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const CarouselWrapper = styled(Carousel)`
  height: 500px;
  img {
    height: 500px;
    object-fit: cover;
  }
  .slick-dots-bottom li {
    height: 15px;
    width: 15px;
    button {
      height: 100%;
      border-radius: 20px;
    }
  }
`;

import React, { useEffect } from "react";
import { CarouselWrapper, Wrapper } from "./Home.styled";

import HomeCarousel from "../../../components/home/HomeCarousel";

import HomeRentBike from "../../../components/home/HomeRentBike";
import HomeWoodBikes from "../../../components/home/HomeWoodBikes";
import HomeWhyChoose from "../../../components/home/HomeWhyChoose";
import HomeAboutUs from "../../../components/home/HomeAboutUs";
import HomeContactUs from "../../../components/home/HomeContactUs";

import { useSelector } from "react-redux";

const Home = () => {
  const order = useSelector((state) => state.common.orders);
  console.log("order", order);
  useEffect(() => {}, []);
  return (
    <Wrapper>
      <HomeCarousel />
      <HomeWoodBikes />
      <HomeRentBike />
      <HomeWhyChoose />
      <HomeAboutUs />
      <HomeContactUs />
    </Wrapper>
  );
};
export default Home;

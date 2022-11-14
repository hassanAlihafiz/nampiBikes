import React from "react";
import styled from "styled-components";
import Cycles3 from "../../assests/cycles3.png";

function HomeRentBike() {
  return (
    <Wrapper>
      <div className="home-rent-main">
        <h1>Rent Bike</h1>
        <p>
          At nampi bikes we offer a unique service in the world such as being
          able to enjoy a ride on a wooden bicycle next to the beach or other
          tourist places near the area, we guarantee safety and comfort during
          our service by providing support at all times in case of an emergency
          thus achieving the greatest satisfaction during the entire period of
          renting a bicycle
        </p>
      </div>
    </Wrapper>
  );
}

export default HomeRentBike;

const Wrapper = styled.div`
  width: 100%;
  background-image: url(${Cycles3});
  padding: 200px 0;
  background-repeat: no-repeat;
  object-fit: cover;
  background-size: cover;

  .home-rent-main {
    width: 600px;
    margin: auto;
  }
  h1,
  p {
    color: white;
  }
  h1 {
    font-size: 50px;
    font-weight: 200;
  }
  p {
    text-align: left;
    font-weight: 100;
    font-size: 18px;
  }
`;

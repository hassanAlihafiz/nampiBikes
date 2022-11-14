import React from "react";
import styled from "styled-components";
import Cycles6 from "../../assests/cycles6.png";

function HomeAboutUs() {
  return (
    <Wrapper>
      <img src={Cycles6} />
      <div>
        <h1>About Us</h1>
        <p>
          Nampi bikes arises from an ecological idea to improve the transport of
          Costa Rica with electric mobility in conjunction with bicycles, it
          started as a project with three heads, who then saw the opportunity to
          go further and create something unique, thus finding the idea of
          implementing electric bicycles with wood, thus creating unique
          bicycles in the world. Giving a unique stamp to the project that would
          later be focused on the distribution of bicycles in a specific area,
          since these would be designed for walks, trips and tours due to their
          bohemian style, so the project would not be focused on the road as a
          bicycle route but in a with a vibe that suits your style such as the
          beach and its surroundings
        </p>
      </div>
    </Wrapper>
  );
}

export default HomeAboutUs;

const Wrapper = styled.div`
  padding: 50px 150px;
  display: flex;
  width: 100%;
  background-color: #fafafa;
  align-items: center;

  img {
    flex: 1;
    width: 100%;
    height: 400px;
  }
  div {
    flex: 2;
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 18px;
      margin-left: 30px;
      text-align: left;
    }
  }
`;

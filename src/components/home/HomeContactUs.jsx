import React from "react";
import styled from "styled-components";
import Cycles7 from "../../assests/cycles7.png";

function HomeContactUs() {
  return (
    <Wrapper>
      <div>
        <h1>Contact Us</h1>
        <p>Puntarenas Province, Santa teresa, 60111, Costa Rica</p>
        <a href="tel: +50670185997">Telefono: +50670185997</a>
        <a href="mailto: Nampi@NampiBikes.cr">Nampi@NampiBikes.cr</a>
      </div>
      <img src={Cycles7} />
    </Wrapper>
  );
}

export default HomeContactUs;

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
    p,
    a {
      font-size: 18px;
      margin-right: 30px;
    }
  }
`;

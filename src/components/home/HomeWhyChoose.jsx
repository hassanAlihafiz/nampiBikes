import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Cycle4 from "../../assests/cycles4.png";
import Cycle5 from "../../assests/cycles5.png";
import MoneyBank from "../../assests/icons/moneyback.png";
import Bolt from "../../assests/icons/bolt.png";
import Lock from "../../assests/icons/lock.png";
import Location from "../../assests/icons/location.png";

function HomeWhyChoose() {
  return (
    <Wrapper>
      <img className="img-lr" src={Cycle4} />
      <div className="why-choose-main">
        <h1>Why choose Nampi Bikes to transport? </h1>

        <div
          style={{
            padding: "0px 50px",
            height: "85%",
            display: "fleX",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Grid container className="grid-row-container" spacing={2}>
            <Grid item className="grid-items">
              <div className="grid-item-p">
                <p>Saving</p>
                <p>You don't have to spend more money on gasoline</p>
              </div>
              <div className="grid-item-img">
                <img src={MoneyBank} />
              </div>
            </Grid>
            <Grid item className="grid-items">
              <div className="grid-item-img">
                <img src={Bolt} />
              </div>
              <div className="grid-item-p">
                <p>Clean energy</p>
                <p>Let's take care of the environment using electricity</p>
              </div>
            </Grid>
          </Grid>
          <Grid className="grid-row-container" container spacing={2}>
            <Grid item className="grid-items">
              <div className="grid-item-p">
                <p>Mobility</p>
                <p>
                  Do not waste your time on long dams, transporting yourself
                  with a bicycle is faster
                </p>
              </div>
              <div className="grid-item-img">
                <img src={Location} />
              </div>
            </Grid>
            <Grid item className="grid-items">
              <div className="grid-item-img">
                <img src={Lock} />
              </div>
              <div className="grid-item-p">
                <p>Security and accessories</p>
                <p>
                  At Nampi Bikes we give you everything you need to always be
                  safe, such as a helmet and lights.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <img className="img-lr" src={Cycle5} />
    </Wrapper>
  );
}

export default HomeWhyChoose;

const Wrapper = styled.div`
  display: flex;
  padding: 50px 0;
  .why-choose-main {
    flex: 1;
    h1 {
      font-size: 46px;
      font-weight: 200;
    }
    .grid-row-container {
      justify-content: center;
      height: 200px;
      .grid-items {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
        .grid-item-p {
          flex: 2;
          p {
            font-size: 18px;
            font-weight: 200;
            text-align: left;
            margin: 0;
          }
        }
        .grid-item-img {
          flex: 1;
        }
      }
    }
  }

  .img-lr {
    width: 150px;
    height: 100vh;
    object-fit: cover;
  }
`;

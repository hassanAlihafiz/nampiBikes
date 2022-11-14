import React from "react";
import styled from "styled-components";
import { Divider, SvgIcon } from "@mui/material";
import { ReactComponent as Facebook } from "../../../assests/svg/social/facebook.svg";
import { ReactComponent as Twitter } from "../../../assests/svg/social/twitter.svg";
import { ReactComponent as Insta } from "../../../assests/svg/social/instagram.svg";

function CopyrightFooter() {
  return (
    <>
      <Wrapper>
        <Divider />
        <div className="main">
          <div className="left">
            Copyright © <span>Nampi Bikers</span>, 2022
          </div>
          <div className="right">
            <SvgIcon
              className="cursor"
              onClick={() => {
                window.open(
                  "https://www.facebook.com/people/Nampi-Bikes/100084909146669/",
                  "_blank"
                );
              }}
            >
              <Facebook />
            </SvgIcon>

            <SvgIcon
              className="cursor"
              onClick={() => {
                window.open(
                  "https://twitter.com/Nampi-Bikes/100084909146669/",
                  "_blank"
                );
              }}
            >
              <Twitter />
            </SvgIcon>
            <SvgIcon
              className="cursor"
              onClick={() => {
                window.open("https://www.instagram.com/nampi_bikes/", "_blank");
              }}
            >
              <Insta />
            </SvgIcon>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default CopyrightFooter;

const Wrapper = styled.div`
  padding: 0px 50px;

  .main {
    padding: 20px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      span {
        text-decoration: underline;
      }
    }
    .right {
      min-width: 100px;
      display: flex;
      justify-content: space-between;
      .cursor {
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 950px) {
    padding: 0px 20px;
  } ;
`;

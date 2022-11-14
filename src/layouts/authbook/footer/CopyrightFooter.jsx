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
            <SvgIcon>
              <Facebook />
            </SvgIcon>
            <SvgIcon>
              <Twitter />
            </SvgIcon>
            <SvgIcon>
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
  background: rgb(247, 247, 247);

  .main {
    padding: 20px 50px;
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
    }
  }
  @media screen and (max-width: 950px) {
    padding: 0px 20px;
  } ;
`;

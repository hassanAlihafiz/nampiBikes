import styled from "styled-components";

export const Wrapper = styled.div`
  top: 0;
  z-index: 5;
  background: white;

  height: 80px;
  padding-left: 25px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid #83838372;
  .left {
    flex: 1 0;
    display: flex;
    align-items: center;

    .main {
      display: flex;
      align-items: center;
      cursor: pointer;
      .MuiIconButton-root {
        :hover {
          background-color: rgb(25 118 210);
          svg {
            color: white;
          }
        }
      }
    }
  }
  .right {
    flex: 1 0;
    display: flex;
    justify-content: flex-end;
    .main {
      outline: 1px solid #1976d289;
      transition: all 0.3s linear;
      border-radius: 30px;
      width: 180px;

      display: flex;

      :hover {
        box-shadow: 0px 4px 10px -5px #000000;
      }
      div {
        border-radius: 30px;
        width: 100%;
        :hover {
          outline: 1px solid #1976d2;
          background-color: #1976d2;
          .btn {
            border-radius: 30px;
            color: white;
            :hover {
              background-color: none !important;
            }
          }
        }
      }

      .btn {
        border-radius: 30px;
      }
      .icon-button {
        background-color: white;

        position: absolute;
        right: 50px;
        top: 20px;
        height: 40px;
        width: 40px;
        transition: all 0.3s linear;

        :hover {
          outline: 1px solid #1976d2 !important;
          background-color: #1976d2 !important;
          svg {
            fill: white;
          }
        }
      }
    }
  }
  /* .btn,
  .icon-button {
    height: 45px;
    transition: all 0.3s linear;
    :hover {
      outline: 1px solid #1976d2;
      background-color: #1976d2;
      color: white;
      svg {
        fill: white;
      }
    }
  } */
  /* .btn {
    border-radius: 30px;
  } */
  /* .icon-button {
    outline: 1px solid #1976d289;
    width: 45px;
  } */

  @media screen and (max-width: 950px) {
    padding: 0px 20px;

    h2 {
      white-space: nowrap;
    }
    .left {
      flex: 0 0;
    }
    .right {
      flex: 1 0 auto;
      display: flex;
      justify-content: flex-end;
      .icon-button {
        right: 20px !important;
      }
    }
  }
  @media screen and (max-width: 800px) {
    .main {
      width: 0 !important;
      outline: none !important;
      div {
        display: none;
        visibility: hidden;
      }
    }
    .right {
      flex: 0 1;
    }
  }
`;

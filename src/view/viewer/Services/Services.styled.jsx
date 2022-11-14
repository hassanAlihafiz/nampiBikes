import styled from "styled-components";
import { Row } from "antd";
export const Wrapper = styled.div`
  padding: 30px 80px 40px 80px;
  .heading {
    text-align: center;
    line-height: 1.35em;
    font-size: 30px;
  }
  .subHeading {
    line-height: 1.875em;
    text-align: center;
    font-size: 15px;
  }
  .img {
    height: 450px;
    width: 70%;
  }
  .card {
    height: 400px;
    background-color: rgb(244, 244, 244);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    span {
      line-height: 1.41em;
      text-align: center;
      font-size: 22px;
    }
    p {
      line-height: 1.875em;
      text-align: center;
      font-size: 15px;
    }
  }

  .ant-card {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum", "tnum";
    position: relative;
    background-color: rgb(244, 244, 244);
    border-radius: 2px;
    height: 200px;
    .ant-card-bordered {
      border: 1px solid #f0f0f0;
      background-color: rgb(244, 244, 244);
    }
  }
  .ant-row {
    margin: 10px 80px 0px 80px;
  }
  /* @media (min-width: 788px) {
    background-color: red;
  } */
`;
export const RowWrapper = styled(Row)`
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
  row-gap: 20px;
`;

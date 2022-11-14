import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <Row>
        <Col lg={24} md={24} sm={24} xs={24}>
          <h4>Support</h4>
          <ul className="list">
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Safety information</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
            <li>Our COVID-19 Response</li>
            <li>Report a neighborhood concern</li>
          </ul>
        </Col>
        {/* <Col lg={6} md={12} sm={12} xs={24}>
          <h4>Community</h4>
          <ul className="list">
            <li>RentASpace.org: disaster relief housing</li>
            <li>Support Afghan refugees</li>
            <li>Combating discrimination</li>
          </ul>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24}>
          <h4>Hosting</h4>
          <ul className="list">
            <li>Try hosting</li>
            <li>RentASpaceCover for Hosts</li>
            <li>Explore hosting resources</li>
            <li>Visit our community forum</li>
            <li>How to host responsibly</li>
          </ul>
        </Col>
        <Col lg={6} md={12} sm={12} xs={24}>
          <h4>Nampi Bikers</h4>
          <ul className="list">
            <li>Newsroom</li>
            <li>Learn about new features</li>
            <li>Letter from our founders</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
          </ul>
        </Col> */}
      </Row>
    </Wrapper>
  );
}

export default Footer;

const Wrapper = styled.div`
  padding: 50px 50px;
  border-top: 1px solid #83838372;

  h4 {
    font-weight: bold;
    margin-bottom: 10px !important;
  }
  .list {
    list-style: none;
    padding: 0;
  }
  @media screen and (max-width: 950px) {
    padding: 20px 20px;
  } ;
`;

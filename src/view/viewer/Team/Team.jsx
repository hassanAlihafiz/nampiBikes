import React, { Component } from "react";
import Wrapper from "./Team.styled";
import { Col, Row } from "antd";

import Team1 from "../../../assests/team1.png";
import Team2 from "../../../assests/team2.png";
import Team3 from "../../../assests/team3.png";
export default class Team extends Component {
  render() {
    return (
      <Wrapper>
        <h1 className="heading">The Team</h1>
        <div>
          <p>Get To Know Us</p>
        </div>
        <Row
          gutter={[30, 30]}
          style={{
            marginLeft: 10,
            marginRight: 10,
            rowGap: 20,
          }}
        >
          <Col lg={8} md={12} sm={24} xs={24}>
            <div className="card">
              <img src={Team3} alt="" />
            </div>
            <div className="underText">
              <p className="name">Presidente</p>
              <p className="post">CEO</p>
            </div>
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <div className="card">
              <img src={Team1} alt="" />
            </div>
            <div className="underText">
              <p className="name">Tom</p>
              <p className="post">Janitor</p>
            </div>
          </Col>
          <Col lg={8} md={12} sm={24} xs={24}>
            <div className="card">
              <img src={Team2} alt="" className="image" />
            </div>
            <div className="underText">
              <p className="name">Aida</p>
              <p className="post">Assistant Manager</p>
            </div>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

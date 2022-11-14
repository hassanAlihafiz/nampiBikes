import React, { Component } from "react";
import { RowWrapper, Wrapper } from "./Services.styled";
import { Col, Row, Card } from "antd";
import services1 from "../../../assests/services1.png";
import services2 from "../../../assests/services2.png";
export default class Services extends Component {
  render() {
    return (
      <Wrapper>
        <h1 className="heading">Our Services</h1>
        <span className="subHeading">
          At NampiBikes, our customers always receive VIP treatment. We’re
          invested in keeping our customers happy, and providing specialized
          services designed to make their lives easier. Take a look below to
          learn more.
        </span>

        <Row
          gutter={[20, 20]}
          style={{
            marginTop: 10,
          }}
        >
          <Col lg={12} md={12} sm={24} xs={24}>
            <img src={services2} className="img" />
          </Col>
          <Col lg={12} md={12} sm={24} xs={24}>
            <img src={services1} className="img" />
          </Col>
        </Row>
        <Row
          gutter={[20, 20]}
          style={{
            marginBottom: 10,
            marginTop: 10,
          }}
        >
          <Col lg={8} xs={24} md={12}>
            <Card className="ant-card " title="Rent and Tours" bordered={true}>
              This service offers the power to enjoy a wooden bicycle and a
              unique experience, we also have a private tour to know the best
              places in Santa Teresa and surroundings.
            </Card>
          </Col>
          <Col lg={8} xs={24} md={12}>
            <Card title="Repair" bordered={true}>
              We also have cleaning and repair services for any bicycle during
              the day, we arrive at the comfort of your home or any part of the
              place so that you do not get stuck anywhere.
            </Card>
          </Col>
          <Col className="ant-col ant-col-xs-24 ant-col-xl-8 ant-col-lg-8">
            <Card title="Delivery & Set Up" bordered={true}>
              J-Class Solutions is committed to providing customers with
              everything they’re looking for, which of course includes this
              service. If you have any questions, please don’t hesitate to
              contact us today.
            </Card>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

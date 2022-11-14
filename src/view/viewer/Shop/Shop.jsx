import React, { Component } from "react";
import { Wrapper } from "./Shop.styled";
import { Col, Row } from "antd";
import ProductCard from "../../../components/Product/ProductCard";
const Shop = () => {
  const data = [
    {
      id: "123",
      name: "Rack Surfboard Bike",
      price: 250,
      img: require("../../../assests/rackSurfboardBike.png"),
    },
    {
      id: "123",
      name: "Mechanic Services",
      price: 30,
      img: require("../../../assests/mechanicServices.png"),
    },
    {
      id: "123",
      name: "Steel banana electric bike",
      price: 1500,
      img: require("../../../assests/steelBanana.png"),
    },

    {
      id: "123",
      name: "Wood banana electric bike",
      price: 3000,
      img: require("../../../assests/woodMTB.png"),
    },
    {
      id: "123",
      name: "Wood MTB electric Bike",
      price: 5000,
      img: require("../../../assests/steelBanana.png"),
    },
    // woodBananaBeach.png
    {
      id: "123",
      name: "Customize your bike",
      price: 5000,
      img: require("../../../assests/woodBananaBeach.png"),
    },
    {
      id: 123,
      name: "wood banana beach bike",
      price: 2000,
      img: require("../../../assests/woodBananaBeach.png"),
    },
    {
      id: "123",
      name: "Helmet",
      price: 50,
      img: require("../../../assests/helmet.png"),
    },
  ];

  return (
    <Wrapper>
      <Row gutter={[20, 20]}>
        {data.map((item, index) => {
          return (
            <Col lg={6}>
              <ProductCard data={item} key={index} />
            </Col>
          );
        })}
      </Row>
    </Wrapper>
  );
};
export default Shop;

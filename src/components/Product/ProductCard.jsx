import { Card, Button } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Wrapper } from "./ProductCard.styled";

const { Meta } = Card;

const ProductCard = ({ data }) => {
  const dispatch = useDispatch();
  const onPress = (item) => {
    dispatch({
      type: "SET_CART",
      payload: {
        orders: item,
      },
    });
  };
  return (
    <Wrapper>
      <Card
        hoverable
        bordered
        style={{ width: 240 }}
        cover={<img alt="example" src={data?.img} />}
      >
        <Meta
          title={data?.name}
          description={"$" + parseInt(data?.price).toFixed(2)}
        />
        <Button type="primary" onClick={() => onPress(data)}>
          Add to Cart
        </Button>
      </Card>
    </Wrapper>
  );
};

export default ProductCard;

import React from "react";
import Left from "./components/Left";
import Right from "./components/Right";

type Props = {};

const Product = (props: Props) => {
  return (
    <div className="flex">
      <Left />
      <Right />
    </div>
  );
};

export default Product;

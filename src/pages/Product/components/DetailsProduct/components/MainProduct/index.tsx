import React from "react";
import MainProductLeft from "./components/Left";
import MainProductRight from "./components/Right";

type Props = {};

const MainProduct = (props: Props) => {
  return (
    <div className="flex">
      <MainProductLeft />
      <MainProductRight />
    </div>
  );
};

export default MainProduct;

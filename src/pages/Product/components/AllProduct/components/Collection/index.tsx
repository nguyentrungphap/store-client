import React from "react";
import CollectionLeft from "./components/Left";
import CollectionRight from "./components/Right";

type Props = {};

const Collection = (props: Props) => {
  return (
    <div className="flex">
      <CollectionLeft />
      <CollectionRight />
    </div>
  );
};

export default Collection;

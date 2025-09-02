import { useParams } from "react-router-dom";
import Left from "./components/Left";
import Right from "./components/Right";
import { useProductStore } from "@/store/product";

type Props = {};

const DetailsProduct = (props: Props) => {
  const id = useParams().id;
  const product = useProductStore((state) => state.products);
  const productItem = product?.find((item) => item.id === id);
  console.log("productItem", productItem);

  return (
    <div className="flex">
      <Left image={productItem?.image} />
      <Right productItem={productItem} />
    </div>
  );
};

export default DetailsProduct;

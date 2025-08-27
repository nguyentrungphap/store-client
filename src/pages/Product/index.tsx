import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";

type Props = {};

const Product = (props: Props) => {
  return (
    <div>
      <Breadcrumb />
      <Outlet />
    </div>
  );
};

export default Product;

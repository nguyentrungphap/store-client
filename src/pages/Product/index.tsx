import Breadcrumb from "@/components/Breadcrumb";
import { Outlet } from "react-router-dom";
import BannerImg from "@/assets/main_collection_breadcrumb_bg.webp";

type Props = {};

const Product = (props: Props) => {
  return (
    <div>
      <Breadcrumb
        title="Sản phẩm"
        subtitle="Tất cả sản phẩm"
        image={BannerImg}
      />
      <Outlet />
    </div>
  );
};

export default Product;

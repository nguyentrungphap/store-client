import IMG from "@/assets/right-silder-1.jpeg";

import Card from "@/components/Card";
import Maincontent from "@/layouts/MainLayout/components/Content";
import { useProductStore } from "@/store/product";
const Home = () => {
  const products = useProductStore((state) => state.products);
  const renderProduct = (product: any) => {
    return (
      <Card
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
        oldPrice={product.oldPrice}
        rating={product.rating}
        discount={product.discount}
      />
    );
  };
  return (
    <>
      <Maincontent />
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-center mb-5">
          San Pham noi bat
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 ">
          {products.map(renderProduct)}
        </div>
      </div>
    </>
  );
};

export default Home;

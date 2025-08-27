import Card from "@/components/Card";
import { useProductStore } from "@/store/product";

const CollectionRight = () => {
  const products = useProductStore((state) => state.products);
  const renderProduct = (product: any) => (
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

  return (
    <div className="w-[70%] p-4 grid grid-cols-4 gap-3">
      {products.map((products) => {
        return renderProduct(products);
      })}
    </div>
  );
};

export default CollectionRight;

import Card from "@/components/Card";
import { products } from "@/store/data";
type Props = {};

const CollectionRight = (props: Props) => {
  console.log({ products });
  return (
    <div className="w-[70%] p-4 grid grid-cols-4 gap-3">
      {products.map((product) => {
        return (
          <Card
            key={product.title}
            IMG={product.IMG}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice}
            rating={product.rating}
            discount={product.discount}
          />
        );
      })}
    </div>
  );
};

export default CollectionRight;

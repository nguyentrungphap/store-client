import Card from "@/components/Card";
import { useProductStore } from "@/store/product";

interface CheckedItem {
  category: string;
  value: string;
}
interface Props {
  listChecked: CheckedItem[];
}

const CollectionRight = (props: Props) => {
  const { listChecked } = props;
  const products = useProductStore((state) => state.products);
  const itemsProduct = (products || [])
    .filter((item) => {
      return listChecked.some((p) => p.category === item.category);
    })
    .map((item) => {
      return { ...item };
    });
  const renderProduct = (product: any) => (
    <Card
      key={product.id}
      id={product.id}
      image={product.image}
      name={product.name}
      price={product.price}
      oldPrice={product.oldPrice}
      rating={product.rating}
      discount={product.discount}
      category={product.category}
    />
  );

  return (
    <div className="w-[70%] p-4 grid grid-cols-4 gap-3">
      {itemsProduct.length > 0
        ? itemsProduct.map((item) => renderProduct(item))
        : products.map((item) => renderProduct(item))}
    </div>
  );
};

export default CollectionRight;

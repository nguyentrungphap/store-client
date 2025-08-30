import Card from "@/components/Card";
import { useFavoriteStore } from "@/store/favorite";
import { useProductStore } from "@/store/product";

interface Props {}

const Favorite = (props: Props) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const product = useProductStore((state) => state.products);

  const itemsProduct = (favorites.items || []).map(
    (item: { idProduct: string }) => {
      return {
        ...item,
        productSnapshot: product.find((p) => p.id === item.idProduct),
      };
    }
  );
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h2 className="text-white text-2xl font-bold">
            ❤️ Danh mục sản phẩm yêu thích
          </h2>
          <span className="text-white text-sm">
            {itemsProduct.length} sản phẩm
          </span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-9xl mx-auto py-10 px-4">
        {itemsProduct.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            Bạn chưa có sản phẩm yêu thích nào.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
            {itemsProduct.map((item, index) => (
              <Card key={index} {...(item.productSnapshot! || {})} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorite;

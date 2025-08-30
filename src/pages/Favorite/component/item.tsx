import { useCartStore } from "@/store/cart";
import { useFavoriteStore } from "@/store/favorite";
import RemoveIcon from "@mui/icons-material/DeleteOutline";
import { toast } from "react-toastify";

interface Props {
  id: string;
  name?: string;
  price?: number;
  discount?: number;
  oldPrice?: number;
  image?: string;
}

const Item = ({
  id,
  name = "Unnamed product",
  price = 0,
  discount = 0,
  oldPrice,
  image,
}: Props) => {
  const addItem = useCartStore((state) => state.addItem);
  const removeItem = useFavoriteStore((state) => state.removeItem);
  const formatPrice = (value: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(value);
  const handleRemove = (id: string) => {
    removeItem(id);
  };
  const handleAddToCart = async() => {
   await addItem({
      id: id,
      name: name,
      price: price,
      quantity: 1,
      color: "",
      size: "",
    });
    toast.success("Thêm thành công!");
  };
  return (
    <div className="flex gap-4 my-4 p-4 border rounded-2xl shadow-sm bg-white lg:flex-col">
      <img
        src={image}
        alt={name}
        className="rounded-xl object-cover"
      />
      <div className="flex flex-col justify-between">
        <h2 className="font-semibold text-lg line-clamp-2">{name}</h2>

        <div className="flex gap-2 items-center text-sm">
          <span className="text-red-500 font-bold">{formatPrice(price)}</span>
          {oldPrice && (
            <span className="line-through text-gray-400">
              {formatPrice(oldPrice)}
            </span>
          )}
          {discount > 0 && (
            <span className="text-green-600 font-medium">({discount}%)</span>
          )}
        </div>

        <div className="flex gap-2 mt-2">
          <button
            onClick={()=>handleAddToCart()}
            className="px-3 py-1 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
          >
            Thêm vào giỏ
          </button>
          <button
            onClick={()=>handleRemove(id)}
            className="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center gap-1"
          >
            <RemoveIcon fontSize="small" />
            Xóa
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

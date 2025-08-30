import { useState } from "react";
import Start from "@mui/icons-material/StarBorderOutlined";
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Cart from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useCartStore } from "@/store/cart";
import type { IProduct } from "@/store/product";
import { displayPrice } from "@/utils/currency";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useFavoriteStore } from "@/store/favorite";

interface Props
  extends Pick<
    IProduct,
    | "id"
    | "image"
    | "name"
    | "price"
    | "oldPrice"
    | "rating"
    | "discount"
    | "category"
  > {}
function Card(props: Props) {
  const { id, image, name, price, oldPrice, rating, discount, category } =
    props;
  const [showIcons, setShowIcons] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const favorite = useFavoriteStore((state) => state.favorites);
  const addCartItem = useCartStore((state) => state.addItem);
  const addFavoriteItem = useFavoriteStore((state) => state.addItem);
  const removeFavoriteItem = useFavoriteStore((state) => state.removeItem);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addCartItem({
      id: id,
      name: name,
      price: price,
      quantity: 1,
      color: "",
      size: "",
    });
    toast.success("Thêm thành công!");
  };
  const handleAddToFavorite = () => {
    if (!isInFavori) {
      addFavoriteItem({
        idProduct: id,
      });
      toast.success("Thêm thành công!");
    } else {
      removeFavoriteItem(id);
      toast.success("Xóa thành công!");
    }
  };
  const isInCart = cart?.items.some((item) => item.id === id);
  const isInFavori = favorite?.items.some((item) => item.idProduct === id);

  const renderContent = () => {
    return (
      <div className="mb-2 h-[84px] max-h-[84px]">
        <p className="font-semibold text-lg mb-1 text-center truncate">
          {name}
        </p>
        <div className="flex items-center gap-2 mb-1 justify-center">
          <span className="text-red-500 font-bold">{displayPrice(price)}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through">
              {displayPrice(oldPrice)}
            </span>
          )}
        </div>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, idx) =>
            idx < (rating ?? 0) ? (
              <StarIcon key={idx} sx={{ color: "yellow" }} />
            ) : (
              <Start key={idx} sx={{ color: "#e5e7eb" }} />
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      className="relative w-full max-w-xs border p-4 rounded-lg border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
      onClick={() => {
        navigate(`/product/${id}`);
      }}
    >
      <img
        src={image}
        alt={name}
        className="rounded-lg mb-2 w-full object-cover h-48"
      />
      {renderContent()}
      <button
        className="w-full cursor-pointer bottom-2 left-2 bg-red-500 text-white rounded-full px-3  text-md font-bold shadow py-3"
        onClick={(e) => {
          e.stopPropagation();
          handleAddToCart();
        }}
      >
        Thêm vào giỏ
      </button>
      <span className="absolute top-2 left-2 bg-red-500 px-3 py-1 text-white rounded-full text-xs font-bold shadow">
        {discount}%
      </span>
      <div className="absolute top-2 right-2 flex flex-col gap-2 items-end p-3">
        <Favorite
          sx={{
            color: isInFavori ? "white" : "black",
            background: isInFavori ? "red" : "#F9F9F9",
            borderRadius: "4px",
            paddingY: "2px",
            ":hover": { color: "white", cursor: "pointer", background: "red" },
          }}
          aria-label="Add to favorite"
          onClick={(e) => {
            e.stopPropagation();
            handleAddToFavorite();
          }}
        />
        <div
          className={`transition-all duration-500 flex flex-col gap-2 ${
            showIcons
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
        >
          <Search
            sx={{
              color: "black",
              background: "#F9F9F9",
              borderRadius: "4px",
              paddingY: "2px",
              ":hover": {
                color: "white",
                cursor: "pointer",
                background: "red",
              },
            }}
            aria-label="Search product"
          />
          <Cart
            sx={{
              color: isInCart ? "white" : "black",
              background: isInCart ? "red" : "#F9F9F9",
              borderRadius: "4px",
              paddingY: "2px",
              ":hover": {
                color: "white",
                cursor: "pointer",
                background: "red",
              },
            }}
            aria-label="Add to cart"
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

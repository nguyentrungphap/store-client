import { useState } from "react";
import Start from "@mui/icons-material/StarBorderOutlined";
import Favorite from "@mui/icons-material/FavoriteBorderOutlined";
import Search from "@mui/icons-material/SearchOutlined";
import Cart from "@mui/icons-material/ShoppingCartOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useCartStore } from "@/store/cart";

interface CardProps {
  id?: string;
  IMG?: string;
  title?: string;
  price?: string;
  oldPrice?: string;
  rating?: number;
  discount?: string;
}

function Card(props: CardProps) {
  const { id, IMG, title, price, oldPrice, rating, discount } = props;
  const [showIcons, setShowIcons] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const cart = useCartStore((state) => state.cart);
  console.log(cart);

  const handleAddToCart = () => {
    addItem({
      id: "unique-id",
      name: title || "Unknown Product",
      price: parseFloat(price?.replace(/[^0-9.-]+/g, "") || "0"),
      quantity: 1,
    });
  };
  const isInCart = cart?.items.some((item) => item.id === id);

  console.log({ isInCart });
  return (
    <div
      className="relative w-full max-w-xs border p-4 rounded-lg border-gray-300 bg-white hover:shadow-lg transition-shadow duration-300"
      onMouseEnter={() => setShowIcons(true)}
      onMouseLeave={() => setShowIcons(false)}
    >
      <img
        src={IMG}
        alt={title}
        className="rounded-lg mb-2 w-full object-cover h-48"
      />
      <div className="mb-2">
        <p className="font-semibold text-lg mb-1 text-center">{title}</p>
        <div className="flex items-center gap-2 mb-1 justify-center">
          <span className="text-red-500 font-bold">{price}</span>
          {oldPrice && (
            <span className="text-gray-400 line-through">{oldPrice}</span>
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
        <button
          className="w-full bottom-2 left-2 bg-red-500 text-white rounded-full px-3  text-md font-bold shadow py-3"
          onClick={handleAddToCart}
        >
          Thêm vào giỏ
        </button>
      </div>
      <span className="absolute top-2 left-2 bg-red-500 px-3 py-1 text-white rounded-full text-xs font-bold shadow">
        {discount}
      </span>
      <div className="absolute top-2 right-2 flex flex-col gap-2 items-end p-3">
        <Favorite
          sx={{
            color: "black",
            background: "#F9F9F9",
            borderRadius: "4px",
            paddingY: "2px",
            ":hover": { color: "white", cursor: "pointer", background: "red" },
          }}
          aria-label="Add to favorite"
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
          />
        </div>
      </div>
    </div>
  );
}

export default Card;

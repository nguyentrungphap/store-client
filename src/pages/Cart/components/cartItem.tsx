import React from "react";
import RemoveIcon from "@mui/icons-material/DeleteOutline";

interface CartItemProps {
  image?: string;
  name?: string;
  price?: number;
  oldPrice?: number;
  quantity?: number;
  color?: string;
  size?: string;
  onIncrease?: () => void;
  onDecrease?: () => void;
  onRemove?: () => void;
}

const displayPrice = (price: number) =>
  price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

const CartItem: React.FC<CartItemProps> = ({
  image,
  name,
  price,
  oldPrice,
  quantity,
  onIncrease,
  onDecrease,
  onRemove,
  color,
  size,
}) => {
  const variant = `${color} - ${size}`;
  return (
    <div className="border-b border-gray-500 border-dotted py-3">
      <div className="flex items-start gap-6 ">
        <img src={image} alt={name} className="w-32 h-32 object-contain" />
        <div className="flex-1">
          <h2 className="font-bold text-xl mb-1">{name}</h2>
          <div className="mb-2">
            <span className="text-red-500 font-bold text-lg">
              {displayPrice(price ? price : 0)}
            </span>
            {oldPrice && (
              <span className="text-gray-400 line-through ml-2 text-base">
                {displayPrice(oldPrice)}
              </span>
            )}
          </div>
          {variant && <div className="mb-2">Phiên bản: {variant}</div>}
          <div className="mb-2 flex items-center gap-2">
            <span>Số lượng</span>
            <div className="flex items-center border rounded px-2">
              <button
                className="px-2 text-lg"
                onClick={onDecrease}
                aria-label="Giảm số lượng"
              >
                -
              </button>
              <span className="px-4 font-bold">{quantity}</span>
              <button
                className="px-2 text-lg"
                onClick={onIncrease}
                aria-label="Tăng số lượng"
              >
                +
              </button>
            </div>
          </div>
          <div>
            Thành tiền:
            <span className="text-red-500 font-bold text-lg">
              {displayPrice(price ? price * (quantity || 0) : 0)}
            </span>
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          className="ml-auto text-gray-500 hover:text-red-500"
          onClick={onRemove}
          aria-label="Xóa sản phẩm"
        >
          <RemoveIcon fontSize="medium" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;

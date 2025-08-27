import React, { useEffect, useRef, useState } from "react";
import Share from "./components/Share";
import StarIcon from "@mui/icons-material/Star";
import TimeCountDown from "@/components/TimeCountDown";
import Start from "@mui/icons-material/StarBorderOutlined";

const product = {
  id: 1,
  name: "Roller Blocks Rockin' Wagon",
  price: 500000,
  oldPrice: 2500000,
  discount: 80,
  brand: "F1GENZ Babies",
  category: "baby carriers",
  barcode: "138999404",
  rating: 4.5,
  flashSale: {
    startDay: "26/08/2025",
    startTime: "20:00:00",
    endDay: "29/08/2025",
    endTime: "23:59:00",
    image:
      "https://file.hstatic.net/200000306687/file/ezgif.com-gif-maker_40e5c36d115b4904babbebc78c90c34e.gif",
  },
  color: ["Đỏ", "Xanh", "Vàng"],
  size: ["S", "M", "L"],
  voucher: ["GIAM10", "MUASAM50"],
};

const infoList = [
  { label: "Mã sản phẩm", value: product.id },
  { label: "Barcode", value: product.barcode },
  { label: "Thương hiệu", value: product.brand },
  { label: "Dòng sản phẩm", value: product.category },
];

const MainProductRight = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <form className="w-3/5 px-15">
      {/* Header */}
      <div className="flex flex-row-reverse justify-between items-center">
        <Share />
        <h1 className="text-3xl font-bold">{product.name}</h1>
      </div>

      {/* Product Info */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 my-4 text-sm text-gray-600 w-max">
        {infoList.map((item, idx) => (
          <div key={idx} className="flex items-center">
            <div className="bg-red-500 h-2 w-2 rounded-full inline-block mr-2"></div>
            <strong>{item.label}:&nbsp;</strong>
            <span>{item.value}</span>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <div className="flex justify-between items-center my-4 border-y border-gray-300 border-dotted py-2">
        <div className="flex items-center gap-2">
          <del className="text-sm text-gray-500 line-through font-bold">
            {product.oldPrice.toLocaleString("vi-VN")}₫
          </del>
          <span className="font-bold text-2xl text-red-500">
            {product.price.toLocaleString("vi-VN")}₫
          </span>
          <span className="text-white bg-red-500 px-3 py-1 rounded-2xl">
            Tiết kiệm {product.discount}%
          </span>
        </div>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, idx) =>
            idx < (product.rating ?? 0) ? (
              <StarIcon key={idx} sx={{ color: "yellow" }} />
            ) : (
              <Start key={idx} sx={{ color: "#e5e7eb" }} />
            )
          )}
        </div>
      </div>

      {/* Flash Sale */}
      {product.flashSale && (
        <div className="flex items-center bg-gradient-to-l from-[#DD1829] to-[#FCC419] p-2 rounded-lg">
          <img
            title="Flash Sale"
            src={product.flashSale.image}
            alt="Flash Sale"
            className="w-30 h-8"
          />
          <TimeCountDown
            startDay={product.flashSale.startDay}
            startTime={product.flashSale.startTime}
            endDay={product.flashSale.endDay}
            endTime={product.flashSale.endTime}
          />
        </div>
      )}

      {/* Color & Size */}
      <div className="my-4">
        <div className="mb-2 font-semibold">Color:</div>
        <div className="flex gap-2 mb-4">
          {product.color.map((color) => (
            <span
              key={color}
              className="px-3 py-1 rounded border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200"
            >
              {color}
            </span>
          ))}
        </div>
        <div className="mb-2 font-semibold">Size:</div>
        <div className="flex gap-2">
          {product.size.map((size) => (
            <span
              key={size}
              className="px-3 py-1 rounded border border-gray-300 bg-gray-100 cursor-pointer hover:bg-gray-200"
            >
              {size}
            </span>
          ))}
        </div>
      </div>

      {/* Số lượng */}
      <div className="my-4 flex items-center gap-2">
        <label className="font-semibold" htmlFor="quantity">
          Số lượng:
        </label>
        <button
          type="button"
          className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
          onClick={() => handleQuantityChange(-1)}
          aria-label="Giảm số lượng"
        >
          -
        </button>
        <span className="px-3">{quantity}</span>
        <button
          type="button"
          className="px-2 py-1 border rounded bg-gray-100 hover:bg-gray-200"
          onClick={() => handleQuantityChange(1)}
          aria-label="Tăng số lượng"
        >
          +
        </button>
      </div>

      {/* Voucher Section */}
      <div className="my-4">
        <div className="font-semibold mb-2">Voucher ưu đãi:</div>
        <div className="flex gap-2">
          {product.voucher.map((voucher) => (
            <span
              key={voucher}
              className="bg-green-100 text-green-700 px-3 py-1 rounded border border-green-300 font-semibold cursor-pointer hover:bg-green-200"
            >
              {voucher}
            </span>
          ))}
        </div>
      </div>

      {/* Button mua hàng */}
      <div className="my-6">
        <button
          type="submit"
          className="w-full bg-red-500 text-white font-bold py-3 rounded-lg text-lg hover:bg-red-600 transition"
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </form>
  );
};

export default MainProductRight;

import AddressSelect from "@/components/AddressSelect";
import { useCartStore } from "@/store/cart";
import { useProductStore } from "@/store/product";
import { displayPrice } from "@/utils/currency";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cart = useCartStore((state) => state.cart);
  const products = useProductStore((state) => state.products);
  const [checkedPayment, setCheckedPayment] = useState(true);
  const items = (cart?.items || []).map((item) => {
    return {
      ...item,
      productSnapshot: products.find((p) => p.id === item.id),
    };
  });
  const totalPrice = items.reduce(
    (acc, item) => acc + (item.productSnapshot?.price || 0) * item.quantity,
    0
  );

  const handleAddressChange = (
    city: string,
    district: string,
    ward: string
  ) => {
    console.log("Selected Address:", { city, district, ward });
  };

  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left: Customer Info & Payment */}
      <div className="flex-1 max-w-4xl p-12 bg-white rounded-lg shadow-md mr-8 ml-auto">
        <div className="flex items-center mb-6">
          <h1 className="text-2xl font-bold text-blue-700 mr-6">
            F1GENZ Babie
          </h1>
        </div>
        <div className="flex gap-10 justify-end">
          <div className="w-[50%]">
            <h2 className="font-bold  mb-2">Thông tin nhận hàng</h2>

            <form className="space-y-3">
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Email"
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Họ và tên"
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Số điện thoại (tùy chọn)"
              />
              <input
                className="w-full border rounded px-3 py-2"
                placeholder="Địa chỉ (tùy chọn)"
              />
              <AddressSelect onAddressChange={handleAddressChange} />
              <textarea
                className="w-full border rounded px-3 py-2"
                placeholder="Ghi chú (tùy chọn)"
              />
            </form>
          </div>
          <div className="w-[50%]">
            <h2 className="font-bold  mb-2">Thanh toán</h2>
            <div className="border rounded max-w-lg gap-2">
              <div
                className="px-3 py-4 flex cursor-pointer"
                onClick={() => setCheckedPayment(!checkedPayment)}
              >
                <div className="gap-3 flex">
                  <input type="radio" checked={checkedPayment} readOnly />
                  <span>Thanh toán khi giao hàng (COD)</span>
                </div>
                <span className="ml-auto text-blue-500">💵</span>
              </div>
              <div
                className={`px-2 py-5 bg-gray-200 text-sm ${
                  checkedPayment ? "" : "hidden"
                }`}
              >
                <span>Bạn chỉ phải thanh toán khi nhận được hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[400px] bg-white p-8 shadow-lg border-l flex flex-col ml-auto">
        <h2 className="font-bold text-lg mb-4">
          Đơn hàng ({items.length} sản phẩm)
        </h2>
        <div className="space-y-4 mb-4">
          {items.map((item, idx) => (
            <div key={item.id + idx} className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={item.productSnapshot?.image}
                  alt={item.productSnapshot?.name}
                  className="w-12 h-12 object-contain rounded"
                />
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 font-bold">
                  {item.quantity}
                </span>
              </div>
              <div className="flex-1">
                <div className="font-bold text-sm">
                  {item.productSnapshot?.name}
                </div>
                <div className="text-xs text-gray-500">
                  {item.color} / {item.size}
                </div>
              </div>
              <div className="font-bold text-right text-gray-700">
                {displayPrice(
                  (item.productSnapshot?.price || 0) * item.quantity
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-2 mb-4">
          <input
            className="border rounded px-2 py-1 flex-1"
            placeholder="Nhập mã giảm giá"
          />
          <button className="bg-blue-500 text-white px-4 rounded">
            Áp dụng
          </button>
        </div>
        <div className="mb-2 text-right text-gray-500">
          Tạm tính {displayPrice(totalPrice)}
        </div>
        <div className="mb-4 text-right text-blue-600 font-bold text-xl">
          Tổng cộng {displayPrice(totalPrice)}
        </div>
        <button className="bg-blue-600 text-white font-bold py-3 rounded w-full">
          ĐẶT HÀNG
        </button>
        <div
          className="mt-4 text-right text-sm text-blue-500 cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          &lt; Quay về giỏ hàng
        </div>
      </div>
    </div>
  );
};

export default Checkout;

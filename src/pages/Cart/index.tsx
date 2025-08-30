import Breadcrumb from "@/components/Breadcrumb";
import BannerImg from "@/assets/main_collection_breadcrumb_bg.webp";
import { useCartStore } from "@/store/cart";
import CartItem from "./components/cartItem";
import { displayPrice } from "@/utils/currency";
import { useProductStore } from "@/store/product";
import { useNavigate } from "react-router-dom";

type Props = {};

const Cart = (props: Props) => {
  const cart = useCartStore((state) => state.cart);
  const products = useProductStore((state) => state.products);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalQuantity = cart?.items.reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = (cart?.items || []).reduce((acc, item) => {
    const product = products.find((p) => p.id === item.id);
    return acc + (product?.price || 0) * item.quantity;
  }, 0);

  const handleIncrease = (id: string) => {
    const item = cart?.items.find((i) => i.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const handleDecrease = (id: string) => {
    const item = cart?.items.find((i) => i.id === id);
    if (item && item.quantity > 1) updateQuantity(id, item.quantity - 1);
  };

  const handleRemove = (id: string) => {
    removeItem(id);
  };

  const navigate = useNavigate();

  const items = (cart?.items || []).map((item) => {
    return {
      ...item,
      productSnapshot: products.find((p) => p.id === item.id),
    };
  });
  return (
    <div>
      <Breadcrumb
        title="Giỏ hàng"
        subtitle="Sản phẩm trong giỏ hàng"
        image={BannerImg}
      />
      <div className="mx-auto px-[a] lg:max-w-[1370px] ">
        <h2 className="text-red-500 text-2xl font-bold">Giỏ hàng của bạn</h2>
        <span className="text-gray-500 text-lg">
          Bạn đang có {totalQuantity} sản phẩm trong giỏ hàng
        </span>
        <div className="flex">
          <div className="w-[75%]">
            {items.map((item) => (
              <CartItem
              key={item.id}
                image={item.productSnapshot?.image}
                name={item.productSnapshot?.name}
                price={item.productSnapshot?.price || 0}
                oldPrice={item.productSnapshot?.oldPrice}
                quantity={item.quantity}
                color={item.color}
                size={item.size}
                onIncrease={() => handleIncrease(item.id)}
                onDecrease={() => handleDecrease(item.id)}
                onRemove={() => handleRemove(item.id)}
              />
            ))}
          </div>
          <div className="w-[25%] ml-4">
            <div className="bg-blue-900 w-full p-[15px] border-[1px] border-blue-900">
              <h2 className="text-white uppercase text-[1rem] font-bold">
                Thông tin đơn hàng
              </h2>
            </div>
            <div className="border-[1px] p-[15px]">
              <div className="border-b border-gray-300 pb-4 mb-4 border-dotted">
                <div>
                  <span className="font-bold">Tổng tiền: &nbsp;</span>
                  <span className="text-red-500 font-bold text-xl">
                    {displayPrice(totalPrice)}
                  </span>
                </div>
                <div className="text-gray-500 mt-2 text-[0.9rem]">
                  Phí vận chuyển sẽ được tính ở trang thanh toán.
                  <br />
                  Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.
                </div>
              </div>
              <div>
                <button
                  className="w-full border-[1px] mb-4 p-3 cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Tiếp tục mua hàng
                </button>
                <button
                  className="w-full border-[1px] mb-4 bg-red-500 text-white p-3 hover:bg-white hover:text-red-500 cursor-pointer"
                  onClick={() => navigate("/checkout")}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

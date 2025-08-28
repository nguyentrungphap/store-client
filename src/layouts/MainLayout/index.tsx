import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/product";
import Favorite from "@/components/Favorite";

type Props = {};
const MainLayout = (props: Props) => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  const fetchProducts = useProductStore((state) => state.fetchProduct);
  useEffect(() => {
    fetchCart("user_id");
    fetchProducts();
  }, [fetchCart, fetchProducts]);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="font-oswald relative ">
      <Navbar setIsFavorite={setIsFavorite} />
      <Outlet />
      <Footer />
      <div
        className={`fixed inset-0 backdrop-blur-sm bg-black/10 z-50 flex items-center justify-center transition-all duration-300 ${
          isFavorite ? "block" : "hidden"
        }`}
        onClick={() => setIsFavorite(false)}
      >
        <div onClick={(e) => e.stopPropagation()} className="w-full">
          <Favorite />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

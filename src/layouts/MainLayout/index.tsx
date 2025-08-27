import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";
import { useProductStore } from "@/store/product";

type Props = {};
const MainLayout = (props: Props) => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  const fetchProducts = useProductStore((state) => state.fetchProduct);
  useEffect(() => {
    fetchCart("user_id");
    fetchProducts();
  }, [fetchCart, fetchProducts]);

  return (
    <div className="font-oswald">
      <Navbar />
      <Outlet />
      <Footer />
      <button>them</button>
      <button>sua</button>
      <button>xoa</button>
    </div>
  );
};

export default MainLayout;

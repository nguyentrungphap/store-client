import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useCartStore } from "@/store/cart";
import { useEffect } from "react";

type Props = {};
const MainLayout = (props: Props) => {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart("user_id");
  }, [fetchCart]);

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

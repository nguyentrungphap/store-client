import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/product";
import { useFavoriteStore } from "@/store/favorite";

type Props = {};
const MainLayout = (props: Props) => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  const fetchProducts = useProductStore((state) => state.fetchProduct);
  const fetchFavorites = useFavoriteStore((state) => state.fetchFavorites);
  useEffect(() => {
    fetchCart("user_id");
    fetchProducts();
    fetchFavorites();
  }, [fetchCart, fetchProducts,fetchFavorites]);

  return (
    <div className="font-oswald relative ">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default MainLayout;

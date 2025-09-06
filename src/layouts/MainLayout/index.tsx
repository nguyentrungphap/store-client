import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useCartStore } from "@/store/cart";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/product";
import { useFavoriteStore } from "@/store/favorite";
import { useNewsStore } from "@/store/news";

type Props = {};
const MainLayout = (props: Props) => {
  const fetchCart = useCartStore((state) => state.fetchCart);
  const fetchProducts = useProductStore((state) => state.fetchProduct);
  const fetchFavorites = useFavoriteStore((state) => state.fetchFavorites);
  const fetchNews = useNewsStore((state) => state.fetchNews);
  useEffect(() => {
    fetchCart("user_id");
    fetchProducts();
    fetchFavorites();
    fetchNews();
  }, [fetchCart, fetchProducts, fetchFavorites, fetchNews]);

  return (
    <div className="font-oswald relative ">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

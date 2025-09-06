import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import MainLayout from "@/layouts/MainLayout";
import Product from "@/pages/Product";
import AllProduct from "@/pages/Product/components/AllProduct";
import DetailsProduct from "@/pages/Product/components/DetailsProduct";
import Cart from "@/pages/Cart";
import Checkout from "@/pages/Checkout";
import Favorite from "@/pages/Favorite";
import Contact from "@/pages/Contact";
import News from "@/pages/News";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { path: "", Component: Home },
      { path: "about", Component: About },
      {
        path: "product",
        Component: Product,
        children: [
          {
            path: "",
            Component: AllProduct,
          },
          {
            path: ":id",
            Component: DetailsProduct,
          },
        ],
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "checkout",
        Component: Checkout,
      },
      {
        path: "favorite",
        Component: Favorite,
      },
      {
        path: "lien-he",
        Component: Contact,
      },
      {
        path: "tin-tuc",
        Component: News,
      },
    ],
  },
]);

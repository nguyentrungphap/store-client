import { useEffect, useRef, useState } from "react";
import Logo from "@/assets/logo.webp";
import DropDown, { type MenuProps } from "@/components/DropDown";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useModalStore } from "@/store/modalStore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAnimation from "@/components/InputAnimation";
import { Link } from "react-router-dom";
import cx from "clsx";
import { useCartStore } from "@/store/cart";

interface propNavbar {
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ setIsFavorite }: propNavbar) => {
  const [active, setActive] = useState<string>("trangchu");
  const [scrolling, setScrolling] = useState<string | null>(null);
  const cart = useCartStore((state) => state.cart);
  const menuItems: MenuProps["items"] = [
    {
      label: "Trang Chủ",
      key: "trangchu",
    },
    {
      label: "Sản Phẩm",
      key: "sanpham",
    },
    {
      label: "Liên Hệ",
      key: "lienhe",
    },
  ];
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (e.deltaY < 0) {
          setScrolling("up");
        } else if (e.deltaY > 0) {
          setScrolling("down");
        }
      }, 100);
    };
    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);
  return (
    <div
      className={cx(
        "shadow-bottom-lg bg-white flex items-center justify-between p-4 sticky top-0 z-50 mb-3.5 animate-moveUpAndHide duration-300 transition-transform",
        {
          hidden: scrolling === "down",
        }
      )}
    >
      <div className="flex items-center justify-between text-base font-bold gap-5">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-15" />
        </Link>
        <Link
          to="/"
          className={`hover:text-red-500 cursor-pointer ${
            active === "trangchu" ? "text-red-500" : ""
          }`}
          onClick={() => setActive("trangchu")}
        >
          Trang Chủ
        </Link>
        <DropDown menu={{ items: menuItems }} trigger="hover">
          <Link
            to="/product"
            className={`hover:text-red-500 cursor-pointer flex items-center ${
              active === "allproduct" ? "text-red-500 font-bold" : ""
            }`}
            onClick={() => setActive("allproduct")}
          >
            <span className="text-left">Tất Cả Sản Phẩm</span>
            <span className="ml-1">›</span>
          </Link>
        </DropDown>
        <div
          className={`hover:text-red-500 cursor-pointer ${
            active === "tintuc" ? "text-red-500" : ""
          }`}
          onClick={() => setActive("tintuc")}
        >
          Tin tức
        </div>
        <div
          className={`hover:text-red-500 cursor-pointer ${
            active === "lienhe" ? "text-red-500" : ""
          }`}
          onClick={() => setActive("lienhe")}
        >
          Liên Hệ
        </div>
      </div>
      <div className="flex items-center gap-4">
        <InputAnimation
          placeholders={["Tìm kiếm sản phẩm...", "Bạn cần tìm gì gì?"]}
          animationSpeed={50}
          intervalTime={4000}
          className="border-b-[1px] border-gray-300 w-[200px] md:w-[250px]"
        />
        <button className="cursor-pointer">
          <SearchOutlinedIcon className="w-icon h-icon" />
        </button>
        <button
          className="cursor-pointer"
          onClick={() => useModalStore.getState().showModal("authentication")}
        >
          <Person2OutlinedIcon className="w-icon h-icon" />
        </button>
        <button
          className="relative cursor-pointer"
          onClick={() => setIsFavorite(true)}
        >
          <FavoriteBorderOutlinedIcon className="w-icon h-icon" />
          <div className="absolute top-[-3px] right-[-3px] bg-red-500 text-white rounded-full text-xs px-1">
            2
          </div>
        </button>
        <Link to="/cart" className="relative cursor-pointer">
          <ShoppingBagOutlinedIcon className="w-icon h-icon" />
          <div className="absolute top-[-3px] right-[-3px] bg-red-500 text-white rounded-full text-xs px-1">
            {cart?.items.length || 0}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

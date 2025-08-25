import { useState } from "react";
import Logo from "@/assets/logo.webp";
import DropDown, { type MenuProps } from "@/components/DropDown";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useModalStore } from "@/store/modalStore";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import InputAnimation from "@/components/InputAnimation";

const Navbar = () => {
  const [active, setActive] = useState<string>("trangchu");

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
  return (
    <div className="shadow-bottom-lg bg-white flex items-center justify-between p-4 sticky top-0 z-50 mb-3.5">
      <div className="flex items-center justify-between text-base font-bold gap-5">
        <img src={Logo} alt="Logo" className="h-15" />
        <div
          className={`hover:text-red-500 cursor-pointer ${
            active === "trangchu" ? "text-red-500" : ""
          }`}
          onClick={() => setActive("trangchu")}
        >
          Trang Chủ
        </div>
        <DropDown menu={{ items: menuItems }} trigger="hover">
          <div
            className={`hover:text-red-500 cursor-pointer ${
              active === "allproduct" ? "text-red-500" : ""
            }`}
            onClick={() => setActive("allproduct")}
          >
            Tất Cả Sản Phẩm <span>›</span>
          </div>
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
          onClick={() => useModalStore.getState().showModal("login")}
        >
          <Person2OutlinedIcon className="w-icon h-icon" />
        </button>
        <button className="relative cursor-pointer">
          <FavoriteBorderOutlinedIcon className="w-icon h-icon" />
          <div className="absolute top-[-3px] right-[-3px] bg-red-500 text-white rounded-full text-xs px-1">
            2
          </div>
        </button>
        <button className="relative cursor-pointer">
          <ShoppingBagOutlinedIcon className="w-icon h-icon" />
          <div className="absolute top-[-3px] right-[-3px] bg-red-500 text-white rounded-full text-xs px-1">
            2
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

const DropDown = () => {
  return (
    <div className="relative group inline-block">
      <button className="rounded-lg hover:text-red-500 cursor-pointer">
        Tất cả sản phẩm <span>›</span>
      </button>
      <div className="absolute left-0 mt-2 w-40 rounded-lg bg-white shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 -translate-y-2 transition-all duration-200 invisible group-hover:visible">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Trang chủ
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Sản phẩm
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Liên hệ
        </a>
      </div>
    </div>
  );
};

export default DropDown;

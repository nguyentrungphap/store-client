import ChildCareIcon from "@mui/icons-material/ChildCare";

const ListCategory = () => {
  return (
    <div>
      <h2 className="uppercase text-[1.25rem] font-bold bg-red-500 text-white p-2 rounded-tl-md rounded-t-md">
        Danh mục sản phẩm
      </h2>
      <div>
        <div className="px-3.5 py-2.5 cursor-pointer border-[1px] border-gray-200 border-t-0  transition-colors duration-500 hover:bg-red-500 hover:text-white hover:border-red-500">
          <ChildCareIcon className="category-icon" />{" "}
          <span className="w-4/5">Quần áo sơ sinh</span>
        </div>
        <div className="px-3.5 py-2.5 cursor-pointer border-[1px] border-gray-200 border-t-0  transition-colors duration-500 hover:bg-red-500 hover:text-white hover:border-red-500">
          <ChildCareIcon className="category-icon" />{" "}
          <span className="w-4/5">Thời trang bé gái</span>
        </div>
        <div className="px-3.5 py-2.5 cursor-pointer border-[1px] border-gray-200 border-t-0  transition-colors duration-500 hover:bg-red-500 hover:text-white hover:border-red-500">
          <ChildCareIcon className="category-icon" />{" "}
          <span className="w-4/5">Thời trang bé trai</span>
        </div>
        <div className="px-3.5 py-2.5 cursor-pointer border-[1px] border-gray-200 border-t-0  transition-colors duration-500 hover:bg-red-500 hover:text-white hover:border-red-500">
          <ChildCareIcon className="category-icon" />{" "}
          <span className="w-4/5">Giày</span>
        </div>
        <div className="text-center px-3.5 py-2.5 cursor-pointer border-[1px] border-gray-200 border-t-0  transition-colors duration-500 hover:bg-red-500 hover:text-white hover:border-red-500">
          <span className="mr-1">+</span> Xem thêm
        </div>
      </div>
    </div>
  );
};

export default ListCategory;

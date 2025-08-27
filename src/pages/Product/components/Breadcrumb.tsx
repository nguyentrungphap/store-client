import BannerImg from "@/assets/main_collection_breadcrumb_bg.webp";
type Props = {};

const Breadcrumb = (props: Props) => {
  return (
    <div className="relative mb-6">
      <div className="pt-[100px] pb-[130px] text-center">
        <h2 className="text-4xl font-bold mt-2.5 mb-3.5">Baby Seats</h2>
        <span>Trang chủ &nbsp; / &nbsp;</span>
        <span>Tất cả sản phẩm</span>
      </div>
      <img
        src={BannerImg}
        alt=""
        className="absolute top-[-15px] w-full h-full object-cover z-[-1]"
      />
    </div>
  );
};

export default Breadcrumb;

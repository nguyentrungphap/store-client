import Logo from "@/assets/footers-logo.png";
const ContactFooter = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5">
      <div>
        <img src={Logo} alt="..." className="mb-[25px]" />
        <p className="max-w-[85%] opacity-80">
          F1GENZ BABIES luôn cam kết, đảm bảo đưa sản phẩm trực tiếp từ nhà sản
          xuất đến tay người dùng và kiểm soát được chất lượng để đáp ứng được
          nhu cầu ngày càng cao của khách hàng. Tất cả các sản phẩm tại F1GENZ
          BABIES đều có nguồn gốc xuất xứ rõ ràng, chất lượng.
        </p>
      </div>
      <div>
        <h2 className="text-2xl lg:text-3xl mb-[25px]">Liên hệ</h2>
        <div className="opacity-80 flex flex-col gap-2.5 text-sm lg:text-base">
          <p>
            Tư vấn dịch vụ:{" "}
            <span className="cursor-pointer hover:text-red-500">1800 6750</span>
          </p>
          <p>
            Hỗ trợ sử dụng:{" "}
            <span className="cursor-pointer hover:text-red-500">1800 6750</span>
          </p>
          <p>
            Hỗ trợ vận chuyển:{" "}
            <span className="cursor-pointer hover:text-red-500">1800 6750</span>
          </p>
          <p>
            Email:{" "}
            <span className="cursor-pointer hover:text-red-500">
              phapnguyen@gmail.com
            </span>
          </p>
          <p>Từ 7h00 – 22h00 các ngày từ thứ 2 đến Chủ nhật</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl lg:text-3xl mb-[25px]">Về chúng tôi</h2>
        <div className="flex flex-col gap-2.5  text-sm lg:text-base">
          <p className="cursor-pointer hover:text-red-500">Giới thiệu</p>
          <p className="cursor-pointer hover:text-red-500">
            Chính sách đổi trả
          </p>
          <p className="cursor-pointer hover:text-red-500">
            Chính sách bảo mật
          </p>
          <p className="cursor-pointer hover:text-red-500">
            Điều khoản dịch vụ
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl lg:text-3xl mb-[25px]">Danh mục nổi bật</h2>
        <div className="flex flex-col gap-2.5 text-sm lg:text-base">
          <p className="cursor-pointer hover:text-red-500">Anchor & Baby</p>
          <p className="cursor-pointer hover:text-red-500">Baby Seats</p>
          <p className="cursor-pointer hover:text-red-500">Bag & Clothes</p>
          <p className="cursor-pointer hover:text-red-500">Gloves & Jacket</p>
        </div>
      </div>
      <div>
        <h2 className="text-2xl lg:text-3xl mb-[25px]">
          Liên hệ với chúng tôi
        </h2>
        <div className=" text-sm lg:text-base">
          <p>
            Luôn cập nhật tất cả các hành động mà chúng tôi đã lưu cho tất cả
            khách hàng của mình.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;

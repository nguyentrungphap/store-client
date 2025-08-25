import InputAnimation from "@/components/InputAnimation";

const FormFooter = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle submit logic here
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-8 items-center mb-20 pb-20 border-b border-gray-300">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="text-3xl md:text-4xl mb-2 font-bold">
          Đăng ký nhận tin
        </h1>
        <span className="text-gray-600">Để nhận những ưu đãi đặc biệt</span>
      </div>
      <form className="flex" onSubmit={handleSubmit}>
        <label htmlFor="footer-email" className="sr-only">
          Email
        </label>

        <InputAnimation
          placeholders={["Nhập địa chỉ email của bạn...", "Bạn cần tư vấn?"]}
          animationSpeed={50}
          intervalTime={4000}
          className="rounded-l-3xl w-[200px] md:w-[300px]"
        />
        <button
          type="submit"
          className="bg-red-500 text-white rounded-r-3xl py-2 px-4"
          aria-label="Đăng ký nhận tin"
        >
          Đăng ký
        </button>
      </form>
    </div>
  );
};

export default FormFooter;

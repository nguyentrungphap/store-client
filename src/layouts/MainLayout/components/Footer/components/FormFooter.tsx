import { useEffect, useState } from "react";

const placeholders = ["Nhập địa chỉ email của bạn...", "Bạn cần tư vấn?"];

const FormFooter = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center gap-[5rem] items-center mb-20 pb-20 border-b border-gray-300">
      <div>
        <h1 className="text-4xl mb-2">Đăng ký nhận tin</h1>
        <span>Để nhận những ưu đãi đặc biệt</span>
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholders[index]}
          className="w-[300px] bg-white text-black rounded-l-3xl py-2 px-4 focus:outline-none focus:ring-0 focus:border-gray-300"
        />
        <button className="bg-red-500 text-white rounded-r-3xl py-2 px-4">
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default FormFooter;

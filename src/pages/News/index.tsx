import { useState } from "react";
import { Pagination } from "@mui/material";
import { useNewsStore } from "@/store/news";

export default function News() {
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const news = useNewsStore((state) => state.news);

  const startIndex = (page - 1) * rowsPerPage;
  const currentData = news.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="flex mx-3">
      <div className="w-[60%]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {currentData.map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg shadow p-[30px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full max-h-100 mb-2 rounded bg-cover bg-center bg-no-repeat"
              />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-md my-4 text-red-600 font-bold">{item.date}</p>
              <p className="text-gray-700">{item.content}</p>
            </div>
          ))}
        </div>
        <Pagination
          count={Math.ceil(news.length / rowsPerPage)}
          page={page}
          onChange={(_, value) => setPage(value)}
          color="primary"
        />
      </div>
      <div className="w-[40%] pl-8">
        <div>
          <span className="flex items-center uppercase text-red-600 font-bold text-xl mb-4">
            <img
              src="https://bizweb.dktcdn.net/100/488/521/themes/913255/assets/image_title_all.png?1697623334994"
              alt=""
              className="h-5"
            />
            Đừng bỏ lỡ.
          </span>
          {news.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-gray-100 rounded-lg shadow p-5 mb-4 relative pl-8"
            >
              <div className="absolute top-2 left-[-20px] bg-white p-2">
                <p className="text-md font-bold text-white bg-red-600 px-2">
                  {item.id}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-30 h-30 flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <h3 className="flex-1 text-base font-semibold line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface PaginationProps {
  page: number;
  count: number;
  onChange: (value: number) => void;
  className?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  count,
  onChange,
  className,
}) => {
  if (count <= 1) return null;
  const pages = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div
      className={`flex justify-center items-center gap-2 mt-6 ${
        className || ""
      }`}
    >
      <button
        className={`px-3 py-1 rounded border ${
          page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
        onClick={() => page > 1 && onChange(page - 1)}
        disabled={page === 1}
      >
        &lt;
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={`px-3 py-1 rounded border font-bold ${
            p === page ? "bg-black text-white" : "hover:bg-gray-200"
          }`}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}
      <button
        className={`px-3 py-1 rounded border ${
          page === count ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
        }`}
        onClick={() => page < count && onChange(page + 1)}
        disabled={page === count}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;

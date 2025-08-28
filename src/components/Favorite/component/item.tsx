import React from "react";
import RemoveIcon from "@mui/icons-material/DeleteOutline";

type Props = {};

const Item = (props: Props) => {
  return (
    <div className="flex gap-4 my-4 ">
      <img src="https://via.placeholder.com/150" alt="..." />
      <div>
        <h2>Item Title</h2>
        <div>
          <span>195000đ</span>
          <span>6000000đ</span>
          <span>{`(-68%)`}</span>
        </div>
        <div>
          <button>Them vao gio</button>
          <button>
            <RemoveIcon fontSize="medium" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;

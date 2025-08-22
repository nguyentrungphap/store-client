import React, { useState, type ReactNode } from "react";
import cx from "clsx";

export interface MenuProps {
  items: {
    label: string | ReactNode;
    key: string;
    isDisable?: boolean;
  }[];
}

interface Props {
  children: React.ReactNode;
  menu?: MenuProps;
  trigger?: "hover" | "click" | "contextMenu";
  placement?: "top" | "bottom" | "left" | "right";
}
const DropDown = (props: Props) => {
  const { children, menu, trigger = "hover", placement = "bottom" } = props;
  const [isShowMenu, setIsShowMenu] = useState(false);

  const renderMenu = () => {
    if (!isShowMenu) return null;

    return menu?.items.map((item) => {
      if (typeof item.label !== "string") {
        return item.label;
      }
      return (
        <div key={item.key}>
          <a
            href="#"
            className={cx(
              "block px-4 py-2 hover:bg-gray-100 hover:text-red-500"
            )}
          >
            {item.label}
          </a>
        </div>
      );
    });
  };

  // Event handlers for different triggers
  const handleClick = () => {
    if (trigger === "click") {
      setIsShowMenu((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (trigger === "hover") {
      setIsShowMenu(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsShowMenu(false);
    }
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    if (trigger === "contextMenu") {
      e.preventDefault();
      setIsShowMenu((prev) => !prev);
    }
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onContextMenu={handleContextMenu}
    >
      <div>
        <button
          className="rounded-lg hover:text-red-500 cursor-pointer"
          onClick={handleClick}
        >
          {children}
        </button>
        <div
          className={cx(
            "absolute left-0 w-40 rounded-lg bg-white shadow-lg transition-all duration-200",
            {
              "opacity-100 visible translate-y-0": isShowMenu,
              "opacity-0 invisible -translate-y-2": !isShowMenu,
            }
          )}
        >
          {renderMenu()}
        </div>
      </div>
    </div>
  );
};

export default DropDown;

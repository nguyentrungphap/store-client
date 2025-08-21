import React from "react";
import clsx from "clsx";

interface PropsButton {
  variant?: "solid" | "outline" | "ghost";
  disabled?: boolean;
  color?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const variantClasses = {
  solid: "",
  outline: "border bg-transparent",
  ghost: "bg-transparent border-none shadow-none",
};

const colorClasses = {
  primary: "text-white bg-blue-600 hover:bg-blue-700 border-blue-600",
  secondary: "text-gray-800 bg-gray-200 hover:bg-gray-300 border-gray-200",
  danger: "text-white bg-red-600 hover:bg-red-700 border-red-600",
};

const sizeClasses = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = (props: PropsButton) => {
  const {
    children,
    disabled,
    variant = "solid",
    color = "primary",
    size = "md",
    startIcon,
    endIcon,
    className,
    onClick,
    ...rest
  } = props;

  const classes = clsx(
    "inline-flex items-center justify-center rounded transition-all font-medium focus:outline-none",
    variantClasses[variant],
    colorClasses[color],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  return (
    <button
      type="button"
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;

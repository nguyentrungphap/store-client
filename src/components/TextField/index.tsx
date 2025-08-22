import React from "react";
type TextFieldProps = {
  variant?: "outlined" | "filled" | "standard";
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  disabled?: boolean;
  // Add more props as needed
};

const TextField = (props: TextFieldProps) => {
  const {
    value,
    onChange,
    placeholder = "Dien thong tin vao day",
    type = "text",
    className = "",
    name,
    disabled = false,
    variant = "outlined",
  } = props;

  let variantClass = "";
  switch (variant) {
    case "outlined":
      variantClass = "textfield-outlined";
      break;
    case "filled":
      variantClass = "textfield-filled";
      break;
    case "standard":
      variantClass = "textfield-standard";
      break;
    default:
      variantClass = "textfield-outlined";
  }

  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      className={`${variantClass} ${className}`.trim()}
      name={name}
      disabled={disabled}
    />
  );
};

export default TextField;

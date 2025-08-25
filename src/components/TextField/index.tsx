import React, { forwardRef } from "react";

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  variant?: "outlined" | "filled" | "standard";
  label?: string;
};

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      value,
      onChange,
      placeholder = "Dien thong tin vao day",
      type = "text",
      className = "",
      name,
      disabled = false,
      variant = "outlined",
      label,
      id,
      ...rest
    },
    ref
  ) => {
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
      <div>
        {label && (
          <label htmlFor={id} style={{ marginRight: 8 }}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          className={`${variantClass} ${className}`.trim()}
          name={name}
          disabled={disabled}
          {...rest}
        />
      </div>
    );
  }
);

export default TextField;

import React, { forwardRef } from "react";

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "password" | "email" | "number";
  label?: string;
}

const Input = forwardRef<HTMLInputElement, PropsInput>(
  ({ type, placeholder, value, onChange, label, id, className, ...rest }, ref) => (
    <div>
      {label && (
        <label htmlFor={id} style={{ marginRight: 8 }}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        {...rest}
      />
    </div>
  )
);

export default Input;
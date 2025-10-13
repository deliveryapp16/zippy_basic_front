"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

const Input = ({
  height = "h-12",
  width = "w-full",
  paddingX = "px-2",
  backgroundColor = "bg-white",
  fontWeight = "font-medium",
  placeholder = "",
  type = "text",
  disabled = false,
  icon: Icon,
  label = "",
  labelGray,
  square = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (square) {
      if (/^\d?$/.test(inputValue)) {
        setValue(inputValue);
      }
    } else {
      setValue(inputValue);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          className={`text-sm font-semibold ${
            labelGray ? "text-carbonGray" : "text-lightGray"
          }`}
        >
          {label}
        </label>
      )}
      <section
        className={`rounded-lg flex flex-row items-center relative
        ${height} ${width} ${paddingX} ${fontWeight}
        ${
          disabled
            ? "bg-transparent"
            : `${backgroundColor} border border-lightGray focus-within:border-emeraldGreen`
        }`}
      >
        {Icon && (
          <div className="h-full flex items-center absolute left-2 top-0 pointer-events-none">
            <Icon
              size={22}
              weight="regular"
              className="inline-block mr-1 text-lightGray w-8"
            />
          </div>
        )}

        <input
          className={`w-full h-full focus:outline-none text-carbonGray disabled:bg-transparent ${
            Icon ? "pl-10" : ""
          } ${type === "password" ? "pr-10" : ""} ${
            square ? "text-center text-3xl font-semibold" : ""
          }`}
          type={
            square
              ? "text"
              : type === "password" && !showPassword
              ? "password"
              : "text"
          }
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={handleChange}
          maxLength={square ? 1 : undefined}
          inputMode={square ? "numeric" : undefined}
        />

        {type === "password" && !disabled && (
          <div
            onClick={handleTogglePassword}
            className="h-full cursor-pointer absolute right-2 top-0 flex items-center"
          >
            {showPassword ? (
              <EyeSlashIcon
                size={22}
                weight="regular"
                className="text-lightGray"
              />
            ) : (
              <EyeIcon size={22} weight="regular" className="text-lightGray" />
            )}
          </div>
        )}
      </section>
    </div>
  );
};

export default Input;

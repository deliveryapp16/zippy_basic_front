"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@phosphor-icons/react";

const Input = ({
  height = "h-12",
  width = "w-full",
  paddingX = "px-2",
  backgroundColor = "bg-white",
  fontWeight = "font-medium",
  placeholder = "Input",
  type = "text",
  disabled = false,
  icon: Icon,
  label = "",
  labelGray,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
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
        className={`rounded-lg flex flex-row items-center relative focus:outline-none focus:ring-1 focus:ring-emeraldGreen ${
          !disabled ? "border border-lightGray" : ""
        } ${height} ${width} ${paddingX} ${backgroundColor} ${fontWeight}`}
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
          className={`w-full h-full focus:outline-none text-carbonGray disabled:bg-white ${
            Icon ? "pl-10" : ""
          } ${type === "password" ? "pr-10" : ""}`}
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          disabled={disabled}
        />

        {type === "password" && (
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
    </>
  );
};

export default Input;

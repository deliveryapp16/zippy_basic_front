import { SpinnerIcon } from "@phosphor-icons/react"; // importa los íconos que vayas a usar
import React from "react";

const Button = ({
  height = "h-12",
  width = "w-full",
  paddingX = "px-4",
  paddingY = "py-2",
  backgroundColor = "bg-emeraldGreen",
  fontWeight = "font-medium",
  children,
  loading = false,
  disabled = false,
  icon: Icon,
  ...props
}) => {
  const textColor =
    backgroundColor === "bg-cream" || backgroundColor === "bg-white"
      ? "text-carbonGray"
      : "text-white";

  const content = Icon ? (
    <>
      <Icon size={22} weight="regular" /> {children}
    </>
  ) : (
    <>{children}</>
  );

  return (
    <button
      disabled={disabled || loading}
      className={`rounded-lg transition duration-200 flex flex-row items-center justify-center gap-2 ${height} ${width} ${backgroundColor}
      ${paddingX} ${paddingY}
      ${fontWeight}
      ${textColor}
      ${
        loading || disabled
          ? "cursor-not-allowed opacity-80"
          : "hover:brightness-90"
      }`}
      // onClick={!loading && !disabled ? onClick : undefined}
      {...props}
    >
      {loading ? (
        <SpinnerIcon size={22} weight="bold" className="animate-spin" />
      ) : (
        content
      )}
    </button>
  );
};

export default Button;

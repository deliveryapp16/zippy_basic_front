import React from "react";

const Wrapper = ({
  width = "w-20",
  height = "h-20",
  paddingX = "px-2",
  paddingY = "py-2",
  backgroundColor = "bg-white",
  children,
}) => {
  return (
    <div
      className={`rounded-lg flex flex-col items-center justify-center ${width} ${height} ${paddingX} ${paddingY} ${backgroundColor}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;

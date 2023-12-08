import React from "react";

interface NavSelectProps {
  selected?: boolean;
  label: string;
}
const NavTabItem: React.FC<NavSelectProps> = ({
  selected,

  label,
}) => {
  return (
    <div
      className={`flex items-center justify-center text-center gap-1 px-2  border-b-2 hover:text-green-400 transition cursor-pointer ${
        selected
          ? "border-b-emerald-600 text-emerald-600 font-extrabold  text-lg"
          : "border-transparent text-slate-500"
      }`}
    >
      <div
        className={`${
          selected
            ? " font-extrabold text-center break-normal"
            : "font-medium tet-sm text-center break-normal"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export default NavTabItem;

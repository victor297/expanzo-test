"use client";
import Link from "next/link";
import NavTabItem from "./NavTabItem";

import { usePathname } from "next/navigation";

const NavTab = () => {
  const pathName = usePathname();
  return (
    <div className="w-full  top-20  pt-4">
      <div className="flex flex-row items-center justify-center gap-8 md:gap-12 overflow-x-auto flex-nowrap">
        <Link href="/home">
          <NavTabItem label="All" selected={pathName === "/home"} />
        </Link>
        <Link href="/home/companies">
          <NavTabItem
            label="Companies"
            selected={pathName === "/home/companies"}
          />
        </Link>
        <Link href="/home/phones">
          <NavTabItem label="Phones" selected={pathName === "/home/phones"} />
        </Link>
      </div>
    </div>
  );
};

export default NavTab;

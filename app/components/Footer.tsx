import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row h-50 bg-gray-100 lg:gap-60 text-black items-center content-center align-middle">
      <div className="flex relative w-[100px] lg:w-[200px] aspect-square content-center align-middle lg:ms-40 lg:mb-8">
        <Image
          src={"/logo-expanzo-black.svg"}
          className="object-contain"
          fill
          alt="img"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-8  align-middle font-bold">
        <p>CONTACTS</p>
        <p>PHONES</p>
        <p>TOP SEARCH</p>
      </div>
    </div>
  );
};

export default Footer;

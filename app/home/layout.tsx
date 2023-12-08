import NavTab from "@/app/components/NavTab";
import Image from "next/image";

export const metadata = {
  title: "NovaNest",
  description: "admin page for novanest",
};
const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex relative w-[150px] aspect-square mx-auto">
        <Image
          src={"/logo-expanzo-black.svg"}
          className="object-contain"
          fill
          alt="img"
        />
      </div>
      <NavTab />
      {children}
    </div>
  );
};

export default HomeLayout;

import React from "react";
import { Logo } from "../logo/Logo";
import { Avatar } from "../avatar";
import { BellRing, ChevronDown, Menu, Settings } from "lucide-react";
// import { auth } from "../../../auth";

export const Header = async () => {
  //   const session = await auth();

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-header-background border-b border-gray-200 text-sm py-2.5">
        <nav className="px-4 sm:px-6 flex basis-full items-center justify-between w-full mx-auto">
          <div className="flex items-center gap-7 me-5">
            <div className="hidden md:flex items-center gap-7">
              <Logo imgClassName="w-[97px] h-[35px] mt-1" />
              <div className="w-[1px] h-8 bg-white" />
            </div>
            <div className="md:hidden">
              <Menu size={24} className="text-white" />
            </div>
            <div className="text-white text-2xl font-bold">Realiser</div>
          </div>
          <div className="flex flex-row items-center justify-end gap-6">
            <BellRing size={18} className="text-white" />
            <div className="hidden md:flex items-center gap-6">
              <Settings size={14} className="text-white" />
              <span className="flex items-center justify-center text-sm text-white font-semibold gap-2 mr-2">
                {"John Doe"}
                <ChevronDown size={18} />
              </span>
            </div>
            <Avatar />
          </div>
        </nav>
      </header>
    </>
  );
};

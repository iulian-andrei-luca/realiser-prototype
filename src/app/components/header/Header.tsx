import React from "react";
import { Logo } from "../logo/Logo";
// import { auth } from "../../../auth";

export const Header = async () => {
  //   const session = await auth();

  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-48 w-full bg-white border-b border-gray-200 text-sm py-2.5">
        <nav className="px-4 sm:px-6 flex basis-full items-center w-full mx-auto">
          <div className="me-5 lg:me-0 lg:hidden">
            <Logo />
            <div className="lg:hidden ms-1"></div>
          </div>

          <div className="w-full flex items-center justify-end ms-auto md:justify-between gap-x-1 md:gap-x-3">
            <div className="hidden md:block">{/* <Breadcrumbs /> */}</div>

            <div className="flex flex-row items-center justify-end gap-1">
              <span className="text-sm text-gray-800 font-semibold mr-2">
                {/* {session?.user?.name} */}
                {"Andrei"}
              </span>
              {/* <Avatar /> */}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

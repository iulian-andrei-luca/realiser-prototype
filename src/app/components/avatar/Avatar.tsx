import React from "react";
// import { auth } from "../../../auth";

export const Avatar = async () => {
  //   const session = await auth();
  const name = "John Doe";
  const getAcronym = (name: string) => {
    const names = name.split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }
    return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase();
  };

  return (
    <>
      <div className="shrink-0 size-9.5 rounded-lg bg-soft-green-bg text-header-background content-center text-center">
        {getAcronym(name)}
      </div>
    </>
  );
};

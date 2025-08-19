import Link from "next/link";
import React from "react";

type LogoProps = {
  className?: string;
  imgClassName?: string;
};

export const Logo: React.FC<LogoProps> = ({
  className = "",
  imgClassName = "",
}) => {
  return (
    <Link
      className={`flex-1 rounded-xl text-xl inline-block font-semibold focus:outline-hidden ${className}`}
      href="/"
      aria-label="Preline"
    >
      <img alt="Broadlake" src={"/logo.png"} className={imgClassName} />
    </Link>
  );
};

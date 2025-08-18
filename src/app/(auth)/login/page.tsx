import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Login: React.FC = () => {
  const t = useTranslations("landing_page");

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/landingPageBackground.jpg')" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#00000066" }}
      />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col bg-white border border-gray-200 shadow-2xs rounded-xl max-w-md w-full">
          <div className="mt-10 p-4 md:p-6 flex flex-col items-center text-center">
            <Image
              src="/logo.png"
              width={147}
              height={53}
              alt="Broadlake logo"
              className="m-auto"
            />
            <h3 className="mt-12 text-3xl font-bold text-gray-800">
              {t("title")}
            </h3>
            <a
              className="mt-12 mb-10 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-md font-semibold rounded-lg border border-transparent bg-black text-white hover:bg-orange-500 focus:outline-hidden disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              <Link href={"/push-notifications"}> {t("button")}</Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

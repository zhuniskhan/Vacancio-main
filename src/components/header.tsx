import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const menu = [
    { name: "Home", to: "/" },
    { name: "Companies", to: "/companies" },
    { name: "My contracts", to: "/my-contracts" },
    { name: "Jobs", to: "/jobs" },
    { name: "Notifications", to: "/notifications" },
  ];
  const [auth, setAuth] = useState(false);
  return (
    <div className="sticky top-0 flex px-8 py-4 items-center justify-around shadow-lg bg-white">
      <div className="flex">
        <Link href="/">
          <p className="text-3xl font-bold items-center no-underline text-accent">
            Vacancio
          </p>
        </Link>
      </div>
      <div className="flex px-24">
        <ul className="flex flex-row text-xl space-x-28">
          {menu.map((item, key) => (
            <li
              key={key}
              className={`${
                router.pathname === item.to ? "font-semibold" : ""
              }`}
            >
              <Link href={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex">
        {auth ? (
          <div className="flex items-center space-x-2 text-lg font-semibold">
            <Image src="/pfp.svg" alt="pfp" width={30} height={30} />
            <p className="">Mizamova Moldir</p>
          </div>
        ) : (
          <div className="flex flex-row text-xl">
            <Link
              href="/login"
              className={`${
                router.pathname === "/login" ? "font-semibold" : ""
              }`}
            >
              Login
            </Link>
            &nbsp;/&nbsp;
            <Link
              href="/register"
              className={`${
                router.pathname === "/register" ? "font-semibold" : ""
              }`}
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

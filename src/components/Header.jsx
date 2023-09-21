import React, { useState } from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header() {
  const [dropdown, setDropdown] = useState(false);
  return (
    <header className="w-4/5 mx-auto py-2 flex justify-between items-center relative">
      <Link to="/">
        <img src="/images/logo.png" alt="logo" className="w-32" />
      </Link>
      <button
        onClick={() => setDropdown(!dropdown)}
        className="border border-black p-2 rounded lg:hidden block"
      >
        <AiOutlineMenuFold size={20} />
      </button>
      <nav
        className={`lg:block ${
          dropdown
            ? "block absolute left-0 top-[54px] z-30 bg-black w-full pt-4 pl-4 pb-4"
            : "hidden relative"
        }`}
      >
        <ul
          className={`flex gap-5 ${
            dropdown
              ? "flex-col [&>li]:text-white"
              : "flex-row items-center justify-end [&>li]:text-theme-black"
          } [&>li]:font-semibold [&>li]:cursor-pointer [&>li]:text-base`}
        >
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

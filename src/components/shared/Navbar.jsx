import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="container mx-auto flex justify-between gap-4 mt-6">
      <div></div>
      <ul className="flex justify-between items-center text-gray-700 gap-3">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"} className={"text-yellow-500"}>
            Career
          </NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image src={userAvatar} alt="User avatar" width={60} height={60} />
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

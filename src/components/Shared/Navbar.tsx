"use client";

import React from "react";
import FastNav from "./FastNav";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  return (
    <div>
      <FastNav />
      <div className="">
        <div className="navbar max-w-7xl mx-auto  shadow-sm">
          <div className="navbar-start ">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                 <div className="menu menu-horizontal gap-8 font-semibold text-xl px-1">
             <Link href={""}> HOME</Link>
             <Link href={""}> WOMEN</Link>
             <Link href={""}> SHOP</Link>
             <Link href={""}> BLOG</Link>
             <Link href={""}> PAGSE</Link>
             
             
            </div>
              </div>
            </div>
            <a className="btn btn-ghost text-xl">Smile</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal gap-8 font-semibold text-xl px-1">
             <Link href={""}> HOME</Link>
             <Link href={""}> WOMEN</Link>
             <Link href={""}> SHOP</Link>
             <Link href={""}> BLOG</Link>
             <Link href={""}> PAGSE</Link>
             
             
            </div>
          </div>
          <div className="navbar-end text-3xl gap-4">
           <CiShoppingCart/>
           <IoIosSearch/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

"use client";

import React, { useState, useRef, useEffect } from "react";
import FastNav from "./FastNav";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

const Navbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // যখন বাইরের জায়গায় ক্লিক হয়, তখন hide করে দেবে
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowSearch(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <FastNav />
      <div className="">
        <div className="navbar max-w-7xl mx-auto shadow-sm relative">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <div className="menu menu-horizontal gap-8 font-semibold text-xl px-1">
                  <Link href={"/"}> HOME</Link>
                  <Link href={""}> WOMEN</Link>
                  <Link href={""}> SHOP</Link>
                  <Link href={""}> BLOG</Link>
                  <Link href={""}> PAGES</Link>
                    <Link href={"/login"}>LOGIN</Link>
                      <Link href={"/contact"}>Contact</Link>
                 
                </div>
              </div>
            </div>
            <Link href={'/'} className=" text-3xl font-semibold">Smile</Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal gap-8 font-semibold text-xl px-1">
              <Link href={"/"}> HOME</Link>
              <Link href={""}> WOMEN</Link>
              <Link href={""}> SHOP</Link>
              <Link href={""}> BLOG</Link>
              <Link href={""}> PAGES</Link>
              <Link href={"/login"}>LOGIN</Link>
               <Link href={"/contact"}>Contact</Link>

            </div>
          </div>

          <div className="navbar-end text-3xl gap-4 relative" ref={searchRef}>
            <CiShoppingCart />
            <IoIosSearch className="cursor-pointer" onClick={() => setShowSearch(!showSearch)} />

            {showSearch && (
              <div className="absolute top-full right-0 mt-6 bg-white shadow-md p-4 rounded-lg flex gap-2 items-center z-10">
                <input
                  type="text"
                  placeholder="Search..."
                  className="input input-bordered text-white  input-sm w-48"
                  autoFocus
                />
                <button className="btn btn-sm btn-primary">Search</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

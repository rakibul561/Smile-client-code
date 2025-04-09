import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const FastNav: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 p-4 text-white text-sm relative">
        {/* Welcome Message */}
        <p className="text-center md:text-left">Welcome to our online store</p>

        {/* Hotline */}
        <p className="flex items-center gap-1">
          <span className="text-red-600 flex items-center gap-1">
            <IoCall /> Hotline:
          </span>
          +8801982535062
        </p>

        {/* Email */}
        <p className="flex items-center gap-1">
          <MdEmail /> online: rakibulhasan3929@gmail.com
        </p>

        {/* Account Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <p
            onClick={() => setIsDropdownOpen((prev) => !prev)}
            className="cursor-pointer"
          >
            Account
          </p>

          {isDropdownOpen && (
            <div className="absolute top-8 right-0 bg-white text-black shadow-lg rounded-md w-40 z-50">
              <ul className="flex flex-col p-2 space-y-1">
                <Link className="hover:bg-gray-200 px-3 py-1 cursor-pointer" href={"/login"}>My Account</Link>
                <Link className="hover:bg-gray-200 px-3 py-1 cursor-pointer" href={""}>My Wishlist</Link>
                <Link className="hover:bg-gray-200 px-3 py-1 cursor-pointer" href={""}>Profile</Link>
                <Link className="hover:bg-gray-200 px-3 py-1 cursor-pointer" href={""}>Login</Link>
              </ul>
            </div>
          )}
        </div>

        {/* Theme Button */}
        <input type="checkbox" value="synthwave" className="toggle theme-controller" />
      </div>
    </div>
  );
};

export default FastNav;

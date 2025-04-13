import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const FastNav: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
                <Link
                  className="hover:bg-gray-200 px-3 py-1 cursor-pointer"
                  href={"/login"}
                >
                  My Account
                </Link>
                <Link
                  className="hover:bg-gray-200 px-3 py-1 cursor-pointer"
                  href={""}
                >
                  My Wishlist
                </Link>
                <Link
                  className="hover:bg-gray-200 px-3 py-1 cursor-pointer"
                  href={""}
                >
                  Profile
                </Link>
                <Link
                  className="hover:bg-gray-200 px-3 py-1 cursor-pointer"
                  href={""}
                >
                  Login
                </Link>
              </ul>
            </div>
          )}
        </div>

        {/* Theme Button */}
        <label className="toggle text-base-content">
          <input
            type="checkbox"
            value="synthwave"
            className="theme-controller"
          />

          <svg
            aria-label="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </g>
          </svg>

          <svg
            aria-label="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </g>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default FastNav;

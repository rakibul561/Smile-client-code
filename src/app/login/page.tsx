import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaEdit } from 'react-icons/fa';

const LoginSignup = () => {
  return (
    <div className=" flex items-center justify-center bg-white px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2   w-full max-w-5xl">
        {/* Login Section */}
        <div className="p-8 border border-gray-300">
          <div className="flex gap-4 mb-6">
            <Link href={''} className="bg-[#3b5998] text-white px-4 py-2 flex items-center gap-2 font-semibold text-sm">
              <FaFacebookF />
              SIGN IN WITH FACEBOOK
            </Link>
            <button className="bg-[#1DA1F2] text-white px-4 py-2 flex items-center gap-2 font-semibold text-sm">
              <FaTwitter />
              SIGN IN WITH TWITTER
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium">User Name Or Email *</label>
              <input
                type="text"
                className="w-full border border-gray-300 p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Your Password *</label>
              <input
                type="password"
                className="w-full border border-gray-300 p-2"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#" className="text-red-500">Forgot Password?</a>
            </div>

            <button className="bg-black text-white px-6 py-2 mt-4">LOGIN</button>
          </div>
        </div>

        {/* Signup Section */}
        <div className="p-8 border border-gray-300 ml-8">
          <h2 className="text-xl font-semibold mb-6">Signup Today And You'll Be Able To</h2>
          <ul className="space-y-4 text-sm">
            {[
              'Online Order Status',
              'See Ready Hot Deals',
              'Love List',
              'Sign Up To Receive Exclusive News And Private Sales',
              'Quick Buy Stuffs'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaEdit className="mt-1" />
                {item}
              </li>
            ))}
          </ul>
            {/* style korte hbe   */}
          <button className="bg-red-500 text-white px-6 py-2 mt-6">CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

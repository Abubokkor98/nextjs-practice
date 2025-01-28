'use client';

import React, { useState } from "react";
import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const NavbarClient = ({ isUserAuthenticated }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = (
    <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-2 lg:space-y-0">
      <li>
        <Link
          href="/"
          className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-lg"
        >
          Profile
        </Link>
      </li>
      {isUserAuthenticated ? (
        <li>
          <LogoutLink className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
            Log out
          </LogoutLink>
        </li>
      ) : (
        <>
          <li>
            <LoginLink className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
              Login
            </LoginLink>
          </li>
          <li>
            <RegisterLink className="block px-4 py-2 hover:text-blue-600 hover:bg-gray-100 rounded-lg">
              Register
            </RegisterLink>
          </li>
        </>
      )}
    </ul>
  );

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <a className="text-2xl font-bold text-gray-800 uppercase">Next.js Blogs</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-800"
            onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle menu visibility
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex">{links}</div>
      </div>

      {/* Links for Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-3">{links}</div>
        </div>
      )}
    </nav>
  );
};

export default NavbarClient;

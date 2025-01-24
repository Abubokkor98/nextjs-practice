import Link from "next/link";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();

  const links = (
    <ul className=" flex flex-row space-x-1 md:space-x-4 space-y-0">
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

        {/* Desktop Links */}
        <div className=" lg:flex">{links}</div>
      </div>
    </nav>
  );
};

export default Navbar;

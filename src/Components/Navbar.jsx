"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiTimer } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import { TfiStatsUp } from "react-icons/tfi";

const NavLink = ({ href, children, className = "", ...props }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const baseClass = isActive
    ? "btn btn-sm btn-success normal-case px-4 text-white"
    : "btn btn-ghost btn-sm normal-case px-4";
  return (
    <Link href={href} className={`${baseClass} ${className}`} {...props}>
      {children}
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="bg-base-100 border-b border-base-200 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-color-[#1f2937] dark:text-color-[#f9fafb]">
              Keen
            </span>
            <span className="text-emerald-900">Keeper</span>
          </span>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
            >
              <li>
                <NavLink href="/" className="justify-between">
                  <GoHome /> Home
                </NavLink>
              </li>
              <li>
                <NavLink href="/timeline"><CiTimer />Timeline</NavLink>
              </li>
              <li>
                <NavLink href="/stats"><TfiStatsUp /> Stats</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <nav className="hidden items-center gap-2 lg:flex">
          <NavLink href="/" className="gap-2">
            <GoHome />
            Home
          </NavLink>
          <NavLink href="/timeline">
            <CiTimer />
            Timeline
          </NavLink>
          <NavLink href="/stats"><TfiStatsUp /> Stats</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

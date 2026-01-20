import { Link, NavLink } from "react-router-dom";
import { Armchair } from "lucide-react";

export const Header = () => {
  return (
    <div className="border-b border-base-300 navbar bg-white shadow-sm max-w-8xl mx-auto rounded-2xl py-1">
      <div className="w-full md:max-w-6xl mx-auto flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn hover:bg-blue-50 hover:border-slate-500 btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className=""
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                      : "rounded-lg py-2 px-3 text-slate-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                      : "rounded-lg py-2 px-3 text-slate-700"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                      : "rounded-lg py-2 px-3 text-slate-700"
                  }
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                      : "rounded-lg py-2 px-3 text-slate-700"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <div className="items-center gap-2 select-none inline-flex">
              <div className="flex items-center justify-center w-10 h-10 bg-slate-700 text-blue-100 rounded-2xl shadow-sm">
                <Armchair size={26} strokeWidth={2} />
              </div>

              <h1 className="text-2xl font-bold text-blue-600 tracking-tight">
                Ever<span className="text-slate-700">Soft.</span>
              </h1>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                    : "rounded-lg py-2 px-3 text-slate-700"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                    : "rounded-lg py-2 px-3 text-slate-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                    : "rounded-lg py-2 px-3 text-slate-700"
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "active bg-[#021431] rounded-lg py-2 px-3 text-slate-200"
                    : "rounded-lg py-2 px-3 text-slate-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              className="swap-off h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-on h-5 w-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>{" "}
      </div>
    </div>
  );
};

import { Link, NavLink } from "react-router";
import { Armchair, ShoppingBasket } from "lucide-react";
import { LuBookHeart } from "react-icons/lu";
import { useCart } from "../../providers/CartContext";
import { useWishlist } from "../../providers/WishlistContext";

export const Header = () => {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const closeMenu = () => {
    const elem = document.activeElement;
    if (elem) {
      elem.blur();
    }
  };
  return (
    <div className="navbar xl:max-w-7xl max-w-11/12 mx-auto rounded-2xl py-1 bg-white shadow-sm">
      <div className="w-full  mx-auto flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm hover:bg-blue-50 hover:border-slate-500 btn-ghost lg:hidden"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-sm"
            >
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
                  onClick={closeMenu}
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
          <ul className="menu menu-horizontal flex gap-1">
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
        <div className="navbar-end flex items-center text-center mr-2 md:gap-3">
          <Link
            to="wishlist"
            className="indicator btn btn-ghost btn-circle btn-base text-slate-800"
          >
            <LuBookHeart size={20} strokeWidth={2} />
            <span className="badge badge-xs md:badge-sm bg-blue-200 text-slate-900 badge-ghost indicator-item badge-info">
              {wishlistItems.length}
            </span>
          </Link>
          <label htmlFor="my-drawer-5">
            <div className="indicator btn btn-ghost btn-circle btn-base text-slate-800">
              <ShoppingBasket size={20} strokeWidth={2} />
              <span className="badge badge-xs md:badge-sm bg-blue-200 text-slate-900 badge-ghost indicator-item badge-info">
                {cartItems.length}
              </span>
            </div>
          </label>
        </div>{" "}
      </div>
    </div>
  );
};

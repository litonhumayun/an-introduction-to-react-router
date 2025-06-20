import { NavLink } from "react-router-dom";
import "../Header/Header.css";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-blue-300  font-bold" : "text-black-700"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/posts"}
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-black-700"
                  }
                >
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-black-700"
                  }
                >
                  Contact{" "}
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `btn btn-ghost text-xl ${
                isActive ? "text-blue-600 font-bold" : "text-black-700"
              }`
            }
          >
            Home
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black-700"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/posts"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black-700"
                }
              >
                Posts
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-600 font-bold" : "text-black-700"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              `btn ${isActive ? "text-blue-600 font-bold" : "text-black-700"}`
            }
          >
            Users
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;

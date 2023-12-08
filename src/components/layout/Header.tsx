import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../UI/ThemeToggle";
import { logo } from "../../assets/images";
import { menuData } from "../../data/data";
import { IoMenu } from "react-icons/io5";

type Props = {};
const Header = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    
    <div className="w-full shadow z-[10] bg-base-300 sticky -top-1 p-[0.5rem]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IoMenu size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link className="hidden lg:flex" to="/">
            <img className="w-20" src={logo} alt="" />
          </Link>
        </div>
        <Link className="lg:hidden" to="/">
          <img className="w-20" src={logo} alt="" />
        </Link>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menuData.map((item) => (
              <NavLink
                className={`${
                  pathname === item.path &&
                  "text-primary underline-offset-2 underline font-bold"
                }`}
                key={item.label}
                to={item.path}
              >
                <li>
                  <p>{item.label}</p>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;

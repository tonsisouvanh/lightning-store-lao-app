import { Link, NavLink, useLocation } from "react-router-dom";
import ThemeToggle from "../UI/ThemeToggle";
import { logo } from "../../assets/images";
import { menuData } from "../../data/data";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";

type Props = {};
const Header = (props: Props) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="sticky -top-1 z-[10] w-full bg-base-300 p-[0.5rem] shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <IoMenu size={24} />
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
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
          <Logo />
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
                  "font-bold text-primary underline underline-offset-2"
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

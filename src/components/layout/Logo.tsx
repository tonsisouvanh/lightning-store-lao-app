import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const Logo = () => {
  return (
    <>
      <Link className="hidden lg:flex" to="/">
        <div className="rounded-full bg-white px-1.5 py-5">
          <img className="w-20" src={logo} alt="" />
        </div>
      </Link>
    </>
  );
};

export default Logo;

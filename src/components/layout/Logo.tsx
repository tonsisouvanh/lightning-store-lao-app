import { Link } from "react-router-dom";
import { logo } from "../../assets/images";


const Logo = () => {
  return (
    <>
      <Link className="hidden bg-white rounded-full py-5 px-1.5 lg:flex" to="/">
        <img className="w-20" src={logo} alt="" />
      </Link>
    </>
  );
};

export default Logo;

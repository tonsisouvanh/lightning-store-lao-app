import {
  diamond,
  globalNetwork,
  lightningelement,
  priceDown,
  transaction,
} from "../../assets/images/index";
import walletsignupbg from "../../assets/svg/walletsignupbg.svg";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";
type Props = {};

const LightningWalletSignup = (props: Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem] bg-[#F8FAFD]">
      {/* <img
        src={diamond}
        className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      /> */}
      <div className="container h-fit mx-auto p-[2rem] flex flex-col justify-center items-center gap-[4.5rem] md:flex-row">
        <div className="md:flex md:flex-col gap-10">
          <div className="flex-col justify-center items-center gap-5 flex">
            <h1 className={headlinetStyle}>
              Experience the Benefits of Bitcoin Transactions
            </h1>
            <p className={sublinetStyle}>
              Bitcoin offers a range of advantages for transactions. With low
              fees, fast transfers, and global acceptance, it's the perfect
              solution for seamless payments.
            </p>
          </div>
          <div className="w-full hidden md:flex gap-6 justify-start items-center">
            <button className="btn min-w-[8rem] btn-secondary font-normal">
              Sign Up
            </button>
            <button className="btn min-w-[8rem] btn-outline btn-secondary">
              Learn More
            </button>
          </div>
        </div>
        <div className="relative overflow-hidden w-full h-auto">
          <img
            className="w-full h-full object-cover opacity-0"
            src={walletsignupbg}
            alt=""
          />
          <div className="w-fit absolute top-0 right-0 bottom-0">
            <img
              className="w-full h-full object-contain"
              src={lightningelement}
              alt=""
            />
          </div>
          <div className="w-fit absolute top-0 right-0 bottom-0">
            <img
              className="w-full h-full object-contain"
              src={walletsignupbg}
              alt=""
            />
          </div>
        </div>
        <div className="w-full md:hidden flex gap-6 justify-center items-center">
          <button className="btn btn-secondary font-normal">Sign Up</button>
          <button className="btn btn-outline btn-secondary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default LightningWalletSignup;

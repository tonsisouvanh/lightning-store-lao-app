import {
  diamond,
  globalNetwork,
  priceDown,
  transaction,
} from "../../assets/images/index";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";
type Props = {};

const Benefit = (props: Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem]">
      <img
        src={diamond}
        className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      />
      <div className="container h-fit mx-auto p-[2rem] flex flex-col justify-center items-center gap-[4.5rem]">
        <div className="flex-col md:flex-row justify-center items-center gap-5 md:gap-12 flex">
          <h1 className={headlinetStyle}>
            Experience the Benefits of Bitcoin Transactions
          </h1>
          <p className={sublinetStyle}>
            Bitcoin offers a range of advantages for transactions. With low
            fees, fast transfers, and global acceptance, it's the perfect
            solution for seamless payments.
          </p>
        </div>
        <div className="px-[57px] flex flex-col md:flex-row justify-center items-center gap-[35px]">
          <div className="self-stretch flex-col justify-start items-center gap-3.5 flex">
            <img className="w-[3.5rem] h-[3.5rem]" src={priceDown} />
            <div
              className={`text-xl lg:text-3xl text-center font-semibold lg:leading-tight`}
            >
              Low Fees
            </div>
            <div className={`text-sm lg:text-md font-normal text-center leading-normal md:leading-tight text-base-content`}>
              Enjoy minimal transaction costs with Bitcoin.
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3.5 flex">
            <img className="w-[3.5rem] h-[3.5rem]" src={transaction} />
            <div
              className={`text-xl lg:text-3xl text-center font-semibold lg:leading-tight`}
            >
              Fast transaction
            </div>
            <div className={`text-sm lg:text-md font-normal text-center leading-normal md:leading-tight text-base-content`}>
              Experience quick and efficient transfers with Bitcoin.
            </div>
          </div>
          <div className="self-stretch flex-col justify-start items-center gap-3.5 flex">
            <img className="w-[3.5rem] h-[3.5rem]" src={globalNetwork} />
            <div
              className={`text-xl lg:text-3xl text-center font-semibold lg:leading-tight`}
            >
              Global Acceptance
            </div>
            <div className={`text-sm lg:text-md font-normal text-center leading-normal md:leading-tight text-base-content`}>
              Use Bitcoin to make payments anywhere in the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;

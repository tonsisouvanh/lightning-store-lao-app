import polygonluminary from "../../assets/svg/polygonluminary.svg";
import howitworks from "../../assets/images/howitworks.png";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";
type Props = {};

const HowItWorks = (props: Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem]">
      <img
        src={polygonluminary}
        className="absolute object-cover opacity-5 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      />
      <div className="container mx-auto p-[2rem] flex flex-col justify-center items-center gap-[1.8rem] md:flex-row md:items-center md:justify-center">
        <div className="flex-col justify-center items-start gap-5 md:gap-12 flex">
          <h1 className={headlinetStyle}>
            Discover the Simplicity of Bitcoin Payments through Lightning
            Network
          </h1>
          <p className={sublinetStyle}>
            Experience fast and secure transactions with Bitcoin's lightning
            network. Say goodbye to traditional payment methods and embrace the
            future of digital currency.
          </p>
          {/* Desktop */}
          <div className="hidden md:flex justify-start items-start gap-4">
            <div className="flex flex-col justify-center items-center gap-[18px]">
              <div className="text-secondary md:text-5xl text-2xl font-bold leading-7">
                50%
              </div>
              <p className="text-center text-neutral-700 text-xs lg:text-base font-normal">
                Shop at your favorite stores and pay with Bitcoin.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-[18px]">
              <div className="text-secondary md:text-5xl text-2xl font-bold leading-7">
                50%
              </div>
              <p className="text-center text-neutral-700 text-xs lg:text-base font-normal">
              Experience the convenience of Bitcoin payments today.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-auto">
          <img className="w-full h-full object-cover" src={howitworks} />
        </div>
        {/* Mobile */}
        <div className="md:hidden flex justify-between items-center gap-4">
          <div className="flex flex-col justify-center items-center gap-[18px]">
            <div className="text-2xl font-bold leading-7">50%</div>
            <div className={sublinetStyle}>
              Shop at your favorite stores and pay with Bitcoin.
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-[18px]">
            <div className="text-2xl font-bold leading-7">50%</div>
            <div className={sublinetStyle}>
            Experience the convenience of Bitcoin payments today.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

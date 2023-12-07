import bgIntro from "../../assets/images/intro.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative w-full h-full lg:min-h-screen overflow-hidden">
      <img
        src={bgIntro}
        className="md:absolute md:object-cover md:z-[-1] md:left-0 md:top-0 md:right-0 md:bottom-0 w-full h-auto"
        alt=""
      />
      <div className="container w-full mx-auto md:grid md:grid-cols-2 p-[2rem]">
        <div className="space-y-5 flex flex-col items-start md:space-y-12 md:self-start col-span-1">
          <div className="flex-col lg:mt-20 gap-2 lg:gap-[30px] space-y-5">
            <div className="relative">
              <div className="md:text-neutral-200 text-xs">Lightning</div>
              <div className="md:text-neutral-200 text-md text-2xl lg:text-4xl xl:text-6xl font-semibold leading-relaxed">
                Unlock Instant Payments with Bitcoin Lightning: The Revolution
                is Here.
              </div>
            </div>
            <div className="self-stretch text-xs lg:text-xl md:text-neutral-200 font-normal leading-tight">
              Effortless payments, anytime, anywhere. Explore the future of
              currency with Bitcoin Lightning – where speed meets security for a
              seamless transaction experience.
            </div>
          </div>
          <div className="gap-4 flex flex-wrap">
            <button className="btn btn-wide lg:btn-lg rounded-full btn-primary bg-primary shadow-2xl shadow-orange-500/20">
              SIGNUP
            </button>
            <button className="btn btn-wide lg:btn-lg rounded-full md:hidden btn-outline">
              EXPLORE MORE
            </button>
            <button className="btn btn-wide lg:btn-lg rounded-full !text-white hidden md:flex btn-outline btn-primary">
              EXPLORE MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

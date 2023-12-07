import { Link } from "react-router-dom";
import {
  miniplacesbg,
  place1,
  place2,
  place3,
} from "../../assets/images/index";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";

const mockImgs = [
  { id: 1, url: place1 },
  { id: 2, url: place2 },
  { id: 3, url: place3 },
  { id: 4, url: place3 },
  { id: 5, url: place3 },
];

type Props = {};

const DiscoverPlace = (props: Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem]">
      <img
        src={miniplacesbg}
        className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      />
      <div className="container mx-auto p-[2rem] flex flex-col justify-center items-center gap-[4.5rem]">
        <div className="self-stretch flex flex-col justify-start items-center md:items-start gap-[1.5rem] md:flex-row-reverse">
          <div className="flex-col justify-center items-center gap-5 md:gap-2 flex">
            <h1 className={headlinetStyle}>
              Discover Interesting Places to Visit
            </h1>
            <p className={sublinetStyle}>
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam a ultrices quam. Fusce rutrum mauris quis urna semper
              lacinia.
            </p>
            <div className="hidden md:flex mt-10">
              <Link to="#">
                <button className="btn btn-outline whitespace-nowrap">
                  View all
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-5">
            <div className="w-full h-auto lg:w-[44.5rem] lg:h-[32.5rem]">
              <img
                src={place1}
                className="w-full h-full object-cover rounded-[10px]"
              />
            </div>
            <div className="self-stretch flex-wrap w-full flex justify-start items-start gap-6">
              {mockImgs.map((ele) => (
                <div
                  key={ele.id}
                  className="w-[2.8rem] h-[2.8rem] lg:w-[7rem] lg:h-[7rem]"
                >
                  <img
                    className="w-full h-full object-cover rounded-[5px]"
                    src={ele.url}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="md:hidden mt-10">
            <Link to="#">
              <button className="btn btn-outline whitespace-nowrap">
                View all
              </button>
            </Link>
          </div>
        </div>
        {/* <div className="grow shrink basis-0 flex-col justify-center items-start gap-[65px]">
          <div className="self-stretch h-56 pr-0.5 flex-col justify-start items-start gap-6 flex">
            <div className="self-stretch text-sky-900 text-5xl font-semibold leading-[44px]">
              Discover Interesting places to visit
            </div>
            <div className="self-stretch text-neutral-600 text-2xl font-normal leading-7">
              USP copy Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam a ultrices quam. Fusce rutrum mauris quis urna semper
              lacinia.
            </div>
          </div>
          <div className="self-stretch h-[140px] flex-col justify-start items-start gap-4 flex">
            <div className="self-stretch justify-start items-center gap-4">
              <img
                className="w-9 h-9 relative rounded-[100px]"
                src="https://via.placeholder.com/36x36"
              />
              <div className="text-neutral-700 text-2xl font-normal leading-7">
                Lörem ipsum johanna Olsson milusat.{" "}
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4">
              <img
                className="w-9 h-9 relative rounded-[100px]"
                src="https://via.placeholder.com/36x36"
              />
              <div className="text-neutral-700 text-2xl font-normal leading-7">
                Lörem ipsum johanna Olsson milusat.{" "}
              </div>
            </div>
            <div className="self-stretch justify-start items-center gap-4">
              <img
                className="w-9 h-9 relative rounded-[100px]"
                src="https://via.placeholder.com/36x36"
              />
              <div className="text-neutral-700 text-2xl font-normal leading-7">
                Lörem ipsum johanna Olsson milusat.{" "}
              </div>
            </div>
          </div>
          <div className="w-[124px] h-10 p-3 bg-white border-2 border-sky-900 justify-center items-center gap-2">
            <div className="text-black text-sm font-normal leading-[17px]">
              View all
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default DiscoverPlace;

import { Link } from "react-router-dom";
import { worldbg } from "../../assets/images/index";
import { headlinetStyle, sublinetStyle } from "../../globalStyle";
import HorizalSlider from "./sliders/DiscoverSlider";
import { CardType } from "../../type";

type Props = {
  headline: string;
  subline: string;
  slidesData: CardType[];
  slidesPerView: number;
  cardSize?: string;
  breakpoints?: Record<number, { slidesPerView: number; spaceBetween: number }>;
  topic?: string;
};

const Discover = ({
  headline,
  subline,
  slidesData,
  slidesPerView,
  breakpoints,
  cardSize,
  topic,
}: Props) => {
  return (
    <div className="relative w-full h-full overflow-hidden my-[1rem] md:my-[4rem] lg:my-[6rem]">
      <img
        src={worldbg}
        className="absolute object-cover opacity-10 z-[-1] left-0 top-0 right-0 bottom-0 w-full h-full"
        alt=""
      />
      <div className="container h-fit mx-auto p-[2rem] flex flex-col justify-center items-center gap-[2.5rem]">
        <div className="flex-col justify-center items-center gap-2 md:gap-4 flex">
          <h1 className={headlinetStyle}>{headline}</h1>
          <p className={sublinetStyle}>{subline}</p>
        </div>
        <HorizalSlider
          breakpoints={breakpoints}
          slidesPerView={slidesPerView}
          slidesData={slidesData}
          cardSize={cardSize}
          topic={topic}
        />
        <Link to="#">
          <button className="btn btn-outline whitespace-nowrap">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Discover;

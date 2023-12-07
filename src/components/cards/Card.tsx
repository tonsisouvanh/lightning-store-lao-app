import { sublinetStyle } from "../../globalStyle";
import { Link } from "react-router-dom";
import { CardType } from "../../type";

type Props = {
  cardData: CardType;
  cardSize?: string;
  topic?: string;
};

const Card = ({ cardData, cardSize = "", topic }: Props) => {
  return (
    <div
      className={`w-full h-[24.5rem] relative overflow-hidden rounded-2xl ${cardSize}`}
    >
      <img className="w-full h-full object-cover" src={cardData.url} alt="" />
      <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-black to-transparent"></div>
      <div className="absolute left-0 bottom-10 flex flex-col items-start gap-6 px-6">
        <div className="flex-col items-start gap-2 flex">
          <h1
            className={`text-center md:text-start text-2xl lg:text-3xl font-bold lg:leading-tight text-primary`}
          >
            {/* {cardData.title} */}
            Savory Haven
          </h1>
          <p
            className={`
            ${sublinetStyle} !text-neutral-300 text-start lg:text-sm
            `}
          >
            {/* {cardData.description} */}
            Lorem ipsum dolor sit amet consectetur adipiscing elit ipsum dolor
            sit amet.
          </p>
        </div>
        <Link to="#" className="">
          <button className="btn whitespace-nowrap btn-secondary btn-sm rounded-full px-6 md:px-14">
            SEE MORE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

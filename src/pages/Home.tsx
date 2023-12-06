import Benefit from "../components/layout/Benefit";
import DiscoverPlace from "../components/layout/DiscoverPlace";
import Hero from "../components/layout/Hero";
import HowItWorks from "../components/layout/HowItWorks";
type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefit />
      <DiscoverPlace />
    </>
  );
};

export default Home;

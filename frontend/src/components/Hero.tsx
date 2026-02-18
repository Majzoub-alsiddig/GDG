import HeroText from "./HeroText";
import coverImg from "../../assets/cover.jpg";

const Hero = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImg.src})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10">
        <HeroText />
      </div>
    </header>
  );
};

export default Hero;

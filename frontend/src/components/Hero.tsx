import HeroText from "./HeroText";

const Hero = () => {
  return (
    <header className=" z-0 relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <HeroText />
    </header>
  );
};

export default Hero;

import coverImg from "@/../assets/cover.jpg";

const Header = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverImg.src})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative">
        <p className="text-yellow-500 text-6xl">Courses</p>
        <p className="m-10 z-10 px-4 font-mono text-white text-2xl">
          "Learning is the
          <span className="text-blue-500"> heart of growth </span>
          our courses are designed to inspire, challenge, and prepare you for
          <span className="text-green-500"> success</span>."
        </p>
      </div>
    </header>
  );
};

export default Header;


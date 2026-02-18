import coverImg from "../../../../assets/cover.jpg";

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
        <p className="text-yellow-500 text-6xl">Welcome to</p>
        <p className="m-10 z-10 px-4 font-mono text-white text-2xl">
          "These
          <span className="text-red-500"> individuals </span>
          are the backbone of GDG, and their hard work and dedication are essential to our
          <span className="text-green-500"> success</span>."
        </p>
      </div>
    </header>
  );
};

export default Header;
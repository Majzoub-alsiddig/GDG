import Image from "next/image";
import GDGLogo from "@/../assets/GDGLogo.png";
import Facebook from "@/../assets/media-icons/Facebook.svg";
import Instagram from "@/../assets/media-icons/Instagram.svg";
import LinkedIn from "@/../assets/media-icons/LinkedIn.svg";
import Mail from "@/../assets/media-icons/Mail.svg";
import Tiktok from "@/../assets/media-icons/Tiktok.svg";
import Whatsapp from "@/../assets/media-icons/Whatsapp.svg";
import X from "@/../assets/media-icons/X.svg";

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12 flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-[180px] md:max-w-xl transition-opacity mb-6">
        <Image src={GDGLogo} alt="GDG Logo" layout="responsive" priority />
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-1 gap-y-1 max-w-full">
        <a href="https://www.facebook.com/GDGUofK" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-90" >
          <Image src={Facebook} alt="Facebook" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
        <a href="https://www.instagram.com/gdg_uofk" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-90">
          <Image src={Instagram} alt="Instagram" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
        <a href="https://x.com/GDG_UofK" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-90" >
          <Image src={X} alt="X" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
        <a href="https://whatsapp.com/channel/0029Vb77fOH002T8HKROP32H" className="transition-transform active:scale-90" >
          <Image src={Whatsapp} alt="Whatsapp" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
        <a href="https://x.com/GDG_UofK" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-90" >
          <Image src={Tiktok} alt="Tiktok" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
        <a href="https://www.linkedin.com/company/google-developer-student-clubs-university-of-khartoum/" target="_blank" rel="noopener noreferrer" className="transition-transform active:scale-90" >
          <Image src={LinkedIn} alt="LinkedIn" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
        <a href="mailto:contact@gdguofk.club" className="transition-transform active:scale-90" >
          <Image src={Mail} alt="Mail" width={64} height={64} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" priority />
        </a>
      </div>
      <p className="mt-6 text-[10px] min-[320px]:text-xs md:text-sm text-gray-500 font-poppins text-center leading-tight">
        © {new Date().getFullYear()} GDG University of Khartoum
      </p>
    </footer>
  );
};

export default Footer;

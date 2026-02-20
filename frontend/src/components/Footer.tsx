import Image from "next/image";
import GDGLogo from "@/../assets/GDGLogo.png";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";  
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6"; 
import { MdEmail } from "react-icons/md"; 

const Footer = () => {
  return (
    <footer className="w-full py-8 md:py-12 flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-[180px] md:max-w-xl transition-opacity hover:opacity-80 mb-6">
        <Image src={GDGLogo} alt="GDG Logo" layout="responsive" priority />
      </div>

     <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-4 max-w-full">
        <a href="https://www.facebook.com/GDGUofK" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl transition-transform active:scale-90" >
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/gdg_uofk" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl transition-transform active:scale-90" >
          <FaInstagram />
        </a>
        <a href="https://whatsapp.com/channel/0029Vb77fOH002T8HKROP32H" className="text-blue-500 hover:text-blue-400 text-2xl transition-transform active:scale-90" >
          <FaWhatsapp />
        </a>
        <a href="https://x.com/GDG_UofK" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl transition-transform active:scale-90" >
          <FaXTwitter />
        </a>
        <a href="https://www.linkedin.com/company/google-developer-student-clubs-university-of-khartoum/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl transition-transform active:scale-90" >
          <FaLinkedin />
        </a>
        <a href="mailto:contact@gdguofk.club" className="text-blue-500 hover:text-blue-400 text-2xl transition-transform active:scale-90" >
          <MdEmail />
        </a>
      </div>
      
      {/* Copyright: Using text-xs (extra small) and text-center 
          to ensure it fits on 200px widths.
      */}
      <p className="mt-6 text-[10px] min-[320px]:text-xs md:text-sm text-gray-500 font-poppins text-center leading-tight">
        © {new Date().getFullYear()} GDG University of Khartoum
      </p>
    </footer>
  );
};

export default Footer;

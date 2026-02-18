import Image from "next/image";
import GDGLogo from "@/../assets/GDGLogo.png";

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";  
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6"; 
import { MdEmail } from "react-icons/md"; 

const Footer = () => {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center bg-gray-50">
      <div className="w-sm md:w-xl transition-opacity hover:opacity-80">
        <Image src={GDGLogo} alt="GDG Logo" layout="responsive" priority />
      </div>

     <div className="flex justify-center space-x-6">
        <a href="https://www.facebook.com/GDGUofK" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaFacebook />
        </a>
        <a href="https://www.linkedin.com/company/google-developer-student-clubs-university-of-khartoum/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/gdg_uofk" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaInstagram />
        </a>
        <a href="https://x.com/GDG_UofK" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaXTwitter />
        </a>
        <a href="mailto:contact@gdguofk.club" className="text-blue-500 hover:text-blue-400 text-2xl" >
          <MdEmail />
        </a>
        <a href="https://whatsapp.com/channel/0029Vb77fOH002T8HKROP32H" className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaWhatsapp />
        </a>
      </div>
      
      <p className="mt-4 text-sm text-gray-500 font-poppins">
        © {new Date().getFullYear()} GDG University of Khartoum
      </p>
    </footer>
  );
};

export default Footer;

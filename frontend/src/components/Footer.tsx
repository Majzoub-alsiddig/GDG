import Image from "next/image";
import GDGLogo from "@/../assets/GDGLogo.png"; // Adjust path

import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";  
import { FaXTwitter } from "react-icons/fa6"; 
import { MdEmail } from "react-icons/md"; 

const Footer = () => {
  return (
    <footer className="w-full py-12 flex flex-col items-center justify-center bg-gray-50">
      <div className="w-sm md:w-xl transition-opacity hover:opacity-80">
        <Image src={GDGLogo} alt="GDG Logo" layout="responsive" priority />
      </div>

     <div className="flex justify-center space-x-6">
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaFacebook />
        </a>
        <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaInstagram />
        </a>
        <a href="https://x.com/" target="_blank" rel="noopener noreferrer"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <FaXTwitter />
        </a>
        <a href="mailto:mail@example.com"  className="text-blue-500 hover:text-blue-400 text-2xl" >
          <MdEmail />
        </a>
      </div>
      
      <p className="mt-4 text-sm text-gray-500 font-poppins">
        © {new Date().getFullYear()} GDG University of Khartoum
      </p>
    </footer>
  );
};

export default Footer;

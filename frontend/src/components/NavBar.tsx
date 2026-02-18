"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import GDGLogo from "@/../assets/GDGLogo.png";
import Image from "next/image";

interface IPage {
  url: string;
  name: string;
}

const NavBar = () => {
  const pathname = usePathname();
  const pages: IPage[] = [
    { name: "Home", url: "/" },
    { name: "Members", url: "/members" },
    { name: "Courses", url: "/courses" },
    { name: "Articles", url: "/articles" },
    { name: "Contact", url: "/contact" },
    { name: "FAQ", url: "/faq" },
    { name: "Admin", url: "/admin" },
  ];

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-3 transition-all duration-300 ${
        isVisible ? "bg-transparent" : "bg-white/90 backdrop-blur-md shadow-md"
      }`}
    >
      <Link href="/" className="relative w-56 h-12">
        <Image
          src={GDGLogo}
          alt="GDG Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </Link>

      <div className="flex items-center gap-6 text-sm font-medium">
        {pages.map((page, index) => (
          <Link
            key={index}
            href={page.url}
            className={`transition-colors duration-200 ${
              pathname === page.url
                ? isVisible ? "text-white font-semibold" : "text-black font-semibold"
                : isVisible ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-600"
            }`}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

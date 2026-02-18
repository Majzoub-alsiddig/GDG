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
    { name: "Test", url: "/test" },
    { name: "Articles", url: "/articles" },
    { name: "Contact", url: "/contact" },
    { name: "FAQ", url: "/faq" },
    { name: "Admin", url: "/admin" },
  ];
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  console.log("pathname: ", pathname);
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
      className={`text-gray-400 fixed top-0 left-0 right-0  z-10  flex items-center justify-between gap-3 ${!isVisible && "bg-[#1C1C1C]"}  p-3`}
    >
      <div className="relative w-40 h-10 ">
        <Image
          src={GDGLogo}
          alt="GDG Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
      <div className="flex items-center gap-2">
        {pages.map((page, index) => (
          <Link
            className={`${pathname === page.url && "text-white"}`}
            key={index}
            href={page.url}
          >
            {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;

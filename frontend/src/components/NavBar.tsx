"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IPage {
  url: string;
  name: string;
}
const NavBar = () => {
  const pages: IPage[] = [
    { name: "Home", url: "/" },
    { name: "Members", url: "/members" },
    { name: "Test", url: "/test" },
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
      className={`text-gray-400 fixed top-0 left-0 right-0  z-10  flex justify-end gap-3 ${!isVisible && "bg-[#1C1C1C]"}  p-4`}
    >
      {pages.map((page, index) => (
        <Link key={index} href={page.url}>
          {page.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavBar;

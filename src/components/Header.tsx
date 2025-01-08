'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  function toggleMenu() {
    setMobileMenuActive(!mobileMenuActive);
  }

  function closeMenu() {
    setMobileMenuActive(false);
  }

  return (
    <header className="site-header -translate-y-full md:translate-y-0 flex gap-8 fixed w-full md:sticky top-0 justify-between items-center md:px-16 md:py-8 z-20 h-screen md:h-32">
      <Link onClick={closeMenu} className="absolute top-full mt-8 left-8 z-20 md:relative md:mt-0 md:top-0 md:left-0" href="/">
        <Image
          className="invert transition-transform hover:rotate-12" 
          src="/circle-gameful.svg" 
          alt="Gameful Software"
          width="48"
          height="48"
        />
      </Link>
      <nav className={(mobileMenuActive ? "translate-y-full" : "translate-y-0" ) + " mobile-nav duration-1000 transition-transform md:translate-y-0 text-white w-full h-full font-bold text-2xl md:text-lg flex flex-col justify-center md:justify-end md:flex-row gap-8 items-center md:relative"}>
        <Link onClick={closeMenu} className="hover:-translate-y-1 transition-transform" href="/#about">About</Link>
        <Link onClick={closeMenu} className="hover:-translate-y-1 transition-transform" href="/#services">Services</Link>
        <Link onClick={closeMenu} className="hover:-translate-y-1 transition-transform" href="/portfolio">Portfolio</Link>
        { /* <Link onClick={closeMenu} className="hover:-translate-y-1 transition-transform" href="/news">News</Link> */ }
        <Link onClick={closeMenu} className="hover:-translate-y-1 transition-transform" href="/contact">Contact</Link>
        <Link className="
          inline-block my-8 text-xl md:text-base font-normal bg-yellow-500 text-black py-2 px-4 rounded-md
          hover:scale-110 hover:bg-zinc-800 hover:text-white transition-all
          " href="mailto:hello@gameful.dev">Get in touch →</Link>
      </nav>
      <button onClick={toggleMenu} className="absolute top-full mt-8 md:mt-0 right-8 text-5xl z-20 md:hidden text-center">
        {(mobileMenuActive ? "✖" : "☰")}
      </button>
    </header>
  );
}
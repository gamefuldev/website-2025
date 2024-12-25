import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header flex gap-8 sticky top-0 justify-between items-center px-16 py-8 z-20 h-32">
      <Link href="/">
        <Image
          className="invert transition-transform hover:rotate-12" 
          src="circle-gameful.svg" 
          alt="Gameful Software"
          width="48"
          height="48"
        />
      </Link>
      <nav className="text-white font-bold text-lg flex gap-8 items-center">
        <Link href="/#about">About</Link>
        <Link href="/#services">Services</Link>
        <Link href="/work">Work</Link>
        <Link href="/news">News</Link>
        {/* <Link href="/jobs">Jobs</Link> */}
        <Link href="/contact">Contact</Link>
        <Link className="inline-block text-base font-normal bg-yellow-500 text-black py-2 px-4 rounded-md" href="mailto:hello@gameful.dev">Get in touch →</Link>
      </nav>
    </header>
  );
}
import Link from "next/link";
import SocialIcons from "@/components/SocialIcons";
import Availability from "@/components/Availability";

export default function Footer() {
  return (
    <footer className="flex px-16 py-16 gap-8 max-w-screen-lg m-auto">
      <div className="w-full md:w-1/2">
        <h2 className="font-mono text-base uppercase opacity-60 font-light mb-2">Get in touch</h2>
        <p className="text-sm mb-4">
          <span className="font-semibold">Email: </span>
          <Link className="decoration-yellow-500 decoration-dotted underline" href="mailto:hello@gameful.dev">hello@gameful.dev</Link>
        </p>
        <h2 className="font-mono text-base uppercase opacity-60 font-light mt-8 mb-2">Find us online</h2>
        <SocialIcons />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="font-mono text-base uppercase opacity-60 font-light mb-2">Current Availability</h2>
        <p className="text-sm mb-1">Jared is currently <Availability available={true} /> for projects.</p>
        <h2 className="font-mono text-base uppercase opacity-60 font-light mt-8 mb-2">Legal bits</h2>
        <p className="text-sm mb-1">
          Gameful Software Ltd. (15106597) is registered in England & Wales
        </p>
        <p className="text-sm mb-4">
          All content &copy; 2024 Gameful Software Ltd.
        </p>
        <Link className="text-sm decoration-yellow-500 decoration-dotted underline" href="/privacy">Privacy Policy</Link>
      </div>
    </footer>
  );
}
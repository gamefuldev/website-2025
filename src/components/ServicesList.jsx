import Link from "next/link";

export default function ServicesList() {
  return (
    <div id="services" className="flex flex-col md:flex-row gap-8 w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32">
      <h2 className="w-full md:w-1/3 font-bold text-3xl pt-8">Services</h2>
      <ul className="w-full md:w-2/3 *:text-lg *:md:text-2xl *:py-4 *:md:py-8 *:border-zinc-800 *:border-t border-b border-zinc-800">
      <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/static">Static website development →</Link></li>
        <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/ecommerce">Building online stores →</Link></li>
        <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/web-apps">Custom web applications →</Link></li>
        <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/elearning">E-learning platforms →</Link></li>
        <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/godot">Godot game programming →</Link></li>
      </ul>
    </div>
  );
}
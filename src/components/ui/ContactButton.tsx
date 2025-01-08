import Link from "next/link";

export default function ContactButton() {
  return (
    <Link className="inline-block px-8 py-4 rounded-lg transition-all text-base bg-yellow-500 text-zinc-900 hover:bg-zinc-800 hover:scale-110 hover:text-white" href="mailto:hello@gameful.dev">Get in touch</Link>
  );
}
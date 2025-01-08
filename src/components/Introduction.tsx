import Link from "next/link";

export default function Introduction() {
  return (
    <div id="about" className="about relative w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32 md:pr-80 *:text-xl *:md:text-2xl *:leading-10 *:my-8">
      <p><strong className="font-semibold">Gameful Software</strong> is the development studio of Jared&nbsp;Rigby.</p> 
      <p>I&apos;m based in the UK and available for remote-friendly freelance projects.</p>
      <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline relative z-10">
        Clients include award-winning marketing agency <Link href="https://www.reflectdigital.co.uk/">Reflect&nbsp;Digital</Link>, 
        international education powerhouse <Link href="https://www.eimglobal.com/">EiM</Link> and the 
        Godot-driven AI start-up <Link href="https://www.linkedin.com/company/playgo-ai-inc/">Playgo AI</Link>.
      </p>
    </div>
  );
}
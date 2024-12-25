import Link from "next/link";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <div className="-mt-32 h-[100vh] max-h-[700px] relative border-b-2 border-yellow-500">
        <div className="absolute m-auto z-10 h-full w-full flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold w-full max-w-screen-lg p-16 pb-2">Gameful Software</h1>
          <h2 className="text-4xl font-semibold w-full max-w-screen-lg p-16 pt-2 opacity-80">Creative development studio</h2>
        </div>
        <video className="opacity-25 w-full h-full object-cover object-bottom" autoPlay loop src="/video/tonalities-hero.webm"></video>
      </div>
      <div id="about" className="w-full max-w-screen-lg m-auto px-16 py-32 md:pr-64 *:text-2xl *:leading-10 *:my-8">
        <p>Gameful Software is the development studio of Jared Rigby.</p> 
        <p>
          Collaborating with companies worldwide for over 10 years. 
          Based in the UK and available for remote-friendly freelance projects.</p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          Previous clients include award winning marketing agency <Link href="https://www.reflectdigital.co.uk/">Reflect Digital</Link>, 
          international education powerhouse <Link href="https://www.eimglobal.com/">EiM</Link> and 
          global gaming giant <Link href="https://www.ubisoft.com.cn/">Ubisoft Shanghai</Link>.
        </p>
      </div>
      <hr className="border-yellow-500"/>
      <div id="services" className="flex gap-8 w-full max-w-screen-lg m-auto px-16 py-32">
        <h2 className="w-1/3 font-bold text-3xl pt-8">Services</h2>
        <ul className="w-2/3 *:text-2xl *:py-8 *:border-zinc-800 *:border-t border-b border-zinc-800">
        <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/static">Static website development →</Link></li>
          <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/ecommerce">Building online stores →</Link></li>
          <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/web-apps">Custom web applications →</Link></li>
          <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/elearning">E-learning platforms →</Link></li>
          <li><Link className="inline-block transition-transform hover:translate-x-2" href="/services/godot">Godot game programming →</Link></li>
        </ul>
      </div>
      <hr className="border-yellow-500"/>
      <div id="testimonials" className="flex gap-8 w-full max-w-screen-lg m-auto px-16 py-32 relative">
        <h2 className="w-1/3 font-bold text-3xl mt-8">Testimonials</h2>
        <ul className="w-2/3 flex flex-col gap-16">
          <Testimonial 
            name="Becky Campbell" 
            company="CEO - Reflect Digital" 
            content="Jared did a fantastic job on the front end development project we had. He delivered everything he promised on time and to a really high standard. I would most definitely recommend working with Jared. " 
          />
          <Testimonial 
            name="Greg Wan" 
            company="CEO - Playgo AI" 
            content="Jared is very knowledgeable about Godot and iOS issues. He was able to quickly identify a solution for our problem. During the entire process, he was professional, on time, great with communication." 
          />
          <Testimonial 
            name="Sarah O'Rourke" 
            company="Director - Taughtly" 
            content="Jared was fantastic to work with. He helped me to build a shop for digital resources on my education website. His communication was excellent throughout. The website works seamlessly and really impressed with the outcome. Would work with him again." 
          />
          <Testimonial
            name="Ruth Robinson"
            company="Managing Director - BBS (UK)"
            content="We have recently worked with Jared on a website development project for a client here at BBS. I have been really impressed with his skills and knowledge, his professionalism and project management. I would have no hesitation in recommending him to others."
          />
        </ul>
      </div>
      <hr className="border-yellow-500"/>
      <div id="get-in-touch" className="w-full max-w-screen-lg m-auto px-16 py-32 md:pr-64">
        <h2 className="font-bold text-3xl mt-8">Get in touch</h2>
        <div className="*:text-2xl *:leading-10 *:my-8">
          <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">Have a project in mind? Send the details to <Link href="mailto:hello@gameful.dev">hello@gameful.dev</Link>.</p> 
          <p>I can help you at all stages of your journey. Whether you&apos;re planning something from scratch, need an extra developer for an active project, or need help testing an existing product please do get in touch.</p>
          <p>I&apos;m currently based in the UK and available remotely Monday through Friday.</p>
        </div>
      </div>
    </>
  );
}

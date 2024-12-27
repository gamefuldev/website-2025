import Link from "next/link";

export default function Contact() {
  return (
    <div id="get-in-touch" className="w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32 md:pr-64">
      <h2 className="font-bold text-3xl mt-8">Get in touch</h2>
      <div className="*:text-xl *:md:text-2xl *:leading-8 *:md:leading-10 *:my-8">
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">Have a project in mind? Send the details to <Link href="mailto:hello@gameful.dev">hello@gameful.dev</Link>.</p> 
        <p>I can help you at all stages of your journey. Whether you&apos;re planning something from scratch, need an extra developer for an active project, or need help testing an existing product please do get in touch.</p>
        <p>I&apos;m currently based in the UK and available remotely Monday through Friday.</p>
      </div>
    </div>
  );
}
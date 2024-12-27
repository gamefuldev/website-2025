import Link from "next/link";

export default function Introduction() {
  return (
    <div id="about" className="w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32 md:pr-64 *:text-xl *:md:text-2xl *:leading-10 *:my-8">
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
);
}
import HomepageHero from "@/components/HomepageHero";
import Introduction from "@/components/Introduction";
import ServicesList from "@/components/ServicesList";
import TestimonialList from "@/components/TestimonialList";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <Introduction />
      <hr className="border-yellow-500"/>
      <ServicesList/>
      <hr className="border-yellow-500"/>
      <div id="testimonials" className="flex flex-col md:flex-row  gap-8 w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32 relative">
        <h2 className="w-full md:w-1/3 font-bold text-3xl mt-8">Testimonials</h2>
        <TestimonialList />
      </div>
      <hr className="border-yellow-500"/>
      <Contact />
    </>
  );
}

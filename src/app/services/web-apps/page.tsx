import ServiceSingle from "@/components/ServiceSingle";
import TestimonialSingle from "@/components/TestimonialSingle";

export default function WebApplcations() {
  return (
    <div className="mt-32 md:mt-16">
      <ServiceSingle title="Custom web applications">
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          You dream it, I&apos;ll build it.
        </p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          If you have an idea for an online service that&apos;s a little bit more involved, I can help you to create an application that supports features like user accounts, admin dashboards, payment portals, AI language models, and more.
        </p>
      </ServiceSingle>
      <TestimonialSingle 
        name="Ruth Robinson"
        company="CEO - BBS (UK)"
        content="We have recently worked with Jared on a website development project for a client here at BBS. I have been really impressed with his skills and knowledge, his professionalism and project management. I would have no hesitation in recommending him to others. I am sure this will be the first of many projects. Thanks Jared!"
      />
    </div>
  );
}

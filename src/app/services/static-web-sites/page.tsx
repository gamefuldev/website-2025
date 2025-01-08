import ServiceSingle from "@/components/ServiceSingle";
import TestimonialSingle from "@/components/TestimonialSingle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website development services - Gameful Software Ltd",
  description: "",
};

export default function StaticWeb() {
  return (
    <div className="mt-32 md:mt-16">
      <ServiceSingle title="Static website development">
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          Sometimes all you need is a simple home on the web.
        </p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          I can help you to build a standard website or blog using <Link href="https://jekyllrb.com/">Jekyll</Link>, <Link href="https://gohugo.io/">Hugo</Link>, <Link href="https://nextjs.org/">Next.js</Link> or any other technology of your choosing.
        </p>
      </ServiceSingle>
      <TestimonialSingle 
        name="Becky Campbell"
        company="CEO - Reflect Digital"
        content="Jared did a fantastic job on the front end development project we had. He delivered everything he promised on time and to a really high standard. I would most definitely recommend working with Jared."
      />
    </div>
  );
}
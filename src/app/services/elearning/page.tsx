import ServiceSingle from "@/components/ServiceSingle";
import TestimonialSingle from "@/components/TestimonialSingle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online learning and elearning website development - Gameful Software Ltd",
  description: "",
};

export default function Elearning() {
  return (
    <div className="mt-32 md:mt-16">
      <ServiceSingle title="Online learning platforms">
        <p>
          Whether you want to host a learning wiki, sell teaching resources, or host entire video courses, I can help you to build a custom online learning website.
        </p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          I can support you in using an existing platform like <Link href="https://www.learndash.com/">LearnDash</Link> or help you to develop a <Link href="/services/web-apps">custom built platform</Link> to support your business&apos; needs.
        </p>
      </ServiceSingle>
      <TestimonialSingle 
        name="Sarah O'Rourke"
        company="Director - Taughtly"
        content="Jared was fantastic to work with. He helped me to build a shop for digital resources on my education website. His communication was excellent throughout. The website works seamlessly and really impressed with the outcome. Would work with him again."
      />
    </div>
  );
}
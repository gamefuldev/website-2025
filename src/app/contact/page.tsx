import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in touch - Gameful Software Ltd",
  description: "",
};

export default function ContactPage() {
  return (
    <div className="mt-32 md:mt-16">
      <Contact/>
    </div>
  );
}
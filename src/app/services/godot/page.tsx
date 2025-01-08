import ServiceSingle from "@/components/ServiceSingle";
import TestimonialSingle from "@/components/TestimonialSingle";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Godot game development services - Gameful Software Ltd",
  description: "",
};

export default function Godot() {
  return (
    <div className="mt-32 md:mt-16">
      <ServiceSingle title="Godot game development">
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          <Link href="https://godotengine.org/">Godot</Link> is an open source engine that supports game development for PC, Mac, iOS, Android and VR.
        </p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          I&apos;ve been working with the engine for the last 3 years, most recently on the adventure/puzzle game <Link href="https://store.steampowered.com/app/2705650/Mithra/">Mithra</Link>, and helped to design and deliver the senior&nbsp;school game development modules at <Link href="https://beijing.dulwich.org/">Dulwich College Beijing</Link>.
        </p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          If you&apos;re looking for support in a new Godot project. Please get in touch.
        </p>
      </ServiceSingle>
      <TestimonialSingle 
        name="Greg Wan"
        company="CEO - Playgo AI"
        content="Jared is very knowledgeable about Godot and iOS issues. He was able to quickly identify a solution for our problem. During the entire process, he was professional, on time, great with communication."
      />
    </div>
  );
}
import ServiceSingle from "@/components/ServiceSingle";
import TestimonialSingle from "@/components/TestimonialSingle";
import Link from "next/link";

export default function Ecommerce() {
  return (
    <div className="mt-32 md:mt-16">
      <ServiceSingle title="Sell online">
        <p>
          If you&apos;re looking for a new online store, I&apos;ve been helping businesses sell online for over 10 years.
        </p>
        <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">
          I can create a responsive website for you with <Link href="https://woocommerce.com/" >WooCommerce</Link>, <Link href="https://www.shopify.com/uk">Shopify</Link> or a <Link href="/services/web-apps">custom built platform</Link> to support your business&apos; needs.
        </p>
      </ServiceSingle>
      <TestimonialSingle 
        name="Ben Keighley"
        company="Director - Routes 4 Media"
        content="5* service from Jared, very communicative, patient and goes the extra yard to achieve the end goal - would highly recommend."
      />
    </div>
  );
}
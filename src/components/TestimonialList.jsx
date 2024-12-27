import Testimonial from "@/components/Testimonial";

export default function TestimonialList() {
  return (
    <ul className="w-full md:w-2/3 flex flex-col gap-8 md:gap-16">
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
  );
}
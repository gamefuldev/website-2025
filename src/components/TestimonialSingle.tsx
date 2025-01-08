import Testimonial from "./Testimonial";

interface TestimonialSingleProps {
  name: string;
  company: string;
  content: string;
}

export default function TestimonialSingle(props: TestimonialSingleProps) {
  return (
    <>
      <hr className="border-yellow-500"/>
      <div id="testimonials" className="flex flex-col md:flex-row  gap-8 w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32 relative">
        <h2 className="w-full md:w-1/3 font-bold text-3xl mt-8">Testimonial</h2>
          <Testimonial 
            name={props.name} 
            company={props.company} 
            content={props.content}
          />
        </div>
    </>
  );
}
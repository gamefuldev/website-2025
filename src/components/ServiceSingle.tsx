import { ReactNode } from "react";
import ContactButton from "./ui/ContactButton";

interface ServiceSingleProps {
  title: string;
  children: ReactNode
}

export default function ServiceSingle(props: ServiceSingleProps) {
  return (
    <div className="w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-32 flex flex-col md:flex-row gap-8 md:gap-16">
      <h2 className="w-full md:w-1/3 font-bold text-3xl mt-8">{props.title}</h2>
      <div className="w-full md:w-2/3 *:text-xl *:md:text-2xl *:leading-10 *:my-8">
        {props.children}
        <ContactButton />
      </div>
    </div>
  );
}
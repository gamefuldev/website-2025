import Link from "next/link";
import Image from "next/image";

export default function WorkItem(props) {
  return (
    <li className="relative overflow-hidden shadow-lg w-full my-4">
      <Link className="group" href={props.url}>
        <Image className="block object-cover object-top w-full h-96" src={props.image_url} alt={props.image_alt} width={1400} height={500} />
        <h3 className="md:-translate-x-full group-hover:translate-x-0 transition-transform duration-1000 absolute top-0 left-0 p-8 h-1/2 md:h-2/3 text-2xl lg:text-3xl font-bold w-full bg-zinc-900/75 backdrop-blur-sm">{props.title}</h3>
        <ul className="md:translate-x-full group-hover:translate-x-0 transition-transform duration-1000 absolute bottom-0 right-0 p-8 w-full h-1/2 md:h-1/3 flex flex-wrap items-end justify-end gap-4 bg-zinc-900/90 backdrop-blur-md">
          {props.tags.map(tag => (
            <li className="rounded-full bg-yellow-500 text-zinc-800 py-2 px-4 text-xs lg:text-xl" key={tag}>{tag}</li>
          ))}
        </ul>
      </Link>
    </li>
  );
}
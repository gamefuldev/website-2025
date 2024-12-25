export default function Testimonial(props) {
  return (
    <li className="block bg-zinc-900 rounded-lg p-8 leading-8">
      <p className="text-xl mb-8">{props.content}</p>
      <p className="opacity-80 font-mono">
        {props.name}<br/>
        <span className="opacity-60">{props.company}</span>
      </p>
    </li>
  );
}
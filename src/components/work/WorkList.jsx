import WorkItem from "@/components/work/WorkItem";

const work_items = [
  {
    title: "Taughtly - LearnDash Driven Learning Platform",
    url: "https://www.taughtly.co.uk",
    image: {
      url: "/img/work/taughtly/taughtly.png",
      alt: "Online learning platform Taughtly"
    },
    tags: ["Next.js", "React", "WordPress", "Tailwind CSS", "WooCommerce"]
  },
  {
    title: "Dulwich Game Jam - Hugo powered competition website",
    url: "https://gamejam.dulwich.org",
    image: {
      url: "/img/work/dgj/dgj.png",
      alt: "Game making competition website"
    },
    tags: ["Hugo", "Markdown", "SCSS", "JavaScript", "Static Site Generator"]
  },
  {
    title: "Tonalities - Unity Engine Puzzle Game",
    url: "https://store.steampowered.com/app/2265750/Tonalities/",
    image: {
      url: "/img/work/tonalities/tonalities-hero.png",
      alt: "Ambient puzzle game Tonalities"
    },
    tags: ["Unity Engine", "C#", "Steam SDK", "Game Design", "Game Development"]
  },
  {
    title: "Mithra - Godot Engine Adventure Game",
    url: "https://store.steampowered.com/app/2705650/Mithra/",
    image: {
      url: "/img/work/mithra/mithra.png",
      alt: "Puzzle Adventure Game Mithra"
    },
    tags: ["Godot Engine", "GDScript", "Steam SDK", "Game Design", "Game Development"]
  }
]

export default function WorkList() {
  return (
    <ul className="w-full max-w-screen-2xl m-auto p-8 md:p-16 flex flex-col">
      {work_items.map(work => (
        <WorkItem 
          key={work.title}
          title={work.title}
          url={work.url} 
          image_url={work.image.url}
          image_alt={work.image.alt}
          tags={work.tags}
        />
      ))}
    </ul>
  );
}
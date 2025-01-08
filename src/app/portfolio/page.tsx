import WorkList from "@/components/work/WorkList";

export default function WorkPage() {
  return (
    <div className="mt-32 md:mt-16">
      <div id="get-in-touch" className="w-full max-w-screen-lg m-auto px-8 md:px-16 py-16 md:py-16 md:pr-64">
        <h2 className="font-bold text-3xl mt-8">Featured projects</h2>
        <div className="*:text-xl *:md:text-2xl *:leading-8 *:md:leading-10 *:my-8">
          <p className="*:font-semibold *:decoration-yellow-500 *:decoration-2 *:underline">Here is a selection of projects I&apos;ve been working on recently:</p>
        </div>
      </div>
      <WorkList />
    </div>
  );
}
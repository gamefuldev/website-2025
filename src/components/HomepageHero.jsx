export default function HomepageHero() {
  return (
    <div className="-mt-32 h-[100vh] max-h-[700px] relative border-b-2 border-yellow-500">
      <div className="absolute m-auto z-10 h-full w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold w-full max-w-screen-lg p-8 md:p-16 pb-2 md:pb-2">Gameful Software</h1>
        <h2 className="text-4xl font-semibold w-full max-w-screen-lg p-8 md:p-16 pt-2 md:pt-2 opacity-80">Creative development studio</h2>
      </div>
      <video className="opacity-25 w-full h-full object-cover object-bottom" autoPlay loop src="/video/tonalities-hero.webm"></video>
    </div>
  );
}
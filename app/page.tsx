import Image from "next/image";

export default function Home() {
  const spanStyle = "flex-wrap text-white font-mono text-3xl text-center px-1 after:content-[' '] after:absolute after:block after:bg-white"
  const absoluteTop = "absolute top-0 left-0"
  return (
    <main className="bg-black flex h-screen w-screen flex-row items-center justify-stretch box-border">
      <div className="hidden md:flex h-screen flex-1 flex-col place-content-center">
        {/* Background */}
        <div className="absolute top-0 left-0 right-0 bottom-0 z-index-0 w-1/2 h-full">

          <div className={`${absoluteTop} w-full opacity-20 bg-large-star`}></div>
          <div className={`${absoluteTop} w-full h-full opacity-5 bg-small-star`}></div>
          <div className={`${absoluteTop} gradient w-full h-full z-index-2`}></div>
        </div>
        {/* Title */}
        <div className="relative flex-wrap flex place-content-center p-20">
          <span className={spanStyle}>Conversational</span>
          <span className={spanStyle}>AI</span>
          <span className={spanStyle}>for</span>
          <span className={spanStyle}>Understanding</span>
          <span className={spanStyle}>the</span>
          <span className={spanStyle}>Universe</span>
        </div>
      </div>
      <div className="h-screen flex-1 flex-col flex items-center justify-center">
        <p className="p-20 text-white font-mono text-center">Thank you for applying to our early access program. The program is currently limited to <a href="x.com">X Premium+</a> subscribers.</p>
      </div>
    </main>
  );
}

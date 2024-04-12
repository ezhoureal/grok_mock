"use server"

import './animation.css'
import './fonts.css'
import LoginPage from "./ui/Login";
import { Suspense } from "react";
import { Loading } from './ui/Loading';

export default async function Home() {

  const spanStyle = "relative block text-white text-3xl text-center p-1"
  const absoluteTop = "absolute top-0 left-0"

  return (
    <main className="bg-black flex w-screen flex-row box-border">
      <div className="relative hidden md:flex flex-1 flex-col place-content-center p-20">
        {/* Background */}
        <div className="z-index-0">

          <div className={`${absoluteTop} w-full opacity-20 bg-large-star`}></div>
          <div className={`${absoluteTop} w-full opacity-5 bg-small-star`}></div>
          <div className={`${absoluteTop} gradient w-full h-full z-index-2`}></div>
        </div>
        {/* Title */}
        <div className="title relative flex-wrap flex place-content-center">
          <span className={spanStyle}>Conversational</span>
          <span className={spanStyle}>AI</span>
          <span className={spanStyle}>for</span>
          <span className={spanStyle}>Understanding</span>
          <span className={spanStyle}>the</span>
          <span className={spanStyle}>Universe</span>
        </div>
        <div className="absolute top-6 left-6 w-full">
          <img src="/grok.svg" alt="grok logo" className="w-32 h-11" />
        </div>
      </div>
      <div className="relative h-screen flex-1 p-5 md:p-15 flex items-center justify-center flex-col">
        <Suspense fallback={<Loading />}>
          <LoginPage />
        </Suspense>
        <footer className="absolute bottom-0 p-5 md:p-10 w-full h-50">
          <span className='text-xs flex items-center'>
            <a href='www.x.com'><img alt="xAI logo" className="w-10 h-10 float-left mr-2" src="/xai.svg" /></a>
            All rights reserved. <br /> 2024.</span>
          <span className='text-xs text-right'>
            <a href='www.x.com'>Terms and Conditions</a>
            <br/>
            <a href='www.x.com'>Privacy Policy</a>
          </span>
        </footer>
      </div>
    </main>
  );
}

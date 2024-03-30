'use client'

import './animation.css'
import './fonts.css'
import AccountSettingDialog from './dialog';
import LoginPage from "./login";
import { useState } from "react";

export default function Home() {
  const [dialogOpen, displayDialog] = useState(false)

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
      <LoginPage displayDialog={displayDialog} />
      {dialogOpen && (
        <AccountSettingDialog displayDialog={displayDialog} isOpen={dialogOpen} />
      )}
    </main>
  );
}

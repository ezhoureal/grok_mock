"use client"
import React, { useState } from "react";

import dynamic from "next/dynamic";
const AccountSettingDialog = dynamic(()=>import("./dialog"));

export function LoggedIn()
{
  const [dialogOpen, displayDialog] = useState(false)

  return (
    <>
    <p className="md:px-20 text-2xl text-center">Thank you for applying to our early access program. The program is currently limited to <a href="x.com">X Premium+</a> subscribers.</p>
    <p className="text-l text-white text-center">
      <a className="cursor-pointer">Go back to X</a> | <a onClick={() => displayDialog(true)} className="cursor-pointer">Profile settings</a> </p>
      
      {dialogOpen && (
        <AccountSettingDialog displayDialog={displayDialog} isOpen={dialogOpen} />
      )}
  </>
  )
}
"use client"
import React, { useState } from "react";
import AccountSettingDialog from "./dialog";

export function LoggedIn()
{
  const [dialogOpen, displayDialog] = useState(false)

  return (
    <React.Fragment>
    <p className="px-20 text-2xl text-center">Thank you for applying to our early access program. The program is currently limited to <a href="x.com">X Premium+</a> subscribers.</p>
    <p className="text-l text-white text-center">
      <a className="cursor-pointer">Go back to X</a> | <a onClick={() => displayDialog(true)} className="cursor-pointer">Profile settings</a> </p>
      
      {dialogOpen && (
        <AccountSettingDialog displayDialog={displayDialog} isOpen={dialogOpen} />
      )}
  </React.Fragment>
  )
}
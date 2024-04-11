"use server"

import { GithubSignIn } from "@/app/data/auth"
import "./login.css"
import { auth } from "@/auth";
import React from "react";
import { LoggedIn } from "./LoggedIn";

export default async function LoginPage() {
  const session = await auth()
  console.log(session)
  return (<React.Fragment>{
    session === null ?
      <React.Fragment>
        <p className="text-xl text-center pb-5">Sign in with X to join xAI's early access program. Participation in the early access program is currently limited to <a href="www.x.com">X Premium+</a> subscribers.</p>
        <form
          action={GithubSignIn}
        >
          <button type="submit">
            <img src="/github.png"></img>
            Sign in with GitHub
          </button>
        </form>
        <p className="text-s pt-5 text-center">By clicking "Sign in with X", you confirm you are at least 18 years old, agree to our Terms and acknowledge our Privacy Policy.</p>
      </React.Fragment>
      : <LoggedIn />
  }</React.Fragment>)
}
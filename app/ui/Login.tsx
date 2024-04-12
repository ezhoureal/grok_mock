"use server"

import { GithubSignIn } from "@/app/data/auth_helper"
import styles from "./login.module.css"
import { auth } from "@/auth";
import React from "react";
import { LoggedIn } from "./LoggedIn";

export default async function LoginPage() {
  const [session] = await Promise.all([auth(), new Promise(resolve=>setTimeout(resolve, 2000))])
  console.log(session)
  return (<React.Fragment>{
    session === null ?
      <React.Fragment>
        <p className="text-xl text-center pb-5">Sign in with X to join xAI&quot;s early access program. Participation in the early access program is currently limited to <a href="www.x.com">X Premium+</a> subscribers.</p>
        <form
          action={GithubSignIn}
        >
          <button className={styles.submit} type="submit">
            <img className={styles.github} src="/github.png"></img>
            Sign in with GitHub
          </button>
        </form>
        <p className="text-s pt-5 px-16 text-center">By clicking &ldquo;Sign in&rdquo;, you confirm you are at least 18 years old, agree to our Terms and acknowledge our Privacy Policy.</p>
      </React.Fragment>
      : <LoggedIn />
  }</React.Fragment>)
}
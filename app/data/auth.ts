"use server"

import { signIn } from "@/auth"

export async function GithubSignIn() {
  await signIn("github")
}
"use server"

import { signIn, signOut } from "@/auth"

export async function GithubSignIn() {
  await signIn("github")
}

export async function GithubSignOut() {
  await signOut({})
}
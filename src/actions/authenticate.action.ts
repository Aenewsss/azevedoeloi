"use server"

import { apiUrl } from "@/constants/api-url.constant"
import { cookies } from "next/headers"

export async function authenticate(prevState: any, form: FormData) {
  const result: { token: string } | { error: string } = await (await fetch(`${apiUrl}/api/authenticate`, {
    method: "POST",
    body: form
  })).json()


  if ("error" in result) {
    return {
      error: result.error,
      token: ''
    }
  }
  
  cookies().set('currentUser', result.token)
  return {
    error: '',
    token: result.token
  }
}
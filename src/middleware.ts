import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { API_URL } from "./constants/api-url.constant"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.includes('admin')) {
    const currentUser = request.cookies.get('currentUser')?.value
    if (currentUser) {
      const userAuthenticated = await (await fetch(`${API_URL}/api/authenticate/verify-jwt`, {
        body: JSON.stringify({ token: currentUser }),
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      })).json()

      if (userAuthenticated.validToken) return NextResponse.next()
      return NextResponse.redirect(new URL('/login', request.url))

    }
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

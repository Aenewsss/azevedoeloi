import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.includes('admin')) {
    const currentUser = request.cookies.get('currentUser')?.value
    if (currentUser) 'console'
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

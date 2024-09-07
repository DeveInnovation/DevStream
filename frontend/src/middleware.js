import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('sessiontoken'); // access token

  // protected routes
  const protectedPaths = ['/login', '/signup'];

  if (token && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

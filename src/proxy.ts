import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const protectedPaths = ['/admin', '/dashboard', '/api/protected'];
  const isPathProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  const token = request.cookies.get('auth-token')?.value;

  if (isPathProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const response = NextResponse.next();

  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|logo favicon icon.png|public).*)'],
};

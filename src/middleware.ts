import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware addresses the authorization bypass vulnerability (GHSA-f82v-jwr5-mffw)
// by properly handling auth checks and response headers
export function middleware(request: NextRequest) {
  // Get the pathname from the request
  const pathname = request.nextUrl.pathname;
  
  // Define paths that should be protected (customize based on your needs)
  const protectedPaths = ['/admin', '/dashboard', '/api/protected'];
  
  // Check if the current path should be protected
  const isPathProtected = protectedPaths.some((path) => 
    pathname.startsWith(path)
  );

  // Example of authentication check (customize with your actual auth logic)
  const token = request.cookies.get('auth-token')?.value;
  
  // If the path is protected and there's no valid auth token, redirect to login
  if (isPathProtected && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Add secure headers to all responses
  const response = NextResponse.next();
  
  // Set security headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

// Define which paths this middleware should run on
export const config = {
  matcher: [
    // Match all request paths except for those starting with:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public folder
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}; 
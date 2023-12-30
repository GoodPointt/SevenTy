import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname
	const pathnameIsMissingLocale = !pathname.startsWith('/en/') && pathname !== '/en'
	if (pathnameIsMissingLocale) return NextResponse.redirect(new URL('/en', request.url))
}

{
	/*!!!!!!!!!!img folder must be added into MATCHER to let images shown with middleware*/
}
export const config = {
	matcher: ['/((?!api|_next/static|_next/image|img|favicon.ico|logo.png|sw.js).*)'],
}

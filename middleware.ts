import { NextResponse, type NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const response = NextResponse.next();
    const p_currentUser = request.cookies.get('p_token')
    const d_currentUser = request.cookies.get('d_token')
    const h_currentUser = request.cookies.get('h_token')
    console.log({ p_currentUser, pathname: request.nextUrl.pathname })
    if (p_currentUser || d_currentUser || h_currentUser) {
        return NextResponse.rewrite(new URL('/', request.nextUrl));
    }

    if (!request.nextUrl.pathname.startsWith('/login') && !request.nextUrl.pathname.startsWith('/signup')) {
        return NextResponse.rewrite(new URL('/login', request.nextUrl));
    }
    return response;
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

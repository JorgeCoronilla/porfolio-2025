import { NextRequest } from 'next/server';
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@i18nConfig';

export async function middleware(request: NextRequest) {

  return i18nRouter(request, i18nConfig);
}
export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};
// import { NextRequest, NextResponse } from 'next/server';
// import i18nConfig from '@i18nConfig';

// export function middleware(request: NextRequest) {
//   const pathname = request.nextUrl.pathname;
  
//   // Check if the pathname already has a locale
//   const pathnameHasLocale = i18nConfig.locales.some(
//     locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   if (pathnameHasLocale) return;

//   // Redirect if there is no locale
//   const locale = request.cookies.get('NEXT_LOCALE')?.value || 
//                 i18nConfig.defaultLocale;
  
//   return NextResponse.redirect(
//     new URL(`/${locale}${pathname}`, request.url)
//   );
// }

// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
// };
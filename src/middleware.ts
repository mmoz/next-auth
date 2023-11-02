//protected route by role

import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(request: NextRequestWithAuth) {
    if (
      request.nextUrl.pathname.startsWith("/protectedroute") &&
      request.nextauth.token?.roles !== "admin"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  },
  {
    callbacks: {
      authorized: async ({ token }) => !!token,
    },
  }
);

//protected route
export const config = { matcher: ["/dashboard", "/protectedroute"] };

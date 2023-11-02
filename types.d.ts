import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: string | null;
      refreshToken: Session | null;
      userFirstname: string;
      roles: string;
    };
  }
}

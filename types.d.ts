import 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken: Session | null;
      userFirstname: string;
      roles: string;
    };
  }
}

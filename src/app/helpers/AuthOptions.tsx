 import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from 'next/headers'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: Record<"username" | "password", string> | undefined) {
                if (!credentials || !credentials.username || !credentials.password) {
                    return null;
                }

                try {
 
                    const res = await fetch(`http://localhost:4000/api/login`, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(credentials),
                    });
                    const data = await res.json();
                    console.log(data)

                    if (data.status === 200) {
                        return data;
                    } else {
                        return null;
                    }

                } catch (e) {
                    console.log(e)

                }


            }

        })

    ],
    pages: {
        signIn: "/"
    },
    callbacks: {
        async jwt({ token, user }: { token: any, user: any }) {
            if (user) {
                token.accessToken = user.data.accessToken
                token.refreshToken = user.data.refreshToken
                token.roles = user.data.roles
                token.username = user.data.username
                
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            session.user.accessToken = token.accessToken
            session.user.refreshToken = token.refreshToken
            session.user.roles = token.roles
            session.user.username = token.username
         


            return session
        },
    },
    session: {
        maxAge: 30 * 24 * 60 * 60, // The session will last 30 days
    },
    


}
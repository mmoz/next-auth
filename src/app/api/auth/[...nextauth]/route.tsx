import { users } from "@/app/helpers/constants";
import { loginFetch } from "@/app/lib/api";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";



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

                    const res = await fetch(``, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },

                    });
                    const data = await res.json();
                    console.log(data)

                    if (data.code === 200) {

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
                token.userLogin = user.data.userLogin
                token.accessToken = user.data.accessToken
                token.agentId = user.data.agentId
                token.userFirstname = user.data.userFirstname
                token.userLastname = user.data.userLastname
                token.roles = user.data.roles[0]
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            session.user.userLogin = token.userLogin
            session.user.accessToken = token.accessToken
            session.user.agentId = token.agentId
            session.user.userFirstname = token.userFirstname
            session.user.userLastname = token.userLastname
            session.user.roles = token.roles
            return session
        },
    },
    session: {
        maxAge: 30 * 24 * 60 * 60, // The session will last 30 days
    },


}
const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }



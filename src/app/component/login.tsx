"use client"

import { FormEvent, FormEventHandler, useState } from "react";
import { signIn } from 'next-auth/react'
import { useRouter } from "next/navigation";
export default function Login() {

    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const router = useRouter()

    const login: FormEventHandler<HTMLFormElement> = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const response = await signIn('credentials', {
            redirect: false,
            username: username,
            password: password,
        });
        if (response?.error) {
            alert(response.error)
        }else{
            router.push("/dashboard")
        }
    }
    return (
        <main className="w-full h-[100dvh] flex justify-center items-center">
            <div className="container">
                <div className="heading">Sign In</div>
                <form onSubmit={login} className="form">
                    <input required className="input" type="text" name="username" id="email" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                    <input required className="input" type="password" name="password" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <input className="login-button" type="submit" value="Sign In" />
                </form>
                <span className="agreement"><a href="#">Learn user licence agreement</a></span>
            </div>

        </main>
    );
}
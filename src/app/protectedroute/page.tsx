"use client"
import useAxiosAuth from "@/Utills/hooks/useAxiosAuth";
import instance from "@/Utills/ssrinterceptor";
import { useState } from "react";


export default function protectedRoute() {
    const axiosAuth = useAxiosAuth();
    const [data, setData] = useState<any>(null);

    const post = async () => {

        try {
            // const res = await axiosAuth.get(`/users`)
            // setData(res.data)
            const res = await instance.get(`/users`)
            setData(res.data)
        } catch (error) {
            console.error(error);
          }
    }

    return (
        <main className="h-[100dvh]">
            <div className="flex justify-center w-full mt-5">
                <h1>Protected Route</h1>
                <button className="bg-white" onClick={post}>c</button>
                {data && <div>{JSON.stringify(data)}</div>}
                <button onClick={()=>setData(null)}>clear</button>
            </div>
        </main>
    )
}






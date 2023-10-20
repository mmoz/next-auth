"use client"
import ApiClient from "@/Utills/interceptor"

export default function protectedRoute() {
    const post = async () => {

        try {
            const response = await ApiClient.get("");
          } catch (error) {
            console.error(error);
          }
    }

    return (
        <main className="h-[100dvh]">
            <div className="flex justify-center w-full mt-5">
                <h1>Protected Route</h1>
                <button className="bg-white" onClick={post}>c</button>
            </div>
        </main>
    )
}






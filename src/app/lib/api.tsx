export const loginFetch = async (username: string, password: string) => {
    const res = await fetch("http://10.10.10.121/api/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    })
    const data = await res.json()
    console.log(data)
    return data
}
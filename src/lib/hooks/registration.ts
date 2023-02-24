import { IUser } from "../Models/User";

export const Register = async (user: IUser) => {
    
    const res = await fetch("/api/user",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })

    if(!res.ok) return null;

    const newUser: IUser = await res.json();

    return newUser
}
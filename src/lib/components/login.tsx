"use client"

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import globalUser from "../hooks/globaluser";
import { Register } from "../hooks/registration";
import { IUser } from "../Models/User";


export const Login = () => {
    
    const [values, setValues] = useState<any>()

    const router = useRouter()

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {

        const user: IUser = {...values, [event.target.name] : event.target.value}

        setValues(user);
    }

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()

        globalUser.user = await Register(values);

        console.log(globalUser.user)

        if(globalUser.user == null){
            alert("Failed to Create or Update User!")
        } else {
            router.push("/quote")
        }
    };
    
    return (
        <div>
            <form onSubmit={onSubmit} className="flex flex-col w-1/3">
            <input 
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                name="username"
                type="text"
                placeholder="Username"/>
            <input
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="text"
                placeholder="Password"/>
<button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md">
  Submit
</button>

            </form>
        </div>
    )
}